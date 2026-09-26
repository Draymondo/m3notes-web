import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Gamepad2, RotateCcw, Undo2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import './NoteShift.css'

const STORAGE_KEY = 'm3notes-noteshift-progress-v1'
const CAMPAIGN_LENGTH = 24
const LEVELS = Array.from({ length: CAMPAIGN_LENGTH }, (_, i) => {
  const id = i + 1
  return { id, size: id <= 6 ? 3 : 4, scramble: id <= 3 ? 5 + id : id <= 6 ? 7 + id : Math.min(16, 7 + Math.floor(id * 0.7)) }
})

const solvedBoard = (size) => [...Array.from({ length: size * size }, (_, i) => i).slice(1), 0]

function rotateRow(board, size, row, direction) {
  const next = [...board]
  const start = row * size
  const values = board.slice(start, start + size)
  const rotated = direction > 0 ? [values[size - 1], ...values.slice(0, -1)] : [...values.slice(1), values[0]]
  next.splice(start, size, ...rotated)
  return next
}

function rotateColumn(board, size, column, direction) {
  const next = [...board]
  const values = Array.from({ length: size }, (_, row) => board[row * size + column])
  const rotated = direction > 0 ? [values[size - 1], ...values.slice(0, -1)] : [...values.slice(1), values[0]]
  rotated.forEach((value, row) => { next[row * size + column] = value })
  return next
}

function moveTile(board, size, index) {
  const empty = board.indexOf(0)
  const row = Math.floor(index / size), col = index % size
  const erow = Math.floor(empty / size), ecol = empty % size
  if (Math.abs(row - erow) + Math.abs(col - ecol) !== 1) return null
  const next = [...board]
  ;[next[index], next[empty]] = [next[empty], next[index]]
  return next
}

function scrambleBoard(size, moves) {
  let board = solvedBoard(size)
  let previous = ''
  const candidates = () => {
    const ops = []
    for (let row = 0; row < size; row++) for (const direction of [-1, 1]) ops.push({ type: 'row', index: row, direction })
    for (let col = 0; col < size; col++) for (const direction of [-1, 1]) ops.push({ type: 'column', index: col, direction })
    const empty = board.indexOf(0)
    const erow = Math.floor(empty / size), ecol = empty % size
    if (erow > 0) ops.push({ type: 'tile', index: empty - size })
    if (erow < size - 1) ops.push({ type: 'tile', index: empty + size })
    if (ecol > 0) ops.push({ type: 'tile', index: empty - 1 })
    if (ecol < size - 1) ops.push({ type: 'tile', index: empty + 1 })
    return ops
  }
  for (let i = 0; i < moves; i++) {
    const ops = candidates().filter(op => JSON.stringify(op) !== previous)
    const op = ops[Math.floor(Math.random() * ops.length)]
    previous = JSON.stringify(op.type === 'tile' ? op : { ...op, direction: -op.direction })
    if (op.type === 'row') board = rotateRow(board, size, Math.floor(op.index / size), op.direction)
    else if (op.type === 'column') board = rotateColumn(board, size, op.index % size, op.direction)
    else board = moveTile(board, size, op.index) || board
  }
  if (board.every((v, i) => v === solvedBoard(size)[i])) return scrambleBoard(size, moves + 1)
  return board
}

function loadProgress() {
  try {
    const p = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    return { unlocked: Math.max(1, Number(p.unlocked) || 1), best: p.best || {} }
  } catch { return { unlocked: 1, best: {} } }
}

const saveProgress = (p) => localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
const starsFor = (moves, scramble) => moves <= scramble ? 3 : moves <= Math.ceil(scramble * 1.5) ? 2 : 1

export default function NoteShift() {
  const navigate = useNavigate()
  const { dark } = useTheme()
  const [progress, setProgress] = useState(loadProgress)
  const [levelId, setLevelId] = useState(1)
  const [mode, setMode] = useState('campaign')
  const level = useMemo(() => LEVELS.find(l => l.id === levelId) || LEVELS[0], [levelId])
  const size = mode === 'infinite' ? 4 : level.size
  const target = useMemo(() => solvedBoard(size), [size])
  const [board, setBoard] = useState(() => scrambleBoard(3, 6))
  const [history, setHistory] = useState([])
  const [moves, setMoves] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [drag, setDrag] = useState(null)

  const startLevel = useCallback((id) => {
    const selected = LEVELS.find(l => l.id === id) || LEVELS[0]
    setLevelId(selected.id)
    setBoard(scrambleBoard(selected.size, selected.scramble))
    setHistory([])
    setMoves(0)
    setCompleted(false)
  }, [])

  const startInfinite = useCallback(() => {
    setBoard(scrambleBoard(4, 10 + Math.floor(Math.random() * 9)))
    setHistory([])
    setMoves(0)
    setCompleted(false)
    setLevelId(0)
  }, [])

  const perform = (next) => {
    if (!next || completed) return
    setHistory(h => [...h, board])
    setBoard(next)
    setMoves(m => m + 1)
  }

  useEffect(() => {
    if (completed || !board.length || !board.every((v, i) => v === target[i])) return
    setCompleted(true)
    if (mode === 'campaign') {
      setProgress(current => {
        const best = Math.min(Number(current.best[level.id]) || Infinity, moves)
        const next = { unlocked: Math.max(current.unlocked, Math.min(CAMPAIGN_LENGTH, level.id + 1)), best: { ...current.best, [level.id]: best } }
        saveProgress(next)
        return next
      })
    }
  }, [board, completed, level, mode, moves, target])

  const switchMode = (nextMode) => {
    setMode(nextMode)
    if (nextMode === 'infinite') startInfinite()
    else startLevel(Math.min(progress.unlocked, Math.max(1, levelId || 1)))
  }

  const onPointerDown = (event, index) => {
    if (completed) return
    event.currentTarget.setPointerCapture?.(event.pointerId)
    setDrag({ index, x: event.clientX, y: event.clientY })
  }

  const onPointerUp = (event, index) => {
    if (!drag || drag.index !== index) return
    const dx = event.clientX - drag.x, dy = event.clientY - drag.y
    setDrag(null)
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 28) {
      perform(moveTile(board, size, index))
      return
    }
    if (Math.abs(dx) >= Math.abs(dy)) perform(rotateRow(board, size, Math.floor(index / size), dx > 0 ? 1 : -1))
    else perform(rotateColumn(board, size, index % size, dy > 0 ? 1 : -1))
  }

  const undo = () => {
    if (!history.length || completed) return
    setBoard(history[history.length - 1])
    setHistory(h => h.slice(0, -1))
    setMoves(m => Math.max(0, m - 1))
  }

  const restart = () => mode === 'infinite' ? startInfinite() : startLevel(level.id)
  const stars = mode === 'campaign' ? starsFor(moves, level.scramble) : 0

  return (
    <div className="noteshift-page" data-theme={dark ? 'dark' : 'light'}>
      <header className="noteshift-header">
        <button className="noteshift-back" onClick={() => navigate('/')}><ArrowLeft size={20} /><span>M3 Notes</span></button>
        <div className="noteshift-brand"><Gamepad2 size={20} /><strong>NoteShift</strong></div>
      </header>

      <main className="noteshift-main">
        <section className="noteshift-intro">
          <div><p className="noteshift-kicker">Mini-jeu M3 Notes</p><h1>NoteShift</h1><p>Transforme la grille pour reproduire la note cible.</p></div>
          <div className="noteshift-mode">
            <button className={mode === 'campaign' ? 'active' : ''} onClick={() => switchMode('campaign')}>Campagne</button>
            <button className={mode === 'infinite' ? 'active' : ''} onClick={() => switchMode('infinite')}>∞ Infini</button>
          </div>
        </section>

        {mode === 'campaign' ? (
          <div className="noteshift-levels">
            {LEVELS.map(item => <button key={item.id} className={item.id === levelId ? 'selected' : ''} disabled={item.id > progress.unlocked} onClick={() => startLevel(item.id)}>{item.id}{progress.best[item.id] ? <small>{starsFor(progress.best[item.id], item.scramble)}★</small> : null}</button>)}
          </div>
        ) : <div className="noteshift-infinite-label">Défi généré sur cet appareil · hors connexion</div>}

        <section className="noteshift-game">
          <div className="noteshift-status">
            <div><span>{mode === 'campaign' ? `Niveau ${level.id}` : 'Défi infini'}</span><strong>{moves} coup{moves > 1 ? 's' : ''}</strong></div>
            <div className="noteshift-actions">
              <button onClick={undo} disabled={!history.length || completed}><Undo2 size={18} /><span>Annuler</span></button>
              <button onClick={restart}><RotateCcw size={18} /><span>Recommencer</span></button>
            </div>
          </div>

          <div className="noteshift-play-area">
            <div className="noteshift-target-wrap">
              <div className="noteshift-target-title">OBJECTIF</div>
              <div className="noteshift-target" style={{ gridTemplateColumns: `repeat(${size}, 1fr)`, gridTemplateRows: `repeat(${size}, 1fr)` }}>
                {target.map((value, i) => <div key={i} className={value === 0 ? 'empty' : ''}>{value || ''}</div>)}
              </div>
            </div>

            <div className="noteshift-board" style={{ gridTemplateColumns: `repeat(${size}, 1fr)`, gridTemplateRows: `repeat(${size}, 1fr)` }}>
            {board.map((value, index) => (
              <button key={index} className={value === 0 ? 'noteshift-tile empty' : 'noteshift-tile'} onPointerDown={e => onPointerDown(e, index)} onPointerUp={e => onPointerUp(e, index)} onPointerCancel={() => setDrag(null)}>
                {value === 0 ? <span className="tile-empty-mark">·</span> : <><span className="tile-number">{String(value).padStart(2, '0')}</span><span className="tile-lines"><i /><i /><i /></span></>}
              </button>
            ))}
            </div>
          </div>

          <p className="noteshift-hint"><strong>Toucher</strong> une tuile voisine de la case vide pour la déplacer · <strong>glisser</strong> une tuile pour décaler sa ligne ou sa colonne.</p>

          {completed && <div className="noteshift-success">
            <div className="success-stars">{mode === 'campaign' ? '★'.repeat(stars) + '☆'.repeat(3 - stars) : '✓'}</div>
            <strong>Défi réussi !</strong><span>{moves} coup{moves > 1 ? 's' : ''}</span>
            {mode === 'campaign' && level.id < CAMPAIGN_LENGTH && <button onClick={() => startLevel(level.id + 1)}>Niveau suivant →</button>}
            {mode === 'infinite' && <button onClick={startInfinite}>Nouveau défi →</button>}
          </div>}
        </section>
      </main>
    </div>
  )
}
