import { CheckCircle } from 'lucide-react'

interface Props {
  email: string
  onClose: () => void
}

export default function SuccessScreen({ email, onClose }: Props) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 text-center">
      <div className="w-16 h-16 bg-green-500/15 rounded-full flex items-center justify-center mb-5">
        <CheckCircle size={32} className="text-green-400" />
      </div>
      <p className="text-white font-semibold text-lg mb-2">Candidature envoyée !</p>
      <p className="text-gray-400 text-sm leading-relaxed mb-1">
        Un email de confirmation vous a été envoyé à{' '}
        <span className="text-white font-medium">{email}</span>.
      </p>
      <p className="text-gray-500 text-xs mb-8">
        Nous reviendrons vers vous dès que les accès bêta seront disponibles.
      </p>
      <button
        onClick={onClose}
        className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition-colors"
      >
        Fermer
      </button>
    </div>
  )
}
