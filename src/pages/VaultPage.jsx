import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Lock, LockKeyhole, Plus, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useVault } from '../context/VaultContext'
import { subscribeVaultNotes, decryptVaultNote, deleteVaultNote } from '../services/vault'
import ConfirmDialog from '../components/ConfirmDialog'
import './VaultPage.css'

export default function VaultPage() {
  const { user } = useAuth()
  const { vaultKey, hasVault, checkVaultExists, setup, unlock, lock } = useVault()
  const navigate = useNavigate()

  const [checking, setChecking] = useState(true)
  const [code, setCode] = useState('')
  const [confirmCode, setConfirmCode] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const [rawNotes, setRawNotes] = useState([])
  const [decrypted, setDecrypted] = useState([])
  const [confirmDeleteNote, setConfirmDeleteNote] = useState(null)
  const [subscriptionError, setSubscriptionError] = useState('')

  useEffect(() => {
    checkVaultExists()
      .catch(() => setError('Impossible de vérifier le coffre.'))
      .finally(() => setChecking(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!user || !vaultKey) return
    return subscribeVaultNotes(user.uid, (data, error) => {
      setRawNotes(data)
      setSubscriptionError(error ? 'Impossible de charger les notes du coffre.' : '')
    })
  }, [user, vaultKey])

  useEffect(() => {
    if (!vaultKey || rawNotes.length === 0) {
      setDecrypted([])
      return
    }
    let cancelled = false
    Promise.all(rawNotes.map(async n => {
      try {
        const { title, content } = await decryptVaultNote(vaultKey, n)
        return { ...n, title, content }
      } catch {
        return { ...n, title: '(erreur de dechiffrement)', content: '' }
      }
    })).then(results => {
      if (!cancelled) setDecrypted(results)
    })
    return () => { cancelled = true }
  }, [rawNotes, vaultKey])

  const handleSetup = async () => {
    setError('')
    if (code.length < 4) { setError('Code trop court (4 caracteres minimum)'); return }
    if (code !== confirmCode) { setError('Les codes ne correspondent pas'); return }
    setBusy(true)
    try {
      await setup(code)
    } catch {
      setError('Erreur lors de la creation du coffre')
    } finally {
      setBusy(false)
    }
  }

  const handleUnlock = async () => {
    setError('')
    setBusy(true)
    try {
      const key = await unlock(code)
      if (!key) setError('Code incorrect')
    } catch {
      setError('Erreur de dechiffrement')
    } finally {
      setBusy(false)
    }
  }

  const confirmDelete = async () => {
    if (!confirmDeleteNote) return
    try {
      await deleteVaultNote(confirmDeleteNote.id)
      setConfirmDeleteNote(null)
    } catch {
      setError('Impossible de supprimer cette note.')
    }
  }

  if (checking) {
    return <div className="vault-page loading">Chargement…</div>
  }

  if (!vaultKey) {
    return (
      <div className="vault-page">
        <header className="vault-toolbar">
          <button className="icon-btn" onClick={() => navigate('/')} title="Retour">
            <ArrowLeft size={22} />
          </button>
          <h1>Coffre</h1>
        </header>

        <div className="vault-lock-screen">
          <LockKeyhole size={48} />
          {hasVault ? (
            <>
              <p>Entre ton code pour ouvrir le coffre</p>
              <input
                type="password"
                value={code}
                onChange={e => setCode(e.target.value)}
                placeholder="Code"
                autoFocus
                onKeyDown={e => e.key === 'Enter' && handleUnlock()}
              />
              {error && <p className="vault-error">{error}</p>}
              <button className="vault-btn" onClick={handleUnlock} disabled={busy}>
                {busy ? '…' : 'Deverrouiller'}
              </button>
            </>
          ) : (
            <>
              <p>Cree un code pour proteger tes notes coffre.<br /><strong>Ce code ne peut pas etre recupere si tu l'oublies.</strong></p>
              <input
                type="password"
                value={code}
                onChange={e => setCode(e.target.value)}
                placeholder="Nouveau code (4 caracteres min.)"
              />
              <input
                type="password"
                value={confirmCode}
                onChange={e => setConfirmCode(e.target.value)}
                placeholder="Confirmer le code"
                onKeyDown={e => e.key === 'Enter' && handleSetup()}
              />
              {error && <p className="vault-error">{error}</p>}
              <button className="vault-btn" onClick={handleSetup} disabled={busy}>
                {busy ? '…' : 'Creer le coffre'}
              </button>
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="vault-page">
      <header className="vault-toolbar">
        <button className="icon-btn" onClick={() => navigate('/')} title="Retour">
          <ArrowLeft size={22} />
        </button>
        <h1>Coffre</h1>
        <button className="icon-btn" onClick={lock} title="Verrouiller">
          <Lock size={20} />
        </button>
      </header>

      <main className="vault-notes-area">
          {subscriptionError && <p className="vault-error" role="alert">{subscriptionError}</p>}
        {decrypted.length === 0 ? (
          <p className="empty">Coffre vide</p>
        ) : (
          <div className="vault-notes-list">
            {decrypted.map(note => (
              <div
                key={note.id}
                className="vault-note-item"
                onClick={() => navigate(`/vault/${note.id}`)}
              >
                <div className="vault-note-text">
                  <h3>{note.title || '(sans titre)'}</h3>
                  <p>{(note.content || '').slice(0, 80)}</p>
                </div>
                <button
                  className="vault-note-delete"
                  onClick={e => { e.stopPropagation(); setConfirmDeleteNote(note) }}
                  title="Supprimer"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <button className="fab" onClick={() => navigate('/vault/new')} title="Nouvelle note coffre">
        <Plus size={26} />
      </button>

      <ConfirmDialog
        open={!!confirmDeleteNote}
        title="Supprimer definitivement ?"
        message="Cette note du coffre sera supprimee sans possibilite de recuperation."
        confirmLabel="Supprimer"
        danger
        onConfirm={confirmDelete}
        onCancel={() => setConfirmDeleteNote(null)}
      />
    </div>
  )
}
