import {
  doc, getDoc, setDoc,
  collection, query, where, orderBy, onSnapshot,
  addDoc, updateDoc, deleteDoc,
  serverTimestamp, Timestamp
} from 'firebase/firestore'
import { db } from '../firebase'

const NOTES = 'notes'
const PBKDF2_ITERATIONS = 250000
const VAULT_CHECK_PLAINTEXT = 'VAULT_OK'

function bufToB64(buf) {
  const bytes = new Uint8Array(buf)
  let bin = ''
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i])
  return btoa(bin)
}

function b64ToBuf(b64) {
  const bin = atob(b64)
  const bytes = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
  return bytes.buffer
}

async function deriveKey(password, saltB64) {
  const enc = new TextEncoder()
  const salt = b64ToBuf(saltB64)
  const baseKey = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey'])
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  )
}

export async function encryptText(key, plaintext) {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const enc = new TextEncoder()
  const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(plaintext))
  return `${bufToB64(iv)}:${bufToB64(ciphertext)}`
}

export async function decryptText(key, payload) {
  const [ivB64, ctB64] = payload.split(':')
  const iv = new Uint8Array(b64ToBuf(ivB64))
  const ciphertext = b64ToBuf(ctB64)
  const plainBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext)
  return new TextDecoder().decode(plainBuf)
}

export async function getVaultMeta(userId) {
  const snap = await getDoc(doc(db, 'vaultMeta', userId))
  return snap.exists() ? snap.data() : null
}

export async function setupVault(userId, password) {
  const saltBytes = crypto.getRandomValues(new Uint8Array(16))
  const saltB64 = bufToB64(saltBytes.buffer)
  const key = await deriveKey(password, saltB64)
  const check = await encryptText(key, VAULT_CHECK_PLAINTEXT)
  await setDoc(doc(db, 'vaultMeta', userId), { salt: saltB64, check })
  return key
}

export async function unlockVault(userId, password) {
  const meta = await getVaultMeta(userId)
  if (!meta) return null
  const key = await deriveKey(password, meta.salt)
  try {
    const decoded = await decryptText(key, meta.check)
    if (decoded !== VAULT_CHECK_PLAINTEXT) return null
    return key
  } catch {
    return null
  }
}

export function subscribeVaultNotes(userId, callback) {
  const q = query(
    collection(db, NOTES),
    where('userId', '==', userId),
    orderBy('isPinned', 'desc'),
    orderBy('updatedAt', 'desc')
  )
  return onSnapshot(q, (snap) => {
    const notes = snap.docs
      .map(d => ({ id: d.id, ...d.data() }))
      .filter(n => n.isVault)
    callback(notes)
  }, (err) => {
    console.error('Vault subscription error:', err)
    callback([])
  })
}

export async function createVaultNote(userId, key, { title, content }) {
  const encTitle = await encryptText(key, title)
  const encContent = await encryptText(key, content)
  const ref = await addDoc(collection(db, NOTES), {
    userId,
    isVault: true,
    isPinned: false,
    isArchived: false,
    isDeleted: false,
    deletedAt: null,
    encTitle,
    encContent,
    createdAt: serverTimestamp(),
    updatedAt: Timestamp.now()
  })
  return ref.id
}

export async function updateVaultNote(noteId, key, { title, content }) {
  const encTitle = await encryptText(key, title)
  const encContent = await encryptText(key, content)
  await updateDoc(doc(db, NOTES, noteId), {
    encTitle,
    encContent,
    updatedAt: Timestamp.now()
  })
}

export async function deleteVaultNote(noteId) {
  await deleteDoc(doc(db, NOTES, noteId))
}

export async function decryptVaultNote(key, note) {
  const title = note.encTitle ? await decryptText(key, note.encTitle) : ''
  const content = note.encContent ? await decryptText(key, note.encContent) : ''
  return { title, content }
}
