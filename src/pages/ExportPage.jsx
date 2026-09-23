import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, Download, FileJson, FileText, FileType, Upload } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { subscribeNotes, createNote, getCompleteBackupData } from '../services/notes'
import { getDriveAccessToken, listDriveAttachmentFiles, downloadDriveFile } from '../services/drive'
import { arrayBufferToBase64, exportJson, exportCompleteBackup, exportMarkdown, exportText, exportPdf, parseBackupFile } from '../services/export'
import './ExportPage.css'

export default function ExportPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [backupBusy, setBackupBusy] = useState(false)

  useEffect(() => {
    if (!user) return
    return subscribeNotes(user.uid, 'active', data => { setNotes(data); setLoading(false) })
  }, [user])

  const runExport = (fn) => {
    setError(''); setMessage('')
    if (!notes.length) return setError('Aucune note à exporter.')
    try { fn(notes); setMessage(`${notes.length} note${notes.length > 1 ? 's' : ''} exportée${notes.length > 1 ? 's' : ''}.`) }
    catch (err) { console.error(err); setError('Impossible de générer l’export.') }
  }

  const handleCompleteBackup = async () => {
    setError('')
    setMessage('')
    if (!user || backupBusy) return
    setBackupBusy(true)
    try {
      setMessage('Préparation de la sauvegarde…')
      const data = await getCompleteBackupData(user.uid)
      const accessToken = await getDriveAccessToken()
      const driveFiles = await listDriveAttachmentFiles(accessToken)
      const backupFiles = []
      for (let index = 0; index < driveFiles.length; index += 1) {
        const file = driveFiles[index]
        setMessage('Sauvegarde des pièces jointes… ' + (index + 1) + '/' + driveFiles.length)
        const bytes = await downloadDriveFile(file.id, accessToken)
        backupFiles.push({ ...file, contentBase64: arrayBufferToBase64(bytes) })
      }
      exportCompleteBackup(data, backupFiles)
      setMessage('Sauvegarde complète générée' + (driveFiles.length ? ' avec ' + driveFiles.length + ' fichier' + (driveFiles.length > 1 ? 's' : '') + '.' : '.'))
    } catch (err) {
      console.error('Complete backup error:', err)
      setError('Impossible de générer la sauvegarde complète.')
    } finally {
      setBackupBusy(false)
    }
  }

  const handleImport = async event => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    setError(''); setMessage('')
    try {
      const imported = await parseBackupFile(file)
      if (!imported.length) throw new Error('La sauvegarde ne contient aucune note.')
      for (const note of imported) {
        await createNote(user.uid, {
          title: note.title || '', content: note.content || '', labels: Array.isArray(note.labels) ? note.labels : [],
          color: note.color || null, isPinned: !!note.isPinned, isFavorite: !!note.isFavorite, isArchived: !!note.isArchived,
          isChecklist: !!note.isChecklist, checklist: Array.isArray(note.checklist) ? note.checklist : []
        })
      }
      setMessage(`${imported.length} note${imported.length > 1 ? 's' : ''} importée${imported.length > 1 ? 's' : ''}.`)
    } catch (err) { console.error(err); setError(err.message || 'Impossible d’importer la sauvegarde.') }
  }

  return <div className="export-page">
    <header className="export-header">
      <button className="icon-btn" onClick={() => navigate('/')} title="Retour"><ArrowLeft size={20} /></button>
      <h1>Export & sauvegarde</h1>
    </header>
    <main className="export-content">
      <p className="export-intro">Récupérez vos notes dans un format lisible ou créez une sauvegarde réimportable.</p>
      {loading ? <p>Chargement…</p> : <>
        <section className="export-card">
          <h2>Exporter</h2>
          <p>{notes.length} note{notes.length > 1 ? 's' : ''} disponible{notes.length > 1 ? 's' : ''}</p>
          <div className="export-actions">
            <button onClick={() => runExport(exportJson)}><FileJson size={19} /> JSON — notes actives</button>
            <button onClick={() => runExport(exportMarkdown)}><FileText size={19} /> Markdown</button>
            <button onClick={() => runExport(exportText)}><FileText size={19} /> Texte</button>
            <button onClick={() => runExport(exportPdf)}><FileType size={19} /> PDF / imprimer</button>
          </div>
          <button onClick={handleCompleteBackup} disabled={backupBusy}><Download size={19} /> {backupBusy ? 'Préparation…' : 'Sauvegarde complète des données'}</button>
          <p className="export-note">Inclut les données Firestore et les fichiers M3Notes stockés sur Google Drive. Les pièces jointes du coffre restent chiffrées dans la sauvegarde.</p>
        </section>
        <section className="export-card">
          <h2>Restaurer une sauvegarde</h2>
          <p>Importez uniquement un fichier JSON créé par M3Notes. Les notes seront ajoutées à vos notes existantes.</p>
          <input ref={inputRef} type="file" accept="application/json,.json" hidden onChange={handleImport} />
          <button className="import-button" onClick={() => inputRef.current?.click()}><Upload size={19} /> Importer une sauvegarde JSON</button>
        </section>
      </>}
      {message && <p className="export-success" role="status">{message}</p>}
      {error && <p className="export-error" role="alert">{error}</p>}
    </main>
  </div>
}
