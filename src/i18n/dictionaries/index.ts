import type { LocaleCode } from '../locales'
import type { Dictionary } from '../types'
import { fr } from './fr'
import { en } from './en'
import { es } from './es'
import { ptPT } from './pt-PT'
import { ptBR } from './pt-BR'

export const DICTIONARIES: Record<LocaleCode, Dictionary> = {
  fr,
  en,
  es,
  'pt-PT': ptPT,
  'pt-BR': ptBR,
}
