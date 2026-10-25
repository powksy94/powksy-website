import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const masterPassword: SectionTranslation = {
  title: 'Master password',
  content: (
    <>
      <p>
        The master password never leaves your device. It is used locally to derive the
        encryption key for your vault. Neither the publisher nor the server knows it, and it
        can be neither recovered nor reset.
      </p>
      <p>
        The <em>Forgot password</em> feature only applies to the login password, never to the
        master password.
      </p>
      <Highlight>
        <strong>Critical warning:</strong> without your master password (or your fingerprint on
        the device already set up), your vault is <strong>permanently inaccessible</strong>.
        The publisher cannot restore it: our servers never store your master password or any
        key that could decrypt your data.
      </Highlight>
      <p>
        Keep your master password in a safe place, separate from the app, and export your vault
        regularly.
      </p>
    </>
  ),
}
