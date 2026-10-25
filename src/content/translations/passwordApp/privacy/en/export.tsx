import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const vaultExport: SectionTranslation = {
  title: 'Vault export',
  content: (
    <>
      <ul>
        <li>The export is generated <strong>on your device</strong>. You choose where it goes (a folder on your phone, such as Downloads, or sharing to another app).</li>
        <li>Three formats are available: <strong>biometric encrypted</strong> (.enc), <strong>portable encrypted</strong> (.enc) and <strong>plain-text JSON</strong>.</li>
        <li>The export includes website addresses (URLs).</li>
      </ul>
      <Highlight>
        The JSON format contains your passwords <strong>in plaintext</strong>. You are solely
        responsible for storing and deleting this file.
      </Highlight>
    </>
  ),
}
