import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const account: SectionTranslation = {
  title: 'Account and termination',
  content: (
    <ul>
      <li>
        You may delete your account at any time from{' '}
        <em>Settings → Delete my account</em>. This permanently erases your encrypted
        vault from our servers, your account data, your sessions, and your history. All your
        devices are signed out immediately.
      </li>
      <li>No restoration is possible after deletion.</li>
      <li>Password Mobile App reserves the right to suspend an account in cases of misuse.</li>
    </ul>
  ),
}
