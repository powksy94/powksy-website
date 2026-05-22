import { useState, useEffect, useRef } from 'react'
import { Smartphone, Clock, XCircle, ShieldCheck } from 'lucide-react'
import { requestAdminAuth, pollAuthStatus, parseJwtPayload } from './api'

interface Props {
  onAuthenticated: (token: string, role: string) => void
}

type Phase = 'idle' | 'waiting' | 'denied' | 'timeout' | 'error'

const POLL_INTERVAL = 3000
const MAX_SECONDS = 300

export default function AuthScreen({ onAuthenticated }: Props) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [timeLeft, setTimeLeft] = useState(MAX_SECONDS)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    if (!sessionId) return

    const controller = new AbortController()
    abortRef.current = controller
    let cancelled = false

    const countdown = setInterval(() => {
      setTimeLeft(t => (t > 0 ? t - 1 : 0))
    }, 1000)

    const poll = async () => {
      if (cancelled) return
      try {
        const data = await pollAuthStatus(sessionId, controller.signal)
        if (data.status === 'approved' && data.token) {
          const payload = parseJwtPayload(data.token)
          onAuthenticated(data.token, String(payload.role ?? 'viewer'))
          return
        }
        if (data.status === 'denied') {
          setPhase('denied')
          return
        }
      } catch (e) {
        if ((e as Error).name === 'AbortError') return
      }
      if (!cancelled) setTimeout(poll, POLL_INTERVAL)
    }

    const timeout = setTimeout(() => {
      cancelled = true
      clearInterval(countdown)
      setPhase('timeout')
    }, MAX_SECONDS * 1000)

    setTimeout(poll, POLL_INTERVAL)

    return () => {
      cancelled = true
      clearInterval(countdown)
      clearTimeout(timeout)
      controller.abort()
    }
  }, [sessionId])

  const handleRequest = async () => {
    setPhase('idle')
    setTimeLeft(MAX_SECONDS)
    try {
      const { sessionId: id } = await requestAdminAuth()
      setSessionId(id)
      setPhase('waiting')
    } catch {
      setPhase('error')
    }
  }

  const reset = () => {
    abortRef.current?.abort()
    setSessionId(null)
    setPhase('idle')
    setTimeLeft(MAX_SECONDS)
  }

  const mins = Math.floor(timeLeft / 60)
  const secs = timeLeft % 60
  const countdown = `${mins}:${secs.toString().padStart(2, '0')}`

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-violet-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="text-violet-400" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-white">Panel Admin</h1>
          <p className="text-gray-500 text-sm mt-1">Powksy — accès restreint</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

          {phase === 'idle' && (
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-6">
                Une notification push sera envoyée sur votre téléphone admin pour valider l'accès.
              </p>
              <button
                onClick={handleRequest}
                className="w-full bg-violet-600 hover:bg-violet-500 transition-colors text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2"
              >
                <Smartphone size={18} />
                Demander l'accès
              </button>
            </div>
          )}

          {phase === 'waiting' && (
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-violet-500 border-t-transparent animate-spin mx-auto mb-4" />
              <p className="text-white font-medium mb-1">Notification envoyée</p>
              <p className="text-gray-400 text-sm mb-4">
                Approuvez la demande sur votre téléphone…
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <Clock size={14} />
                <span>Expire dans {countdown}</span>
              </div>
              <button
                onClick={reset}
                className="mt-5 text-gray-600 hover:text-gray-400 text-xs transition-colors"
              >
                Annuler
              </button>
            </div>
          )}

          {(phase === 'denied' || phase === 'timeout' || phase === 'error') && (
            <div className="text-center">
              <XCircle className="text-red-400 mx-auto mb-3" size={36} />
              <p className="text-white font-medium mb-1">
                {phase === 'denied' && 'Accès refusé'}
                {phase === 'timeout' && 'Délai expiré'}
                {phase === 'error' && 'Erreur réseau'}
              </p>
              <p className="text-gray-400 text-sm mb-5">
                {phase === 'denied' && 'La demande a été refusée depuis le téléphone.'}
                {phase === 'timeout' && 'La session a expiré après 5 minutes.'}
                {phase === 'error' && 'Impossible de joindre le serveur.'}
              </p>
              <button
                onClick={reset}
                className="w-full border border-white/10 hover:border-white/20 text-gray-300 text-sm py-2.5 px-4 rounded-xl transition-colors"
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
