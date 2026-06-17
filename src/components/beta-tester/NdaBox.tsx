import { useRef } from 'react'
import { NDA_TEXT } from './nda'

interface Props {
  scrolled: boolean
  accepted: boolean
  onScroll: () => void
  onAccept: (v: boolean) => void
}

export default function NdaBox({ scrolled, accepted, onScroll, onAccept }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const el = ref.current
    if (!el) return
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 8) onScroll()
  }

  return (
    <div className="pt-2">
      <p className="text-xs text-gray-500 mb-2">
        Contrat de confidentialité — faites défiler pour lire l'intégralité
      </p>
      <div
        ref={ref}
        onScroll={handleScroll}
        className="h-36 overflow-y-auto bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-xs text-gray-500 leading-relaxed font-mono whitespace-pre-wrap"
      >
        {NDA_TEXT}
      </div>
      <label className={`flex items-start gap-2.5 mt-3 select-none ${!scrolled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}>
        <input
          type="checkbox"
          disabled={!scrolled}
          checked={accepted}
          onChange={e => onAccept(e.target.checked)}
          className="mt-0.5 accent-violet-500 shrink-0"
        />
        <span className="text-xs text-gray-400">
          J'ai lu et j'accepte le contrat de confidentialité bêta-testeur Powksy.
        </span>
      </label>
      {!scrolled && (
        <p className="text-xs text-gray-700 mt-1 ml-5">Faites défiler le contrat jusqu'en bas pour débloquer.</p>
      )}
    </div>
  )
}
