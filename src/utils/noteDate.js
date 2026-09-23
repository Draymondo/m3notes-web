function toDate(timestamp) {
  if (!timestamp) return null
  if (timestamp?.toDate) return timestamp.toDate()
  if (timestamp instanceof Date) return timestamp
  if (typeof timestamp === 'string' || typeof timestamp === 'number') {
    const date = new Date(timestamp)
    return Number.isNaN(date.getTime()) ? null : date
  }
  return null
}

export function formatNoteDate(timestamp, { prefix = 'Modifiée' } = {}) {
  const date = toDate(timestamp)
  if (!date) return ''

  const now = new Date()
  const sameDay = date.getFullYear() === now.getFullYear()
    && date.getMonth() === now.getMonth()
    && date.getDate() === now.getDate()
  const yesterday = new Date(now)
  yesterday.setDate(now.getDate() - 1)
  const isYesterday = date.getFullYear() === yesterday.getFullYear()
    && date.getMonth() === yesterday.getMonth()
    && date.getDate() === yesterday.getDate()

  const time = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' }).format(date)
  if (sameDay) return prefix + ' aujourd’hui à ' + time
  if (isYesterday) return prefix + ' hier à ' + time

  const dateLabel = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }).format(date)
  return prefix + ' le ' + dateLabel + ' à ' + time
}
