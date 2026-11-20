import { buildLegalConfigs } from '../components/legal/buildLegalConfigs'
import { fr } from './translations/nocturne/terms.fr'
import { en } from './translations/nocturne/terms.en'
import { es } from './translations/nocturne/terms.es'
import { pt } from './translations/nocturne/terms.pt'
import { de } from './translations/nocturne/terms.de'

const base = {
  appName: 'Nocturne',
  emoji: '🌙',
  footerYear: 2026,
  theme: {
    bg: '#08000e',
    headerGradientEnd: '#1a0030',
    headerBorder: 'rgba(123, 0, 212, 0.25)',
    accent: '#b15cff',
    accentShadow: 'rgba(123, 0, 212, 0.5)',
    subtitleText: '#9a8aab',
    sectionBorder: 'rgba(123, 0, 212, 0.18)',
    bodyText: '#d4cce0',
    highlightBg: 'rgba(123, 0, 212, 0.1)',
    highlightText: '#d7baf5',
    footerText: '#6e5d80',
  },
} as const

const sectionDefs = [
  { icon: '📋', key: 'objective' },
  { icon: '✅', key: 'registration' },
  { icon: '🤖', key: 'fraud' },
  { icon: '🚫', key: 'prohibitions' },
  { icon: '🛡️', key: 'reporting' },
  { icon: '💳', key: 'subscriptions' },
  { icon: '⚠️', key: 'liability' },
  { icon: '🔐', key: 'account' },
  { icon: '⚖️', key: 'law' },
  { icon: '📩', key: 'contact' },
]

export const nocturneTermsOfServices = buildLegalConfigs(base, sectionDefs, { fr, en, es, pt, de })
