import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Archive, StickyNote, Sun, Moon, LogOut, Plus, Trash2, Lock } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { subscribeNotes, moveToTrash, restoreNote, permanentlyDeleteNote, isTrashExpired } from '../services/notes'
import NoteCard from '../components/NoteCard'
import ConfirmDialog from '../components/ConfirmDialog'
import './HomePage.css'

const UNDO_DELAY = 5000

export default function HomePage() {
  const { user, logout } = useAuth()
  const { dark, toggle } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const [notes, setNotes] = useState([])
  const [viewMode, setViewMode] = useState('active')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [pendingDeleteId, setPendingDeleteId] = useState(null)
  const [activeLabel, setActiveLabel] = useState(null)
  const [sortBy, setSortBy] = useState('updatedAt')
  const [logoutConfirmOpen, setLogoutConfirmOpen] = useState(false)
  const [confirmAction, setConfirmAction] = useState(null)
  const deleteTimerRef = useRef(null)
  const processedKeyRef = useRef(null)

  useEffect(() => {
    if (!user) return
    setLoading(true)
    const unsub = subscribeNotes(user.uid, viewMode, (data) => {
      setNotes(data)
      setLoading(false)
    })
    return unsub
  }, [user, viewMode])

  useEffect(() => {
    if (viewMode !== 'trash') return
    notes.filter(isTrashExpired).forEach(n => {
      permanentlyDeleteNote(n.id).catch(err => console.error('Purge error:', err))
    })
  }, [notes, viewMode])

  useEffect(() => {
    const deletedId = location.state?.deletedNoteId
    if (deletedId && processedKeyRef.current !== location.key) {
      processedKeyRef.current = location.key
      setPendingDeleteId(deletedId)
      deleteTimerRef.current = setTimeout(() => {
        moveToTrash(deletedId).catch(err => console.error('Trash error:', err))
        setPendingDeleteId(null)
      }, UNDO_DELAY)
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location, navigate])

  useEffect(() => {
    return () => {
      if (deleteTimerRef.current) clearTimeout(deleteTimerRef.current)
    }
  }, [])

  const toggleLabelFilter = (label) => {
    setActiveLabel(current => current === label ? null : label)
  }

  const undoDelete = () => {
    if (deleteTimerRef.current) clearTimeout(deleteTimerRef.current)
    setPendingDeleteId(null)
  }

  const setView = (mode) => {
    setViewMode(current => current === mode ? 'active' : mode)
  }

  const handleRestore = (note) => {
    restoreNote(note.id).catch(err => console.error('Restore error:', err))
  }

  const handleDeleteForever = (note) => {
    setConfirmAction({
      title: 'Supprimer definitivement ?',
      message: 'Cette action est irreversible.',
      confirmLabel: 'Supprimer',
      danger: true,
      onConfirm: () => permanentlyDeleteNote(note.id).catch(err => console.error('Delete error:', err))
    })
  }

  const visible = notes.filter(n => n.id !== pendingDeleteId)

  const allLabels = [...new Set(visible.flatMap(n => n.labels || []))].sort()

  const byLabel = activeLabel
    ? visible.filter(n => (n.labels || []).includes(activeLabel))
    : visible

  const filtered = search.trim()
    ? byLabel.filter(n =>
        (n.title || '').toLowerCase().includes(search.toLowerCase()) ||
        (n.content || '').toLowerCase().includes(search.toLowerCase()) ||
        (n.labels || []).some(l => l.toLowerCase().includes(search.toLowerCase()))
      )
    : byLabel

  const sortFn = (a, b) => {
    const av = a[sortBy]?.toMillis ? a[sortBy].toMillis() : 0
    const bv = b[sortBy]?.toMillis ? b[sortBy].toMillis() : 0
    return bv - av
  }

  const pinned = viewMode === 'active' ? filtered.filter(n => n.isPinned).sort(sortFn) : []
  const others = (viewMode === 'active' ? filtered.filter(n => !n.isPinned) : filtered).sort(sortFn)

  const pageTitle = viewMode === 'archived' ? 'Archives' : viewMode === 'trash' ? 'Corbeille' : 'M3Notes'

  return (
    <div className="home">
      <header className="topbar">
        <div className="topbar-left">
          <h1>{pageTitle}</h1>
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
          <button
            className={viewMode === 'archived' ? 'active' : ''}
            onClick={() => setView('archived')}
            title="Archives"
          >
            {viewMode === 'archived' ? <StickyNote size={20} /> : <Archive size={20} />}
          </button>
          <button
            className={viewMode === 'trash' ? 'active' : ''}
            onClick={() => setView('trash')}
            title="Corbeille"
          >
            <Trash2 size={20} />
          </button>
          <button onClick={() => navigate('/vault')} title="Coffre">
            <Lock size={20} />
          </button>
          <button onClick={toggle} title="Thème">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setLogoutConfirmOpen(true)} title="Déconnexion">
            <LogOut size={20} />
          </button>
        </div>
      </header>

      {viewMode === 'active' && (
        <div className="filter-row">
          {allLabels.length > 0 && (
            <div className="label-filter-bar">
              {allLabels.map(label => (
                <button
                  key={label}
                  className={`label-filter-chip ${activeLabel === label ? 'active' : ''}`}
                  onClick={() => toggleLabelFilter(label)}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          <select
            className="sort-select"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
          >
            <option value="updatedAt">Dernière modification</option>
            <option value="createdAt">Date de création</option>
          </select>
        </div>
      )}

      {viewMode === 'trash' && notes.length > 0 && (
        <p className="trash-hint">Les notes sont supprimees definitivement apres 7 jours</p>
      )}

      <main className="notes-area">
        {loading ? (
          <p className="empty">Chargement…</p>
        ) : filtered.length === 0 ? (
          <p className="empty">
            {viewMode === 'archived' ? 'Aucune note archivée' :
             viewMode === 'trash' ? 'La corbeille est vide' :
             'Aucune note\nClique sur + pour commencer'}
          </p>
        ) : (
          <>
            {pinned.length > 0 && (
              <section className="notes-section">
                {others.length > 0 && <h2 className="section-title">Épinglées</h2>}
                <div className="notes-grid">
                  {pinned.map(note => (
                    <NoteCard
                      key={note.id}
                      note={note}
                      onClick={() => navigate(`/note/${note.id}`)}
                      onLabelClick={toggleLabelFilter}
                    />
                  ))}
                </div>
              </section>
            )}

            {others.length > 0 && (
              <section className="notes-section">
                {pinned.length > 0 && <h2 className="section-title">Autres</h2>}
                <div className="notes-grid">
                  {others.map(note => (
                    <NoteCard
                      key={note.id}
                      note={note}
                      onClick={() => navigate(`/note/${note.id}`)}
                      onLabelClick={toggleLabelFilter}
                      trashMode={viewMode === 'trash'}
                      onRestore={handleRestore}
                      onDeleteForever={handleDeleteForever}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      {pendingDeleteId && (
        <div className="snackbar">
          <span>Note supprimée</span>
          <button onClick={undoDelete}>Annuler</button>
        </div>
      )}

      {viewMode === 'active' && (
        <button className="fab" onClick={() => navigate('/note/new')} title="Nouvelle note">
          <Plus size={26} />
        </button>
      )}

      <ConfirmDialog
        open={logoutConfirmOpen}
        title="Se deconnecter ?"
        confirmLabel="Se deconnecter"
        onConfirm={() => {
          setLogoutConfirmOpen(false)
          logout()
        }}
        onCancel={() => setLogoutConfirmOpen(false)}
      />

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
