import { useState, useEffect, useRef } from 'react'
import { Smartphone, Clock, XCircle } from 'lucide-react'
import { requestAdminAuth, pollAuthStatus, parseJwtPayload } from './api'

interface Props {
  onAuthenticated: (token: string) => void
}

type Phase = 'idle' | 'waiting' | 'denied' | 'timeout' | 'error'

const POLL_INTERVAL = 3000
const MAX_SECONDS = 300

export default function AuthScreen({ onAuthenticated }: Props) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [timeLeft, setTimeLeft] = useState(MAX_SECONDS)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [email, setEmail] = useState('')
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
          parseJwtPayload(data.token)
          onAuthenticated(data.token)
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
      const { sessionId: id } = await requestAdminAuth(email)
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
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#08000E' }}>
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="text-center mb-10">
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #3D0070 0%, #7B00D4 100%)', boxShadow: '0 0 40px #7B00D433' }}
          >
            <span className="text-white font-bold text-3xl tracking-tight">N</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide">Nocturne</h1>
          <p className="text-sm mt-1" style={{ color: '#7B00D4' }}>Panel Admin — accès restreint</p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-6 border"
          style={{ backgroundColor: '#110018', borderColor: '#7B00D420' }}
        >
          {phase === 'idle' && (
            <div className="text-center">
              <p className="text-sm mb-6" style={{ color: '#9B7DB8' }}>
                Une notification push sera envoyée à votre téléphone pour valider l'accès via biométrie.
              </p>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && email && handleRequest()}
                placeholder="Email admin"
                className="w-full rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm mb-4 outline-none transition-colors"
                style={{ backgroundColor: '#1C0030', border: '1px solid #7B00D430' }}
                onFocus={e => (e.target.style.borderColor = '#7B00D4')}
                onBlur={e => (e.target.style.borderColor = '#7B00D430')}
              />
              <button
                onClick={handleRequest}
                disabled={!email}
                className="w-full text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #5500A0 0%, #7B00D4 100%)' }}
              >
                <Smartphone size={18} />
                Demander l'accès
              </button>
            </div>
          )}

          {phase === 'waiting' && (
            <div className="text-center">
              <div
                className="w-12 h-12 rounded-full border-2 border-t-transparent animate-spin mx-auto mb-4"
                style={{ borderColor: '#7B00D4', borderTopColor: 'transparent' }}
              />
              <p className="text-white font-medium mb-1">Notification envoyée</p>
              <p className="text-sm mb-4" style={{ color: '#9B7DB8' }}>
                Approuvez via biométrie sur votre téléphone…
              </p>
              <div className="flex items-center justify-center gap-2 text-sm" style={{ color: '#5B3D7A' }}>
                <Clock size={14} />
                <span>Expire dans {countdown}</span>
              </div>
              <button
                onClick={reset}
                className="mt-5 text-xs transition-colors"
                style={{ color: '#5B3D7A' }}
              >
                Annuler
              </button>
            </div>
          )}

          {(phase === 'denied' || phase === 'timeout' || phase === 'error') && (
            <div className="text-center">
              <XCircle className="mx-auto mb-3" size={36} style={{ color: '#C0446A' }} />
              <p className="text-white font-medium mb-1">
                {phase === 'denied' && 'Accès refusé'}
                {phase === 'timeout' && 'Délai expiré'}
                {phase === 'error' && 'Erreur réseau'}
              </p>
              <p className="text-sm mb-5" style={{ color: '#9B7DB8' }}>
                {phase === 'denied' && 'La demande a été refusée depuis le téléphone.'}
                {phase === 'timeout' && 'La session a expiré après 5 minutes.'}
                {phase === 'error' && 'Impossible de joindre le serveur.'}
              </p>
              <button
                onClick={reset}
                className="w-full text-sm py-2.5 px-4 rounded-xl transition-colors"
                style={{ border: '1px solid #7B00D440', color: '#C4A8E0' }}
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
