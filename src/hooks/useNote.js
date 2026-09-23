import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useAuth } from '../context/AuthContext'
import { getFirestoreCtx } from '../firebase'
import { createNote, updateNote, updateNoteWithHistory, duplicateNote, subscribeNoteHistory, restoreHistoryVersion } from '../services/notes'
import { getDriveAccessToken, uploadDriveFile, deleteDriveFile } from '../services/drive'

export function useNote() {
  const { id } = useParams()
  const isNew = id === 'new'
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const passedNote = location.state?.note?.id === id ? location.state.note : null

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [color, setColor] = useState('DEFAULT')
  const [isPinned, setIsPinned] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isArchived, setIsArchived] = useState(false)
  const [isChecklist, setIsChecklist] = useState(false)
  const [checklist, setChecklist] = useState([])
  const [labels, setLabels] = useState([])
  const [attachments, setAttachments] = useState([])
  const [createdAt, setCreatedAt] = useState(null)
  const [updatedAt, setUpdatedAt] = useState(null)
  const [attachmentError, setAttachmentError] = useState('')
  const [attachmentsLoading, setAttachmentsLoading] = useState(false)
  const [history, setHistory] = useState([])
  const [historyOpen, setHistoryOpen] = useState(false)
  const [historyLoading, setHistoryLoading] = useState(false)
  const [historyError, setHistoryError] = useState('')
  const [loading, setLoading] = useState(!isNew)
  const [loadError, setLoadError] = useState('')
  const [saveError, setSaveError] = useState('')
  const [shareError, setShareError] = useState('')
  const [confirmAction, setConfirmAction] = useState(null)

  const applyNoteData = (data) => {
    setTitle(data.title || '')
    setContent(data.content || '')
    setColor(data.color || 'DEFAULT')
    setIsPinned(data.isPinned || false)
    setIsFavorite(data.isFavorite || false)
    setIsArchived(data.isArchived || false)
    setIsChecklist(data.isChecklist || false)
    setChecklist(data.checklist || [])
    setLabels(data.labels || [])
    setAttachments(data.attachments || [])
    setCreatedAt(data.createdAt || null)
    setUpdatedAt(data.updatedAt || null)
  }

  useEffect(() => {
    if (isNew || !user) return

    if (passedNote) {
      applyNoteData(passedNote)
      setLoading(false)
      setLoadError('')
      return
    }

    let cancelled = false
    setLoading(true)
    setLoadError('')
    getFirestoreCtx().then(({ db, doc, getDoc }) => getDoc(doc(db, 'notes', id))).then(snap => {
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
      applyNoteData(data)
    }).catch(() => {
      if (!cancelled) setLoadError('Impossible de charger cette note.')
    }).finally(() => {
      if (!cancelled) setLoading(false)
    })
    return () => { cancelled = true }
  }, [id, isNew, user, passedNote])

  useEffect(() => {
    if (isNew || !id) return
    setHistoryLoading(true)
    setHistoryError('')
    return subscribeNoteHistory(id, (items, err) => {
      setHistoryLoading(false)
      if (err) {
        setHistoryError('Impossible de charger l’historique.')
        return
      }
      setHistory(items)
    })
  }, [id, isNew])

  const addItem = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setChecklist(prev => [...prev, { id: uuidv4(), text: trimmed, isChecked: false }])
  }
  const updateItemText = (itemId, text) => setChecklist(prev => prev.map(it => it.id === itemId ? { ...it, text } : it))
  const toggleItem = (itemId) => setChecklist(prev => prev.map(it => it.id === itemId ? { ...it, isChecked: !it.isChecked } : it))
  const removeItem = (itemId) => setChecklist(prev => prev.filter(it => it.id !== itemId))

  const addLabel = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setLabels(prev => prev.includes(trimmed) ? prev : [...prev, trimmed])
  }
  const removeLabel = (label) => setLabels(prev => prev.filter(l => l !== label))

  const switchToChecklist = () => {
    if (content.trim() && checklist.length === 0) {
      const lines = content.split('\n').filter(l => l.trim())
      setChecklist(lines.map(text => ({ id: uuidv4(), text: text.trim(), isChecked: false })))
      setContent('')
    }
    setIsChecklist(true)
  }
  const switchToText = () => {
    if (checklist.length > 0 && !content.trim()) setContent(checklist.map(it => it.text).join('\n'))
    setIsChecklist(false)
  }

  const attachFiles = async (files) => {
    if (isNew || !user) return
    setAttachmentError('')
    setAttachmentsLoading(true)
    try {
      const accessToken = await getDriveAccessToken()
      for (const file of files) {
        const uploaded = await uploadDriveFile(file, accessToken, id)
        const attachment = {
          driveFileId: uploaded.id,
          name: uploaded.name || file.name,
          mimeType: uploaded.mimeType || file.type || 'application/octet-stream',
          size: Number(uploaded.size || file.size || 0),
          webViewLink: uploaded.webViewLink || `https://drive.google.com/file/d/${uploaded.id}/view`,
          createdTime: uploaded.createdTime || new Date().toISOString()
        }
        const next = [...attachments, attachment]
        try {
          await updateNote(id, { attachments: next })
          setAttachments(next)
        } catch (err) {
          await deleteDriveFile(attachment.driveFileId, accessToken).catch(() => {})
          throw err
        }
      }
    } catch (err) {
      console.error('Attachment upload error:', err)
      setAttachmentError(err.message || 'Impossible d’ajouter la pièce jointe.')
    } finally {
      setAttachmentsLoading(false)
    }
  }

  const removeAttachment = async (attachment) => {
    if (!user || isNew) return
    setAttachmentError('')
    setAttachmentsLoading(true)
    try {
      const accessToken = await getDriveAccessToken()
      await deleteDriveFile(attachment.driveFileId, accessToken)
      const next = attachments.filter(item => item.driveFileId !== attachment.driveFileId)
      await updateNote(id, { attachments: next })
      setAttachments(next)
    } catch (err) {
      console.error('Attachment removal error:', err)
      setAttachmentError(err.message || 'Impossible de supprimer la pièce jointe.')
    } finally {
      setAttachmentsLoading(false)
    }
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
      isFavorite,
      isArchived,
      isChecklist,
      checklist: isChecklist ? cleanChecklist : [],
      labels,
      attachments
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
        await updateNoteWithHistory(id, data)
      }
      navigate('/')
    } catch {
      setSaveError('Impossible d’enregistrer la note.')
    }
  }

  const restoreVersion = async (version) => {
    setHistoryError('')
    try {
      await restoreHistoryVersion(id, version.id)
      applyNoteData(version)
      setHistoryOpen(false)
    } catch {
      setHistoryError('Impossible de restaurer cette version.')
    }
  }

  const runDuplicate = async () => {
    if (!user || isNew) return
    const cleanChecklist = checklist.filter(it => it.text.trim())
    await duplicateNote(user.uid, { title: title.trim(), content: isChecklist ? '' : content.trim(), color, labels, isChecklist, checklist: isChecklist ? cleanChecklist : [] })
    navigate('/')
  }

  const handleShare = async () => {
    setShareError('')
    const shareText = [title.trim(), isChecklist ? checklist.map(it => `- ${it.text}`).join('\n') : content.trim()].filter(Boolean).join('\n\n')
    if (navigator.share) {
      try { await navigator.share({ title: title.trim() || 'Note', text: shareText }) }
      catch (err) { if (err.name !== 'AbortError') setShareError('Impossible de partager cette note.') }
    } else if (navigator.clipboard) {
      try { await navigator.clipboard.writeText(shareText); alert('Copié dans le presse-papiers') }
      catch { setShareError('Impossible de copier cette note.') }
    } else setShareError('Le partage n’est pas disponible dans ce navigateur.')
  }

  const askDelete = () => {
    if (isNew) return
    setConfirmAction({ title: 'Supprimer cette note ?', message: 'La note sera déplacée vers la corbeille.', confirmLabel: 'Supprimer', danger: true, onConfirm: () => navigate('/', { state: { deletedNoteId: id } }) })
  }
  const askArchiveToggle = () => setConfirmAction({ title: isArchived ? 'Désarchiver cette note ?' : 'Archiver cette note ?', message: isArchived ? 'La note réapparaîtra dans la liste principale.' : 'La note sera déplacée dans les archives.', confirmLabel: isArchived ? 'Désarchiver' : 'Archiver', onConfirm: () => setIsArchived(!isArchived) })
  const askDuplicate = () => {
    if (isNew) return
    setConfirmAction({ title: 'Dupliquer cette note ?', message: 'Une copie sera créée.', confirmLabel: 'Dupliquer', onConfirm: runDuplicate })
  }
  const confirmAndRun = () => { confirmAction?.onConfirm(); setConfirmAction(null) }
  const cancelConfirm = () => setConfirmAction(null)

  return {
    isNew, loading, title, setTitle, content, setContent, color, setColor,
    isPinned, setIsPinned, isFavorite, setIsFavorite, isArchived, isChecklist,
    checklist, addItem, updateItemText, toggleItem, removeItem,
    labels, addLabel, removeLabel, switchToChecklist, switchToText,
    save, loadError, saveError, shareError, handleShare, askDelete, askArchiveToggle,
    askDuplicate, confirmAction, confirmAndRun, cancelConfirm,
    history, historyOpen, setHistoryOpen, historyLoading, historyError, restoreVersion,
    attachments, attachmentError, attachmentsLoading, attachFiles, removeAttachment,
    createdAt, updatedAt
  }
}
