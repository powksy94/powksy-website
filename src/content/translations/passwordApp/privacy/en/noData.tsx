import { BadgeNo } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const noData: SectionTranslation = {
  title: 'Data not collected',
  content: (
    <ul>
      <li>
        Master password <BadgeNo>never transmitted</BadgeNo>: never leaves your device.
        It is only used to derive the encryption key locally.
      </li>
      <li>Plaintext vault content <BadgeNo>inaccessible</BadgeNo>: encrypted before transmission.</li>
      <li>Location, contacts, browsing history <BadgeNo>not collected</BadgeNo>.</li>
      <li>Biometric data <BadgeNo>not collected</BadgeNo>: verification is performed by the operating system (Android Keystore / iOS Secure Enclave), nothing is transmitted.</li>
    </ul>
  ),
}
