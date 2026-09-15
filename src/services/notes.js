import { getFirestoreCtx } from '../firebase'

const NOTES = 'notes'
const TRASH_RETENTION_DAYS = 7

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
  const { db, addDoc, collection, serverTimestamp, Timestamp } = await getFirestoreCtx()
  const ref = await addDoc(collection(db, NOTES), {
    ...data,
    userId,
    isPinned: false,
    isArchived: false,
    isDeleted: false,
    deletedAt: null,
    labels: data.labels || [],
    imageUrls: data.imageUrls || [],
    checklist: data.checklist || [],
    isChecklist: data.isChecklist || false,
    createdAt: serverTimestamp(),
    updatedAt: Timestamp.now()
  })
  return ref.id
}

export async function updateNote(noteId, data) {
  const { db, updateDoc, doc, Timestamp } = await getFirestoreCtx()
  await updateDoc(doc(db, NOTES, noteId), {
    ...data,
    updatedAt: Timestamp.now()
  })
}

export async function moveToTrash(noteId) {
  const { db, updateDoc, doc, Timestamp } = await getFirestoreCtx()
  await updateDoc(doc(db, NOTES, noteId), {
    isDeleted: true,
    deletedAt: Timestamp.now()
  })
}

export async function restoreNote(noteId) {
  const { db, updateDoc, doc, Timestamp } = await getFirestoreCtx()
  await updateDoc(doc(db, NOTES, noteId), {
    isDeleted: false,
    deletedAt: null,
    updatedAt: Timestamp.now()
  })
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
  const { db, updateDoc, doc, Timestamp } = await getFirestoreCtx()
  await updateDoc(doc(db, NOTES, noteId), {
    isPinned,
    updatedAt: Timestamp.now()
  })
}

export async function toggleArchive(noteId, isArchived) {
  const { db, updateDoc, doc, Timestamp } = await getFirestoreCtx()
  await updateDoc(doc(db, NOTES, noteId), {
    isArchived,
    updatedAt: Timestamp.now()
  })
}

export async function duplicateNote(userId, note) {
  const { db, addDoc, collection, serverTimestamp, Timestamp } = await getFirestoreCtx()
  const ref = await addDoc(collection(db, NOTES), {
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
    deletedAt: null,
    createdAt: serverTimestamp(),
    updatedAt: Timestamp.now()
  })
  return ref.id
}
