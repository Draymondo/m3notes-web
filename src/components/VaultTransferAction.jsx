import { useEffect, useState } from 'react'
import { Lock, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useVault } from '../context/VaultContext'
import { createVaultNote } from '../services/vault'
import { permanentlyDeleteNote } from '../services/notes'
import './VaultTransferAction.css'

export default function VaultTransferAction() {
  const { user } = useAuth()
  const { vaultKey } = useVault()
  const navigate = useNavigate()
  const [note, setNote] = useState(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const handleLongPress = (event) => {
      const selectedNote = event.detail?.note
      if (!selectedNote || selectedNote.isDeleted || selectedNote.isVault) return
      setError('')
      setNote(selectedNote)
    }
    window.addEventListener('m3notes:longpress', handleLongPress)
    return () => window.removeEventListener('m3notes:longpress', handleLongPress)
  }, [])

  const close = () => {
    if (!busy) setNote(null)
  }

  const transfer = async () => {
    if (!note || !user) return
    if (!vaultKey) {
      navigate('/vault', { state: { transferNote: note } })
      setNote(null)
      return
    }

    setBusy(true)
    setError('')
    try {
      await createVaultNote(user.uid, vaultKey, { title: note.title || '', content: note.content || '' })
      await permanentlyDeleteNote(note.id)
      setNote(null)
    } catch (err) {
      console.error('Vault transfer error:', err)
      setError('Impossible de transférer cette note.')
    } finally {
      setBusy(false)
    }
  }

  if (!note) return null

  return (
    <div className="vault-transfer-bar" role="dialog" aria-label="Transférer la note dans le coffre">
      <div className="vault-transfer-info">
        <Lock size={18} />
        <span>{note.title || 'Cette note'} </span>
      </div>
      {error && <span className="vault-transfer-error">{error}</span>}
      <div className="vault-transfer-actions">
        <button className="vault-transfer-cancel" onClick={close} disabled={busy}><X size={18} /></button>
        <button className="vault-transfer-button" onClick={transfer} disabled={busy}>
          {busy ? '…' : vaultKey ? 'Transférer au coffre' : 'Ouvrir le coffre'}
        </button>
      </div>
    </div>
  )
}
