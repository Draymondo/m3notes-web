import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
import { ArrowLeft, Pin, Archive, Trash2, ListChecks, AlignLeft, X, Plus, Tag, Copy, Share2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { createNote, updateNote, deleteNote, duplicateNote } from '../services/notes'
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
  const [labels, setLabels] = useState([])
  const [newLabelText, setNewLabelText] = useState('')
  const [labelInputOpen, setLabelInputOpen] = useState(false)

  const [confirmAction, setConfirmAction] = useState(null)

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

  const runDuplicate = async () => {
    if (!user || isNew) return
    const cleanChecklist = checklist.filter(it => it.text.trim())
    await duplicateNote(user.uid, {
      title: title.trim(),
      content: isChecklist ? '' : content.trim(),
      color,
      labels,
      isChecklist,
      checklist: isChecklist ? cleanChecklist : []
    })
    navigate('/')
  }

  const handleShare = async () => {
    const shareText = [title.trim(), isChecklist ? checklist.map(it => `- ${it.text}`).join('\n') : content.trim()]
      .filter(Boolean)
      .join('\n\n')
    if (navigator.share) {
      try {
        await navigator.share({ title: title.trim() || 'Note', text: shareText })
      } catch (err) {
        if (err.name !== 'AbortError') console.error('Share error:', err)
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareText)
      alert('Copié dans le presse-papiers')
    }
  }

  const askDelete = () => {
    if (isNew) return
    setConfirmAction({
      title: 'Supprimer cette note ?',
      message: 'La note sera deplacee vers la corbeille.',
      confirmLabel: 'Supprimer',
      danger: true,
      onConfirm: () => navigate('/', { state: { deletedNoteId: id } })
    })
  }

  const askArchiveToggle = () => {
    setConfirmAction({
      title: isArchived ? 'Desarchiver cette note ?' : 'Archiver cette note ?',
      message: isArchived
        ? 'La note reapparaitra dans la liste principale.'
        : 'La note sera deplacee dans les archives.',
      confirmLabel: isArchived ? 'Desarchiver' : 'Archiver',
      onConfirm: () => setIsArchived(!isArchived)
    })
  }

  const askDuplicate = () => {
    if (isNew) return
    setConfirmAction({
      title: 'Dupliquer cette note ?',
      message: 'Une copie sera creee.',
      confirmLabel: 'Dupliquer',
      onConfirm: runDuplicate
    })
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
            onClick={askArchiveToggle}
            title="Archiver"
          >
            <Archive size={20} />
          </button>
          <button className="icon-btn" onClick={handleShare} title="Partager">
            <Share2 size={20} />
          </button>
          {!isNew && (
            <button className="icon-btn" onClick={askDuplicate} title="Dupliquer">
              <Copy size={20} />
            </button>
          )}
          {!isNew && (
            <button className="icon-btn" onClick={askDelete} title="Supprimer">
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
            <div className="label-input-row">
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
                onBlur={() => addLabel()}
                placeholder="Nouveau label"
                autoFocus
              />
              <button
                type="button"
                className="label-add-btn"
                onMouseDown={e => e.preventDefault()}
                onClick={addLabel}
              >
                <Plus size={16} />
              </button>
            </div>
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
        open={!!confirmAction}
        title={confirmAction?.title}
        message={confirmAction?.message}
        confirmLabel={confirmAction?.confirmLabel}
        danger={confirmAction?.danger}
        onConfirm={() => {
          confirmAction?.onConfirm()
          setConfirmAction(null)
        }}
        onCancel={() => setConfirmAction(null)}
      />
    </div>
  )
}
