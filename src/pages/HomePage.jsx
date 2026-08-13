import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { subscribeNotes } from '../services/notes'
import NoteCard from '../components/NoteCard'
import './HomePage.css'

export default function HomePage() {
  const { user, logout } = useAuth()
  const { dark, toggle } = useTheme()
  const navigate = useNavigate()

  const [notes, setNotes] = useState([])
  const [showArchived, setShowArchived] = useState(false)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    setLoading(true)
    const unsub = subscribeNotes(user.uid, showArchived, (data) => {
      setNotes(data)
      setLoading(false)
    })
    return unsub
  }, [user, showArchived])

  const filtered = search.trim()
    ? notes.filter(n =>
        (n.title || '').toLowerCase().includes(search.toLowerCase()) ||
        (n.content || '').toLowerCase().includes(search.toLowerCase()) ||
        (n.labels || []).some(l => l.toLowerCase().includes(search.toLowerCase()))
      )
    : notes

  return (
    <div className="home">
      <header className="topbar">
        <div className="topbar-left">
          <h1>{showArchived ? 'Archives' : 'M3Notes'}</h1>
        </div>

        <div className="search-box">
          <input
            type="search"
            placeholder="Rechercher…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="topbar-actions">
          <button onClick={() => setShowArchived(!showArchived)} title="Archives">
            {showArchived ? '📝' : '📦'}
          </button>
          <button onClick={toggle} title="Thème">
            {dark ? '☀️' : '🌙'}
          </button>
          <button onClick={logout} title="Déconnexion">⏻</button>
        </div>
      </header>

      <main className="notes-area">
        {loading ? (
          <p className="empty">Chargement…</p>
        ) : filtered.length === 0 ? (
          <p className="empty">
            {showArchived ? 'Aucune note archivée' : 'Aucune note\nClique sur + pour commencer'}
          </p>
        ) : (
          <div className="notes-grid">
            {filtered.map(note => (
              <NoteCard
                key={note.id}
                note={note}
                onClick={() => navigate(`/note/${note.id}`)}
              />
            ))}
          </div>
        )}
      </main>

      <button className="fab" onClick={() => navigate('/note/new')} title="Nouvelle note">
        +
      </button>
    </div>
  )
}
