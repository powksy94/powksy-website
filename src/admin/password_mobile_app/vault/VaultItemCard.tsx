import { useState } from 'react'
import { FileKey, FileText, Eye, EyeOff, Download, Trash2, Copy, Check } from 'lucide-react'
import { VaultItem, deleteVaultItem } from '../api'
import { decryptBytes } from './crypto'

interface Props {
  item: VaultItem
  vaultKey: CryptoKey
  token: string
  onDeleted: (id: string) => void
}

function downloadBlob(bytes: Uint8Array, fileName: string) {
  const url = URL.createObjectURL(new Blob([bytes], { type: 'application/octet-stream' }))
  Object.assign(document.createElement('a'), { href: url, download: fileName }).click()
  URL.revokeObjectURL(url)
}

export default function VaultItemCard({ item, vaultKey, token, onDeleted }: Props) {
  const [revealed, setRevealed] = useState<string | null>(null)
  const [decrypting, setDecrypting] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleReveal = async () => {
    if (revealed !== null) { setRevealed(null); return }
    setDecrypting(true)
    try {
      const bytes = await decryptBytes(vaultKey, item.encryptedData, item.iv)
      setRevealed(new TextDecoder().decode(bytes))
    } catch {
      setRevealed('⚠ Déchiffrement impossible')
    } finally {
      setDecrypting(false)
    }
  }

  const handleDownload = async () => {
    setDecrypting(true)
    try {
      const bytes = await decryptBytes(vaultKey, item.encryptedData, item.iv)
      downloadBlob(bytes, item.fileName ?? item.name)
    } catch {
      alert('Déchiffrement impossible')
    } finally {
      setDecrypting(false)
    }
  }

  const handleDelete = async () => {
    setDeleting(true)
    try {
      await deleteVaultItem(token, item.id)
      onDeleted(item.id)
    } catch {
      alert('Suppression échouée')
      setDeleting(false)
    }
  }

  const handleCopy = () => {
    if (!revealed) return
    navigator.clipboard.writeText(revealed)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 bg-violet-600/15 rounded-xl flex items-center justify-center shrink-0">
            {item.type === 'file'
              ? <FileKey size={16} className="text-violet-400" />
              : <FileText size={16} className="text-violet-400" />}
          </div>
          <div className="min-w-0">
            <p className="text-white text-sm font-medium truncate">{item.name}</p>
            <p className="text-gray-600 text-xs">
              {item.type === 'file' && item.fileName ? item.fileName : 'note'} ·{' '}
              {new Date(item.createdAt).toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {item.type === 'note' ? (
            <button
              onClick={handleReveal}
              disabled={decrypting}
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors disabled:opacity-40"
            >
              {revealed !== null ? <EyeOff size={13} /> : <Eye size={13} />}
              {decrypting ? '…' : revealed !== null ? 'Masquer' : 'Afficher'}
            </button>
          ) : (
            <button
              onClick={handleDownload}
              disabled={decrypting}
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors disabled:opacity-40"
            >
              <Download size={13} />
              {decrypting ? '…' : 'Télécharger'}
            </button>
          )}
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="text-gray-600 hover:text-red-400 p-1.5 rounded-lg hover:bg-white/5 transition-colors disabled:opacity-40"
          >
            <Trash2 size={13} />
          </button>
        </div>
      </div>

      {revealed !== null && (
        <div className="mt-3 pt-3 border-t border-white/5 relative">
          <pre className="bg-gray-900 rounded-xl px-4 py-3 pr-10 text-xs text-gray-300 font-mono whitespace-pre-wrap break-all max-h-48 overflow-y-auto">
            {revealed}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-5 right-2 text-gray-500 hover:text-white transition-colors p-1 rounded"
          >
            {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
          </button>
        </div>
      )}
    </div>
  )
}
