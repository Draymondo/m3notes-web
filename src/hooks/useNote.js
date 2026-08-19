import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { createNote, updateNote, duplicateNote } from '../services/notes'

export function useNote() {
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
  const [labels, setLabels] = useState([])
  const [loading, setLoading] = useState(!isNew)
  const [loadError, setLoadError] = useState('')
  const [saveError, setSaveError] = useState('')
  const [shareError, setShareError] = useState('')
  const [confirmAction, setConfirmAction] = useState(null)

  useEffect(() => {
    if (isNew || !user) return
    let cancelled = false
    setLoading(true)
    setLoadError('')
    getDoc(doc(db, 'notes', id)).then(snap => {
      if (cancelled) return
      if (!snap.exists()) {
        setLoadError('Cette note est introuvable.')
        return
      }
      const data = snap.data()
      if (data.userId !== user.uid || data.isVault) {
        setLoadError('Cette note n’est pas accessible ici.')
        return
      }
      setTitle(data.title || '')
      setContent(data.content || '')
      setColor(data.color || 'DEFAULT')
      setIsPinned(data.isPinned || false)
      setIsArchived(data.isArchived || false)
      setIsChecklist(data.isChecklist || false)
      setChecklist(data.checklist || [])
      setLabels(data.labels || [])
    }).catch(() => {
      if (!cancelled) setLoadError('Impossible de charger cette note.')
    }).finally(() => {
      if (!cancelled) setLoading(false)
    })
    return () => { cancelled = true }
  }, [id, isNew, user])

  const addItem = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setChecklist(prev => [...prev, { id: uuidv4(), text: trimmed, isChecked: false }])
  }
  const updateItemText = (itemId, text) => {
    setChecklist(prev => prev.map(it => it.id === itemId ? { ...it, text } : it))
  }
  const toggleItem = (itemId) => {
    setChecklist(prev => prev.map(it => it.id === itemId ? { ...it, isChecked: !it.isChecked } : it))
  }
  const removeItem = (itemId) => {
    setChecklist(prev => prev.filter(it => it.id !== itemId))
  }

  const addLabel = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setLabels(prev => prev.includes(trimmed) ? prev : [...prev, trimmed])
  }
  const removeLabel = (label) => {
    setLabels(prev => prev.filter(l => l !== label))
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
    setSaveError('')
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
    try {
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
    } catch {
      setSaveError('Impossible d’enregistrer la note.')
    }
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
    setShareError('')
    const shareText = [title.trim(), isChecklist ? checklist.map(it => `- ${it.text}`).join('\n') : content.trim()]
      .filter(Boolean)
      .join('\n\n')
    if (navigator.share) {
      try {
        await navigator.share({ title: title.trim() || 'Note', text: shareText })
      } catch (err) {
          if (err.name !== 'AbortError') {
            console.error('Share error:', err)
            setShareError('Impossible de partager cette note.')
          }
      }
    } else if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(shareText)
          alert('Copié dans le presse-papiers')
        } catch (err) {
          console.error('Clipboard error:', err)
          setShareError('Impossible de copier cette note.')
        }
      } else {
        setShareError('Le partage n’est pas disponible dans ce navigateur.')
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

  const confirmAndRun = () => {
    confirmAction?.onConfirm()
    setConfirmAction(null)
  }

  const cancelConfirm = () => setConfirmAction(null)

  return {
    isNew, loading,
    title, setTitle,
    content, setContent,
    color, setColor,
    isPinned, setIsPinned,
    isArchived,
    isChecklist,
    checklist, addItem, updateItemText, toggleItem, removeItem,
    labels, addLabel, removeLabel,
    switchToChecklist, switchToText,
    save, loadError, saveError, shareError,
    handleShare,
    askDelete, askArchiveToggle, askDuplicate,
    confirmAction, confirmAndRun, cancelConfirm
  }
}
