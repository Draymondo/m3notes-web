import { useState } from 'react'
import { FileText, Image, Paperclip, Trash2 } from 'lucide-react'
import { getDriveAccessToken } from '../services/drive'
import {
  openVaultAttachment,
  removeVaultAttachment,
  updateVaultAttachments,
  uploadVaultAttachment
} from '../services/vault'
import './VaultAttachments.css'

function formatSize(bytes) {
  if (!Number.isFinite(bytes) || bytes < 1024) return `${bytes || 0} o`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`
}

function fileIcon(mimeType) {
  return mimeType?.startsWith('image/') ? <Image size={19} /> : <FileText size={19} />
}

export default function VaultAttachments({ attachments, vaultKey, noteId, onChange, disabled }) {
  const [busy, setBusy] = useState(false)
  const [authorizing, setAuthorizing] = useState(false)
  const [driveToken, setDriveToken] = useState(null)
  const [openingId, setOpeningId] = useState('')
  const [error, setError] = useState('')

  const chooseFiles = async () => {
    if (!vaultKey || !noteId || busy || authorizing) return
    setError('')
    setAuthorizing(true)
    try {
      const token = await getDriveAccessToken()
      setDriveToken(token)
      document.getElementById(`vault-file-input-${noteId}`)?.click()
    } catch (err) {
      console.error('Vault Drive authorization error:', err)
      setError(err.message || 'Autorisation Google Drive impossible.')
    } finally {
      setAuthorizing(false)
    }
  }

  const addFiles = async files => {
    if (!files.length || !vaultKey || !noteId || busy) return
    setError('')
    setBusy(true)
    const added = []
    try {
      for (const file of files) {
        added.push(await uploadVaultAttachment(file, vaultKey, noteId, driveToken))
      }
      const next = [...attachments, ...added]
      await updateVaultAttachments(noteId, vaultKey, next)
      onChange(next)
    } catch (err) {
      await Promise.all(added.map(async attachment => {
        try {
          await removeVaultAttachment(attachment)
        } catch (cleanupError) {
          console.error('Vault attachment cleanup error:', cleanupError)
        }
      }))
      console.error('Vault attachment upload error:', err)
      setError(err.message || 'Impossible d’ajouter le fichier au coffre.')
    } finally {
      setBusy(false)
    }
  }

  const removeFile = async attachment => {
    if (busy) return
    setError('')
    setBusy(true)
    try {
      await removeVaultAttachment(attachment)
      const next = attachments.filter(item => item.driveFileId !== attachment.driveFileId)
      await updateVaultAttachments(noteId, vaultKey, next)
      onChange(next)
    } catch (err) {
      console.error('Vault attachment removal error:', err)
      setError(err.message || 'Impossible de retirer le fichier du coffre.')
    } finally {
      setBusy(false)
    }
  }

  const openFile = async attachment => {
    if (busy || openingId) return
    setError('')
    setOpeningId(attachment.driveFileId)
    const targetWindow = window.open('', '_blank')
    if (!targetWindow) {
      setError('Le navigateur a bloqué l’ouverture du fichier.')
      setOpeningId('')
      return
    }
    try {
      await openVaultAttachment(attachment, vaultKey, targetWindow)
    } catch (err) {
      targetWindow.close()
      console.error('Vault attachment open error:', err)
      setError(err.message || 'Impossible d’ouvrir le fichier du coffre.')
    } finally {
      setOpeningId('')
    }
  }

  return (
    <section className="vault-attachments" aria-label="Pièces jointes du coffre">
      <div className="vault-attachments-header">
        <div className="vault-attachments-title">
          <Paperclip size={18} />
          <span>Pièces jointes</span>
          {attachments.length > 0 && <span className="vault-attachments-count">{attachments.length}</span>}
        </div>

        <button
          type="button"
          className="vault-attachments-add"
          onClick={chooseFiles}
          disabled={busy || disabled || authorizing}
          aria-busy={authorizing}
        >
          {authorizing ? 'Connexion…' : busy ? '…' : '+ Ajouter'}
        </button>
        <input
          id={`vault-file-input-${noteId}`}
          type="file"
          multiple
          hidden
          disabled={busy || disabled}
          onChange={e => {
            const files = Array.from(e.target.files || [])
            if (files.length) addFiles(files)
            e.target.value = ''
          }}
        />
      </div>

      {attachments.length > 0 && (
        <div className="vault-attachment-list">
          {attachments.map(file => (
            <div className="vault-attachment-item" key={file.driveFileId}>
              <button
                type="button"
                className="vault-attachment-main"
                onClick={() => openFile(file)}
                disabled={busy || !!openingId}
                title="Ouvrir le fichier déchiffré"
              >
                <span className="vault-attachment-icon">{fileIcon(file.mimeType)}</span>
                <span className="vault-attachment-info">
                  <span className="vault-attachment-name">{file.name}</span>
                  <span className="vault-attachment-meta">
                    {formatSize(file.size)} · {openingId === file.driveFileId ? 'Ouverture…' : 'Fichier sécurisé'}
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="vault-attachment-delete"
                onClick={() => removeFile(file)}
                disabled={busy || !!openingId}
                title="Retirer du coffre"
              >
                <Trash2 size={17} />
              </button>
            </div>
          ))}
        </div>
      )}

      {error && <p className="vault-attachment-error" role="alert">{error}</p>}
    </section>
  )
}
