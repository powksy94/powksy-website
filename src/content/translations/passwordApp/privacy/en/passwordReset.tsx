import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const passwordReset: SectionTranslation = {
  title: 'Password reset by email',
  content: (
    <>
      <p>
        The <em>Forgot password</em> feature lets you set a new login password using a
        one-time code sent by email.
      </p>
      <ul>
        <li><strong>Data processed</strong>: account email address, app language, one-time code.</li>
        <li>The code is stored only as a <strong>hash (HMAC)</strong>. It is valid for <strong>15 minutes</strong>, limited to <strong>5 attempts</strong>, then deleted automatically (daily purge, at most 2 days after expiry).</li>
        <li>The server does not reveal whether an email address has an account.</li>
        <li>A successful reset <strong>immediately signs out every device</strong> on the account, including the one used to perform it.</li>
      </ul>
      <Highlight>
        Only the login password is reset. Your master password and the contents of your vault
        can neither be accessed nor modified this way.
      </Highlight>
      <p>
        Emails are sent from <code>no-reply@powksy.com</code> by our processor{' '}
        <strong>Resend</strong>, sending region European Union (Ireland).
      </p>
    </>
  ),
}
