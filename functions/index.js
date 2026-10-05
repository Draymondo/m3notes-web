import { onRequest } from 'firebase-functions/v2/https'
import { defineJsonSecret } from 'firebase-functions/params'
import { initializeApp } from 'firebase-admin/app'
import { getFirestore, Timestamp } from 'firebase-admin/firestore'
import { createMcpHandler, McpServer } from '@modelcontextprotocol/server'
import * as z from 'zod/v4'

initializeApp()
const db = getFirestore()

const aiConfig = defineJsonSecret('M3NOTES_AI_CONFIG')

const MAX_SEARCH_RESULTS = 20
const MAX_LIST_RESULTS = 50
const MAX_TITLE_LENGTH = 500
const MAX_CONTENT_LENGTH = 100000

function getConfig() {
  const value = aiConfig.value()
  if (!value || typeof value !== 'object') throw new Error('M3Notes AI configuration is missing.')
  const token = typeof value.token === 'string' ? value.token : ''
  const mcpPathToken = typeof value.mcpPathToken === 'string' ? value.mcpPathToken : ''
  const userId = typeof value.userId === 'string' ? value.userId : ''
  if (!token || !mcpPathToken || !userId) {
    throw new Error('M3Notes AI configuration must contain token, mcpPathToken and userId.')
  }
  return { token, mcpPathToken, userId }
}

function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false
  let result = 0
  for (let i = 0; i < a.length; i += 1) result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return result === 0
}

function getBearerToken(req) {
  const header = req.get('authorization') || ''
  return header.startsWith('Bearer ') ? header.slice(7).trim() : ''
}

function requireApiAuth(req) {
  const config = getConfig()
  if (!safeEqual(getBearerToken(req), config.token)) {
    const error = new Error('Unauthorized')
    error.status = 401
    throw error
  }
  return config.userId
}

function normalizeText(value, maxLength) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

function isNormalNote(data) {
  return data?.isVault !== true
}

function publicNote(id, data) {
  return {
    id,
    title: typeof data.title === 'string' ? data.title : '',
    content: typeof data.content === 'string' ? data.content : '',
    color: data.color || 'DEFAULT',
    labels: Array.isArray(data.labels) ? data.labels : [],
    isPinned: data.isPinned === true,
    isFavorite: data.isFavorite === true,
    isArchived: data.isArchived === true,
    isDeleted: data.isDeleted === true,
    isChecklist: data.isChecklist === true,
    checklist: Array.isArray(data.checklist) ? data.checklist : [],
    createdAt: data.createdAt?.toDate?.()?.toISOString?.() || null,
    updatedAt: data.updatedAt?.toDate?.()?.toISOString?.() || null
  }
}

async function getNormalNotes(userId) {
  const snap = await db.collection('notes').where('userId', '==', userId).get()
  return snap.docs
    .filter(doc => isNormalNote(doc.data()))
    .map(doc => ({ id: doc.id, data: doc.data() }))
}

async function getNormalNote(userId, noteId) {
  if (!noteId || typeof noteId !== 'string') return null
  const snap = await db.collection('notes').doc(noteId).get()
  if (!snap.exists) return null
  const data = snap.data()
  if (data?.userId !== userId || !isNormalNote(data)) return null
  return { id: snap.id, data }
}

async function listNotes(userId, { includeArchived = false, includeDeleted = false, limit = MAX_LIST_RESULTS } = {}) {
  const notes = await getNormalNotes(userId)
  const result = notes
    .filter(({ data }) => includeArchived || data.isArchived !== true)
    .filter(({ data }) => includeDeleted || data.isDeleted !== true)
    .sort((a, b) => {
      const ap = a.data.isPinned === true ? 1 : 0
      const bp = b.data.isPinned === true ? 1 : 0
      if (ap !== bp) return bp - ap
      const at = a.data.updatedAt?.toMillis?.() || a.data.createdAt?.toMillis?.() || 0
      const bt = b.data.updatedAt?.toMillis?.() || b.data.createdAt?.toMillis?.() || 0
      return bt - at
    })
    .slice(0, Math.max(1, Math.min(MAX_LIST_RESULTS, Number(limit) || MAX_LIST_RESULTS)))
  return result.map(({ id, data }) => publicNote(id, data))
}

async function searchNotes(userId, query, limit = MAX_SEARCH_RESULTS) {
  const q = normalizeText(query, 500).toLowerCase()
  if (!q) return []
  const notes = await getNormalNotes(userId)
  const result = notes
    .filter(({ data }) => data.isDeleted !== true)
    .map(({ id, data }) => {
      const title = typeof data.title === 'string' ? data.title : ''
      const content = typeof data.content === 'string' ? data.content : ''
      const labels = Array.isArray(data.labels) ? data.labels.join(' ') : ''
      const haystack = (title + '\n' + content + '\n' + labels).toLowerCase()
      return { id, data, haystack }
    })
    .filter(item => item.haystack.includes(q))
    .sort((a, b) => {
      const at = a.data.updatedAt?.toMillis?.() || a.data.createdAt?.toMillis?.() || 0
      const bt = b.data.updatedAt?.toMillis?.() || b.data.createdAt?.toMillis?.() || 0
      return bt - at
    })
    .slice(0, Math.max(1, Math.min(MAX_SEARCH_RESULTS, Number(limit) || MAX_SEARCH_RESULTS)))
  return result.map(({ id, data }) => publicNote(id, data))
}

async function createNormalNote(userId, input = {}) {
  const title = normalizeText(input.title, MAX_TITLE_LENGTH)
  const content = normalizeText(input.content, MAX_CONTENT_LENGTH)
  const labels = Array.isArray(input.labels)
    ? input.labels.filter(label => typeof label === 'string').map(label => label.trim()).filter(Boolean).slice(0, 50)
    : []

  const now = Timestamp.now()
  const ref = db.collection('notes').doc()
  const data = {
    userId,
    isVault: false,
    title,
    content,
    color: typeof input.color === 'string' ? input.color : 'DEFAULT',
    isPinned: false,
    isFavorite: false,
    isArchived: false,
    isDeleted: false,
    deletedAt: null,
    labels,
    imageUrls: [],
    checklist: [],
    isChecklist: input.isChecklist === true,
    createdAt: now,
    updatedAt: now
  }
  await ref.set(data)
  return publicNote(ref.id, data)
}

async function updateNormalNote(userId, noteId, input = {}) {
  const current = await getNormalNote(userId, noteId)
  if (!current) {
    const error = new Error('Note introuvable ou inaccessible.')
    error.status = 404
    throw error
  }

  const patch = {}
  if (Object.prototype.hasOwnProperty.call(input, 'title')) patch.title = normalizeText(input.title, MAX_TITLE_LENGTH)
  if (Object.prototype.hasOwnProperty.call(input, 'content')) patch.content = normalizeText(input.content, MAX_CONTENT_LENGTH)
  if (Object.prototype.hasOwnProperty.call(input, 'color') && typeof input.color === 'string') patch.color = input.color
  if (Object.prototype.hasOwnProperty.call(input, 'labels') && Array.isArray(input.labels)) {
    patch.labels = input.labels.filter(label => typeof label === 'string').map(label => label.trim()).filter(Boolean).slice(0, 50)
  }
  if (Object.prototype.hasOwnProperty.call(input, 'isPinned')) patch.isPinned = input.isPinned === true
  if (Object.prototype.hasOwnProperty.call(input, 'isFavorite')) patch.isFavorite = input.isFavorite === true
  if (Object.prototype.hasOwnProperty.call(input, 'isArchived')) patch.isArchived = input.isArchived === true
  if (Object.prototype.hasOwnProperty.call(input, 'isDeleted')) patch.isDeleted = input.isDeleted === true
  if (Object.prototype.hasOwnProperty.call(input, 'isChecklist')) patch.isChecklist = input.isChecklist === true
  if (Object.prototype.hasOwnProperty.call(input, 'checklist') && Array.isArray(input.checklist)) patch.checklist = input.checklist.slice(0, 500)

  const historySnapshot = {
    title: current.data.title || '',
    content: current.data.content || '',
    color: current.data.color || 'DEFAULT',
    isPinned: current.data.isPinned === true,
    isFavorite: current.data.isFavorite === true,
    isArchived: current.data.isArchived === true,
    isChecklist: current.data.isChecklist === true,
    checklist: Array.isArray(current.data.checklist) ? current.data.checklist : [],
    labels: Array.isArray(current.data.labels) ? current.data.labels : [],
    savedAt: Timestamp.now()
  }

  const noteRef = db.collection('notes').doc(noteId)
  const historyRef = noteRef.collection('history').doc()
  await db.runTransaction(async transaction => {
    transaction.set(historyRef, historySnapshot)
    transaction.update(noteRef, { ...patch, updatedAt: Timestamp.now() })
  })

  const updated = await noteRef.get()
  return publicNote(noteId, updated.data())
}

function json(res, status, body) {
  res.status(status).set('Cache-Control', 'no-store').json(body)
}

export const m3notesAiApi = onRequest(
  { region: 'europe-west1', secrets: [aiConfig], timeoutSeconds: 30, cors: false },
  async (req, res) => {
    try {
      if (req.method === 'OPTIONS') return res.status(204).end()
      const userId = requireApiAuth(req)

      if (req.method === 'GET' && req.path === '/health') {
        return json(res, 200, { ok: true, service: 'm3notes-ai-api' })
      }

      if (req.method === 'GET' && req.path === '/notes') {
        const includeArchived = req.query.includeArchived === 'true'
        const includeDeleted = req.query.includeDeleted === 'true'
        return json(res, 200, { notes: await listNotes(userId, { includeArchived, includeDeleted }) })
      }

      if (req.method === 'GET' && req.path === '/notes/search') {
        const q = typeof req.query.q === 'string' ? req.query.q : ''
        return json(res, 200, { notes: await searchNotes(userId, q) })
      }

      if (req.method === 'GET' && req.path.startsWith('/notes/')) {
        const noteId = req.path.slice('/notes/'.length)
        const note = await getNormalNote(userId, noteId)
        if (!note) return json(res, 404, { error: 'Note introuvable ou inaccessible.' })
        return json(res, 200, { note: publicNote(note.id, note.data) })
      }

      if (req.method === 'POST' && req.path === '/notes') {
        return json(res, 201, { note: await createNormalNote(userId, req.body || {}) })
      }

      if (req.method === 'PATCH' && req.path.startsWith('/notes/')) {
        const noteId = req.path.slice('/notes/'.length)
        return json(res, 200, { note: await updateNormalNote(userId, noteId, req.body || {}) })
      }

      return json(res, 404, { error: 'Route inconnue.' })
    } catch (error) {
      const status = Number(error?.status) || (error?.message === 'Unauthorized' ? 401 : 500)
      if (status >= 500) console.error('M3Notes AI API error:', error)
      return json(res, status, { error: status === 500 ? 'Erreur interne.' : error.message })
    }
  }
)

function createM3NotesMcpServer(userId) {
  const server = new McpServer(
    { name: 'm3notes', version: '1.0.0' },
    {
      capabilities: { tools: {} },
      instructions: 'M3Notes normal notes only. Never access, expose, infer, or modify vault notes or vault metadata.'
    }
  )

  server.registerTool(
    'm3notes_list_notes',
    {
      title: 'List M3Notes',
      description: 'List the user’s normal M3Notes. Vault notes are never returned.',
      inputSchema: z.object({
        includeArchived: z.boolean().optional(),
        includeDeleted: z.boolean().optional(),
        limit: z.number().int().min(1).max(MAX_LIST_RESULTS).optional()
      })
    },
    async ({ includeArchived, includeDeleted, limit }) => ({
      content: [{ type: 'text', text: JSON.stringify(await listNotes(userId, { includeArchived, includeDeleted, limit })) }]
    })
  )

  server.registerTool(
    'm3notes_search_notes',
    {
      title: 'Search M3Notes',
      description: 'Search title, content and labels in normal M3Notes. Vault notes are never searched.',
      inputSchema: z.object({
        query: z.string().min(1).max(500),
        limit: z.number().int().min(1).max(MAX_SEARCH_RESULTS).optional()
      })
    },
    async ({ query, limit }) => ({
      content: [{ type: 'text', text: JSON.stringify(await searchNotes(userId, query, limit)) }]
    })
  )

  server.registerTool(
    'm3notes_get_note',
    {
      title: 'Get a M3Notes note',
      description: 'Get one normal M3Notes note by ID. Vault notes are rejected.',
      inputSchema: z.object({ noteId: z.string().min(1).max(200) })
    },
    async ({ noteId }) => {
      const note = await getNormalNote(userId, noteId)
      if (!note) throw new Error('Note introuvable ou inaccessible.')
      return { content: [{ type: 'text', text: JSON.stringify(publicNote(note.id, note.data)) }] }
    }
  )

  server.registerTool(
    'm3notes_create_note',
    {
      title: 'Create a M3Notes note',
      description: 'Create a new normal M3Notes note. The user identity is fixed by server configuration.',
      inputSchema: z.object({
        title: z.string().max(MAX_TITLE_LENGTH).optional(),
        content: z.string().max(MAX_CONTENT_LENGTH).optional(),
        color: z.string().max(100).optional(),
        labels: z.array(z.string().max(100)).max(50).optional(),
        isChecklist: z.boolean().optional()
      })
    },
    async input => ({
      content: [{ type: 'text', text: JSON.stringify(await createNormalNote(userId, input)) }]
    })
  )

  server.registerTool(
    'm3notes_update_note',
    {
      title: 'Update a M3Notes note',
      description: 'Update a normal M3Notes note and preserve a history snapshot. Vault notes are rejected.',
      inputSchema: z.object({
        noteId: z.string().min(1).max(200),
        title: z.string().max(MAX_TITLE_LENGTH).optional(),
        content: z.string().max(MAX_CONTENT_LENGTH).optional(),
        color: z.string().max(100).optional(),
        labels: z.array(z.string().max(100)).max(50).optional(),
        isPinned: z.boolean().optional(),
        isFavorite: z.boolean().optional(),
        isArchived: z.boolean().optional(),
        isDeleted: z.boolean().optional(),
        isChecklist: z.boolean().optional(),
        checklist: z.array(z.record(z.string(), z.unknown())).max(500).optional()
      })
    },
    async ({ noteId, ...input }) => ({
      content: [{ type: 'text', text: JSON.stringify(await updateNormalNote(userId, noteId, input)) }]
    })
  )

  return server
}

const mcpHandler = createMcpHandler(
  () => createM3NotesMcpServer(getConfig().userId),
  { responseMode: 'json' }
)

export const m3notesMcp = onRequest(
  { region: 'europe-west1', secrets: [aiConfig], timeoutSeconds: 60, cors: false },
  async (req, res) => {
    try {
      const config = getConfig()
      if (!safeEqual(getBearerToken(req), config.token)) {
        return res.status(401).send('Unauthorized')
      }
      const expectedPath = '/' + config.mcpPathToken
      if (req.path !== expectedPath) return res.status(404).send('Not found')
      if (req.method !== 'POST') return res.status(405).set('Allow', 'POST').send('Method Not Allowed')

      const url = new URL(req.protocol + '://' + req.get('host') + req.originalUrl)
      const headers = new Headers()
      for (const [key, value] of Object.entries(req.headers)) {
        if (typeof value === 'string') headers.set(key, value)
        else if (Array.isArray(value)) headers.set(key, value.join(', '))
      }

      const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {})
      const request = new Request(url, { method: req.method, headers, body })
      const response = await mcpHandler.fetch(request)

      res.status(response.status)
      response.headers.forEach((value, key) => res.set(key, value))
      return res.send(await response.text())
    } catch (error) {
      console.error('M3Notes MCP error:', error)
      return res.status(401).send('Unauthorized')
    }
  }
)
