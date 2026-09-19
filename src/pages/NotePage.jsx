import { useState } from 'react'
import { ArrowLeft, Pin, Archive, Trash2, ListChecks, AlignLeft, Tag, Copy, Share2, Star, History, X, Eye, Pencil } from 'lucide-react'
import { useNote } from '../hooks/useNote'
import ColorPicker, { colorClass } from '../components/ColorPicker'
import ChecklistEditor from '../components/ChecklistEditor'
import LabelEditor from '../components/LabelEditor'
import ConfirmDialog from '../components/ConfirmDialog'
import MarkdownRenderer from '../components/MarkdownRenderer'
import NoteAttachments from '../components/NoteAttachments'
import './NotePage.css'

function formatHistoryDate(timestamp) {
  if (!timestamp?.toDate) return 'Date inconnue'
  return new Intl.DateTimeFormat('fr-FR', { dateStyle: 'medium', timeStyle: 'short' }).format(timestamp.toDate())
}

export default function NotePage() {
  const note = useNote()
  const [labelInputOpen, setLabelInputOpen] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(!note.isNew)

  if (note.loading) return <div className="note-page loading">Chargement…</div>
  if (note.loadError) return <div className="note-page loading"><p>{note.loadError}</p><button className="icon-btn" onClick={() => window.history.back()}>Retour</button></div>

  return (
    <div className={`note-page ${colorClass[note.color] || 'note-default'}`}>
      <header className="note-toolbar">
        <button className="icon-btn" onClick={note.save} title="Retour"><ArrowLeft size={22} /></button>
        <div className="toolbar-actions">
          {!note.isChecklist && !note.isNew && <button className={`icon-btn ${previewOpen ? 'active' : ''}`} onClick={() => setPreviewOpen(!previewOpen)} title={previewOpen ? 'Modifier' : 'Aperçu'}>{previewOpen ? <Pencil size={20} /> : <Eye size={20} />}</button>}
          <button className="icon-btn" onClick={() => note.isChecklist ? note.switchToText() : note.switchToChecklist()} title={note.isChecklist ? 'Passer en texte' : 'Passer en checklist'}>{note.isChecklist ? <AlignLeft size={20} /> : <ListChecks size={20} />}</button>
          <button className={`icon-btn ${labelInputOpen ? 'active' : ''}`} onClick={() => setLabelInputOpen(!labelInputOpen)} title="Labels"><Tag size={20} /></button>
          <button className={`icon-btn ${note.isPinned ? 'active' : ''}`} onClick={() => note.setIsPinned(!note.isPinned)} title="Épingler"><Pin size={20} fill={note.isPinned ? 'currentColor' : 'none'} /></button>
          <button className={`icon-btn ${note.isFavorite ? 'active' : ''}`} onClick={() => note.setIsFavorite(!note.isFavorite)} title={note.isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}><Star size={20} fill={note.isFavorite ? 'currentColor' : 'none'} /></button>
          {!note.isNew && <button className={`icon-btn ${note.historyOpen ? 'active' : ''}`} onClick={() => note.setHistoryOpen(true)} title="Historique"><History size={20} /></button>}
          <button className={`icon-btn ${note.isArchived ? 'active' : ''}`} onClick={note.askArchiveToggle} title="Archiver"><Archive size={20} /></button>
          <button className="icon-btn" onClick={note.handleShare} title="Partager"><Share2 size={20} /></button>
          {!note.isNew && <button className="icon-btn" onClick={note.askDuplicate} title="Dupliquer"><Copy size={20} /></button>}
          {!note.isNew && <button className="icon-btn" onClick={note.askDelete} title="Supprimer"><Trash2 size={20} /></button>}
        </div>
      </header>

      {!previewOpen && <ColorPicker color={note.color} onChange={note.setColor} />}
      <input className="note-title-input" placeholder="Titre" value={note.title} onChange={e => note.setTitle(e.target.value)} autoFocus={note.isNew} readOnly={previewOpen} />
      {!previewOpen && <LabelEditor labels={note.labels} open={labelInputOpen} onAdd={note.addLabel} onRemove={note.removeLabel} />}
      {note.saveError && <p className="note-error" role="alert">{note.saveError}</p>}
      {note.shareError && <p className="note-error" role="alert">{note.shareError}</p>}

      {note.isChecklist ? (
        <ChecklistEditor items={note.checklist} onAdd={note.addItem} onUpdateText={note.updateItemText} onToggle={note.toggleItem} onRemove={note.removeItem} />
      ) : previewOpen ? (
        <MarkdownRenderer value={note.content} className="note-preview" />
      ) : (
        <textarea className="note-content-input" placeholder="Note" value={note.content} onChange={e => note.setContent(e.target.value)} rows={12} />
      )}

      {!note.isNew && (
        <NoteAttachments
          attachments={note.attachments}
          onAdd={note.attachFiles}
          onRemove={note.removeAttachment}
          disabled={note.attachmentsLoading}
        />
      )}
      {note.attachmentError && <p className="note-error" role="alert">{note.attachmentError}</p>}

      {note.historyOpen && <div className="history-overlay" role="dialog" aria-modal="true" aria-label="Historique de la note">
        <div className="history-panel">
          <div className="history-header"><div><h2>Historique</h2><p>Versions précédentes de cette note</p></div><button className="icon-btn" onClick={() => note.setHistoryOpen(false)} title="Fermer"><X size={20} /></button></div>
          {note.historyError && <p className="note-error">{note.historyError}</p>}
          {note.historyLoading ? <p className="history-empty">Chargement…</p> : note.history.length === 0 ? <p className="history-empty">Aucune ancienne version pour le moment.<br />Une version sera créée à chaque modification enregistrée.</p> : <div className="history-list">{note.history.map(version => <article className="history-item" key={version.id}><div className="history-item-info"><strong>{version.title || 'Sans titre'}</strong><span>{formatHistoryDate(version.savedAt)}</span><p>{version.isChecklist ? `${version.checklist?.length || 0} élément(s) de checklist` : (version.content || 'Note sans contenu')}</p></div><button className="history-restore-btn" onClick={() => note.restoreVersion(version)}>Restaurer</button></article>)}</div>}
        </div>
      </div>}

      <ConfirmDialog open={!!note.confirmAction} title={note.confirmAction?.title} message={note.confirmAction?.message} confirmLabel={note.confirmAction?.confirmLabel} danger={note.confirmAction?.danger} onConfirm={note.confirmAndRun} onCancel={note.cancelConfirm} />
    </div>
  )
}
