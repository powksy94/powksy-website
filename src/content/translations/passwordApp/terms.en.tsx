import { Highlight } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const en: PolicyTranslation = {
  docLabel: 'Terms of Service',
  updatedLabel: 'June 2026',
  sections: {
    objective: {
      title: 'About the app',
      content: (
        <>
          <p>
            <strong>Password Mobile App</strong> (<code>com.passwordmobileapp.app</code>) is a
            personal password manager featuring an encrypted vault, a password generator, vault
            health analysis, and secure export/import functionality.
          </p>
          <ul>
            <li><strong>AES-256-GCM</strong> encrypted vault — encryption handled entirely client-side.</li>
            <li>Unlock via <strong>master password</strong> or <strong>biometrics</strong> (fingerprint / Face ID).</li>
            <li>Customizable <strong>password generator</strong>.</li>
            <li><strong>Health analysis</strong> — detects weak, reused, or compromised passwords.</li>
            <li><strong>Export / import</strong> (CSV, biometric-protected export).</li>
          </ul>
        </>
      ),
    },
    conditions: {
      title: 'Terms of use',
      content: (
        <ul>
          <li>You must create an account with accurate and up-to-date information.</li>
          <li>Only one account per person is allowed.</li>
          <li>The app is intended for <strong>personal use only</strong>. Unauthorized commercial use or redistribution is prohibited.</li>
          <li>You are responsible for keeping your login credentials confidential.</li>
        </ul>
      ),
    },
    masterPassword: {
      title: 'Master password',
      content: (
        <>
          <p>
            The master password never leaves your device. It is used locally to derive the
            encryption key for your vault and is never transmitted to our servers.
          </p>
          <Highlight>
            <strong>Critical warning:</strong> losing your master password results in{' '}
            <strong>permanent, irreversible</strong> loss of access to your vault. No recovery
            procedure is possible — our servers never store your master password or any key that
            could decrypt your data.
          </Highlight>
          <p>Keep your master password in a safe place, separate from the app.</p>
        </>
      ),
    },
    security: {
      title: 'Security and encryption',
      content: (
        <ul>
          <li>Client-side <strong>AES-256-GCM</strong> encryption — key derived locally via <strong>PBKDF2-SHA256</strong> (100,000 iterations).</li>
          <li>Our servers only receive and store <strong>encrypted blobs</strong> — your passwords are never transmitted in plaintext.</li>
          <li>Biometric unlock is handled exclusively by <strong>Android Keystore / iOS Secure Enclave</strong> — no biometric data is transmitted.</li>
          <li>The vault <strong>locks automatically</strong> after 5 minutes of inactivity.</li>
          <li>Firebase push notifications are used only for admin approval requests — they contain no vault data.</li>
        </ul>
      ),
    },
    export: {
      title: 'Data export and import',
      content: (
        <>
          <p>
            CSV export generates a file listing all your passwords in plaintext.
            This operation is protected by biometric authentication before generation.
          </p>
          <Highlight>
            Once downloaded, the CSV file contains sensitive data <strong>in plaintext</strong>.
            You are solely responsible for it — Password Mobile App is not liable for its
            storage, sharing, or loss once it has left the app.
          </Highlight>
          <p>
            Import allows you to restore a vault from a compatible export file.
            Always verify the source of the file before importing.
          </p>
        </>
      ),
    },
    ads: {
      title: 'Advertising',
      content: (
        <>
          <p>The app integrates <strong>Google AdMob</strong> for displaying advertisements.</p>
          <ul>
            <li>Google may collect certain data for advertising purposes, in accordance with its own <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>.</li>
            <li>Ads can be limited via your Google account personalization settings.</li>
          </ul>
        </>
      ),
    },
    liability: {
      title: 'Limitation of liability',
      content: (
        <ul>
          <li>Password Mobile App is a local management tool — we do not guarantee continuous service availability or the absence of data loss due to technical events.</li>
          <li>We are not liable for data loss resulting from a forgotten master password, account deletion, or misuse of the export/import feature.</li>
          <li>The app is not responsible for consequences arising from a compromise of your device or local biometric data.</li>
        </ul>
      ),
    },
    account: {
      title: 'Account and termination',
      content: (
        <ul>
          <li>
            You may delete your account at any time from{' '}
            <em>Settings → Delete my account</em>. This permanently erases your encrypted
            vault from our servers, your account data, and your history.
          </li>
          <li>Without your master password, no restoration is possible after deletion.</li>
          <li>Password Mobile App reserves the right to suspend an account in cases of misuse.</li>
        </ul>
      ),
    },
    law: {
      title: 'Applicable law',
      content: (
        <p>
          These terms are governed by French law. Any dispute relating to their interpretation
          or enforcement falls under the jurisdiction of the competent French courts.
        </p>
      ),
    },
    contact: {
      title: 'Contact',
      content: (
        <p>
          For any questions regarding these terms, contact us at:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
