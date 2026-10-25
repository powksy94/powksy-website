export type LocaleCode = 'fr' | 'en' | 'es' | 'pt-PT' | 'pt-BR'

export interface LocaleInfo {
  code: LocaleCode
  /** URL prefix ('' for the default locale, served on /) */
  path: string
  /** Language name written in that language */
  label: string
  short: string
  dir: 'ltr' | 'rtl'
}

// To add a language: add it here and to LocaleCode, then create its folder in dictionaries/.
// A right-to-left language (Arabic, Hebrew...) only needs dir: 'rtl', for example:
// { code: 'ar', path: 'ar', label: 'العربية', short: 'AR', dir: 'rtl' }
export const LOCALES: LocaleInfo[] = [
  { code: 'fr', path: '', label: 'Français', short: 'FR', dir: 'ltr' },
  { code: 'en', path: 'en', label: 'English', short: 'EN', dir: 'ltr' },
  { code: 'es', path: 'es', label: 'Español', short: 'ES', dir: 'ltr' },
  { code: 'pt-PT', path: 'pt-pt', label: 'Português (Portugal)', short: 'PT-PT', dir: 'ltr' },
  { code: 'pt-BR', path: 'pt-br', label: 'Português (Brasil)', short: 'PT-BR', dir: 'ltr' },
]

export const DEFAULT_LOCALE = LOCALES[0]

export const SITE_URL = 'https://powksy.com'

export const LANG_STORAGE_KEY = 'powksy_lang'

export function localeFromPath(pathname: string): LocaleInfo {
  const segment = pathname.split('/')[1]?.toLowerCase() ?? ''
  return LOCALES.find(l => l.path !== '' && l.path === segment) ?? DEFAULT_LOCALE
}

export function localePath(locale: LocaleInfo): string {
  return locale.path ? `/${locale.path}` : '/'
}
