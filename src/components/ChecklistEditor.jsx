import { useState } from 'react'
import { X, Plus } from 'lucide-react'

export default function ChecklistEditor({ items, onAdd, onUpdateText, onToggle, onRemove }) {
  const [newItemText, setNewItemText] = useState('')

  const handleAdd = () => {
    onAdd(newItemText)
    setNewItemText('')
  }

  return (
    <div className="checklist-editor">
      {items.map(item => (
        <div key={item.id} className={`checklist-row ${item.isChecked ? 'checked' : ''}`}>
          <button className="check-toggle" onClick={() => onToggle(item.id)}>
            <span className="check-box" />
          </button>
          <input
            className="checklist-item-input"
            value={item.text}
            onChange={e => onUpdateText(item.id, e.target.value)}
            placeholder="Élément"
          />
          <button className="remove-item" onClick={() => onRemove(item.id)} title="Supprimer">
            <X size={16} />
          </button>
        </div>
      ))}

      <div className="checklist-row new-item-row">
        <Plus size={18} className="add-icon" />
        <input
          className="checklist-item-input"
          value={newItemText}
          onChange={e => setNewItemText(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault()
              handleAdd()
            }
          }}
          placeholder="Ajouter un élément"
        />
      </div>
    </div>
  )
}
