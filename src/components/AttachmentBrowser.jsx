import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ChevronRight, Folder, FolderOpen } from 'lucide-react'
import './AttachmentBrowser.css'

function buildTree(attachments) {
  const root = { folders: new Map(), files: [] }
  for (const attachment of attachments || []) {
    const relativePath = typeof attachment.relativePath === 'string'
      ? attachment.relativePath.replace(/\\/g, '/').replace(/^\/+|\/+$/g, '')
      : ''
    if (!relativePath) { root.files.push(attachment); continue }
    const parts = relativePath.split('/').filter(Boolean)
    if (parts.length < 2) { root.files.push(attachment); continue }
    let node = root
    for (const folderName of parts.slice(0, -1)) {
      if (!node.folders.has(folderName)) node.folders.set(folderName, { folders: new Map(), files: [] })
      node = node.folders.get(folderName)
    }
    node.files.push(attachment)
  }
  return root
}

function sortFiles(files) {
  return [...files].sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), undefined, { numeric: true, sensitivity: 'base' }))
}

function sortFolders(folders) {
  return [...folders.entries()].sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
}

function getNode(root, path) {
  return path.reduce((node, name) => node?.folders.get(name), root)
}

function countFiles(node) {
  let count = node.files.length
  for (const child of node.folders.values()) count += countFiles(child)
  return count
}

export default function AttachmentBrowser({ attachments, renderFile }) {
  const [path, setPath] = useState([])
  const root = useMemo(() => buildTree(attachments), [attachments])
  const node = getNode(root, path)

  useEffect(() => {
    if (!node && path.length) setPath([])
  }, [node, path.length])

  if (!node) return null

  const folders = sortFolders(node.folders)
  const files = sortFiles(node.files)

  return (
    <div className="attachment-browser">
      {path.length > 0 && (
        <div className="attachment-browser-toolbar">
          <button type="button" className="attachment-browser-back" onClick={() => setPath(current => current.slice(0, -1))}>
            <ArrowLeft size={16} />
            <span>Retour</span>
          </button>
          <div className="attachment-browser-path" aria-label="Dossier actuel">
            <span>📁</span>
            {path.map((part, index) => (
              <span key={part + index} className="attachment-browser-path-part">
                {index > 0 && <ChevronRight size={13} />}
                <button type="button" onClick={() => setPath(path.slice(0, index + 1))}>{part}</button>
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="attachment-browser-list">
        {folders.map(([name, folder]) => {
          const fileCount = countFiles(folder)
          return (
            <button
              type="button"
              className="attachment-folder-item"
              key={name}
              onClick={() => setPath(current => [...current, name])}
              title={'Ouvrir le dossier ' + name}
            >
              <span className="attachment-folder-icon">
                {path.length ? <Folder size={20} /> : <FolderOpen size={20} />}
              </span>
              <span className="attachment-folder-info">
                <span className="attachment-folder-name">{name}</span>
                <span className="attachment-folder-meta">{fileCount} fichier{fileCount > 1 ? 's' : ''}</span>
              </span>
              <ChevronRight size={17} className="attachment-folder-chevron" />
            </button>
          )
        })}
        {files.map(file => renderFile(file))}
        {folders.length === 0 && files.length === 0 && <div className="attachment-browser-empty">Dossier vide</div>}
      </div>
    </div>
  )
}
