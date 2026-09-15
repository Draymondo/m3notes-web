import { getFirestoreCtx } from '../firebase'

const NOTES = 'notes'
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

export function subscribeNotes(userId, mode, callback) {
  // mode: 'active' | 'archived' | 'trash'
  // L'abonnement Firestore démarre dès que getFirestoreCtx() résout
  // (Firestore chargé), mais on retourne tout de suite une fonction de
  // désabonnement synchrone pour que les appelants (useEffect) n'aient
  // rien à changer.
  let unsub = null
  let cancelled = false

  getFirestoreCtx().then(({ db, collection, query, where, orderBy, onSnapshot }) => {
    if (cancelled) return
    const q = query(
      collection(db, NOTES),
      where('userId', '==', userId),
      orderBy('isPinned', 'desc'),
      orderBy('updatedAt', 'desc')
    )
    unsub = onSnapshot(q, (snap) => {
      let notes = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      if (mode === 'trash') {
        notes = notes.filter(n => n.isDeleted && !n.isVault)
      } else if (mode === 'archived') {
        notes = notes.filter(n => n.isArchived && !n.isDeleted && !n.isVault)
      } else {
        notes = notes.filter(n => !n.isArchived && !n.isDeleted && !n.isVault)
      }
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

export async function moveToTrash(noteId) {
  const { Timestamp } = await getFirestoreCtx()
  // Pas de updatedAt ici : la mise en corbeille ne doit pas faire remonter
  // la note dans les tris par date de modification.
  return patchNote(noteId, { isDeleted: true, deletedAt: Timestamp.now() }, { touch: false })
}

export async function restoreNote(noteId) {
  return patchNote(noteId, { isDeleted: false, deletedAt: null })
}

export async function permanentlyDeleteNote(noteId) {
  const { db, deleteDoc, doc } = await getFirestoreCtx()
  await deleteDoc(doc(db, NOTES, noteId))
}

export function isTrashExpired(note) {
  if (!note.deletedAt?.toMillis) return false
  const ageMs = Date.now() - note.deletedAt.toMillis()
  return ageMs > TRASH_RETENTION_DAYS * 24 * 60 * 60 * 1000
}

export async function togglePin(noteId, isPinned) {
  return patchNote(noteId, { isPinned })
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
    isArchived: false,
    isDeleted: false,
    deletedAt: null
  })
}
