const COLORS = [
  { key: 'DEFAULT', label: 'Blanc' },
  { key: 'RED', label: 'Rouge' },
  { key: 'ORANGE', label: 'Orange' },
  { key: 'YELLOW', label: 'Jaune' },
  { key: 'GREEN', label: 'Vert' },
  { key: 'TEAL', label: 'Turquoise' },
  { key: 'BLUE', label: 'Bleu' },
  { key: 'DARK_BLUE', label: 'Bleu foncé' },
  { key: 'PURPLE', label: 'Violet' },
  { key: 'PINK', label: 'Rose' },
  { key: 'BROWN', label: 'Marron' },
  { key: 'GRAY', label: 'Gris' }
]

export const colorClass = {
  DEFAULT: 'note-default',
  RED: 'note-red',
  ORANGE: 'note-orange',
  YELLOW: 'note-yellow',
  GREEN: 'note-green',
  TEAL: 'note-teal',
  BLUE: 'note-blue',
  DARK_BLUE: 'note-darkblue',
  PURPLE: 'note-purple',
  PINK: 'note-pink',
  BROWN: 'note-brown',
  GRAY: 'note-gray'
}

export default function ColorPicker({ color, onChange }) {
  return (
    <div className="color-picker">
      {COLORS.map(c => (
        <button
          key={c.key}
          className={`color-dot ${colorClass[c.key]} ${color === c.key ? 'selected' : ''}`}
          onClick={() => onChange(c.key)}
          title={c.label}
        />
      ))}
    </div>
  )
}
