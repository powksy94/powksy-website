import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const retention: SectionTranslation = {
  title: 'Data retention and deletion',
  content: (
    <>
      <p>
        Your data is kept while your account is active. Reset codes and session tokens are
        purged automatically according to the durations stated above.
      </p>
      <p>
        You can delete your account at any time from <em>Settings → Delete my account</em>.
        This permanently erases from our servers your encrypted vault, your account data, your
        sessions, any pending reset codes, your reminder preferences and the date of your last
        password change. Any still-valid tokens for this account are rejected immediately.
      </p>
    </>
  ),
}
