import { createContext } from 'react'
import type { LocaleInfo } from './locales'
import type { Dictionary } from './types'

export interface I18nValue {
  locale: LocaleInfo
  t: Dictionary
}

export const I18nContext = createContext<I18nValue | null>(null)
