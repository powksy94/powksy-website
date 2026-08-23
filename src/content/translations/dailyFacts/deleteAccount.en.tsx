import { Highlight } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const en: PolicyTranslation = {
  docLabel: 'Account Deletion',
  updatedLabel: 'August 2026',
  sections: {
    appMethod: {
      title: 'From the app',
      content: (
        <p>
          <strong>Fastest method.</strong> Open Daily Facts, tap your profile icon in the top
          right, then tap <strong>"Delete my account"</strong>. Deletion is immediate and
          permanent.
        </p>
      ),
    },
    emailMethod: {
      title: 'Without the app installed',
      content: (
        <p>
          Send a deletion request to{' '}
          <a href="mailto:matthieuuzan@gmail.com?subject=Daily%20Facts%20Account%20Deletion">
            matthieuuzan@gmail.com
          </a>, including the email address associated with your account. Your account will be
          deleted within <strong>7 days</strong>.
        </p>
      ),
    },
    dataDeleted: {
      title: 'Data deleted',
      content: (
        <>
          <ul>
            <li>Email address and name associated with the account</li>
            <li>Your saved favorites</li>
            <li>Your preferred content categories</li>
          </ul>
          <Highlight>
            No data is retained beyond deletion: it is immediate, with no additional retention
            period.
          </Highlight>
        </>
      ),
    },
  },
}
