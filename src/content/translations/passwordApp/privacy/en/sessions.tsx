import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const sessions: SectionTranslation = {
  title: 'Login sessions',
  content: (
    <>
      <ul>
        <li>A <strong>session token</strong> (refresh token) is stored securely on your device, and only as a hash (SHA-256) on our servers.</li>
        <li>Duration: <strong>60 rolling days</strong> (extended on each use), with a short-lived access token renewed automatically.</li>
        <li>The server records the date of your last password change or reset: any token issued before that date is immediately rejected.</li>
        <li>Revocation: sign-out, password change or reset (all sessions, immediate effect), account deletion (immediate effect).</li>
        <li>Revoked tokens are purged after 30 days, expired tokens daily.</li>
      </ul>
      <p>
        Purpose: keeping you signed in without re-entering your credentials, detecting session
        theft, and cutting off access from other devices after a password change.
      </p>
    </>
  ),
}
