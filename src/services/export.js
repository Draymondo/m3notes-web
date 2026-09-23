const EXPORT_VERSION = 2

function serializeValue(value) {
  if (value && typeof value.toMillis === 'function') return { __type: 'timestamp', value: value.toMillis() }
  if (Array.isArray(value)) return value.map(serializeValue)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, serializeValue(item)]))
  }
  return value
}

function toMillis(value) {
  if (!value) return null
  if (typeof value.toMillis === 'function') return value.toMillis()
  if (value instanceof Date) return value.getTime()
  if (typeof value === 'number') return value
  return null
}

function serializeNote(note) {
  return {
    id: note.id || null,
    title: note.title || '',
    content: note.content || '',
    labels: Array.isArray(note.labels) ? note.labels : [],
    color: note.color || null,
    isPinned: !!note.isPinned,
    isFavorite: !!note.isFavorite,
    isArchived: !!note.isArchived,
    isDeleted: !!note.isDeleted,
    isChecklist: !!note.isChecklist,
    checklist: Array.isArray(note.checklist) ? note.checklist.map(item => ({ ...item })) : [],
    createdAt: toMillis(note.createdAt),
    updatedAt: toMillis(note.updatedAt),
    deletedAt: toMillis(note.deletedAt)
  }
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function safeFilename(value) {
  return (value || 'm3notes')
    .replace(/[^a-z0-9-_À-ÿ ]/gi, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60) || 'm3notes'
}

export function exportJson(notes, filename = 'm3notes-sauvegarde') {
  const payload = {
    app: 'M3Notes',
    version: EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    notes: notes.map(serializeNote)
  }
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' })
  downloadBlob(blob, `${safeFilename(filename)}.json`)
}


export function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer)
  const chunkSize = 0x8000
  let binary = ''
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, Math.min(offset + chunkSize, bytes.length)))
  }
  return btoa(binary)
}

export function exportCompleteBackup(data, driveFiles = [], filename = 'm3notes-sauvegarde-complete') {
  const payload = {
    app: 'M3Notes',
    backupType: 'complete-data-and-drive',
    version: EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    userData: serializeValue(data),
    driveFiles: driveFiles.map(file => ({
      id: file.id,
      name: file.name || '',
      mimeType: file.mimeType || 'application/octet-stream',
      size: file.size ? Number(file.size) : null,
      createdTime: file.createdTime || null,
      modifiedTime: file.modifiedTime || null,
      appProperties: file.appProperties || {},
      contentBase64: file.contentBase64 || ''
    })),
    security: {
      vaultAttachments: 'Les fichiers du coffre sont sauvegardés tels quels, donc toujours chiffrés côté client.'
    }
  }
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' })
  downloadBlob(blob, `${safeFilename(filename)}.json`)
}

function noteBodyMarkdown(note) {
  if (note.isChecklist && Array.isArray(note.checklist)) {
    return note.checklist.map(item => `- [${item.isChecked ? 'x' : ' '}] ${item.text || ''}`).join('\n')
  }
  return note.content || ''
}

function noteBodyText(note) {
  if (note.isChecklist && Array.isArray(note.checklist)) {
    return note.checklist.map(item => `${item.isChecked ? '[x]' : '[ ]'} ${item.text || ''}`).join('\n')
  }
  return note.content || ''
}

export function exportMarkdown(notes, filename = 'm3notes') {
  const sections = notes.map(note => {
    const labels = Array.isArray(note.labels) && note.labels.length
      ? `\n**Labels :** ${note.labels.map(label => `\`${label}\``).join(' ')}`
      : ''
    return `# ${note.title || 'Sans titre'}\n\n${noteBodyMarkdown(note)}${labels}\n`
  })
  const content = `# M3Notes\n\nExport du ${new Date().toLocaleString('fr-FR')}\n\n${sections.join('\n---\n\n')}`
  downloadBlob(new Blob([content], { type: 'text/markdown;charset=utf-8' }), `${safeFilename(filename)}.md`)
}

export function exportText(notes, filename = 'm3notes') {
  const content = notes.map(note => {
    const labels = Array.isArray(note.labels) && note.labels.length ? `Labels : ${note.labels.join(', ')}\n` : ''
    return `${note.title || 'Sans titre'}\n${'='.repeat(Math.max(8, (note.title || 'Sans titre').length))}\n${labels}\n${noteBodyText(note)}`
  }).join('\n\n----------------------------------------\n\n')
  downloadBlob(new Blob([content], { type: 'text/plain;charset=utf-8' }), `${safeFilename(filename)}.txt`)
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function exportPdf(notes, filename = 'm3notes') {
  const noteHtml = notes.map(note => {
    const labels = Array.isArray(note.labels) && note.labels.length
      ? `<p class="meta"><strong>Labels :</strong> ${note.labels.map(escapeHtml).join(', ')}</p>`
      : ''
    const content = note.isChecklist && Array.isArray(note.checklist)
      ? `<ul class="checklist">${note.checklist.map(item => `<li style="text-decoration:${item.isChecked ? 'line-through' : 'none'}">${item.isChecked ? '☑' : '☐'} ${escapeHtml(item.text || '')}</li>`).join('')}</ul>`
      : escapeHtml(note.content || '').replace(/\n/g, '<br>')
    return `<article><h2>${escapeHtml(note.title || 'Sans titre')}</h2>${labels}<div class="content">${content}</div></article>`
  }).join('')

  const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>M3Notes</title><style>
    body{font-family:Arial,sans-serif;max-width:800px;margin:40px auto;color:#222;line-height:1.6}
    h1{margin-bottom:4px} .date{color:#666;margin-bottom:30px} article{page-break-inside:avoid;border-bottom:1px solid #ddd;padding:0 0 24px;margin-bottom:24px}
    article:last-child{border-bottom:0}.meta{color:#666;font-size:13px}.content{white-space:normal}
    @media print{body{margin:0;max-width:none}article{break-inside:avoid}}
  </style></head><body><h1>M3Notes</h1><p class="date">Export du ${escapeHtml(new Date().toLocaleString('fr-FR'))}</p>${noteHtml}</body></html>`

  // Must be opened synchronously from the user's click so mobile browsers do not block it.
  // Do not use the noopener/noreferrer feature string here: some browsers return null for
  // the WindowProxy in that case, which prevents us from writing the printable document.
  const printWindow = window.open('', '_blank')
  if (!printWindow) throw new Error('La fenêtre PDF a été bloquée par le navigateur. Autorisez les fenêtres contextuelles pour M3Notes.')
  printWindow.document.open()
  printWindow.document.write(html)
  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => printWindow.print(), 350)
}

export function parseBackupFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const payload = JSON.parse(reader.result)
        if (!payload || !Array.isArray(payload.notes)) throw new Error('Format de sauvegarde M3Notes invalide.')
        resolve(payload.notes)
      } catch (error) {
        reject(error)
      }
    }
    reader.onerror = () => reject(new Error('Impossible de lire le fichier de sauvegarde.'))
    reader.readAsText(file)
  })
}
