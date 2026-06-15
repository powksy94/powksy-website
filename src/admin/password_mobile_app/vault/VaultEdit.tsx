import { useState, useEffect, useRef } from 'react'
import { X, FileKey, FileText } from 'lucide-react'
import { updateVaultItem } from '../api'
import type { VaultItem } from '../api'
import { encryptBytes, decryptBytes } from './crypto'

interface Props {
  item: VaultItem
  vaultKey: CryptoKey
  token: string
  onUpdated: (item: VaultItem) => void
  onClose: () => void
}

export default function VaultEdit({ item, vaultKey, token, onUpdated, onClose }: Props) {
  const [name, setName] = useState(item.name)
  const [content, setContent] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [decrypting, setDecrypting] = useState(item.type === 'note')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  // Déchiffrer le contenu actuel de la note au montage
  useEffect(() => {
    if (item.type !== 'note') return
    decryptBytes(vaultKey, item.encryptedData, item.iv)
      .then(bytes => setContent(new TextDecoder().decode(bytes)))
      .catch(() => setContent(''))
      .finally(() => setDecrypting(false))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    setSaving(true)
    setError(null)
    try {
      let bytes: Uint8Array<ArrayBuffer>
      let fileName = item.fileName

      if (item.type === 'note') {
        bytes = new TextEncoder().encode(content)
      } else {
        if (file) {
          bytes = new Uint8Array(await file.arrayBuffer())
          fileName = file.name
        } else {
          // Pas de nouveau fichier — re-chiffrer les données existantes telles quelles
          bytes = await decryptBytes(vaultKey, item.encryptedData, item.iv)
        }
      }

      const { encryptedData, iv } = await encryptBytes(vaultKey, bytes)
      const updated = await updateVaultItem(token, item.id, {
        name: name.trim(),
        type: item.type,
        fileName,
        encryptedData,
        iv,
      })
      onUpdated(updated)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-violet-500/20 rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-violet-600/15 rounded-lg flex items-center justify-center">
            {item.type === 'file' ? <FileKey size={14} className="text-violet-400" /> : <FileText size={14} className="text-violet-400" />}
          </div>
          <p className="text-white text-sm font-medium">Modifier l'élément</p>
        </div>
        <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-300 transition-colors">
          <X size={16} />
        </button>
      </div>

      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        placeholder="Nom"
        className="w-full bg-gray-900 border border-white/10 text-white placeholder-gray-600 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-violet-500/50"
      />

      {item.type === 'note' ? (
        decrypting ? (
          <div className="text-center py-6 text-gray-500 text-sm">Déchiffrement…</div>
        ) : (
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={5}
            placeholder="Contenu"
            className="w-full bg-gray-900 border border-white/10 text-white placeholder-gray-600 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-violet-500/50 font-mono resize-none"
          />
        )
      ) : (
        <>
          <input ref={fileRef} type="file" className="hidden" onChange={e => setFile(e.target.files?.[0] ?? null)} />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="w-full border border-dashed border-white/20 hover:border-white/40 text-sm rounded-xl px-4 py-4 transition-colors text-gray-400 hover:text-gray-300 text-left"
          >
            {file
              ? <span className="text-white font-medium">{file.name}</span>
              : <span>Remplacer le fichier <span className="text-gray-600 ml-1">({item.fileName})</span></span>
            }
          </button>
        </>
      )}

      {error && <p className="text-red-400 text-xs">{error}</p>}

      <div className="flex gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-white text-sm transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={saving || decrypting}
          className="bg-violet-600 hover:bg-violet-500 disabled:opacity-40 transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-xl"
        >
          {saving ? 'Chiffrement…' : 'Enregistrer'}
        </button>
      </div>
    </form>
  )
}
