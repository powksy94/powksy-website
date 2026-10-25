import { BadgeYes } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const rights: SectionTranslation = {
  title: 'Your rights (GDPR)',
  content: (
    <>
      <p>Under the General Data Protection Regulation (GDPR):</p>
      <ul>
        <li><BadgeYes>Access</BadgeYes>: you can export your entire vault from the app.</li>
        <li><BadgeYes>Rectification</BadgeYes>: you can modify your data at any time.</li>
        <li><BadgeYes>Deletion</BadgeYes>: complete account and data deletion via the app.</li>
        <li><BadgeYes>Portability</BadgeYes>: export in JSON or encrypted file (.enc).</li>
        <li><BadgeYes>Objection</BadgeYes>: you can turn off security reminders at any time.</li>
      </ul>
    </>
  ),
}
