import { useState } from 'react'
import { X, Plus } from 'lucide-react'

export default function LabelEditor({ labels, open, onAdd, onRemove }) {
  const [newLabelText, setNewLabelText] = useState('')

  if (!open && labels.length === 0) return null

  const handleAdd = () => {
    onAdd(newLabelText)
    setNewLabelText('')
  }

  return (
    <div className="labels-editor">
      {labels.map(label => (
        <span key={label} className="label-chip">
          {label}
          <button onClick={() => onRemove(label)} title="Retirer">
            <X size={12} />
          </button>
        </span>
      ))}
      {open && (
        <div className="label-input-row">
          <input
            className="label-input"
            value={newLabelText}
            onChange={e => setNewLabelText(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleAdd()
              }
            }}
            onBlur={handleAdd}
            placeholder="Nouveau label"
            autoFocus
          />
          <button
            type="button"
            className="label-add-btn"
            onMouseDown={e => e.preventDefault()}
            onClick={handleAdd}
          >
            <Plus size={16} />
          </button>
        </div>
      )}
    </div>
  )
}
