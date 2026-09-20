import { useRef, useState } from 'react'
import { getDriveAccessToken } from '../services/drive'
import { ExternalLink, FileText, Image, Paperclip, Trash2 } from 'lucide-react'
import './NoteAttachments.css'

function formatSize(bytes) {
  if (!Number.isFinite(bytes) || bytes < 1024) return `${bytes || 0} o`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`
}

function fileIcon(mimeType) {
  return mimeType?.startsWith('image/') ? <Image size={19} /> : <FileText size={19} />
}

export default function NoteAttachments({ attachments, onAdd, onRemove, disabled, editable = true }) {
  const inputRef = useRef(null)
  const [authorizing, setAuthorizing] = useState(false)
  const [authError, setAuthError] = useState('')

  const chooseFiles = async () => {
    setAuthError('')
    if (disabled || authorizing) return
    try {
      setAuthorizing(true)
      await getDriveAccessToken()
      inputRef.current?.click()
    } catch (err) {
      console.error('Drive authorization error:', err)
      setAuthError(err.message || 'Autorisation Google Drive impossible.')
    } finally {
      setAuthorizing(false)
    }
  }

  if (!editable && attachments.length === 0) return null

  return (
    <section className={`note-attachments ${attachments.length ? 'has-attachments' : ''}`} aria-label="Pièces jointes">
      {attachments.length === 0 ? (
        <button
          type="button"
          className="attachments-empty-action"
          onClick={chooseFiles}
          disabled={disabled || authorizing}
          aria-busy={authorizing}
        >
          <Paperclip size={18} />
          <span>{authorizing ? 'Connexion…' : 'Ajouter une pièce jointe'}</span>
        </button>
      ) : (
        <>
          <div className="attachments-header">
            <div className="attachments-title">
              <Paperclip size={18} />
              <span>Pièces jointes</span>
              <span className="attachments-count">{attachments.length}</span>
            </div>
            {editable && (
              <button
                type="button"
                className="attachments-add"
                onClick={chooseFiles}
                disabled={disabled || authorizing}
                aria-busy={authorizing}
              >
                {authorizing ? 'Connexion…' : '+ Ajouter'}
              </button>
            )}
          </div>

          <div className="attachment-list">
            {attachments.map(file => (
              <div className="attachment-item" key={file.driveFileId}>
                {file.webViewLink ? (
                  <a
                    className="attachment-main"
                    href={file.webViewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ouvrir le fichier"
                  >
                    <span className="attachment-icon">{fileIcon(file.mimeType)}</span>
                    <span className="attachment-info">
                      <span className="attachment-name">{file.name}</span>
                      <span className="attachment-meta">{formatSize(file.size)} · Document</span>
                    </span>
                  </a>
                ) : (
                  <div className="attachment-main">
                    <span className="attachment-icon">{fileIcon(file.mimeType)}</span>
                    <span className="attachment-info">
                      <span className="attachment-name">{file.name}</span>
                      <span className="attachment-meta">{formatSize(file.size)} · Document</span>
                    </span>
                  </div>
                )}
                {editable && (
                  <div className="attachment-actions">
                    {file.webViewLink && (
                      <a href={file.webViewLink} target="_blank" rel="noopener noreferrer" title="Ouvrir">
                        <ExternalLink size={17} />
                      </a>
                    )}
                    <button type="button" onClick={() => onRemove(file)} title="Retirer de la note" disabled={disabled}>
                      <Trash2 size={17} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {editable && authError && <p className="attachments-error" role="alert">{authError}</p>}

      {editable && (
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/*,.pdf,.txt,.md,text/plain,text/markdown,application/pdf"
          hidden
          onChange={e => {
            const files = Array.from(e.target.files || [])
            if (files.length) onAdd(files)
            e.target.value = ''
          }}
        />
      )}
    </section>
  )
}
