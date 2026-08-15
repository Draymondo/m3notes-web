import { useRef } from 'react'
import { Pin, CheckSquare, Square, RotateCcw, Trash2, CheckCircle2, Circle } from 'lucide-react'
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

const LONG_PRESS_MS = 450
const MOVE_THRESHOLD = 10

export default function NoteCard({
  note, onClick, onLabelClick,
  trashMode, onRestore, onDeleteForever,
  selectionMode, selected, onToggleSelect, onLongPress
}) {
  const cls = colorClass[note.color] || 'note-default'
  const checklist = note.checklist || []
  const checkedCount = checklist.filter(it => it.isChecked).length

  const pressTimer = useRef(null)
  const justLongPressed = useRef(false)
  const startPos = useRef({ x: 0, y: 0 })

  const startPress = (e) => {
    const point = e.touches ? e.touches[0] : e
    startPos.current = { x: point.clientX, y: point.clientY }
    pressTimer.current = setTimeout(() => {
      justLongPressed.current = true
      onLongPress?.(note)
    }, LONG_PRESS_MS)
  }

  const cancelPress = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current)
      pressTimer.current = null
    }
  }

  const handleTouchMove = (e) => {
    const point = e.touches[0]
    if (!point) return
    const dx = Math.abs(point.clientX - startPos.current.x)
    const dy = Math.abs(point.clientY - startPos.current.y)
    if (dx > MOVE_THRESHOLD || dy > MOVE_THRESHOLD) {
      cancelPress()
    }
  }

  const handleCardClick = () => {
    if (justLongPressed.current) {
      justLongPressed.current = false
      return
    }
    if (selectionMode) {
      onToggleSelect?.(note)
      return
    }
    if (trashMode) return
    onClick?.()
  }

  return (
    <div
      className={`note-card ${cls} ${selected ? 'selected' : ''}`}
      onClick={handleCardClick}
      onTouchStart={startPress}
      onTouchMove={handleTouchMove}
      onTouchEnd={cancelPress}
      onMouseDown={startPress}
      onMouseUp={cancelPress}
      onMouseLeave={cancelPress}
    >
      {selectionMode && (
        <span className="select-indicator">
          {selected ? <CheckCircle2 size={20} /> : <Circle size={20} />}
        </span>
      )}

      {note.isPinned && !trashMode && !selectionMode && <Pin className="pin" size={16} fill="currentColor" />}

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
                if (onLabelClick && !selectionMode) {
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

      {trashMode && !selectionMode && (
        <div className="trash-actions">
          <button
            onTouchStart={e => e.stopPropagation()}
            onClick={e => { e.stopPropagation(); onRestore?.(note) }}
            title="Restaurer"
          >
            <RotateCcw size={16} />
            <span>Restaurer</span>
          </button>
          <button
            className="danger"
            onTouchStart={e => e.stopPropagation()}
            onClick={e => { e.stopPropagation(); onDeleteForever?.(note) }}
            title="Supprimer definitivement"
          >
            <Trash2 size={16} />
            <span>Supprimer</span>
          </button>
        </div>
      )}
    </div>
  )
}
