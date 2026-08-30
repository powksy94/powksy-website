import { buildLegalConfigs } from '../components/legal/buildLegalConfigs'
import { fr } from './translations/nocturne/deleteAccount.fr'
import { en } from './translations/nocturne/deleteAccount.en'

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
  { icon: '📱', key: 'appMethod' },
  { icon: '🗑️', key: 'dataDeleted' },
  { icon: '📧', key: 'emailMethod' },
]

export const nocturneDeleteAccountConfigs = buildLegalConfigs(base, sectionDefs, { fr, en })
