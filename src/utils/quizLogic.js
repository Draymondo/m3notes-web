// Logique pure du jeu NoteSkills.
// Isoler ces fonctions (hors React) les rend testables et réutilisables
// par les modes « Mémorisation » et « Frappe ».

export const ROUND_LENGTH = 10
export const OPTION_COUNT = 4
// Seuils de matière : en dessous, on ne peut pas construire un jeu honnête.
export const QUIZ_MIN_LABELS = 4
export const MEMORY_MIN_LABELS = 6

export function shuffle(list) {
  const out = [...list]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

export const noteTitle = (note) => (note.title || '').trim() || 'Note sans titre'

// Indexe les mots-clés de toutes les notes actives.
// L'app ne stocke que des chaînes simples dans `labels` (pas de "#") :
// la clé normalisée sert uniquement à dédoublonner sans tenir compte de la casse.
export function buildLabelIndex(notes) {
  const map = new Map()
  notes.forEach(note => {
    ;(note.labels || []).forEach(raw => {
      const display = String(raw).trim()
      const key = display.toLowerCase()
      if (!key) return
      if (!map.has(key)) map.set(key, { key, display, noteIds: new Set() })
      map.get(key).noteIds.add(note.id)
    })
  })
  return map
}

export const labelEntries = (notes) => [...buildLabelIndex(notes).values()]

// Question 1 — « le mot-clé X appartient à quelle note ? »
// Le mot-clé retenu ne doit être rattaché qu'à une seule note,
// sinon la question aurait plusieurs bonnes réponses.
export function questionLabelToNote(entries, notes) {
  const usable = entries.filter(entry => entry.noteIds.size === 1)
  if (usable.length === 0) return null
  const pick = usable[Math.floor(Math.random() * usable.length)]
  const owner = notes.find(note => note.id === [...pick.noteIds][0])
  if (!owner) return null
  const title = noteTitle(owner)
  // On écarte les notes au même titre pour ne jamais proposer deux fois la même option.
  const pool = notes.filter(note => !pick.noteIds.has(note.id) && noteTitle(note) !== title)
  if (pool.length < OPTION_COUNT - 1) return null
  const choices = shuffle([
    { text: title, correct: true },
    ...shuffle(pool).slice(0, OPTION_COUNT - 1).map(note => ({ text: noteTitle(note), correct: false }))
  ])
  return {
    kind: 'label-to-note',
    label: pick,
    ownerId: owner.id,
    ownerTitle: title,
    choices,
    answer: choices.findIndex(choice => choice.correct),
    isRight: (index) => index === choices.findIndex(choice => choice.correct)
  }
}

// Question 2 — « quel mot-clé n'appartient PAS à cette note ? »
// Les leurres doivent être des mots-clés *présents* dans la note,
// sinon il y aurait plusieurs bonnes réponses : il en faut donc au
// moins OPTION_COUNT - 1 sur la note visée, d'où le filtre.
export function questionNoteExcludesLabel(entries, notes) {
  const tagged = notes.filter(note => (note.labels || []).length >= OPTION_COUNT - 1)
  if (tagged.length === 0) return null
  const note = tagged[Math.floor(Math.random() * tagged.length)]
  const own = new Set((note.labels || []).map(label => String(label).trim().toLowerCase()))
  const foreign = entries.filter(entry => !own.has(entry.key))
  if (foreign.length === 0) return null
  const missing = foreign[Math.floor(Math.random() * foreign.length)]
  const decoys = shuffle(entries.filter(entry => own.has(entry.key))).slice(0, OPTION_COUNT - 1)
  if (decoys.length < OPTION_COUNT - 1) return null
  const choices = shuffle([
    { text: missing.display, correct: true },
    ...decoys.map(entry => ({ text: entry.display, correct: false }))
  ])
  return {
    kind: 'note-excludes-label',
    label: missing,
    ownerId: note.id,
    ownerTitle: noteTitle(note),
    choices,
    answer: choices.findIndex(choice => choice.correct),
    isRight: (index) => index === choices.findIndex(choice => choice.correct)
  }
}

// Question 3 — « quel mot-clé appartient à cette note ? »
// Variante positive : fonctionne dès qu'une note a un seul mot-clé,
// les leurres venant des autres notes.
export function questionNoteToLabel(entries, notes) {
  const tagged = notes.filter(note => (note.labels || []).length > 0)
  if (tagged.length === 0) return null
  const note = tagged[Math.floor(Math.random() * tagged.length)]
  const own = new Set((note.labels || []).map(label => String(label).trim().toLowerCase()))
  const picked = entries.filter(entry => own.has(entry.key))
  if (picked.length === 0) return null
  const good = picked[Math.floor(Math.random() * picked.length)]
  const decoys = shuffle(entries.filter(entry => !own.has(entry.key))).slice(0, OPTION_COUNT - 1)
  if (decoys.length < OPTION_COUNT - 1) return null
  const choices = shuffle([
    { text: good.display, correct: true },
    ...decoys.map(entry => ({ text: entry.display, correct: false }))
  ])
  return {
    kind: 'note-to-label',
    label: good,
    ownerId: note.id,
    ownerTitle: noteTitle(note),
    choices,
    answer: choices.findIndex(choice => choice.correct),
    isRight: (index) => index === choices.findIndex(choice => choice.correct)
  }
}

// ── Mémorisation ──
export const MEMORY_OPTIONS = 6
export const MEMORY_FLASH_MS = 5000
export const MEMORY_ROUNDS = 5
export const MEMORY_MAX_PICK = 4
// Nombre de manches parfaites d'affilée pour débloquer le niveau suivant.
export const MEMORY_STREAK_TO_LEVEL_UP = 3

// Construit une manche : on retient `wanted` mots-clés d'une note (affichés
// brièvement), puis on propose MEMORY_OPTIONS propositions à cocher.
// Retourne null si les notes ne permettent pas de former une manche.
export function buildMemoryRound(entries, notes, level = 1) {
  const wanted = Math.min(MEMORY_MAX_PICK, Math.max(2, level))
  const tagged = notes.filter(note => new Set((note.labels || []).map(l => String(l).trim().toLowerCase())).size >= wanted)
  if (tagged.length === 0) return null

  for (const note of shuffle(tagged)) {
    const unique = [...new Set((note.labels || []).map(l => String(l).trim()).filter(Boolean))]
    if (unique.length < wanted) continue
    const ownKeys = new Set(unique.map(l => l.toLowerCase()))
    const targets = shuffle(unique).slice(0, wanted)
    const foreign = entries.filter(entry => !ownKeys.has(entry.key))
    const decoysNeeded = MEMORY_OPTIONS - targets.length
    if (foreign.length < decoysNeeded) continue

    const options = shuffle([
      ...targets.map(text => ({ key: text.toLowerCase(), text, correct: true })),
      ...shuffle(foreign).slice(0, decoysNeeded).map(entry => ({ key: entry.key, text: entry.display, correct: false }))
    ])
    return {
      noteId: note.id,
      title: noteTitle(note),
      labels: targets,
      options,
      toPick: targets.length
    }
  }
  return null
}

// Compare les mots-clés cochés avec ceux à retenir.
export function scoreMemoryRound(round, pickedKeys) {
  const wanted = new Set(round.labels.map(label => label.toLowerCase()))
  const picked = new Set((pickedKeys || []).map(key => String(key).toLowerCase()))
  const correct = [...picked].filter(key => wanted.has(key)).length
  const wrong = [...picked].filter(key => !wanted.has(key)).length
  const missed = [...wanted].filter(key => !picked.has(key)).length
  return {
    correct,
    wrong,
    missed,
    perfect: correct === wanted.size && wrong === 0,
    points: Math.max(0, correct - wrong)
  }
}

// Une question peut être impossible à construire selon l'état des notes
// (pas assez de notes, trop peu de mots-clés) : on réessaie autre chose.
export function buildQuestion(entries, notes) {
  const builders = [questionLabelToNote, questionNoteToLabel, questionNoteExcludesLabel]
  for (let attempt = 0; attempt < 15; attempt++) {
    const builder = builders[Math.floor(Math.random() * builders.length)]
    const question = builder(entries, notes)
    if (question) return question
  }
  return null
}
