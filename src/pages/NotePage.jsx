import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
import { ArrowLeft, Pin, Archive, Trash2, ListChecks, AlignLeft, X, Plus, Tag } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { createNote, updateNote, deleteNote } from '../services/notes'
import ConfirmDialog from '../components/ConfirmDialog'
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
  const [isChecklist, setIsChecklist] = useState(false)
  const [checklist, setChecklist] = useState([])
  const [newItemText, setNewItemText] = useState('')
  const [loading, setLoading] = useState(!isNew)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [labels, setLabels] = useState([])
  const [newLabelText, setNewLabelText] = useState('')
  const [labelInputOpen, setLabelInputOpen] = useState(false)

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
        setIsChecklist(data.isChecklist || false)
        setChecklist(data.checklist || [])
        setLabels(data.labels || [])
      }
      setLoading(false)
    })
  }, [id, isNew, user])

  const addItem = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setChecklist([...checklist, { id: uuidv4(), text: trimmed, isChecked: false }])
    setNewItemText('')
  }

  const updateItemText = (itemId, text) => {
    setChecklist(checklist.map(it => it.id === itemId ? { ...it, text } : it))
  }

  const toggleItem = (itemId) => {
    setChecklist(checklist.map(it => it.id === itemId ? { ...it, isChecked: !it.isChecked } : it))
  }

  const removeItem = (itemId) => {
    setChecklist(checklist.filter(it => it.id !== itemId))
  }

  const addLabel = () => {
    const trimmed = newLabelText.trim()
    if (!trimmed) return
    if (!labels.includes(trimmed)) {
      setLabels([...labels, trimmed])
    }
    setNewLabelText('')
  }

  const removeLabel = (label) => {
    setLabels(labels.filter(l => l !== label))
  }

  const switchToChecklist = () => {
    if (content.trim() && checklist.length === 0) {
      const lines = content.split('\n').filter(l => l.trim())
      setChecklist(lines.map(text => ({ id: uuidv4(), text: text.trim(), isChecked: false })))
      setContent('')
    }
    setIsChecklist(true)
  }

  const switchToText = () => {
    if (checklist.length > 0 && !content.trim()) {
      setContent(checklist.map(it => it.text).join('\n'))
    }
    setIsChecklist(false)
  }

  const save = async () => {
    if (!user) return
    const cleanChecklist = checklist.filter(it => it.text.trim())
    const data = {
      title: title.trim(),
      content: isChecklist ? '' : content.trim(),
      color,
      isPinned,
      isArchived,
      isChecklist,
      checklist: isChecklist ? cleanChecklist : [],
      labels
    }
    const isEmpty = !data.title && !data.content && (!isChecklist || cleanChecklist.length === 0)
    if (isNew) {
      if (isEmpty) {
        navigate('/')
        return
      }
      await createNote(user.uid, data)
    } else {
      await updateNote(id, data)
    }
    navigate('/')
  }

  const handleDelete = () => {
    if (!isNew) setConfirmOpen(true)
  }

  const confirmDelete = async () => {
    await deleteNote(id)
    navigate('/')
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
            className="icon-btn"
            onClick={isChecklist ? switchToText : switchToChecklist}
            title={isChecklist ? 'Passer en texte' : 'Passer en checklist'}
          >
            {isChecklist ? <AlignLeft size={20} /> : <ListChecks size={20} />}
          </button>
          <button
            className={`icon-btn ${labelInputOpen ? 'active' : ''}`}
            onClick={() => setLabelInputOpen(!labelInputOpen)}
            title="Labels"
          >
            <Tag size={20} />
          </button>
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

      {(labelInputOpen || labels.length > 0) && (
        <div className="labels-editor">
          {labels.map(label => (
            <span key={label} className="label-chip">
              {label}
              <button onClick={() => removeLabel(label)} title="Retirer">
                <X size={12} />
              </button>
            </span>
          ))}
          {labelInputOpen && (
            <input
              className="label-input"
              value={newLabelText}
              onChange={e => setNewLabelText(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  addLabel()
                }
              }}
              placeholder="Nouveau label"
              autoFocus
            />
          )}
        </div>
      )}

      {isChecklist ? (
        <div className="checklist-editor">
          {checklist.map(item => (
            <div key={item.id} className={`checklist-row ${item.isChecked ? 'checked' : ''}`}>
              <button className="check-toggle" onClick={() => toggleItem(item.id)}>
                <span className="check-box" />
              </button>
              <input
                className="checklist-item-input"
                value={item.text}
                onChange={e => updateItemText(item.id, e.target.value)}
                placeholder="Élément"
              />
              <button className="remove-item" onClick={() => removeItem(item.id)} title="Supprimer">
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
                  addItem(newItemText)
                }
              }}
              placeholder="Ajouter un élément"
            />
          </div>
        </div>
      ) : (
        <textarea
          className="note-content-input"
          placeholder="Note"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={12}
        />
      )}

      <ConfirmDialog
        open={confirmOpen}
        title="Supprimer cette note ?"
        message="Cette action est definitive."
        confirmLabel="Supprimer"
        danger
        onConfirm={confirmDelete}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  )
}
