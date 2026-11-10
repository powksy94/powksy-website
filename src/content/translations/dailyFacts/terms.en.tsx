import { Highlight } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const en: PolicyTranslation = {
  docLabel: 'Terms of Service',
  updatedLabel: 'November 2026',
  sections: {
    acceptance: {
      title: 'Acceptance of the terms',
      content: (
        <p>
          Daily Facts is published by <strong>Powksy</strong>. Using the app implies acceptance of
          these terms. Users who do not accept them must stop using the app.
        </p>
      ),
    },
    objective: {
      title: 'Purpose of the service',
      content: (
        <>
          <p>
            <strong>Daily Facts</strong> (<code>com.uzan.dailyfacts</code>) offers one fact or fun story
            per category every day: history, science, sport, art, cinema, music, health, inventions,
            and more. The app is available on Android (Google Play).
          </p>
          <ul>
            <li>Part of the content is written by the publisher, the rest comes from third-party services (<strong>API Ninjas</strong>).</li>
            <li>Images mainly come from <strong>Wikipedia / Wikimedia Commons</strong>.</li>
            <li>Content is written in English, then automatically translated (<strong>Google Translate</strong>) into French and Spanish. Translations may contain errors.</li>
          </ul>
        </>
      ),
    },
    account: {
      title: 'User account',
      content: (
        <ul>
          <li>Sign-up uses an email address and password, through <strong>Firebase Authentication</strong>.</li>
          <li>Account data (name, email address, chosen categories, favorites) is stored in <strong>Firebase Firestore</strong>.</li>
          <li>Users provide accurate information and remain responsible for keeping their credentials confidential.</li>
        </ul>
      ),
    },
    subscriptions: {
      title: 'Subscription and payments',
      content: (
        <ul>
          <li><strong>Daily Facts Premium</strong> is a monthly or yearly auto-renewing subscription. It is purchased through <strong>Google Play</strong> and managed by <strong>RevenueCat</strong>.</li>
          <li>It includes unlimited favorites synced across all devices, an ad-free app and priority access to new categories.</li>
          <li>The subscription renews automatically unless it is cancelled in the Play Store settings <strong>before the end of the current period</strong>.</li>
          <li>Refunds follow the Google Play refund policy.</li>
          <li>The <em>Restore purchases</em> button in the app recovers a subscription that was already purchased.</li>
        </ul>
      ),
    },
    ads: {
      title: 'Advertising',
      content: (
        <ul>
          <li>Users of the free version see ads served by <strong>Google AdMob</strong>. Premium subscribers see none.</li>
          <li>Google may collect certain data for advertising purposes, in accordance with its own <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>.</li>
        </ul>
      ),
    },
    content: {
      title: 'Content and intellectual property',
      content: (
        <ul>
          <li>The app and the content written by the publisher are protected by intellectual property law. Any unauthorized reproduction or redistribution is prohibited.</li>
          <li>Content provided by third-party services (<strong>API Ninjas</strong>) remains subject to the terms of those services.</li>
          <li>Images from <strong>Wikipedia / Wikimedia Commons</strong> remain subject to their own licenses, set by their authors.</li>
        </ul>
      ),
    },
    liability: {
      title: 'Limitation of liability',
      content: (
        <>
          <p>
            Content is provided for <strong>information and entertainment purposes only</strong>. Its
            accuracy, completeness and timeliness are not guaranteed, especially for third-party content
            and automatic translations.
          </p>
          <Highlight>
            The health categories (general health, mental health, medications, rare disorders) do{' '}
            <strong>not constitute medical advice</strong>. For any question about their health, users
            should consult a healthcare professional.
          </Highlight>
          <p>Continuous availability of the service is not guaranteed.</p>
        </>
      ),
    },
    thirdParty: {
      title: 'Third-party services',
      content: (
        <>
          <p>The app relies on third-party services, each subject to its own terms:</p>
          <ul>
            <li><strong>Firebase Authentication</strong> and <strong>Firestore</strong>: account and related data.</li>
            <li><strong>Firebase Cloud Messaging</strong>: notifications.</li>
            <li><strong>Firebase Analytics</strong>: usage statistics.</li>
            <li><strong>Google AdMob</strong>: advertising.</li>
            <li><strong>RevenueCat</strong> and <strong>Google Play</strong>: subscriptions.</li>
            <li><strong>API Ninjas</strong>, <strong>Wikipedia / Wikimedia Commons</strong> and <strong>Google Translate</strong>: content, images and translations.</li>
          </ul>
        </>
      ),
    },
    termination: {
      title: 'Account and termination',
      content: (
        <ul>
          <li>
            Users can delete their account and related data at any time by following the steps on the{' '}
            <a href="/daily-facts/delete-account?lang=en">Account Deletion</a> page.
          </li>
          <li>Deleting the account does not cancel an active Premium subscription: cancellation is done in the Play Store settings.</li>
          <li>Daily Facts reserves the right to suspend or delete an account that violates these terms.</li>
        </ul>
      ),
    },
    changes: {
      title: 'Changes to the terms',
      content: (
        <p>
          These terms may be updated, in particular to reflect changes to the app. The date of the
          last update is shown at the top of this page. Continuing to use the app constitutes
          acceptance of the updated terms.
        </p>
      ),
    },
    law: {
      title: 'Governing law',
      content: (
        <p>
          These terms are governed by French law. Any dispute relating to their interpretation or
          performance falls under the jurisdiction of the competent French courts.
        </p>
      ),
    },
    contact: {
      title: 'Contact',
      content: (
        <p>
          For any question about these terms of service, contact us at:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
