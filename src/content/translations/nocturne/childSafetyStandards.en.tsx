import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const en: PolicyTranslation = {
  docLabel: 'Child sexual abuse and exploitation prevention standards',
  updatedLabel: 'August 2026',
  sections: {
    policy: {
      title: 'Zero-tolerance policy',
      content: (
        <>
          <p>
            <strong>Nocturne</strong> (<code>com.nocturne.app</code>) is restricted to adults
            only. Access to the app is strictly forbidden to anyone under 18, verified via the
            birth date declared at registration.
          </p>
          <p>
            Nocturne enforces a zero-tolerance policy toward any content or behavior related to
            child sexual abuse or exploitation (CSAE), as well as toward any attempt to use the
            app by a minor.
          </p>
        </>
      ),
    },
    measures: {
      title: 'Measures in place',
      content: (
        <ul>
          <li>Age verification at registration (18 years minimum).</li>
          <li>Automated moderation of usernames and messages via a banned-words filter.</li>
          <li>
            Report and block system available at all times within the app, for any suspicious
            profile or content.
          </li>
          <li>
            Manual review of reports, which may result in a warning, suspension, or permanent
            deletion of the account involved.
          </li>
          <li>
            Immediate removal of any content identified as CSAE-related, and reporting to the
            relevant authorities in accordance with applicable law.
          </li>
        </ul>
      ),
    },
    reporting: {
      title: 'Report an issue',
      content: (
        <>
          <p>
            Any user can report a profile or content directly from within the app (report
            button, available on every profile and conversation).
          </p>
          <p>
            For any question about these standards, or to report a concern outside the app,
            contact:<br />
            <a href="mailto:matthieuuzan@gmail.com?subject=Nocturne%20-%20Child%20Safety%20Standards">
              matthieuuzan@gmail.com
            </a>
          </p>
        </>
      ),
    },
  },
}
