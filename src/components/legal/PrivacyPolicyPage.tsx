import type { CSSProperties, ReactNode } from 'react'
import './privacyPolicy.css'
import type { PrivacyPolicyConfig } from './privacyPolicyTypes'

export function Highlight({ children }: { children: ReactNode }) {
  return <div className="privacy-highlight">{children}</div>
}

export function BadgeYes({ children }: { children: ReactNode }) {
  return <span className="privacy-badge privacy-badge-yes">{children}</span>
}

export function BadgeNo({ children }: { children: ReactNode }) {
  return <span className="privacy-badge privacy-badge-no">{children}</span>
}

interface Props {
  config: PrivacyPolicyConfig
}

export default function PrivacyPolicyPage({ config }: Props) {
  const { theme } = config
  const vars = {
    '--privacy-bg': theme.bg,
    '--privacy-header-gradient-end': theme.headerGradientEnd,
    '--privacy-header-border': theme.headerBorder,
    '--privacy-accent': theme.accent,
    '--privacy-accent-shadow': theme.accentShadow,
    '--privacy-subtitle': theme.subtitleText,
    '--privacy-section-border': theme.sectionBorder,
    '--privacy-body-text': theme.bodyText,
    '--privacy-highlight-bg': theme.highlightBg,
    '--privacy-highlight-text': theme.highlightText,
    '--privacy-footer-text': theme.footerText,
  } as CSSProperties

  return (
    <div className="privacy-page" style={vars}>
      <header className="privacy-header">
        <h1>{config.emoji} {config.appName}</h1>
        <p>Politique de confidentialité &nbsp;·&nbsp; Dernière mise à jour : {config.updatedLabel}</p>
      </header>

      <main className="privacy-main">
        {config.sections.map(section => (
          <section key={section.title} className="privacy-section">
            <h2><span className="icon">{section.icon}</span>{section.title}</h2>
            {section.content}
          </section>
        ))}
      </main>

      <footer className="privacy-footer">
        <p>© {config.footerYear} {config.appName} &nbsp;·&nbsp; Tous droits réservés</p>
      </footer>
    </div>
  )
}
