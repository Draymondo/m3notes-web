import { getFirestoreCtx } from '../firebase'
import { deleteDriveFile, getDriveAccessToken, uploadDriveBlob } from './drive'
import { remapVaultAttachments } from './vault'

const NOTES = 'notes'
const HISTORY = 'history'
const TRASH_RETENTION_DAYS = 7

async function patchNote(noteId, fields, { touch = true } = {}) {
  const { db, updateDoc, doc, Timestamp } = await getFirestoreCtx()
  await updateDoc(doc(db, NOTES, noteId), touch ? { ...fields, updatedAt: Timestamp.now() } : fields)
}

async function addNoteDoc(fields) {
  const { db, addDoc, collection, serverTimestamp, Timestamp } = await getFirestoreCtx()
  const ref = await addDoc(collection(db, NOTES), {
    ...fields,
    createdAt: serverTimestamp(),
    updatedAt: Timestamp.now()
  })
  return ref.id
}

function historySnapshot(note) {
  return {
    title: note.title || '',
    content: note.content || '',
    color: note.color || 'DEFAULT',
    isPinned: !!note.isPinned,
    isFavorite: !!note.isFavorite,
    isArchived: !!note.isArchived,
    isChecklist: !!note.isChecklist,
    checklist: (note.checklist || []).map(item => ({ ...item })),
    labels: [...(note.labels || [])]
  }
}

function snapshotsEqual(a, b) {
  return JSON.stringify(historySnapshot(a)) === JSON.stringify(historySnapshot(b))
}

async function saveHistoryVersion(noteId, note) {
  const { db, addDoc, collection, serverTimestamp } = await getFirestoreCtx()
  await addDoc(collection(db, NOTES, noteId, HISTORY), {
    ...historySnapshot(note),
    savedAt: serverTimestamp()
  })
}

export function subscribeNotes(userId, mode, callback) {
  // mode: 'active' | 'archived' | 'trash' | 'favorites'
  let unsub = null
  let cancelled = false

  getFirestoreCtx().then(({ db, collection, query, where, orderBy, onSnapshot }) => {
    if (cancelled) return
    const q = query(
      collection(db, NOTES),
      where('userId', '==', userId)
    )
    unsub = onSnapshot(q, (snap) => {
      let notes = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      if (mode === 'trash') {
        notes = notes.filter(n => n.isDeleted && !n.isVault)
      } else if (mode === 'archived') {
        notes = notes.filter(n => n.isArchived && !n.isDeleted && !n.isVault)
      } else if (mode === 'favorites') {
        notes = notes.filter(n => n.isFavorite && !n.isArchived && !n.isDeleted && !n.isVault)
      } else {
        notes = notes.filter(n => !n.isArchived && !n.isDeleted && !n.isVault)
      }

      // Sort client-side so legacy notes that predate updatedAt remain visible.
      const toMillis = value => value?.toMillis?.() || 0
      notes.sort((a, b) => {
        const pinDiff = Number(!!b.isPinned) - Number(!!a.isPinned)
        if (pinDiff !== 0) return pinDiff
        return toMillis(b.updatedAt || b.createdAt) - toMillis(a.updatedAt || a.createdAt)
      })
      callback(notes)
    }, (err) => {
      console.error('Notes subscription error:', err)
      callback([], err)
    })
  })

  return () => {
    cancelled = true
    if (unsub) unsub()
  }
}

export async function createNote(userId, data) {
  return addNoteDoc({
    ...data,
    userId,
    isPinned: false,
    isFavorite: false,
    isArchived: false,
    isDeleted: false,
    deletedAt: null,
    labels: data.labels || [],
    imageUrls: data.imageUrls || [],
    checklist: data.checklist || [],
    isChecklist: data.isChecklist || false
  })
}

export async function updateNote(noteId, data) {
  return patchNote(noteId, data)
}

export async function updateNoteWithHistory(noteId, data) {
  const { db, doc, getDoc } = await getFirestoreCtx()
  const ref = doc(db, NOTES, noteId)
  const snap = await getDoc(ref)
  if (!snap.exists()) throw new Error('Note introuvable')

  const current = snap.data()
  if (snapshotsEqual(current, data)) return

  // La note principale reste prioritaire : une panne de l'historique ne doit
  // pas empêcher l'utilisateur d'enregistrer sa modification.
  let historyError = null
  try {
    await saveHistoryVersion(noteId, current)
  } catch (err) {
    historyError = err
    console.error('History save error:', err)
  }

  await patchNote(noteId, data)

  if (historyError) {
    console.warn('Note saved without history version:', noteId)
  }
}

export function subscribeNoteHistory(noteId, callback) {
  let unsub = null
  let cancelled = false

  getFirestoreCtx().then(({ db, collection, query, orderBy, onSnapshot }) => {
    if (cancelled) return
    const q = query(collection(db, NOTES, noteId, HISTORY), orderBy('savedAt', 'desc'))
    unsub = onSnapshot(q, (snap) => {
      callback(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    }, (err) => {
      console.error('History subscription error:', err)
      callback([], err)
    })
  })

  return () => {
    cancelled = true
    if (unsub) unsub()
  }
}

export async function restoreHistoryVersion(noteId, versionId) {
  const { db, doc, getDoc } = await getFirestoreCtx()
  const noteRef = doc(db, NOTES, noteId)
  const versionRef = doc(db, NOTES, noteId, HISTORY, versionId)
  const [noteSnap, versionSnap] = await Promise.all([getDoc(noteRef), getDoc(versionRef)])

  if (!noteSnap.exists() || !versionSnap.exists()) throw new Error('Version introuvable')

  const current = noteSnap.data()
  const version = versionSnap.data()
  await saveHistoryVersion(noteId, current)
  await patchNote(noteId, historySnapshot(version))
}

export async function moveToTrash(noteId) {
  const { Timestamp } = await getFirestoreCtx()
  return patchNote(noteId, { isDeleted: true, deletedAt: Timestamp.now() }, { touch: false })
}

export async function restoreNote(noteId) {
  return patchNote(noteId, { isDeleted: false, deletedAt: null })
}

export async function permanentlyDeleteNote(noteId) {
  const { db, deleteDoc, doc, collection, getDoc, getDocs } = await getFirestoreCtx()
  const noteRef = doc(db, NOTES, noteId)
  const noteSnap = await getDoc(noteRef)
  if (!noteSnap.exists()) return

  const note = noteSnap.data()
  const historySnap = await getDocs(collection(db, NOTES, noteId, HISTORY))
  for (const version of historySnap.docs) {
    await deleteDoc(version.ref)
  }

  const attachments = Array.isArray(note.attachments) ? note.attachments : []
  if (attachments.length) {
    const accessToken = await getDriveAccessToken()
    for (const attachment of attachments) {
      if (attachment?.driveFileId) {
        await deleteDriveFile(attachment.driveFileId, accessToken)
      }
    }
  }

  await deleteDoc(noteRef)
}

function base64ToArrayBuffer(base64) {
  const binary = atob(base64 || '')
  const bytes = new Uint8Array(binary.length)
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index)
  return bytes.buffer
}

function remapRegularAttachments(attachments, idMap) {
  if (!Array.isArray(attachments)) return attachments
  return attachments.map(attachment => ({
    ...attachment,
    driveFileId: idMap.get(attachment?.driveFileId) || attachment?.driveFileId
  }))
}

export async function restoreCompleteBackupData(userId, payload, { vaultKey = null } = {}) {
  if (!payload || payload.backupType !== 'complete-data-and-drive' || !payload.userData) {
    throw new Error('Cette sauvegarde complète M3Notes est invalide.')
  }

  const data = payload.userData
  const sourceNotes = Array.isArray(data.notes) ? data.notes : []
  const sourceHistories = data.histories && typeof data.histories === 'object' ? data.histories : {}
  const sourceDriveFiles = Array.isArray(payload.driveFiles) ? payload.driveFiles : []
  const hasVaultNotes = sourceNotes.some(note => note?.isVault)
  if (hasVaultNotes && !vaultKey) {
    throw new Error('Déverrouillez le coffre avant de restaurer une sauvegarde complète contenant des notes du coffre.')
  }

  const { db, doc, collection, setDoc, Timestamp } = await getFirestoreCtx()
  const idMap = new Map()
  const driveIdMap = new Map()

  if (sourceDriveFiles.length) {
    const accessToken = await getDriveAccessToken()
    for (const file of sourceDriveFiles) {
      if (!file?.contentBase64) continue
      const bytes = base64ToArrayBuffer(file.contentBase64)
      const blob = new Blob([bytes], { type: file.mimeType || 'application/octet-stream' })
      const restored = await uploadDriveBlob(blob, accessToken, {
        name: file.name || 'm3notes-fichier',
        mimeType: file.mimeType || 'application/octet-stream'
      })
      if (file.id && restored?.id) driveIdMap.set(file.id, restored.id)
    }
  }

  for (const source of sourceNotes) {
    const originalId = source.id
    const ref = doc(collection(db, NOTES))
    const restored = { ...source }
    delete restored.id
    delete restored.createdAt
    delete restored.updatedAt
    delete restored.userId
    restored.userId = userId

    if (Array.isArray(restored.attachments)) {
      restored.attachments = remapRegularAttachments(restored.attachments, driveIdMap)
    }
    if (restored.isVault && restored.encAttachments) {
      restored.encAttachments = await remapVaultAttachments(vaultKey, restored.encAttachments, driveIdMap)
    }

    restored.createdAt = source.createdAt ? Timestamp.fromMillis(Number(source.createdAt)) : Timestamp.now()
    restored.updatedAt = source.updatedAt ? Timestamp.fromMillis(Number(source.updatedAt)) : Timestamp.now()
    if (source.deletedAt) restored.deletedAt = Timestamp.fromMillis(Number(source.deletedAt))
    else if ('deletedAt' in restored) restored.deletedAt = null

    await setDoc(ref, restored)
    if (originalId) idMap.set(originalId, ref.id)
  }

  for (const [oldNoteId, versions] of Object.entries(sourceHistories)) {
    const newNoteId = idMap.get(oldNoteId)
    if (!newNoteId || !Array.isArray(versions)) continue
    for (const version of versions) {
      const ref = doc(collection(db, NOTES, newNoteId, HISTORY))
      const restored = { ...version }
      delete restored.id
      delete restored.savedAt
      restored.savedAt = version.savedAt ? Timestamp.fromMillis(Number(version.savedAt)) : Timestamp.now()
      await setDoc(ref, restored)
    }
  }

  if (data.vaultMeta) {
    await setDoc(doc(db, 'vaultMeta', userId), data.vaultMeta)
  }

  return {
    notes: sourceNotes.length,
    histories: Object.values(sourceHistories).reduce((total, versions) => total + (Array.isArray(versions) ? versions.length : 0), 0),
    driveFiles: driveIdMap.size
  }
}

export function isTrashExpired(note) {
  if (!note.deletedAt?.toMillis) return false
  const ageMs = Date.now() - note.deletedAt.toMillis()
  return ageMs > TRASH_RETENTION_DAYS * 24 * 60 * 60 * 1000
}

export async function togglePin(noteId, isPinned) {
  return patchNote(noteId, { isPinned })
}

export async function toggleFavorite(noteId, isFavorite) {
  return patchNote(noteId, { isFavorite })
}

export async function toggleArchive(noteId, isArchived) {
  return patchNote(noteId, { isArchived })
}

export async function duplicateNote(userId, note) {
  return addNoteDoc({
    title: note.title || '',
    content: note.content || '',
    color: note.color || 'DEFAULT',
    labels: note.labels || [],
    imageUrls: note.imageUrls || [],
    checklist: (note.checklist || []).map(item => ({ ...item })),
    isChecklist: note.isChecklist || false,
    userId,
    isPinned: false,
    isFavorite: false,
    isArchived: false,
    isDeleted: false,
    deletedAt: null
  })
}

export async function getCompleteBackupData(userId) {
  const { db, collection, query, where, getDocs, doc, getDoc } = await getFirestoreCtx()
  const notesSnap = await getDocs(query(collection(db, NOTES), where('userId', '==', userId)))
  const notes = []
  const histories = {}

  for (const noteDoc of notesSnap.docs) {
    const data = noteDoc.data()
    notes.push({ id: noteDoc.id, ...data })

    const historySnap = await getDocs(collection(db, NOTES, noteDoc.id, HISTORY))
    histories[noteDoc.id] = historySnap.docs.map(version => ({
      id: version.id,
      ...version.data()
    }))
  }

  const vaultMetaSnap = await getDoc(doc(db, 'vaultMeta', userId))
  const vaultMeta = vaultMetaSnap.exists() ? vaultMetaSnap.data() : null

  return { notes, histories, vaultMeta }
}
