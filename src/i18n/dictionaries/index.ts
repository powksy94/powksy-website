import type { LocaleCode } from '../locales'
import type { Dictionary } from '../types'
import { fr } from './fr'
import { en } from './en'
import { es } from './es'
import { ptPT } from './pt-PT'
import { ptBR } from './pt-BR'
import { ar } from './ar'
import { zhCN } from './zh-CN'
import { ja } from './ja'

export const DICTIONARIES: Record<LocaleCode, Dictionary> = {
  fr,
  en,
  es,
  'pt-PT': ptPT,
  'pt-BR': ptBR,
  ar,
  'zh-CN': zhCN,
  ja,
}
