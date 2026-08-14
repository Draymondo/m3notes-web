import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore'
import { db } from '../firebase'

const NOTES = 'notes'

export function subscribeNotes(userId, includeArchived, callback) {
  let q = query(
    collection(db, NOTES),
    where('userId', '==', userId),
    orderBy('isPinned', 'desc'),
    orderBy('updatedAt', 'desc')
  )

  return onSnapshot(q, (snap) => {
    let notes = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    notes = notes.filter(n => includeArchived ? n.isArchived : !n.isArchived)
    callback(notes)
  }, (err) => {
    console.error('Notes subscription error:', err)
    callback([])
  })
}

export async function createNote(userId, data) {
  const ref = await addDoc(collection(db, NOTES), {
    ...data,
    userId,
    isPinned: false,
    isArchived: false,
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
  await updateDoc(doc(db, NOTES, noteId), {
    ...data,
    updatedAt: Timestamp.now()
  })
}

export async function deleteNote(noteId) {
  await deleteDoc(doc(db, NOTES, noteId))
}

export async function togglePin(noteId, isPinned) {
  await updateDoc(doc(db, NOTES, noteId), {
    isPinned,
    updatedAt: Timestamp.now()
  })
}

export async function toggleArchive(noteId, isArchived) {
  await updateDoc(doc(db, NOTES, noteId), {
    isArchived,
    updatedAt: Timestamp.now()
  })
}

export async function duplicateNote(userId, note) {
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
    createdAt: serverTimestamp(),
    updatedAt: Timestamp.now()
  })
  return ref.id
}
