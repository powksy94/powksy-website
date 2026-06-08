import { useState, useRef } from 'react'
import { X, FileKey, FileText } from 'lucide-react'
import { addVaultItem } from '../api'
import type { VaultItem } from '../api'
import { encryptBytes } from './crypto'

interface Props {
  vaultKey: CryptoKey
  token: string
  onAdded: (item: VaultItem) => void
  onClose: () => void
}

type AddType = 'note' | 'file'

export default function VaultAdd({ vaultKey, token, onAdded, onClose }: Props) {
  const [type, setType] = useState<AddType>('note')
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [adding, setAdding] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    setAdding(true)
    setError(null)
    try {
      let bytes: Uint8Array<ArrayBuffer>
      let fileName: string | undefined
      if (type === 'note') {
        bytes = new TextEncoder().encode(content)
      } else {
        if (!file) { setError('Sélectionnez un fichier'); setAdding(false); return }
        bytes = new Uint8Array(await file.arrayBuffer())
        fileName = file.name
      }
      const { encryptedData, iv } = await encryptBytes(vaultKey, bytes)
      const item = await addVaultItem(token, { name: name.trim(), type, fileName, encryptedData, iv })
      onAdded(item)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setAdding(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 border border-violet-500/20 rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-white text-sm font-medium">Nouvel élément</p>
        <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-300 transition-colors">
          <X size={16} />
        </button>
      </div>

      <div className="flex gap-2">
        {(['note', 'file'] as AddType[]).map(t => (
          <button
            key={t} type="button" onClick={() => setType(t)}
            className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border transition-colors ${
              type === t
                ? 'border-violet-500/50 bg-violet-500/10 text-violet-300'
                : 'border-white/10 text-gray-500 hover:text-gray-300'
            }`}
          >
            {t === 'note' ? <FileText size={14} /> : <FileKey size={14} />}
            {t === 'note' ? 'Note / credential' : 'Fichier (.jks, .p12…)'}
          </button>
        ))}
      </div>

      <input
        type="text" value={name} onChange={e => setName(e.target.value)} required
        placeholder="Nom (ex : Keystore Production)"
        className="w-full bg-gray-900 border border-white/10 text-white placeholder-gray-600 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-violet-500/50"
      />

      {type === 'note' ? (
        <textarea
          value={content} onChange={e => setContent(e.target.value)} required rows={4}
          placeholder="Contenu (mot de passe, API key, alias, notes…)"
          className="w-full bg-gray-900 border border-white/10 text-white placeholder-gray-600 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-violet-500/50 font-mono resize-none"
        />
      ) : (
        <>
          <input ref={fileRef} type="file" className="hidden" onChange={e => setFile(e.target.files?.[0] ?? null)} />
          <button
            type="button" onClick={() => fileRef.current?.click()}
            className="w-full border border-dashed border-white/20 hover:border-white/40 text-sm rounded-xl px-4 py-4 transition-colors text-gray-400 hover:text-gray-300"
          >
            {file ? <span className="text-white font-medium">{file.name}</span> : 'Sélectionner un fichier'}
          </button>
        </>
      )}

      {error && <p className="text-red-400 text-xs">{error}</p>}

      <button
        type="submit" disabled={adding}
        className="bg-violet-600 hover:bg-violet-500 disabled:opacity-40 transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-xl"
      >
        {adding ? 'Chiffrement…' : 'Ajouter au vault'}
      </button>
    </form>
  )
}
