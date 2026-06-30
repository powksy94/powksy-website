import { buildLegalConfigs } from '../components/legal/buildLegalConfigs'
import { fr } from './translations/passwordApp/privacy.fr'
import { en } from './translations/passwordApp/privacy.en'
import { es } from './translations/passwordApp/privacy.es'

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
  { icon: '📋', key: 'introduction' },
  { icon: '📦', key: 'dataCollected' },
  { icon: '🚫', key: 'noData' },
  { icon: '🔒', key: 'security' },
  { icon: '🌐', key: 'thirdParty' },
  { icon: '🗄️', key: 'retention' },
  { icon: '⚖️', key: 'rights' },
  { icon: '📩', key: 'contact' },
]

export const passwordMobileAppPrivacyPolicies = buildLegalConfigs(base, sectionDefs, { fr, en, es })
