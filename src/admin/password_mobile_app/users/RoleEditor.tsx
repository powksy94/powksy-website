import { ROLES } from './roles'

interface Props {
  value: string
  isDirty: boolean
  saving: boolean
  onChange: (role: string) => void
  onSave: () => void
}

export default function RoleEditor({ value, isDirty, saving, onChange, onSave }: Props) {
  return (
    <div className="flex items-center gap-2">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="bg-gray-900 border border-white/10 text-gray-300 text-xs rounded-lg px-2 py-1.5 focus:outline-none focus:border-violet-500/50"
      >
        {ROLES.map(r => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>
      {isDirty && (
        <button
          onClick={onSave}
          disabled={saving}
          className="text-xs bg-violet-600/80 hover:bg-violet-600 transition-colors text-white px-3 py-1.5 rounded-lg disabled:opacity-50"
        >
          {saving ? '…' : 'Sauvegarder'}
        </button>
      )}
    </div>
  )
}
