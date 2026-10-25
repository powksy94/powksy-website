import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { LANG_STORAGE_KEY, LOCALES, localePath, type LocaleInfo } from '../i18n/locales'
import { useI18n } from '../i18n/useI18n'

interface Props {
  /** 'dropdown' for the desktop navbar, 'list' for the mobile menu */
  variant?: 'dropdown' | 'list'
  onSelect?: () => void
}

export default function LanguageSwitcher({ variant = 'dropdown', onSelect }: Props) {
  const { locale, t } = useI18n()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const select = (l: LocaleInfo) => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, l.code)
    } catch {
      // Storage unavailable (private mode): the choice simply isn't remembered
    }
    setOpen(false)
    onSelect?.()
    if (l !== locale) navigate(localePath(l) + window.location.hash)
  }

  if (variant === 'list') {
    return (
      <div className="flex flex-col gap-2">
        <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500">
          <Globe size={14} /> {t.header.language}
        </p>
        <div className="flex flex-wrap gap-2">
          {LOCALES.map(l => (
            <button
              key={l.code}
              lang={l.code}
              dir={l.dir}
              onClick={() => select(l)}
              aria-current={l === locale ? 'true' : undefined}
              className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                l === locale
                  ? 'border-violet-500/60 bg-violet-600/20 text-white'
                  : 'border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={t.header.language}
        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
      >
        <Globe size={16} />
        <span>{locale.short}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul className="absolute end-0 top-full mt-3 min-w-52 bg-gray-900 border border-white/10 rounded-xl p-1.5 shadow-xl">
          {LOCALES.map(l => (
            <li key={l.code}>
              <button
                lang={l.code}
                dir={l.dir}
                onClick={() => select(l)}
                aria-current={l === locale ? 'true' : undefined}
                className={`w-full flex items-center justify-between gap-4 text-start text-sm px-3 py-2 rounded-lg transition-colors ${
                  l === locale ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {l.label}
                {l === locale && <Check size={14} className="text-violet-400" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
