import { useState } from 'react'
import { Trash2, X } from 'lucide-react'

interface Props {
  itemName: string
  deleting: boolean
  onConfirm: () => void
  onCancel: () => void
}

export default function VaultDeleteDialog({ itemName, deleting, onConfirm, onCancel }: Props) {
  const [input, setInput] = useState('')
  const confirmed = input === itemName

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={e => { if (e.target === e.currentTarget) onCancel() }}
    >
      <div className="w-full max-w-md bg-gray-950 border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/15 rounded-xl flex items-center justify-center">
              <Trash2 size={18} className="text-red-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Supprimer l'élément</p>
              <p className="text-gray-500 text-xs mt-0.5">Cette action est irréversible</p>
            </div>
          </div>
          <button onClick={onCancel} className="text-gray-600 hover:text-gray-400 transition-colors">
            <X size={16} />
          </button>
        </div>

        <p className="text-gray-400 text-sm mb-4">
          Vous êtes sur le point de supprimer{' '}
          <span className="text-white font-medium font-mono">«&nbsp;{itemName}&nbsp;»</span>.
          Cette action ne peut pas être annulée.
        </p>

        <div className="bg-red-500/5 border border-red-500/20 rounded-xl px-4 py-3 mb-4">
          <p className="text-red-400 text-xs mb-2">
            Pour confirmer, tapez le nom de l'élément :
            <span className="font-mono font-semibold text-white ml-1">{itemName}</span>
          </p>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onPaste={e => e.preventDefault()}
            placeholder={itemName}
            autoFocus
            className="w-full bg-gray-900 border border-white/10 text-white placeholder-gray-700 text-sm font-mono rounded-lg px-3 py-2 focus:outline-none focus:border-red-500/50 transition-colors"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={onCancel}
            className="flex-1 text-sm px-4 py-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            disabled={!confirmed || deleting}
            className="flex-1 flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-xl bg-red-600/80 hover:bg-red-600 text-white font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Trash2 size={14} />
            {deleting ? 'Suppression…' : 'Supprimer définitivement'}
          </button>
        </div>
      </div>
    </div>
  )
}
