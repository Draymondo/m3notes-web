import { Pin, CheckSquare, Square, RotateCcw, Trash2 } from 'lucide-react'
import './NoteCard.css'

const colorClass = {
  DEFAULT: 'note-default',
  RED: 'note-red',
  ORANGE: 'note-orange',
  YELLOW: 'note-yellow',
  GREEN: 'note-green',
  TEAL: 'note-teal',
  BLUE: 'note-blue',
  DARK_BLUE: 'note-darkblue',
  PURPLE: 'note-purple',
  PINK: 'note-pink',
  BROWN: 'note-brown',
  GRAY: 'note-gray'
}

export default function NoteCard({ note, onClick, onLabelClick, trashMode, onRestore, onDeleteForever }) {
  const cls = colorClass[note.color] || 'note-default'
  const checklist = note.checklist || []
  const checkedCount = checklist.filter(it => it.isChecked).length

  return (
    <div className={`note-card ${cls}`} onClick={trashMode ? undefined : onClick}>
      {note.isPinned && !trashMode && <Pin className="pin" size={16} fill="currentColor" />}

      {note.title && <h3 className="note-title">{note.title}</h3>}

      {note.isChecklist ? (
        <>
          {checklist.length > 0 && (
            <span className="checklist-count">{checkedCount}/{checklist.length}</span>
          )}
          <ul className="checklist">
            {checklist.slice(0, 6).map((item, i) => (
              <li key={i} className={item.isChecked ? 'checked' : ''}>
                {item.isChecked ? <CheckSquare size={14} /> : <Square size={14} />} {item.text}
              </li>
            ))}
            {checklist.length > 6 && (
              <li className="more">+{checklist.length - 6}…</li>
            )}
          </ul>
        </>
      ) : (
        note.content && <p className="note-content">{note.content}</p>
      )}

      {note.labels?.length > 0 && (
        <div className="labels">
          {note.labels.slice(0, 3).map(l => (
            <span
              key={l}
              className="label"
              onClick={e => {
                if (onLabelClick) {
                  e.stopPropagation()
                  onLabelClick(l)
                }
              }}
            >
              {l}
            </span>
          ))}
        </div>
      )}

      {trashMode && (
        <div className="trash-actions">
          <button onClick={e => { e.stopPropagation(); onRestore?.(note) }} title="Restaurer">
            <RotateCcw size={16} />
            <span>Restaurer</span>
          </button>
          <button className="danger" onClick={e => { e.stopPropagation(); onDeleteForever?.(note) }} title="Supprimer definitivement">
            <Trash2 size={16} />
            <span>Supprimer</span>
          </button>
        </div>
      )}
    </div>
  )
}
