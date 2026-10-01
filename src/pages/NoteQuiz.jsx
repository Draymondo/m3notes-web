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
  MEMORY_FLASH_MS,
  MEMORY_ROUNDS,
  MEMORY_MAX_PICK,
  MEMORY_STREAK_TO_LEVEL_UP,
  labelEntries,
  buildQuestion,
  buildMemoryRound,
  scoreMemoryRound
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

function Memory({ entries, notes, progress, onFinish, onQuit }) {
  const level = Math.min(MEMORY_MAX_PICK, Math.max(1, progress.memory?.level || 1))
  const [round, setRound] = useState(() => buildMemoryRound(entries, notes, level))
  const [phase, setPhase] = useState('flash') // flash | input | feedback | summary
  const [picked, setPicked] = useState([])
  const [left, setLeft] = useState(MEMORY_FLASH_MS / 1000)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [played, setPlayed] = useState(0)
  const [result, setResult] = useState(null)
  const reported = useRef(false)

  // Décompte pendant l'affichage des mots-clés.
  useEffect(() => {
    if (phase !== 'flash') return
    setLeft(MEMORY_FLASH_MS / 1000)
    const timer = setInterval(() => setLeft(value => Math.max(0, value - 1)), 1000)
    return () => clearInterval(timer)
  }, [phase, round])

  // Passage à la saisie une fois le temps écoulé.
  useEffect(() => {
    if (phase === 'flash' && left === 0) setPhase('input')
  }, [phase, left])

  // Enregistre le résultat une seule fois par session.
  useEffect(() => {
    if (phase !== 'summary') { reported.current = false; return }
    if (reported.current) return
    reported.current = true
    onFinish({ score, bestStreak, played, level })
  }, [phase, score, bestStreak, played, level, onFinish])

  const toggle = (key) => {
    if (phase !== 'input') return
    setPicked(previous => {
      if (previous.includes(key)) return previous.filter(item => item !== key)
      // On ne permet pas de dépasser le nombre de mots-clés attendus.
      if (previous.length >= round.toPick) return previous
      return [...previous, key]
    })
  }

  const validate = () => {
    if (picked.length !== round.toPick) return
    const outcome = scoreMemoryRound(round, picked)
    setResult(outcome)
    setScore(previous => previous + outcome.points)
    const nextStreak = outcome.perfect ? streak + 1 : 0
    setStreak(nextStreak)
    if (nextStreak > bestStreak) setBestStreak(nextStreak)
    setPlayed(previous => previous + 1)
    setPhase('feedback')
  }

  const goNext = () => {
    setPicked([])
    setResult(null)
    if (played >= MEMORY_ROUNDS) { setPhase('summary'); return }
    const next = buildMemoryRound(entries, notes, level)
    if (!next) { setPhase('summary'); return }
    setRound(next)
    setPhase('flash')
  }

  const replay = () => {
    const next = buildMemoryRound(entries, notes, level)
    if (!next) return
    setRound(next)
    setPicked([])
    setResult(null)
    setLeft(MEMORY_FLASH_MS / 1000)
    setPhase('flash')
    setScore(0)
    setStreak(0)
    setBestStreak(0)
    setPlayed(0)
    reported.current = false
  }

  if (!round) {
    return (
      <div className="noteskills-notice">
        <strong>Pas assez de matière pour une manche de mémorisation.</strong>
        <p>Il faut {MEMORY_MIN_LABELS} mots-clés distincts et au moins deux notes pour
          pouvoir composer des propositions.</p>
      </div>
    )
  }


  if (phase === 'summary') {
    const leveledUp = bestStreak >= MEMORY_STREAK_TO_LEVEL_UP && level < MEMORY_MAX_PICK
    return (
      <div className="quiz-summary">
        <Brain size={34} className="quiz-summary-trophy" />
        <h2>Mémorisation terminée</h2>
        <p className="quiz-summary-score"><strong>{score}</strong> point{score > 1 ? 's' : ''}</p>
        <p className="quiz-summary-meta">
          {played} manche{played > 1 ? 's' : ''} · meilleure série parfaite : {bestStreak}
          {level < MEMORY_MAX_PICK && <> · {MEMORY_STREAK_TO_LEVEL_UP} manches parfaites d'affilée débloquent le niveau {level + 1}</>}
        </p>
        {leveledUp && <p className="memory-unlock">Niveau {level + 1} débloqué — il faudra retenir {level + 1} mots-clés.</p>}
        <div className="quiz-summary-actions">
          <button className="is-primary" onClick={replay}>Rejouer</button>
          <button onClick={onQuit}>Changer de jeu</button>
        </div>
      </div>
    )
  }

  return (
    <div className="memory">
      <div className="quiz-status">
        <div>
          <span>Manche {Math.min(played + 1, MEMORY_ROUNDS)} / {MEMORY_ROUNDS} · niveau {level}</span>
          <strong>{score} point{score > 1 ? 's' : ''}</strong>
        </div>
        <div className="quiz-status-right">
          {streak > 0 && <span className="quiz-streak">Parfait ×{streak}</span>}
          <span className="quiz-record">Record {progress.memory?.best || 0}</span>
        </div>
      </div>

      <p className="quiz-prompt">
        Note «&nbsp;<strong>{round.title}</strong>&nbsp;» — retiens {round.toPick} mot{round.toPick > 1 ? '-s' : ''}-clé{round.toPick > 1 ? 's' : ''}.
      </p>

      {phase === 'flash' && (
        <div className="memory-flash">
          <div className="memory-flash-count" aria-live="polite">{left}</div>
          <div className="memory-flash-labels">
            {round.labels.map(label => <span className="memory-chip is-target" key={label}>{label}</span>)}
          </div>
          <p className="quiz-hint">Mémorise, puis l’écran se masquera automatiquement.</p>
        </div>
      )}

      {phase === 'input' && (
        <div className="memory-input">
          <div className="memory-options">
            {round.options.map(option => {
              const selected = picked.includes(option.key)
              let state = ''
              if (phase === 'feedback') {
                if (option.correct) state = 'is-correct'
                else if (selected) state = 'is-wrong'
                else state = 'is-hidden'
              }
              return (
                <button
                  key={option.key}
                  className={`memory-chip ${selected ? 'is-selected' : ''} ${state}`}
                  onClick={() => toggle(option.key)}
                  disabled={phase !== 'input'}
                >
                  {option.correct && phase === 'feedback' ? '✓ ' : ''}{option.text}
                </button>
              )
            })}
          </div>
          <div className="memory-actions">
            <span className="memory-counter">{picked.length} / {round.toPick} sélectionné{picked.length > 1 ? 's' : ''}</span>
            <button className="is-primary" onClick={validate} disabled={picked.length !== round.toPick}>Valider</button>
          </div>
          {phase === 'feedback' && result && (
            <div className={`quiz-feedback ${result.perfect ? 'is-good' : 'is-bad'}`}>
              <p>
                {result.perfect
                  ? 'Parfait, tu as tout retrouvé !'
                  : <>{result.correct} bon{result.correct > 1 ? 's' : ''}, {result.missed} manqué{result.missed > 1 ? 's' : ''}
                    {result.wrong > 0 && <>, {result.wrong} en trop</>}.</>}
              </p>
              <button className="is-primary" onClick={goNext}>
                {played >= MEMORY_ROUNDS ? 'Voir le résultat' : 'Manche suivante'}
              </button>
            </div>
          )}
          {phase === 'input' && <p className="quiz-hint">Coche les {round.toPick} mots-clés de cette note.</p>}
        </div>
      )}
    </div>
  )
}

const EMPTY_PROGRESS = {
  quiz: { best: 0, streak: 0, played: 0 },
  memory: { best: 0, streak: 0, played: 0, level: 1 },
  typing: { bestWpm: 0, bestAccuracy: 0 }
}

const emptyProgress = () => JSON.parse(JSON.stringify(EMPTY_PROGRESS))

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    const level = Number(saved.memory?.level)
    return {
      quiz: {
        best: Number(saved.quiz?.best) || 0,
        streak: Number(saved.quiz?.streak) || 0,
        played: Number(saved.quiz?.played) || 0
      },
      memory: {
        best: Number(saved.memory?.best) || 0,
        streak: Number(saved.memory?.streak) || 0,
        played: Number(saved.memory?.played) || 0,
        level: Math.min(MEMORY_MAX_PICK, Math.max(1, Number.isFinite(level) && level > 0 ? Math.floor(level) : 1))
      },
      typing: { bestWpm: Number(saved.typing?.bestWpm) || 0, bestAccuracy: Number(saved.typing?.bestAccuracy) || 0 }
    }
  } catch {
    return emptyProgress()
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
  // Même principe pour la mémorisation, au niveau 1 : vérifie qu'une manche
  // peut réellement être composée avant d'afficher le jeu.
  const memoryReady = useMemo(
    () => (entries.length >= MEMORY_MIN_LABELS && buildMemoryRound(entries, notes, 1) !== null),
    [entries, notes]
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

  const recordMemory = useCallback(({ score, bestStreak, played, level }) => {
    saveProgress(previous => {
      const leveledUp = bestStreak >= MEMORY_STREAK_TO_LEVEL_UP && level < MEMORY_MAX_PICK
      return {
        ...previous,
        memory: {
          best: Math.max(previous.memory.best, score),
          streak: Math.max(previous.memory.streak, bestStreak),
          played: previous.memory.played + played,
          level: leveledUp ? level + 1 : previous.memory.level
        }
      }
    })
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

            {mode === 'memory' && (memoryReady ? (
              <Memory
                key={`memory-${entries.length}-${notes.length}-${progress.memory?.level || 1}`}
                entries={entries}
                notes={notes}
                progress={progress}
                onFinish={recordMemory}
                onQuit={() => navigate('/')}
              />
            ) : (
              <div className="noteskills-notice">
                <strong>
                  {entries.length >= MEMORY_MIN_LABELS
                    ? 'Il te faut au moins deux notes avec des mots-clés.'
                    : `Il te faut au moins ${MEMORY_MIN_LABELS} mots-clés distincts.`}
                </strong>
                <p>
                  {entries.length >= MEMORY_MIN_LABELS
                    ? 'La mémorisation compare les mots-clés de tes notes entre elles : ajoute une deuxième note étiquetée pour pouvoir jouer.'
                    : <>Tu en as {entries.length} pour l’instant. Retrouve le jeu du Quiz
                      pour savoir comment en ajouter.</>}
                </p>
                <button className="is-primary" onClick={() => setMode('quiz')}>Aller au Quiz</button>
              </div>
            ))}

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
