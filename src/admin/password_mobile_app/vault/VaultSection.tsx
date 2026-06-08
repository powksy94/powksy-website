import { useState, useEffect } from 'react'
import { Plus, Lock, Vault } from 'lucide-react'
import { getVault } from '../api'
import type { VaultItem } from '../api'
import VaultUnlock from './VaultUnlock'
import VaultAdd from './VaultAdd'
import VaultItemCard from './VaultItemCard'

interface Props {
  token: string
}

export default function VaultSection({ token }: Props) {
  const [vaultKey, setVaultKey] = useState<CryptoKey | null>(null)
  const [items, setItems] = useState<VaultItem[]>([])
  const [loading, setLoading] = useState(false)
  const [showAdd, setShowAdd] = useState(false)

  useEffect(() => {
    if (!vaultKey) return
    const controller = new AbortController()
    let cancelled = false

    const load = async () => {
      setLoading(true)
      try {
        const data = await getVault(token, controller.signal)
        if (!cancelled) setItems(data.items)
      } catch {
        // ignore — abandon silencieux si la requête échoue ou est annulée
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()

    return () => { cancelled = true; controller.abort() }
  }, [vaultKey, token])

  if (!vaultKey) return <VaultUnlock token={token} onUnlocked={setVaultKey} />

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Vault size={14} />
          {loading ? 'Chargement…' : `${items.length} élément${items.length !== 1 ? 's' : ''}`}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setVaultKey(null)}
            className="flex items-center gap-1.5 text-gray-500 hover:text-gray-300 text-sm px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Lock size={13} /> Verrouiller
          </button>
          <button
            onClick={() => setShowAdd(v => !v)}
            className="flex items-center gap-1.5 bg-violet-600/80 hover:bg-violet-600 text-white text-sm px-3 py-2 rounded-lg transition-colors"
          >
            <Plus size={14} /> Ajouter
          </button>
        </div>
      </div>

      {showAdd && (
        <VaultAdd
          vaultKey={vaultKey}
          token={token}
          onAdded={item => { setItems(prev => [item, ...prev]); setShowAdd(false) }}
          onClose={() => setShowAdd(false)}
        />
      )}

      {!loading && items.length === 0 && !showAdd && (
        <div className="text-center py-14 text-gray-600">
          <Lock size={28} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">Vault vide — ajoutez votre premier élément.</p>
        </div>
      )}

      <div className="space-y-3">
        {items.map(item => (
          <VaultItemCard
            key={item.id}
            item={item}
            vaultKey={vaultKey}
            token={token}
            onDeleted={id => setItems(prev => prev.filter(i => i.id !== id))}
          />
        ))}
      </div>
    </div>
  )
}
