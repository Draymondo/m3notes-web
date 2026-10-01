import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, Gamepad2, Brain, Keyboard, Target, Trophy } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { subscribeNotes } from '../services/notes'
import {
  ROUND_LENGTH,
  QUIZ_MIN_LABELS,
  MEMORY_MIN_LABELS,
  labelEntries,
  buildQuestion
} from '../utils/quizLogic'
import './NoteQuiz.css'

const STORAGE_KEY = 'm3notes-noteskills-v1'

const MODES = [
  { id: 'quiz', label: 'Quiz', icon: Target },
  { id: 'memory', label: 'Mémorisation', icon: Brain },
  { id: 'typing', label: 'Frappe', icon: Keyboard }
]

// Les textes dépendent du type de question : ils restent ici car ils
// contiennent du JSX, alors que la logique de jeu vit dans utils/quizLogic.js.
function questionText(question) {
  if (question.kind === 'label-to-note') {
    return {
      prompt: <>Le mot-clé <em>{question.label.display}</em> appartient à quelle note&nbsp;?</>,
      detail: <>«&nbsp;{question.label.display}&nbsp;» est bien un mot-clé de «&nbsp;{question.ownerTitle}&nbsp;».</>
    }
  }
  if (question.kind === 'note-to-label') {
    return {
      prompt: <>Quel mot-clé appartient à la note «&nbsp;{question.ownerTitle}&nbsp;»&nbsp;?</>,
      detail: <>«&nbsp;{question.label.display}&nbsp;» fait partie des mots-clés de cette note.</>
    }
  }
  return {
    prompt: <>Quel mot-clé n'appartient <em>pas</em> à la note «&nbsp;{question.ownerTitle}&nbsp;»&nbsp;?</>,
    detail: <>«&nbsp;{question.label.display}&nbsp;» n'est pas un mot-clé de cette note.</>
  }
}

function Quiz({ entries, notes, best, onFinish, onQuit }) {
  const [question, setQuestion] = useState(() => buildQuestion(entries, notes))
  const [picked, setPicked] = useState(null)
  const [phase, setPhase] = useState('playing') // playing | feedback | summary
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [answered, setAnswered] = useState(0)
  // Empêche d'enregistrer le résultat plusieurs fois pour une même manche.
  const reported = useRef(false)

  useEffect(() => {
    if (phase !== 'summary') { reported.current = false; return }
    if (reported.current) return
    reported.current = true
    onFinish(score, bestStreak)
  }, [phase, score, bestStreak, onFinish])

  const choose = (index) => {
    if (phase !== 'playing' || !question) return
    const hit = index === question.answer
    const nextStreak = hit ? streak + 1 : 0
    setPicked(index)
    setScore(prev => prev + (hit ? 1 : 0))
    setStreak(nextStreak)
    if (nextStreak > bestStreak) setBestStreak(nextStreak)
    setAnswered(prev => prev + 1)
    setPhase('feedback')
  }

  // Raccourcis clavier : 1-4 pour répondre.
  useEffect(() => {
    const onKey = (event) => {
      if (phase !== 'playing' || !question) return
      const position = Number(event.key)
      if (position >= 1 && position <= question.choices.length) choose(position - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, question])

  const goNext = () => {
    if (answered >= ROUND_LENGTH) { setPhase('summary'); return }
    setQuestion(buildQuestion(entries, notes))
    setPicked(null)
    setPhase('playing')
  }

  const replay = () => {
    setQuestion(buildQuestion(entries, notes))
    setPicked(null)
    setPhase('playing')
    setScore(0)
    setStreak(0)
    setBestStreak(0)
    setAnswered(0)
    reported.current = false
  }

  if (!question) {
    return (
      <div className="noteskills-notice">
        <strong>Pas assez de matière pour un tour de quiz.</strong>
        <p>Il faut au moins {QUIZ_MIN_LABELS} mots-clés distincts et plusieurs notes différentes.</p>
      </div>
    )
  }

  if (phase === 'summary') {
    const perfect = score === ROUND_LENGTH
    return (
      <div className="quiz-summary">
        <Trophy size={34} className="quiz-summary-trophy" />
        <h2>{perfect ? 'Sans faute !' : 'Manche terminée'}</h2>
        <p className="quiz-summary-score">
          <strong>{score}</strong> / {ROUND_LENGTH}
        </p>
        <p className="quiz-summary-meta">
          Meilleure série : {bestStreak} bonne{bestStreak > 1 ? 's' : ''} réponse{bestStreak > 1 ? 's' : ''} d'affilée
          {score >= best && score > 0 && ' · nouveau record !'}
        </p>
        <div className="quiz-summary-actions">
          <button className="is-primary" onClick={replay}>Rejouer</button>
          <button onClick={onQuit}>Changer de jeu</button>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz">
      <div className="quiz-status">
        <div><span>Question {Math.min(answered + 1, ROUND_LENGTH)} / {ROUND_LENGTH}</span><strong>{score} bonne{score > 1 ? 's' : ''}</strong></div>
        <div className="quiz-status-right">
          {streak > 1 && <span className="quiz-streak">Série ×{streak}</span>}
          <span className="quiz-record">Record {best}/{ROUND_LENGTH}</span>
        </div>
      </div>

      <p className="quiz-prompt">{questionText(question).prompt}</p>

      <ul className="quiz-options">
        {question.choices.map((choice, index) => {
          let state = ''
          if (phase === 'feedback') {
            if (choice.correct) state = 'is-correct'
            else if (index === picked) state = 'is-wrong'
          }
          return (
            <li key={choice.text + index}>
              <button
                className={state}
                disabled={phase !== 'playing'}
                onClick={() => choose(index)}
              >
                <span className="quiz-option-key">{index + 1}</span>
                <span className="quiz-option-text">{choice.text}</span>
              </button>
            </li>
          )
        })}
      </ul>

      {phase === 'feedback' && (
        <div className={`quiz-feedback ${picked === question.answer ? 'is-good' : 'is-bad'}`}>
          <p>{questionText(question).detail}</p>
          <button className="is-primary" onClick={goNext}>
            {answered >= ROUND_LENGTH ? 'Voir le résultat' : 'Question suivante'}
          </button>
        </div>
      )}

      {phase === 'playing' && <p className="quiz-hint">Touche une réponse, ou les touches 1 à 4 de ton clavier.</p>}
    </div>
  )
}

const EMPTY_PROGRESS = {
  quiz: { best: 0, streak: 0, played: 0 },
  memory: { best: 0, streak: 0 },
  typing: { bestWpm: 0, bestAccuracy: 0 }
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    return {
      quiz: {
        best: Number(saved.quiz?.best) || 0,
        streak: Number(saved.quiz?.streak) || 0,
        played: Number(saved.quiz?.played) || 0
      },
      memory: { best: Number(saved.memory?.best) || 0, streak: Number(saved.memory?.streak) || 0 },
      typing: { bestWpm: Number(saved.typing?.bestWpm) || 0, bestAccuracy: Number(saved.typing?.bestAccuracy) || 0 }
    }
  } catch {
    return EMPTY_PROGRESS
  }
}
export default function NoteQuiz() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { dark } = useTheme()

  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState('')
  const [progress, setProgress] = useState(loadProgress)
  const [mode, setMode] = useState('quiz')
  const [offline, setOffline] = useState(() => typeof navigator !== 'undefined' && !navigator.onLine)

  const uid = user?.uid

  useEffect(() => {
    if (!uid) return
    setLoading(true)
    const unsubscribe = subscribeNotes(uid, 'active', (data, error) => {
      setNotes(data)
      setLoading(false)
      setLoadError(error ? 'Impossible de charger tes notes.' : '')
    })
    return unsubscribe
  }, [uid])

  // Le cache local de Firestore permet de jouer sans réseau :
  // on se contente de le signaler.
  useEffect(() => {
    const goOnline = () => setOffline(false)
    const goOffline = () => setOffline(true)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  const entries = useMemo(() => labelEntries(notes), [notes])
  const enoughLabels = entries.length >= QUIZ_MIN_LABELS
  // Une seule note ne suffit pas : le quiz compare toujours des notes entre
  // elles. On tente donc réellement de construire une question avant d'afficher
  // le jeu, plutôt que de laisser le joueur entrer dans un quiz mort.
  const playable = useMemo(
    () => (enoughLabels ? buildQuestion(entries, notes) !== null : false),
    [enoughLabels, entries, notes]
  )

  const saveProgress = useCallback(updater => {
    setProgress(previous => {
      const next = updater(previous)
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch { /* quota plein */ }
      return next
    })
  }, [])

  const recordQuiz = useCallback((score, streak) => {
    saveProgress(previous => ({
      ...previous,
      quiz: {
        best: Math.max(previous.quiz.best, score),
        streak: Math.max(previous.quiz.streak, streak),
        played: previous.quiz.played + 1
      }
    }))
  }, [saveProgress])

  return (
    <div className="noteskills-page" data-theme={dark ? 'dark' : 'light'}>
      <header className="noteskills-header">
        <button className="noteskills-back" onClick={() => navigate('/')}>
          <ArrowLeft size={20} /><span>M3 Notes</span>
        </button>
        <div className="noteskills-brand"><Gamepad2 size={20} /><strong>NoteSkills</strong></div>
      </header>

      <main className="noteskills-main">
        <section className="noteskills-intro">
          <div>
            <p className="noteskills-kicker">Mini-jeu M3 Notes</p>
            <h1>NoteSkills</h1>
            <p>Entraîne-toi directement sur tes propres notes et tes mots-clés.</p>
          </div>
          <div className="noteskills-stats">
            <div><strong>{notes.length}</strong><span>{notes.length > 1 ? 'notes' : 'note'}</span></div>
            <div><strong>{entries.length}</strong><span>{entries.length > 1 ? 'mots-clés' : 'mot-clé'}</span></div>
            <div><strong>{progress.quiz.best}/{ROUND_LENGTH}</strong><span>record</span></div>
          </div>
        </section>

        {offline && (
          <p className="noteskills-offline">Hors connexion — le jeu utilise tes notes déjà en cache.</p>
        )}
{loading ? (
          <p className="noteskills-loading">Chargement de tes notes…</p>
        ) : loadError ? (
          <p className="noteskills-notice is-error" role="alert">{loadError}</p>
        ) : notes.length === 0 ? (
          <div className="noteskills-notice">
            <strong>Aucune note active pour l’instant.</strong>
            <p>Ce jeu se construit à partir de tes notes : crée au moins une note, ajoute-lui des mots-clés, puis reviens ici.</p>
            <button className="is-primary" onClick={() => navigate('/note/new')}>Créer une note</button>
          </div>
        ) : (
          <>
            <nav className="noteskills-tabs" aria-label="Choix du jeu">
              {MODES.map(item => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    className={mode === item.id ? 'is-active' : ''}
                    aria-current={mode === item.id ? 'page' : undefined}
                    onClick={() => setMode(item.id)}
                  >
                    <Icon size={17} />{item.label}
                  </button>
                )
              })}
            </nav>

            {mode === 'quiz' && (playable ? (
              <Quiz
                key={`quiz-${entries.length}-${notes.length}`}
                entries={entries}
                notes={notes}
                best={progress.quiz.best}
                onFinish={recordQuiz}
                onQuit={() => navigate('/')}
              />
            ) : (
              <div className="noteskills-notice">
                <strong>
                  {enoughLabels
                    ? 'Il te faut au moins deux notes différentes.'
                    : `Il te faut au moins ${QUIZ_MIN_LABELS} mots-clés distincts.`}
                </strong>
                <p>
                  {enoughLabels
                    ? 'Le quiz compare tes notes entre elles : ajoute une deuxième note avec ses propres mots-clés pour pouvoir jouer.'
                    : <>Tu en as {entries.length} pour l’instant. Ouvre une note, touche
                      l’icône étiquette puis saisis quelques mots-clés (par exemple
                      <em> cuisine</em>, <em>urgent</em>, <em>lecture</em>) : ils serviront
                      directement de matière au quiz.</>}
                </p>
                <button className="is-primary" onClick={() => navigate('/')}>Retour à mes notes</button>
              </div>
            ))}

            {mode === 'memory' && (
              <div className="noteskills-notice">
                <strong>Mémorisation — en préparation.</strong>
                <p>Une note s’affiche avec ses mots-clés, l’écran se masque, et tu dois retrouver
                  les bons. Il faudra {MEMORY_MIN_LABELS} mots-clés distincts pour y jouer.</p>
              </div>
            )}

            {mode === 'typing' && (
              <div className="noteskills-notice">
                <strong>Vitesse de frappe — en préparation.</strong>
                <p>Un extrait de l’une de tes notes s’affiche et tu le retapes le plus vite
                  possible. Bientôt disponible.</p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
