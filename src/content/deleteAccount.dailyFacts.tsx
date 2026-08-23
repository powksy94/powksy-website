import { buildLegalConfigs } from '../components/legal/buildLegalConfigs'
import { fr } from './translations/dailyFacts/deleteAccount.fr'
import { en } from './translations/dailyFacts/deleteAccount.en'
import { es } from './translations/dailyFacts/deleteAccount.es'

const base = {
  appName: 'Daily Facts',
  emoji: '💡',
  footerYear: 2026,
  theme: {
    bg: '#070b18',
    headerGradientEnd: '#131b3a',
    headerBorder: 'rgba(79, 140, 255, 0.25)',
    accent: '#4f8cff',
    accentShadow: 'rgba(79, 140, 255, 0.5)',
    subtitleText: '#8a93b8',
    sectionBorder: 'rgba(79, 140, 255, 0.18)',
    bodyText: '#d2d6e8',
    highlightBg: 'rgba(79, 140, 255, 0.1)',
    highlightText: '#bcd0ff',
    footerText: '#5d6690',
  },
} as const

const sectionDefs = [
  { icon: '📱', key: 'appMethod' },
  { icon: '📧', key: 'emailMethod' },
  { icon: '🗑️', key: 'dataDeleted' },
]

export const dailyFactsDeleteAccountConfigs = buildLegalConfigs(base, sectionDefs, { fr, en, es })
