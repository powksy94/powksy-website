import PrivacyPolicyPage from './PrivacyPolicyPage'
import type { PrivacyPolicyConfig } from './privacyPolicyTypes'
import { useLang } from '../../hooks/useLang'

interface Props {
  configs: Record<string, PrivacyPolicyConfig>
}

export default function LocalizedLegalPage({ configs }: Props) {
  const lang = useLang(Object.keys(configs))
  return <PrivacyPolicyPage config={configs[lang]!} />
}
