import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const introduction: SectionTranslation = {
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
}
