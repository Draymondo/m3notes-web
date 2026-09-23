import { GoogleAuthProvider, reauthenticateWithPopup } from 'firebase/auth'
import { auth } from '../firebase'

const DRIVE_FILE_SCOPE = 'https://www.googleapis.com/auth/drive.file'
const UPLOAD_URL = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable'
const DRIVE_FILES_URL = 'https://www.googleapis.com/drive/v3/files'

let cachedAccessToken = null
let cachedTokenExpiresAt = 0

function driveError(response, fallback) {
  return response.json().catch(() => null).then(body => {
    const message = body?.error?.message
    return new Error(message || `${fallback} (${response.status})`)
  })
}

export async function getDriveAccessToken() {
  if (cachedAccessToken && Date.now() < cachedTokenExpiresAt) return cachedAccessToken

  const user = auth.currentUser
  if (!user) throw new Error('Vous devez être connecté.')

  const isGoogleUser = user.providerData?.some(provider => provider.providerId === 'google.com')
  if (!isGoogleUser) {
    throw new Error('Google Drive nécessite une connexion avec Google.')
  }

  const provider = new GoogleAuthProvider()
  provider.addScope(DRIVE_FILE_SCOPE)
  provider.setCustomParameters({ login_hint: user.email || '' })

  const result = await reauthenticateWithPopup(user, provider)
  const credential = GoogleAuthProvider.credentialFromResult(result)
  if (!credential?.accessToken) {
    throw new Error('Google n’a pas fourni l’autorisation Drive.')
  }

  cachedAccessToken = credential.accessToken
  cachedTokenExpiresAt = Date.now() + 50 * 60 * 1000
  return cachedAccessToken
}

export async function uploadDriveBlob(blob, accessToken, { name, mimeType, noteId } = {}) {
  const contentType = mimeType || blob.type || 'application/octet-stream'
  const metadata = {
    name: name || `m3notes-${crypto.randomUUID()}.bin`,
    mimeType: contentType,
    appProperties: {
      m3notes: 'attachment',
      ...(noteId ? { noteId } : {})
    }
  }

  const initResponse = await fetch(UPLOAD_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'X-Upload-Content-Type': contentType,
      'X-Upload-Content-Length': String(blob.size)
    },
    body: JSON.stringify(metadata)
  })

  if (!initResponse.ok) throw await driveError(initResponse, 'Impossible de préparer l’envoi du fichier.')
  const sessionUrl = initResponse.headers.get('Location')
  if (!sessionUrl) throw new Error('Google Drive n’a pas fourni de session d’envoi.')

  const uploadResponse = await fetch(sessionUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': contentType
    },
    body: blob
  })

  if (!uploadResponse.ok) throw await driveError(uploadResponse, 'Impossible d’envoyer le fichier sur Google Drive.')

  return uploadResponse.json()
}

export async function uploadDriveFile(file, accessToken, noteId) {
  return uploadDriveBlob(file, accessToken, {
    name: file.name,
    mimeType: file.type || 'application/octet-stream',
    noteId
  })
}

export async function downloadDriveFile(fileId, accessToken) {
  const response = await fetch(`${DRIVE_FILES_URL}/${encodeURIComponent(fileId)}?alt=media`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  if (!response.ok) throw await driveError(response, 'Impossible de récupérer le fichier depuis Google Drive.')
  return response.arrayBuffer()
}

export async function deleteDriveFile(fileId, accessToken) {
  const response = await fetch(`${DRIVE_FILES_URL}/${encodeURIComponent(fileId)}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  if (response.status === 404) return
  if (!response.ok) throw await driveError(response, 'Impossible de supprimer le fichier de Google Drive.')
}
