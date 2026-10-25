import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const notifications: SectionTranslation = {
  title: 'Security reminders (push notifications)',
  content: (
    <>
      <ul>
        <li><strong>Data</strong>: Firebase Cloud Messaging (FCM) notification token, app language, reminder preferences (enabled, include medium weaknesses, delays).</li>
        <li>For each vault item: the date since which it has been rated "weak" or "medium", and the reminder level reached.</li>
        <li>Password strength is <strong>computed on your device</strong>. The content of your passwords is never read by the server.</li>
        <li>Reminders can be turned off at any time in <em>Settings → Security reminders</em>.</li>
      </ul>
      <p>
        Push notifications are also used for admin approval requests. They contain no vault data.
      </p>
    </>
  ),
}
