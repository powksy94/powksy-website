import { useEffect, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { I18nContext } from './i18nContext'
import { DICTIONARIES } from './dictionaries'
import {
  DEFAULT_LOCALE,
  LANG_STORAGE_KEY,
  LOCALES,
  SITE_URL,
  localeFromPath,
  localePath,
} from './locales'

function readStoredLang(): string | null {
  try {
    return localStorage.getItem(LANG_STORAGE_KEY)
  } catch {
    return null
  }
}

function setMeta(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.name = name
    document.head.appendChild(el)
  }
  el.content = content
}

export default function I18nProvider({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const locale = localeFromPath(pathname)
  const t = DICTIONARIES[locale.code]

  // Language picked on a previous visit: only applied on /. Never redirect based on
  // the browser language, Google crawls in English and would never see the French page.
  useEffect(() => {
    if (pathname !== '/') return
    const stored = LOCALES.find(l => l.code === readStoredLang())
    if (stored && stored !== DEFAULT_LOCALE) navigate(localePath(stored) + hash, { replace: true })
  }, [pathname, hash, navigate])

  useEffect(() => {
    const html = document.documentElement
    html.lang = locale.code
    html.dir = locale.dir
    document.title = t.meta.title
    setMeta('description', t.meta.description)

    const links = [
      ...LOCALES.map(l => ({ rel: 'alternate', hreflang: l.code, href: SITE_URL + localePath(l) })),
      { rel: 'alternate', hreflang: 'x-default', href: SITE_URL + localePath(DEFAULT_LOCALE) },
      { rel: 'canonical', hreflang: '', href: SITE_URL + localePath(locale) },
    ].map(({ rel, hreflang, href }) => {
      const link = document.createElement('link')
      link.rel = rel
      if (hreflang) link.hreflang = hreflang
      link.href = href
      document.head.appendChild(link)
      return link
    })

    return () => {
      links.forEach(link => link.remove())
      html.dir = 'ltr'
    }
  }, [locale, t])

  return <I18nContext.Provider value={{ locale, t }}>{children}</I18nContext.Provider>
}
