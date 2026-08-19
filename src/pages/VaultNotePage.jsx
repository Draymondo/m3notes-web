import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { ArrowLeft, LockKeyhole } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useVault } from '../context/VaultContext'
import { db } from '../firebase'
import { createVaultNote, updateVaultNote, decryptVaultNote } from '../services/vault'
import './VaultNotePage.css'

export default function VaultNotePage() {
  const { id } = useParams()
  const isNew = id === 'new'
  const { user } = useAuth()
  const { vaultKey } = useVault()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(!isNew)
  const [loadError, setLoadError] = useState('')
  const [saveError, setSaveError] = useState('')

  useEffect(() => {
    if (!vaultKey) {
      navigate('/vault')
      return
    }
    if (isNew) return
      let cancelled = false
      setLoadError('')
      getDoc(doc(db, 'notes', id)).then(async (snap) => {
        if (cancelled) return
        if (!snap.exists() || snap.data().userId !== user?.uid || !snap.data().isVault) {
          setLoadError('Cette note du coffre est introuvable.')
          return
        }
        try {
          const decoded = await decryptVaultNote(vaultKey, snap.data())
          if (!cancelled) {
            setTitle(decoded.title)
            setContent(decoded.content)
          }
        } catch {
          if (!cancelled) setLoadError('Impossible de déchiffrer cette note.')
        }
      }).catch(() => {
        if (!cancelled) setLoadError('Impossible de charger cette note.')
      }).finally(() => {
        if (!cancelled) setLoading(false)
      })
      return () => { cancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isNew, vaultKey])

  const save = async () => {
    if (!user || !vaultKey) return
    setSaveError('')
    const t = title.trim()
    const c = content.trim()
    try {
      if (isNew) {
        if (!t && !c) {
          navigate('/vault')
          return
        }
        await createVaultNote(user.uid, vaultKey, { title: t, content: c })
      } else {
        await updateVaultNote(id, vaultKey, { title: t, content: c })
      }
      navigate('/vault')
    } catch {
      setSaveError('Impossible d’enregistrer la note du coffre.')
    }
  }

  if (loading) return <div className="vault-note-page loading">Chargement…</div>
  if (loadError) {
    return (
      <div className="vault-note-page loading">
        <p>{loadError}</p>
        <button className="icon-btn" onClick={() => navigate('/vault')}>
          Retour
        </button>
      </div>
    )
  }

  return (
    <div className="vault-note-page">
      <header className="vault-note-toolbar">
        <button className="icon-btn" onClick={save} title="Retour">
          <ArrowLeft size={22} />
        </button>
        <span className="vault-note-badge">
          <LockKeyhole size={14} /> Coffre
        </span>
      </header>

      <input
        className="vault-title-input"
        placeholder="Titre"
        value={title}
        onChange={e => setTitle(e.target.value)}
        autoFocus={isNew}
      />
      <textarea
        className="vault-content-input"
        placeholder="Note confidentielle"
        value={content}
        onChange={e => setContent(e.target.value)}
        rows={14}
      />
      {saveError && <p className="vault-error" role="alert">{saveError}</p>}
    </div>
  )
}
