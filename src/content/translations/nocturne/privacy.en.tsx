import { Highlight, BadgeNo, BadgeYes } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const en: PolicyTranslation = {
  docLabel: 'Privacy Policy',
  updatedLabel: 'June 2026',
  sections: {
    introduction: {
      title: 'Introduction',
      content: (
        <>
          <p>
            <strong>Nocturne</strong> (<code>com.nocturne.app</code>) is a dating app dedicated to
            the alternative and gothic community. This policy describes what data is collected,
            how it is protected, and what rights you have over it.
          </p>
          <Highlight>
            Nocturne is for adults only. Access is strictly limited to users aged{' '}
            <strong>18 and over</strong>.
          </Highlight>
        </>
      ),
    },
    dataCollected: {
      title: 'Data collected',
      content: (
        <ul>
          <li><strong>Account</strong> — email and password (stored as a bcrypt hash on our servers).</li>
          <li><strong>Profile</strong> — username, bio, date of birth/age, gender, gender preferences, pronouns, photos, music/aesthetic preferences, social media links, followed events.</li>
          <li><strong>Location</strong> — GPS position used for proximity matching and distance filtering.</li>
          <li><strong>Activity</strong> — likes, matches, messages, elegies (opening messages), profile visits, daily swipe counter.</li>
          <li><strong>Subscription</strong> — chosen plan (Ombre / Nocturne / Abyssal) and subscription period.</li>
          <li><strong>Technical</strong> — push notification token (FCM), refresh token (JWT, valid 1h; refresh token 30 days).</li>
        </ul>
      ),
    },
    noData: {
      title: 'Data not collected',
      content: (
        <ul>
          <li>Browsing history outside the app <BadgeNo>not collected</BadgeNo>.</li>
          <li>
            Biometric data <BadgeNo>not collected</BadgeNo>
            — except local unlock via fingerprint/Face ID through <code>local_auth</code>, which never leaves your device.
          </li>
          <li>Phone contacts <BadgeNo>not collected</BadgeNo>.</li>
        </ul>
      ),
    },
    security: {
      title: 'Security',
      content: (
        <ul>
          <li>Password hashing: <strong>bcrypt</strong> (server-side).</li>
          <li>Transport: <strong>HTTPS / TLS</strong> exclusively.</li>
          <li>Authentication via <strong>JWT</strong> (valid 1h) with rotating <strong>refresh token</strong> (30 days).</li>
          <li><code>usesCleartextTraffic</code> disabled on Android.</li>
        </ul>
      ),
    },
    thirdParty: {
      title: 'Third-party services',
      content: (
        <>
          <p>The app uses the following services:</p>
          <ul>
            <li><strong>Railway</strong> — backend server hosting.</li>
            <li><strong>MongoDB Atlas</strong> — database.</li>
            <li><strong>Cloudinary</strong> — profile photo hosting.</li>
            <li><strong>Firebase / Google</strong> — push notifications via FCM.</li>
          </ul>
          <p>These services are subject to their own privacy policies.</p>
        </>
      ),
    },
    retention: {
      title: 'Data retention',
      content: (
        <p>
          Your data is kept while your account is active. Account deletion is available directly
          in the app (<em>Settings → Delete my account</em>), which permanently erases: your profile,
          Cloudinary photos, messages, matches, likes, elegies, and removes you from followed events.
        </p>
      ),
    },
    rights: {
      title: 'Your rights (GDPR)',
      content: (
        <>
          <p>Under the General Data Protection Regulation (GDPR):</p>
          <ul>
            <li><BadgeYes>Access</BadgeYes> — you may request access to all your data.</li>
            <li><BadgeYes>Rectification</BadgeYes> — you may update your data at any time from the app.</li>
            <li><BadgeYes>Deletion</BadgeYes> — complete account and data deletion via the app.</li>
            <li><BadgeYes>Portability</BadgeYes> — data export available upon request.</li>
          </ul>
        </>
      ),
    },
    contact: {
      title: 'Contact',
      content: (
        <p>
          For any questions regarding your personal data, contact us at:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
