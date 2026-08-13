import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { ArrowLeft, Pin, Archive, Trash2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { createNote, updateNote, deleteNote } from '../services/notes'
import './NotePage.css'

const COLORS = [
  { key: 'DEFAULT', label: 'Blanc' },
  { key: 'RED', label: 'Rouge' },
  { key: 'ORANGE', label: 'Orange' },
  { key: 'YELLOW', label: 'Jaune' },
  { key: 'GREEN', label: 'Vert' },
  { key: 'TEAL', label: 'Turquoise' },
  { key: 'BLUE', label: 'Bleu' },
  { key: 'DARK_BLUE', label: 'Bleu foncé' },
  { key: 'PURPLE', label: 'Violet' },
  { key: 'PINK', label: 'Rose' },
  { key: 'BROWN', label: 'Marron' },
  { key: 'GRAY', label: 'Gris' }
]

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

export default function NotePage() {
  const { id } = useParams()
  const isNew = id === 'new'
  const { user } = useAuth()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [color, setColor] = useState('DEFAULT')
  const [isPinned, setIsPinned] = useState(false)
  const [isArchived, setIsArchived] = useState(false)
  const [loading, setLoading] = useState(!isNew)

  useEffect(() => {
    if (isNew || !user) return
    getDoc(doc(db, 'notes', id)).then(snap => {
      if (snap.exists()) {
        const data = snap.data()
        setTitle(data.title || '')
        setContent(data.content || '')
        setColor(data.color || 'DEFAULT')
        setIsPinned(data.isPinned || false)
        setIsArchived(data.isArchived || false)
      }
      setLoading(false)
    })
  }, [id, isNew, user])

  const save = async () => {
    if (!user) return
    const data = {
      title: title.trim(),
      content: content.trim(),
      color,
      isPinned,
      isArchived
    }
    if (isNew) {
      if (!data.title && !data.content) {
        navigate('/')
        return
      }
      await createNote(user.uid, data)
    } else {
      await updateNote(id, data)
    }
    navigate('/')
  }

  const handleDelete = async () => {
    if (!isNew && confirm('Supprimer cette note ?')) {
      await deleteNote(id)
      navigate('/')
    }
  }

  if (loading) return <div className="note-page loading">Chargement…</div>

  return (
    <div className={`note-page ${colorClass[color] || 'note-default'}`}>
      <header className="note-toolbar">
        <button className="icon-btn" onClick={save} title="Retour">
          <ArrowLeft size={22} />
        </button>
        <div className="toolbar-actions">
          <button
            className={`icon-btn ${isPinned ? 'active' : ''}`}
            onClick={() => setIsPinned(!isPinned)}
            title="Épingler"
          >
            <Pin size={20} fill={isPinned ? 'currentColor' : 'none'} />
          </button>
          <button
            className={`icon-btn ${isArchived ? 'active' : ''}`}
            onClick={() => setIsArchived(!isArchived)}
            title="Archiver"
          >
            <Archive size={20} />
          </button>
          {!isNew && (
            <button className="icon-btn" onClick={handleDelete} title="Supprimer">
              <Trash2 size={20} />
            </button>
          )}
        </div>
      </header>

      <div className="color-picker">
        {COLORS.map(c => (
          <button
            key={c.key}
            className={`color-dot ${colorClass[c.key]} ${color === c.key ? 'selected' : ''}`}
            onClick={() => setColor(c.key)}
            title={c.label}
          />
        ))}
      </div>

      <input
        className="note-title-input"
        placeholder="Titre"
        value={title}
        onChange={e => setTitle(e.target.value)}
        autoFocus={isNew}
      />

      <textarea
        className="note-content-input"
        placeholder="Note"
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={12}
      />
    </div>
  )
}
