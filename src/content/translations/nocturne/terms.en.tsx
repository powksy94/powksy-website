import { Highlight, BadgeNo } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const en: PolicyTranslation = {
  docLabel: 'Terms of Service',
  updatedLabel: 'June 2026',
  sections: {
    objective: {
      title: 'About the service',
      content: (
        <>
          <p>
            <strong>Nocturne</strong> (<code>com.nocturne.app</code>) is a social matching app for
            adults, reserved for the alternative and gothic community.
          </p>
          <Highlight>
            Use of Nocturne is strictly reserved for users aged <strong>18 and over</strong>.
          </Highlight>
        </>
      ),
    },
    registration: {
      title: 'Registration requirements',
      content: (
        <ul>
          <li>Users must be at least <strong>18 years old</strong> to create an account.</li>
          <li>One account per real person: information provided must be accurate — no impersonation or fake profiles.</li>
          <li>Only one account is allowed per person.</li>
        </ul>
      ),
    },
    prohibitions: {
      title: 'Conduct rules and prohibited content',
      content: (
        <ul>
          <li>Harassment, hate speech, discrimination, and illegal content are prohibited.</li>
          <li>Pornographic content and commercial solicitation or prostitution are prohibited <BadgeNo>forbidden</BadgeNo>.</li>
          <li>Usernames and messages are subject to automatic moderation via a blocked-word list.</li>
          <li>Violations may result in account suspension or deletion without notice.</li>
        </ul>
      ),
    },
    reporting: {
      title: 'Reporting and blocking',
      content: (
        <p>
          Each user can report or block another user directly in the app. Reports are reviewed and
          may result in sanctions: warning, suspension, or permanent account deletion.
        </p>
      ),
    },
    subscriptions: {
      title: 'Subscriptions and payments',
      content: (
        <ul>
          <li>Three plans are available: <strong>Ombre</strong> (free), <strong>Nocturne</strong> and <strong>Abyssal</strong> (paid).</li>
          <li>Billing for paid plans is handled by <strong>Google Play</strong>, based on the chosen period (weekly, monthly, or yearly).</li>
          <li>
            Subscriptions can be cancelled at any time via the app settings or Google Play.
            No prorated refund is issued for the current billing period, unless required by law.
          </li>
        </ul>
      ),
    },
    liability: {
      title: 'Liability and safety',
      content: (
        <>
          <p>
            Nocturne is a matching service: we do not verify users' real identities and do not
            guarantee the accuracy of profiles.
          </p>
          <p>
            The app is not responsible for interactions between users, including in-person meetings.
            Each user is solely responsible for their own safety.
          </p>
          <Highlight>
            For your safety, we recommend meeting for the first time in a public place and letting
            someone you trust know about the meeting.
          </Highlight>
        </>
      ),
    },
    account: {
      title: 'Account and termination',
      content: (
        <ul>
          <li>
            Users can delete their account at any time from the app. This permanently erases the
            profile, photos, messages, and matches associated with the account.
          </li>
          <li>
            Nocturne reserves the right to suspend or delete an account in the event of a violation
            of these terms.
          </li>
        </ul>
      ),
    },
    law: {
      title: 'Applicable law',
      content: (
        <p>
          These terms are governed by French law. Any dispute relating to their interpretation or
          enforcement falls under the jurisdiction of the competent French courts.
        </p>
      ),
    },
    contact: {
      title: 'Contact',
      content: (
        <p>
          For any questions regarding these terms of service, contact us at:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
