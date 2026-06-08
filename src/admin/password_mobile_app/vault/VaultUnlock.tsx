import { useState, useEffect } from 'react'
import { Vault, Clock, XCircle } from 'lucide-react'
import { requestVaultUnlock, pollVaultUnlockStatus } from '../api'

interface Props {
  token: string
  onUnlocked: (key: CryptoKey) => void
}

type Phase = 'idle' | 'waiting' | 'denied' | 'timeout' | 'expired' | 'error'

const MAX_SECONDS = 300
const POLL_MS = 3000

export default function VaultUnlock({ token, onUnlocked }: Props) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState(MAX_SECONDS)

  useEffect(() => {
    if (!sessionId) return
    let cancelled = false
    const controller = new AbortController()

    const countdown = setInterval(() => setTimeLeft(t => Math.max(0, t - 1)), 1000)

    const poll = async () => {
      if (cancelled) return
      try {
        const data = await pollVaultUnlockStatus(token, sessionId, controller.signal)
        if (data.status === 'approved' && data.vaultKey) {
          const rawKey = Uint8Array.from(atob(data.vaultKey), c => c.charCodeAt(0))
          const cryptoKey = await crypto.subtle.importKey(
            'raw', rawKey, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']
          )
          onUnlocked(cryptoKey)
          return
        }
        if (data.status === 'denied') { setPhase('denied'); return }
        if (data.status === 'expired') { setPhase('expired'); return }
      } catch (e) {
        if ((e as Error).name === 'AbortError') return
      }
      if (!cancelled) setTimeout(poll, POLL_MS)
    }

    const timeout = setTimeout(() => {
      cancelled = true
      clearInterval(countdown)
      setPhase('timeout')
    }, MAX_SECONDS * 1000)

    setTimeout(poll, POLL_MS)
    return () => { cancelled = true; clearInterval(countdown); clearTimeout(timeout); controller.abort() }
  }, [sessionId])

  const handleRequest = async () => {
    setPhase('idle')
    setTimeLeft(MAX_SECONDS)
    try {
      const { sessionId: id } = await requestVaultUnlock(token)
      setSessionId(id)
      setPhase('waiting')
    } catch {
      setPhase('error')
    }
  }

  const reset = () => { setSessionId(null); setPhase('idle'); setTimeLeft(MAX_SECONDS) }

  const mins = Math.floor(timeLeft / 60)
  const secs = timeLeft % 60

  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-full max-w-sm">
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-violet-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Vault className="text-violet-400" size={26} />
          </div>
          <h2 className="text-xl font-semibold text-white">Vault chiffré</h2>
          <p className="text-gray-500 text-sm mt-1">Validation biométrique requise</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          {phase === 'idle' && (
            <div className="text-center space-y-4">
              <p className="text-gray-400 text-sm">
                Une notification sera envoyée sur votre téléphone pour déverrouiller le vault.
              </p>
              <button
                onClick={handleRequest}
                className="w-full bg-violet-600 hover:bg-violet-500 transition-colors text-white text-sm font-medium py-3 rounded-xl"
              >
                Déverrouiller le vault
              </button>
            </div>
          )}

          {phase === 'waiting' && (
            <div className="text-center space-y-3">
              <div className="w-10 h-10 rounded-full border-2 border-violet-500 border-t-transparent animate-spin mx-auto" />
              <p className="text-white font-medium text-sm">Notification envoyée</p>
              <p className="text-gray-400 text-sm">Approuvez depuis votre téléphone…</p>
              <div className="flex items-center justify-center gap-1.5 text-gray-600 text-xs">
                <Clock size={12} />
                {mins}:{secs.toString().padStart(2, '0')}
              </div>
              <button onClick={reset} className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                Annuler
              </button>
            </div>
          )}

          {(phase === 'denied' || phase === 'timeout' || phase === 'expired' || phase === 'error') && (
            <div className="text-center space-y-4">
              <XCircle className="text-red-400 mx-auto" size={32} />
              <p className="text-white font-medium text-sm">
                {phase === 'denied' ? 'Accès refusé' : (phase === 'timeout' || phase === 'expired') ? 'Délai expiré' : 'Erreur réseau'}
              </p>
              <button
                onClick={reset}
                className="w-full border border-white/10 hover:border-white/20 text-gray-300 text-sm py-2.5 rounded-xl transition-colors"
              >
                Réessayer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
