import { buildLegalConfigs } from '../components/legal/buildLegalConfigs'
import { fr } from './translations/passwordApp/terms.fr'
import { en } from './translations/passwordApp/terms.en'
import { es } from './translations/passwordApp/terms.es'

const base = {
  appName: 'Password Mobile App',
  emoji: '🔐',
  footerYear: 2026,
  theme: {
    bg: '#0a0f1e',
    headerGradientEnd: '#0d1b3e',
    headerBorder: 'rgba(0, 255, 255, 0.2)',
    accent: '#00e5ff',
    accentShadow: 'rgba(0, 229, 255, 0.4)',
    subtitleText: '#90a4ae',
    sectionBorder: 'rgba(0, 229, 255, 0.12)',
    bodyText: '#cfd8dc',
    highlightBg: 'rgba(0, 229, 255, 0.07)',
    highlightText: '#b2ebf2',
    footerText: '#546e7a',
  },
} as const

const sectionDefs = [
  { icon: '📋', key: 'objective' },
  { icon: '✅', key: 'conditions' },
  { icon: '🗝️', key: 'masterPassword' },
  { icon: '🛡️', key: 'security' },
  { icon: '📤', key: 'export' },
  { icon: '📢', key: 'ads' },
  { icon: '⚠️', key: 'liability' },
  { icon: '🔐', key: 'account' },
  { icon: '⚖️', key: 'law' },
  { icon: '📩', key: 'contact' },
]

export const passwordMobileAppTermsOfServices = buildLegalConfigs(base, sectionDefs, { fr, en, es })
