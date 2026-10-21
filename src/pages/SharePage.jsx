import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ArrowLeft, Check, StickyNote } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { createNote } from '../services/notes'
import './SharePage.css'

// Reçoit le contenu partagé depuis une autre application Android
// (Gemini, Chrome, WhatsApp...) via le share_target du manifeste PWA.
// Le texte arrive dans les paramètres d'URL : ?title=...&text=...&url=...

function buildDefaults(params) {
  const sharedText = params.get('text') || ''
  const sharedTitle = params.get('title') || ''
  const sharedUrl = params.get('url') || ''

  // Certaines applications mettent le lien dans le texte plutôt que dans url.
  const contentParts = [sharedText.trim()]
  if (sharedUrl && !sharedText.includes(sharedUrl)) contentParts.push(sharedUrl.trim())

  const content = contentParts.filter(Boolean).join('\n\n')

  // Si l'application source n'envoie pas de titre, on prend la première ligne
  // non vide du texte, tronquée.
  const firstLine = content.split('\n').map(line => line.trim()).find(Boolean) || ''
  const title = (sharedTitle.trim() || firstLine).slice(0, 120)

  return { title, content }
}

export default function SharePage() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const defaults = useMemo(() => buildDefaults(params), [params])

  const [title, setTitle] = useState(defaults.title)
  const [content, setContent] = useState(defaults.content)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const isEmpty = !title.trim() && !content.trim()

  const handleSave = async () => {
    if (isEmpty || saving) return
    setSaving(true)
    setError('')
    try {
      const noteId = await createNote(user.uid, {
        title: title.trim(),
        content: content.trim(),
        color: 'DEFAULT'
      })
      // On remplace l'entrée d'historique pour que le bouton retour ne
      // ramène pas sur le formulaire de partage déjà consommé.
      navigate(`/note/${noteId}`, { replace: true })
    } catch (err) {
      console.error('Share save error:', err)
      setError("Impossible d'enregistrer la note. Vérifie ta connexion puis réessaie.")
      setSaving(false)
    }
  }

  return (
    <div className="share-page">
      <header className="share-toolbar">
        <button className="icon-btn" onClick={() => navigate('/', { replace: true })} title="Annuler">
          <ArrowLeft size={22} />
        </button>
        <h1><StickyNote size={18} /> Note partagée</h1>
        <button
          className="share-save"
          onClick={handleSave}
          disabled={isEmpty || saving}
          title="Enregistrer dans M3Notes"
        >
          <Check size={18} /> {saving ? 'Enregistrement…' : 'Enregistrer'}
        </button>
      </header>

      <div className="share-form">
        <input
          className="share-title"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="Titre"
          maxLength={500}
          autoFocus={!title}
        />
        <textarea
          className="share-content"
          value={content}
          onChange={event => setContent(event.target.value)}
          placeholder="Contenu de la note"
          autoFocus={Boolean(title)}
        />
      </div>

      {error && <p className="share-error">{error}</p>}
      {isEmpty && <p className="share-hint">Rien à enregistrer : le contenu partagé est vide.</p>}
      {!isEmpty && <p className="share-hint">Vérifie le texte, puis appuie sur « Enregistrer ».</p>}
    </div>
  )
}
