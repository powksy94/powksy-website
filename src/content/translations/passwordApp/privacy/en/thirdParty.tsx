import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const thirdParty: SectionTranslation = {
  title: 'Third-party services',
  content: (
    <>
      <p>The app uses the following processors:</p>
      <ul>
        <li><strong>Railway</strong>: backend server hosting (Europe / US).</li>
        <li><strong>MongoDB Atlas</strong>: encrypted vault storage.</li>
        <li><strong>PostgreSQL</strong> (hosted on Railway): accounts, sessions and preferences.</li>
        <li><strong>Google Firebase Cloud Messaging</strong>: push notification delivery (<a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>).</li>
        <li><strong>Resend</strong>: transactional email delivery, European Union region (Ireland) (<a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>, <a href="https://resend.com/legal/dpa" target="_blank" rel="noopener noreferrer">DPA</a>).</li>
        <li><strong>Google AdMob</strong>: advertising (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>).</li>
      </ul>
      <p>
        These services are subject to their own privacy policies. Your vault content is only
        transmitted to them in encrypted form.
      </p>
    </>
  ),
}
