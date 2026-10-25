import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const objective: SectionTranslation = {
  title: 'About the app',
  content: (
    <>
      <p>
        <strong>Password Mobile App</strong> (<code>com.passwordmobileapp.app</code>) is a
        personal password manager featuring an encrypted vault, a password generator, vault
        health analysis, security reminders, and secure export/import functionality.
      </p>
      <ul>
        <li><strong>AES-256-GCM</strong> encrypted vault: encryption handled entirely client-side.</li>
        <li>Unlock via <strong>master password</strong> or <strong>biometrics</strong> (fingerprint / Face ID).</li>
        <li>Customizable <strong>password generator</strong>.</li>
        <li><strong>Health analysis</strong>: detects weak, reused, or compromised passwords.</li>
        <li><strong>Security reminders</strong> by notification for weak passwords.</li>
        <li><strong>Export / import</strong> (encrypted .enc or JSON export, CSV import from other password managers).</li>
      </ul>
    </>
  ),
}
