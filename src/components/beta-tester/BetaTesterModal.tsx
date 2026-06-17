import { useState, useEffect } from 'react'
import { X, FlaskConical } from 'lucide-react'
import emailjs from '@emailjs/browser'
import NdaBox from './NdaBox'
import SuccessScreen from './SuccessScreen'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID   as string
const TPL_NOTIFY  = import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFY  as string
const TPL_CONFIRM = import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRM as string
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY   as string

interface Props {
  appName: string
  onClose: () => void
}

type Device = 'iOS' | 'Android' | 'Les deux'

export default function BetaTesterModal({ appName, onClose }: Props) {
  const [success, setSuccess] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName,  setLastName]  = useState('')
  const [email,     setEmail]     = useState('')
  const [device,    setDevice]    = useState<Device>('Android')
  const [message,   setMessage]   = useState('')
  const [ndaScrolled, setNdaScrolled] = useState(false)
  const [ndaAccepted, setNdaAccepted] = useState(false)
  const [sending,   setSending]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)

  const canSubmit = Boolean(firstName && lastName && email && ndaAccepted && !sending)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setSending(true)
    setError(null)
    const params = { app_name: appName, first_name: firstName, last_name: lastName, tester_email: email, device, message }
    try {
      await emailjs.send(SERVICE_ID, TPL_NOTIFY,  params, PUBLIC_KEY)
      await emailjs.send(SERVICE_ID, TPL_CONFIRM, params, PUBLIC_KEY)
      setSuccess(true)
    } catch {
      setError('Envoi échoué. Vérifiez votre connexion et réessayez.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="w-full max-w-lg bg-gray-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-violet-600/20 rounded-xl flex items-center justify-center">
              <FlaskConical size={18} className="text-violet-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Devenir bêta-testeur</p>
              <p className="text-gray-500 text-xs mt-0.5">{appName}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-400 transition-colors">
            <X size={16} />
          </button>
        </div>

        {success ? (
          <SuccessScreen email={email} onClose={onClose} />
        ) : (
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-5 space-y-4">

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Prénom *</label>
                <input type="text" required value={firstName} onChange={e => setFirstName(e.target.value)}
                  placeholder="Jean"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-700 text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-violet-500/50 transition-colors" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Nom *</label>
                <input type="text" required value={lastName} onChange={e => setLastName(e.target.value)}
                  placeholder="Dupont"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-700 text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-violet-500/50 transition-colors" />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Email *</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="jean@example.com"
                className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-700 text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-violet-500/50 transition-colors" />
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-2 block">Appareil *</label>
              <div className="flex gap-2">
                {(['iOS', 'Android', 'Les deux'] as Device[]).map(d => (
                  <button key={d} type="button" onClick={() => setDevice(d)}
                    className={`flex-1 text-xs py-2 rounded-xl border transition-colors font-medium ${
                      device === d
                        ? 'border-violet-500/50 bg-violet-500/10 text-violet-300'
                        : 'border-white/10 text-gray-500 hover:text-gray-300'
                    }`}>
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Message <span className="text-gray-700">(optionnel)</span></label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={2}
                placeholder="Votre motivation, expérience de test…"
                className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-700 text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-violet-500/50 transition-colors resize-none" />
            </div>

            <NdaBox
              scrolled={ndaScrolled}
              accepted={ndaAccepted}
              onScroll={() => setNdaScrolled(true)}
              onAccept={setNdaAccepted}
            />

            <button type="submit" disabled={!canSubmit}
              className="w-full bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-white text-sm font-medium py-3 rounded-xl">
              {sending ? 'Envoi en cours…' : 'Soumettre ma candidature'}
            </button>

            {error && <p className="text-red-400 text-xs text-center">{error}</p>}

          </form>
        )}
      </div>
    </div>
  )
}
