import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const security: SectionTranslation = {
  title: 'Security and encryption',
  content: (
    <ul>
      <li>Client-side <strong>AES-256-GCM</strong> encryption: key derived locally via <strong>PBKDF2-SHA256</strong> (100,000 iterations).</li>
      <li>Our servers only receive and store <strong>encrypted blobs</strong>: your passwords are never transmitted in plaintext.</li>
      <li>Biometric unlock is handled exclusively by <strong>Android Keystore / iOS Secure Enclave</strong>: no biometric data is transmitted.</li>
      <li>The vault <strong>locks automatically</strong> after 5 minutes of inactivity.</li>
      <li>Firebase push notifications are used for security reminders and admin approval requests. They contain no vault data.</li>
    </ul>
  ),
}
