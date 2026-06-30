import type { PrivacyPolicyConfig, PrivacyTheme, PolicyTranslation } from './privacyPolicyTypes'

interface PolicyBase {
  appName: string
  emoji: string
  footerYear: number
  theme: PrivacyTheme
}

interface SectionDef {
  icon: string
  key: string
}

export function buildLegalConfigs(
  base: PolicyBase,
  sectionDefs: SectionDef[],
  translations: Record<string, PolicyTranslation>,
): Record<string, PrivacyPolicyConfig> {
  return Object.fromEntries(
    Object.entries(translations).map(([lang, t]) => [
      lang,
      {
        ...base,
        docLabel: t.docLabel,
        updatedLabel: t.updatedLabel,
        sections: sectionDefs.map(def => ({
          icon: def.icon,
          title: t.sections[def.key].title,
          content: t.sections[def.key].content,
        })),
      } satisfies PrivacyPolicyConfig,
    ]),
  )
}
