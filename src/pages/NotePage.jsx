import { useState } from 'react'
import { ArrowLeft, Pin, Archive, Trash2, ListChecks, AlignLeft, Tag, Copy, Share2 } from 'lucide-react'
import { useNote } from '../hooks/useNote'
import ColorPicker, { colorClass } from '../components/ColorPicker'
import ChecklistEditor from '../components/ChecklistEditor'
import LabelEditor from '../components/LabelEditor'
import ConfirmDialog from '../components/ConfirmDialog'
import './NotePage.css'

export default function NotePage() {
  const note = useNote()
  const [labelInputOpen, setLabelInputOpen] = useState(false)

  if (note.loading) return <div className="note-page loading">Chargement…</div>

  return (
    <div className={`note-page ${colorClass[note.color] || 'note-default'}`}>
      <header className="note-toolbar">
        <button className="icon-btn" onClick={note.save} title="Retour">
          <ArrowLeft size={22} />
        </button>
        <div className="toolbar-actions">
          <button
            className="icon-btn"
            onClick={note.isChecklist ? note.switchToText : note.switchToChecklist}
            title={note.isChecklist ? 'Passer en texte' : 'Passer en checklist'}
          >
            {note.isChecklist ? <AlignLeft size={20} /> : <ListChecks size={20} />}
          </button>
          <button
            className={`icon-btn ${labelInputOpen ? 'active' : ''}`}
            onClick={() => setLabelInputOpen(!labelInputOpen)}
            title="Labels"
          >
            <Tag size={20} />
          </button>
          <button
            className={`icon-btn ${note.isPinned ? 'active' : ''}`}
            onClick={() => note.setIsPinned(!note.isPinned)}
            title="Épingler"
          >
            <Pin size={20} fill={note.isPinned ? 'currentColor' : 'none'} />
          </button>
          <button
            className={`icon-btn ${note.isArchived ? 'active' : ''}`}
            onClick={note.askArchiveToggle}
            title="Archiver"
          >
            <Archive size={20} />
          </button>
          <button className="icon-btn" onClick={note.handleShare} title="Partager">
            <Share2 size={20} />
          </button>
          {!note.isNew && (
            <button className="icon-btn" onClick={note.askDuplicate} title="Dupliquer">
              <Copy size={20} />
            </button>
          )}
          {!note.isNew && (
            <button className="icon-btn" onClick={note.askDelete} title="Supprimer">
              <Trash2 size={20} />
            </button>
          )}
        </div>
      </header>

      <ColorPicker color={note.color} onChange={note.setColor} />

      <input
        className="note-title-input"
        placeholder="Titre"
        value={note.title}
        onChange={e => note.setTitle(e.target.value)}
        autoFocus={note.isNew}
      />

      <LabelEditor
        labels={note.labels}
        open={labelInputOpen}
        onAdd={note.addLabel}
        onRemove={note.removeLabel}
      />

      {note.isChecklist ? (
        <ChecklistEditor
          items={note.checklist}
          onAdd={note.addItem}
          onUpdateText={note.updateItemText}
          onToggle={note.toggleItem}
          onRemove={note.removeItem}
        />
      ) : (
        <textarea
          className="note-content-input"
          placeholder="Note"
          value={note.content}
          onChange={e => note.setContent(e.target.value)}
          rows={12}
        />
      )}

      <ConfirmDialog
        open={!!note.confirmAction}
        title={note.confirmAction?.title}
        message={note.confirmAction?.message}
        confirmLabel={note.confirmAction?.confirmLabel}
        danger={note.confirmAction?.danger}
        onConfirm={note.confirmAndRun}
        onCancel={note.cancelConfirm}
      />
    </div>
  )
}
