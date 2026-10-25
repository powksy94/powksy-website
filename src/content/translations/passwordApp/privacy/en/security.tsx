import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const security: SectionTranslation = {
  title: 'Security',
  content: (
    <>
      <ul>
        <li>Encryption: <strong>AES-256-GCM</strong> (vault), key derivation <strong>PBKDF2-SHA256</strong> (100,000 iterations).</li>
        <li>Password hashing: <strong>bcrypt</strong> (server-side).</li>
        <li>Transport: <strong>HTTPS / TLS</strong> exclusively.</li>
        <li>Automatic vault lock after <strong>5 minutes</strong> of inactivity.</li>
        <li>Rate limiting per IP address (login, reset): the IP is processed in memory, never stored in a database, and kept for at most <strong>15 minutes</strong>.</li>
        <li>Server logs: only the user's internal identifier. Never any password, code or vault content.</li>
      </ul>
      <Highlight>
        Zero-knowledge architecture: even if our servers were compromised, your passwords
        remain unreadable without your master password.
      </Highlight>
    </>
  ),
}
