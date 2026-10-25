import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const vaultExport: SectionTranslation = {
  title: 'Data export and import',
  content: (
    <>
      <p>
        The export is generated on your device and saved to the location you choose (a folder
        on your phone or sharing to another app). Three formats are available: biometric
        encrypted (.enc), portable encrypted (.enc) and plain-text JSON. It includes website
        addresses (URLs).
      </p>
      <Highlight>
        The JSON export contains your passwords <strong>in plaintext</strong>. You are solely
        responsible for exported files: Password Mobile App is not liable for their storage,
        sharing, deletion or loss once they have left the app.
      </Highlight>
      <p>
        Import allows you to restore a vault from a compatible export file, or to import a CSV
        file from another password manager.
        Always verify the source of the file before importing.
      </p>
    </>
  ),
}
