import { Highlight, BadgeNo, BadgeYes } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const en: PolicyTranslation = {
  docLabel: 'Privacy Policy',
  updatedLabel: 'May 2026',
  sections: {
    introduction: {
      title: 'Introduction',
      content: (
        <>
          <p>
            <strong>Password Mobile App</strong> (<code>com.passwordmobileapp.app</code>) is a personal
            password manager. This policy describes what data is collected, how it is protected,
            and what rights you have over it.
          </p>
          <Highlight>
            Core principle: your passwords are encrypted on your device before being sent to our
            servers. We technically cannot read your vault.
          </Highlight>
        </>
      ),
    },
    dataCollected: {
      title: 'Data collected',
      content: (
        <ul>
          <li><strong>Email address</strong> — your account identifier.</li>
          <li><strong>Login password</strong> — stored as a bcrypt hash on our servers. We never know it in plaintext.</li>
          <li><strong>Derivation salt</strong> — a random value used to derive your encryption key client-side.</li>
          <li><strong>Encrypted vault</strong> — your entries (titles, logins, passwords, notes) are encrypted with AES-256-GCM on your device before being sent.</li>
          <li><strong>User role</strong> — user / admin / team_admin (internal management).</li>
        </ul>
      ),
    },
    noData: {
      title: 'Data not collected',
      content: (
        <ul>
          <li>
            Master password <BadgeNo>never transmitted</BadgeNo>
            — never leaves your device. It is only used to derive the encryption key locally.
          </li>
          <li>Plaintext vault content <BadgeNo>inaccessible</BadgeNo> — encrypted before transmission.</li>
          <li>Location, contacts, browsing history <BadgeNo>not collected</BadgeNo>.</li>
          <li>Biometric data <BadgeNo>not collected</BadgeNo> — managed exclusively by Android Keystore / iOS Secure Enclave, never transmitted.</li>
        </ul>
      ),
    },
    security: {
      title: 'Security',
      content: (
        <>
          <ul>
            <li>Encryption: <strong>AES-256-GCM</strong> (vault), key derivation <strong>PBKDF2-SHA256</strong> (100,000 iterations).</li>
            <li>Password hashing: <strong>bcrypt</strong> (server-side).</li>
            <li>Transport: <strong>HTTPS / TLS</strong> exclusively.</li>
            <li>JWT authentication tokens valid for <strong>30 days</strong>.</li>
            <li>Automatic vault lock after <strong>5 minutes</strong> of inactivity.</li>
          </ul>
          <Highlight>
            Zero-knowledge architecture: even if our servers were compromised, your passwords
            remain unreadable without your master password.
          </Highlight>
        </>
      ),
    },
    thirdParty: {
      title: 'Third-party services',
      content: (
        <>
          <p>The app uses the following services:</p>
          <ul>
            <li><strong>Railway</strong> — backend server hosting (Europe / US).</li>
            <li><strong>MongoDB Atlas</strong> — encrypted vault storage.</li>
            <li><strong>PostgreSQL</strong> — user account storage.</li>
          </ul>
          <p>
            These services are subject to their own privacy policies.
            Your data is transmitted to them only in encrypted form.
          </p>
        </>
      ),
    },
    retention: {
      title: 'Data retention',
      content: (
        <p>
          Your data is kept while your account is active. You can delete your account at any time
          from <em>Settings → Delete my account</em>, which permanently erases all your data from
          our servers.
        </p>
      ),
    },
    rights: {
      title: 'Your rights (GDPR)',
      content: (
        <>
          <p>Under the General Data Protection Regulation (GDPR):</p>
          <ul>
            <li><BadgeYes>Access</BadgeYes> — you can export your entire vault from the app.</li>
            <li><BadgeYes>Rectification</BadgeYes> — you can modify your data at any time.</li>
            <li><BadgeYes>Deletion</BadgeYes> — complete account and data deletion via the app.</li>
            <li><BadgeYes>Portability</BadgeYes> — export in JSON or encrypted file (.enc).</li>
          </ul>
        </>
      ),
    },
    contact: {
      title: 'Contact',
      content: (
        <p>
          For any questions regarding your personal data, contact us at:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
