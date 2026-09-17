import { Fragment } from 'react'

function inline(text) {
  const pattern = /(\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|_[^_]+_|`[^`]+`|https?:\/\/[^\s]+|\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g
  const parts = String(text || '').split(pattern)
  return parts.map((part, index) => {
    if (!part) return null
    if (/^\*\*.*\*\*$/.test(part) || /^__.*__$/.test(part)) return <strong key={index}>{part.slice(2, -2)}</strong>
    if (/^\*.*\*$/.test(part) || /^_.*_$/.test(part)) return <em key={index}>{part.slice(1, -1)}</em>
    if (/^`.*`$/.test(part)) return <code key={index}>{part.slice(1, -1)}</code>
    const markdownLink = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/)
    if (markdownLink) return <a key={index} href={markdownLink[2]} target="_blank" rel="noopener noreferrer">{markdownLink[1]}</a>
    if (/^https?:\/\//.test(part)) return <a key={index} href={part} target="_blank" rel="noopener noreferrer">{part}</a>
    return <Fragment key={index}>{part}</Fragment>
  })
}

export default function MarkdownRenderer({ value = '', className = '' }) {
  const lines = String(value).replace(/\r\n?/g, '\n').split('\n')
  const blocks = []
  let list = null
  let code = null

  const flushList = () => {
    if (!list) return
    const Tag = list.type === 'ol' ? 'ol' : 'ul'
    blocks.push(<Tag key={`list-${blocks.length}`} className="md-list">{list.items}</Tag>)
    list = null
  }

  const flushCode = () => {
    if (code === null) return
    blocks.push(<pre key={`code-${blocks.length}`} className="md-code"><code>{code.join('\n')}</code></pre>)
    code = null
  }

  lines.forEach((line, index) => {
    if (line.trim().startsWith('```')) {
      flushList()
      if (code === null) code = []
      else flushCode()
      return
    }
    if (code !== null) {
      code.push(line)
      return
    }

    const trimmed = line.trim()
    if (!trimmed) {
      flushList()
      blocks.push(<div key={`space-${index}`} className="md-spacer" />)
      return
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/)
    if (heading) {
      flushList()
      const Tag = `h${heading[1].length}`
      blocks.push(<Tag key={index}>{inline(heading[2])}</Tag>)
      return
    }

    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      flushList()
      blocks.push(<hr key={index} />)
      return
    }

    const quote = trimmed.match(/^>\s?(.*)$/)
    if (quote) {
      flushList()
      blocks.push(<blockquote key={index}>{inline(quote[1])}</blockquote>)
      return
    }

    const checked = trimmed.match(/^[-*+]\s+\[([ xX])\]\s+(.*)$/)
    const bullet = trimmed.match(/^[-*+]\s+(.*)$/)
    const numbered = trimmed.match(/^\d+[.)]\s+(.*)$/)
    if (checked || bullet || numbered) {
      const type = numbered ? 'ol' : 'ul'
      if (!list || list.type !== type) {
        flushList()
        list = { type, items: [] }
      }
      const text = checked ? checked[2] : (bullet ? bullet[1] : numbered[1])
      list.items.push(
        <li key={`${index}-${list.items.length}`} className={checked?.[1].toLowerCase() === 'x' ? 'md-checked' : ''}>
          {checked && <span className="md-checkbox">{checked[1].toLowerCase() === 'x' ? '☑' : '☐'}</span>}
          {inline(text)}
        </li>
      )
      return
    }

    flushList()
    blocks.push(<p key={index}>{inline(trimmed)}</p>)
  })

  flushList()
  flushCode()

  return <div className={`markdown-renderer ${className}`}>{blocks}</div>
}
