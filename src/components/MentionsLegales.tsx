import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import { LEGAL_ADDRESS, LEGAL_SIRET } from '../legal-info'
import { useI18n } from '../i18n/useI18n'
import LanguageSwitcher from './LanguageSwitcher'

interface Props {
  onClose: () => void
}

const EMAIL = 'matthieuuzan@gmail.com'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
        {title}
      </h2>
      {children}
    </section>
  )
}

function EmailLink() {
  return (
    <a href={`mailto:${EMAIL}`} className="text-white hover:text-gray-300 transition-colors">
      {EMAIL}
    </a>
  )
}

export default function MentionsLegales({ onClose }: Props) {
  const { locale, t } = useI18n()
  const l = t.legalNotice

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold tracking-tight">{l.title}</h1>
          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            <button
              onClick={() => { onClose(); window.scrollTo(0, 0) }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <X size={18} />
              {l.back}
            </button>
          </div>
        </div>

        <div className="space-y-10 text-gray-300 text-sm leading-relaxed">

          <Section title={l.publisher.title}>
            <p>{l.publisher.intro}</p>
            <ul className="mt-3 space-y-1">
              <li><span className="text-gray-500">{l.publisher.name}</span> <span className="text-white font-medium">Matthieu Uzan</span></li>
              <li><span className="text-gray-500">{l.publisher.status}</span> {l.publisher.statusValue}</li>
              <li>
                <span className="text-gray-500">{l.publisher.address}</span>{' '}
                <span className="text-white">{LEGAL_ADDRESS}</span>
              </li>
              <li>
                <span className="text-gray-500">{l.publisher.siret}</span>{' '}
                <span className="text-white">{LEGAL_SIRET}</span>
              </li>
              <li>
                <span className="text-gray-500">{l.publisher.email}</span>{' '}
                <EmailLink />
              </li>
            </ul>
          </Section>

          <Section title={l.director.title}>
            <p>Matthieu Uzan</p>
          </Section>

          <Section title={l.hosting.title}>
            <p>{l.hosting.intro}</p>
            <ul className="mt-3 space-y-1">
              <li><span className="text-gray-500">{l.hosting.company}</span> <span className="text-white font-medium">Railway, Inc.</span></li>
              <li><span className="text-gray-500">{l.hosting.address}</span> {l.hosting.addressValue}</li>
              <li>
                <span className="text-gray-500">{l.hosting.website}</span>{' '}
                <a
                  href="https://railway.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  railway.app
                </a>
              </li>
            </ul>
          </Section>

          <Section title={l.ip.title}>
            {l.ip.paragraphs.map((text, i) => (
              <p key={i} className={i > 0 ? 'mt-3' : undefined}>{text}</p>
            ))}
          </Section>

          <Section title={l.data.title}>
            <p>{l.data.noCollection}</p>
            <p className="mt-3">
              {l.data.rights}{' '}
              <EmailLink />
            </p>
          </Section>

          <Section title={l.cookies.title}>
            <p>{l.cookies.text}</p>
          </Section>

          <Section title={l.liability.title}>
            {l.liability.paragraphs.map((text, i) => (
              <p key={i} className={i > 0 ? 'mt-3' : undefined}>{text}</p>
            ))}
          </Section>

          <Section title={l.law.title}>
            <p>{l.law.text}</p>
          </Section>

          {/* Footer note */}
          <p className="text-gray-600 text-xs pt-4 border-t border-white/5">
            {l.updated} {new Date().toLocaleDateString(locale.code, { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  )
}
