import { buildLegalConfigs } from '../components/legal/buildLegalConfigs'
import { fr } from './translations/dailyFacts/terms.fr'
import { en } from './translations/dailyFacts/terms.en'
import { es } from './translations/dailyFacts/terms.es'

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
  { icon: '✅', key: 'acceptance' },
  { icon: '📋', key: 'objective' },
  { icon: '👤', key: 'account' },
  { icon: '💳', key: 'subscriptions' },
  { icon: '📢', key: 'ads' },
  { icon: '📚', key: 'content' },
  { icon: '⚠️', key: 'liability' },
  { icon: '🔗', key: 'thirdParty' },
  { icon: '🔐', key: 'termination' },
  { icon: '📝', key: 'changes' },
  { icon: '⚖️', key: 'law' },
  { icon: '📩', key: 'contact' },
]

export const dailyFactsTermsOfServices = buildLegalConfigs(base, sectionDefs, { fr, en, es })
