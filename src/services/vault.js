import { getFirestoreCtx } from '../firebase'
import { deleteDriveFile, downloadDriveFile, getDriveAccessToken, uploadDriveBlob } from './drive'

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

async function encryptBytes(key, bytes) {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const ciphertext = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, bytes))
  const payload = new Uint8Array(iv.length + ciphertext.length)
  payload.set(iv, 0)
  payload.set(ciphertext, iv.length)
  return payload
}

async function decryptBytes(key, bytes) {
  const payload = new Uint8Array(bytes)
  if (payload.length < 13) throw new Error('Fichier du coffre invalide.')
  const iv = payload.slice(0, 12)
  const ciphertext = payload.slice(12)
  return crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext)
}

async function encryptAttachments(key, attachments) {
  return encryptText(key, JSON.stringify(attachments || []))
}

async function decryptAttachments(key, payload) {
  if (!payload) return []
  try {
    const decoded = await decryptText(key, payload)
    const parsed = JSON.parse(decoded)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    throw new Error('Impossible de déchiffrer les pièces jointes du coffre.')
  }
}

async function patchVaultNote(noteId, fields) {
  const { db, updateDoc, doc, Timestamp } = await getFirestoreCtx()
  updateDoc(doc(db, NOTES, noteId), { ...fields, updatedAt: Timestamp.now() }).catch((err) => {
    console.error('Vault note sync error:', err)
  })
}

export async function getVaultMeta(userId) {
  const { db, doc, getDoc } = await getFirestoreCtx()
  const snap = await getDoc(doc(db, 'vaultMeta', userId))
  return snap.exists() ? snap.data() : null
}

export async function setupVault(userId, password) {
  const { db, doc, setDoc } = await getFirestoreCtx()
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
      const notes = snap.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .filter(n => n.isVault)
      callback(notes)
    }, (err) => {
      console.error('Vault subscription error:', err)
      callback([], err)
    })
  })

  return () => {
    cancelled = true
    if (unsub) unsub()
  }
}

export async function createVaultNote(userId, key, { title, content, attachments = [] }) {
  const { db, doc, collection, setDoc, serverTimestamp, Timestamp } = await getFirestoreCtx()
  const encTitle = await encryptText(key, title)
  const encContent = await encryptText(key, content)
  const encAttachments = await encryptAttachments(key, attachments)
  const ref = doc(collection(db, NOTES))
  setDoc(ref, {
    userId,
    isVault: true,
    isPinned: false,
    isArchived: false,
    isDeleted: false,
    deletedAt: null,
    encTitle,
    encContent,
    encAttachments,
    createdAt: serverTimestamp(),
    updatedAt: Timestamp.now()
  }).catch((err) => {
    console.error('Vault note sync error:', err)
  })
  return ref.id
}

export async function updateVaultNote(noteId, key, { title, content, attachments = [] }) {
  const encTitle = await encryptText(key, title)
  const encContent = await encryptText(key, content)
  const encAttachments = await encryptAttachments(key, attachments)
  return patchVaultNote(noteId, { encTitle, encContent, encAttachments })
}

export async function updateVaultAttachments(noteId, key, attachments) {
  const encAttachments = await encryptAttachments(key, attachments)
  return patchVaultNote(noteId, { encAttachments })
}

export async function toggleVaultNotePin(noteId, isPinned) {
  return patchVaultNote(noteId, { isPinned: !isPinned })
}

export async function uploadVaultAttachment(file, key, noteId, accessToken) {
  const token = accessToken || await getDriveAccessToken()
  const encryptedBytes = await encryptBytes(key, await file.arrayBuffer())
  const blob = new Blob([encryptedBytes], { type: 'application/octet-stream' })
  const driveFile = await uploadDriveBlob(blob, token, {
    name: `m3notes-vault-${crypto.randomUUID()}.bin`,
    mimeType: 'application/octet-stream'
  })

  return {
    name: file.name,
    mimeType: file.type || 'application/octet-stream',
    size: file.size,
    driveFileId: driveFile.id
  }
}

export async function removeVaultAttachment(attachment) {
  const accessToken = await getDriveAccessToken()
  await deleteDriveFile(attachment.driveFileId, accessToken)
}

async function getVaultAttachmentBlob(attachment, key) {
  const accessToken = await getDriveAccessToken()
  const encryptedBytes = await downloadDriveFile(attachment.driveFileId, accessToken)
  const decryptedBytes = await decryptBytes(key, encryptedBytes)
  return new Blob([decryptedBytes], { type: attachment.mimeType || 'application/octet-stream' })
}

export async function openVaultAttachment(attachment, key, targetWindow) {
  const blob = await getVaultAttachmentBlob(attachment, key)
  const url = URL.createObjectURL(blob)
  if (targetWindow && !targetWindow.closed) {
    targetWindow.location.href = url
  } else {
    const opened = window.open(url, '_blank', 'noopener,noreferrer')
    if (!opened) throw new Error('Impossible d’ouvrir le fichier dans une nouvelle fenêtre.')
  }
  setTimeout(() => URL.revokeObjectURL(url), 60_000)
}

export async function downloadVaultAttachment(attachment, key) {
  const blob = await getVaultAttachmentBlob(attachment, key)
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = attachment.name || 'm3notes-fichier'
  document.body.appendChild(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 60_000)
}

export async function deleteVaultNote(noteId) {
  const { db, deleteDoc, doc } = await getFirestoreCtx()
  await deleteDoc(doc(db, NOTES, noteId))
}

export async function decryptVaultNote(key, note) {
  const title = note.encTitle ? await decryptText(key, note.encTitle) : ''
  const content = note.encContent ? await decryptText(key, note.encContent) : ''
  const attachments = await decryptAttachments(key, note.encAttachments)
  return { title, content, attachments }
}
