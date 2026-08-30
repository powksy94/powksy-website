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
          You can delete your Nocturne account at any time, directly from the app:{' '}
          <strong>Settings → Delete my account</strong>.
        </p>
      ),
    },
    dataDeleted: {
      title: 'Data deleted',
      content: (
        <>
          <p>This immediately and permanently erases:</p>
          <ul>
            <li>your profile and photos</li>
            <li>your messages and conversations</li>
            <li>your matches, likes, and elegies</li>
            <li>your event registrations</li>
            <li>your subscription (automatically cancelled)</li>
          </ul>
        </>
      ),
    },
    emailMethod: {
      title: 'No longer have the app installed?',
      content: (
        <>
          <p>
            Send a deletion request to{' '}
            <a href="mailto:matthieuuzan@gmail.com?subject=Nocturne%20Account%20Deletion">
              matthieuuzan@gmail.com
            </a>{' '}
            from the email address linked to your account.
          </p>
          <Highlight>
            Your account and all associated data will be deleted within <strong>30 days</strong>.
          </Highlight>
        </>
      ),
    },
  },
}
