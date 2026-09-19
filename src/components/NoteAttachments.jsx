import { useRef } from 'react'
import { ExternalLink, Paperclip, Trash2 } from 'lucide-react'
import './NoteAttachments.css'

function formatSize(bytes) {
  if (!Number.isFinite(bytes) || bytes < 1024) return `${bytes || 0} o`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`
}

export default function NoteAttachments({ attachments, onAdd, onRemove, disabled }) {
  const inputRef = useRef(null)

  return (
    <section className="note-attachments" aria-label="Pièces jointes">
      <div className="attachments-header">
        <div className="attachments-title">
          <Paperclip size={18} />
          <span>Pièces jointes</span>
        </div>
        <button
          type="button"
          className="attachments-add"
          onClick={() => inputRef.current?.click()}
          disabled={disabled}
        >
          Ajouter
        </button>
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
      </div>

      {attachments.length > 0 && (
        <div className="attachment-list">
          {attachments.map(file => (
            <div className="attachment-item" key={file.driveFileId}>
              <div className="attachment-info">
                <span className="attachment-name" title={file.name}>{file.name}</span>
                <span className="attachment-meta">{formatSize(file.size)} · Google Drive</span>
              </div>
              <div className="attachment-actions">
                {file.webViewLink && (
                  <a href={file.webViewLink} target="_blank" rel="noopener noreferrer" title="Ouvrir">
                    <ExternalLink size={17} />
                  </a>
                )}
                <button type="button" onClick={() => onRemove(file)} title="Supprimer" disabled={disabled}>
                  <Trash2 size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
