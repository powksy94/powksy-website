import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const dataCollected: SectionTranslation = {
  title: 'Data collected',
  content: (
    <ul>
      <li><strong>Email address</strong>: your account identifier.</li>
      <li><strong>Login password</strong>: stored as a bcrypt hash on our servers. We never know it in plaintext.</li>
      <li><strong>Derivation salt</strong>: a random value used to derive your encryption key client-side.</li>
      <li><strong>Encrypted vault</strong>: your entries (titles, logins, passwords, website addresses, notes) are encrypted with AES-256-GCM on your device before being sent.</li>
      <li><strong>User role</strong>: user / admin / team_admin (internal management).</li>
      <li><strong>App language</strong> (en / fr / es): used for emails and notifications.</li>
      <li><strong>Login sessions</strong>, <strong>reset codes</strong> and <strong>reminder preferences</strong>: detailed in the sections below.</li>
    </ul>
  ),
}
