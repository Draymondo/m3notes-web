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

export default function NoteCard({ note, onClick }) {
  const cls = colorClass[note.color] || 'note-default'

  return (
    <div className={`note-card ${cls}`} onClick={onClick}>
      {note.isPinned && <span className="pin">📌</span>}
      
      {note.title && <h3 className="note-title">{note.title}</h3>}
      
      {note.isChecklist ? (
        <ul className="checklist">
          {(note.checklist || []).slice(0, 6).map((item, i) => (
            <li key={i} className={item.isChecked ? 'checked' : ''}>
              {item.isChecked ? '☑' : '☐'} {item.text}
            </li>
          ))}
          {(note.checklist || []).length > 6 && (
            <li className="more">+{note.checklist.length - 6}…</li>
          )}
        </ul>
      ) : (
        note.content && <p className="note-content">{note.content}</p>
      )}

      {note.labels?.length > 0 && (
        <div className="labels">
          {note.labels.slice(0, 3).map(l => (
            <span key={l} className="label">{l}</span>
          ))}
        </div>
      )}
    </div>
  )
}
