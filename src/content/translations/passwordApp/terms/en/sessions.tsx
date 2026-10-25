import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const sessions: SectionTranslation = {
  title: 'Sessions and account security',
  content: (
    <ul>
      <li>Changing your password <strong>immediately signs out all your other devices</strong>.</li>
      <li>A reset via <em>Forgot password</em> <strong>immediately signs out every device</strong>, including the one used.</li>
      <li>If reuse of a stolen session token is detected, the session is revoked and you must sign in again.</li>
    </ul>
  ),
}
