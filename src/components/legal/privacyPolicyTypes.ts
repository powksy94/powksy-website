import type { ReactNode } from 'react'

export interface SectionTranslation {
  title: string
  content: ReactNode
}

export interface PolicyTranslation {
  docLabel?: string
  updatedLabel: string
  sections: Record<string, SectionTranslation>
}

export interface PrivacyTheme {
  bg: string
  headerGradientEnd: string
  headerBorder: string
  accent: string
  accentShadow: string
  subtitleText: string
  sectionBorder: string
  bodyText: string
  highlightBg: string
  highlightText: string
  footerText: string
}

export interface PrivacyPolicySection {
  icon: string
  title: string
  content: ReactNode
}

export interface PrivacyPolicyConfig {
  appName: string
  emoji: string
  docLabel?: string
  updatedLabel: string
  footerYear: number
  theme: PrivacyTheme
  sections: PrivacyPolicySection[]
}
