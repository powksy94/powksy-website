import { Highlight } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const de: PolicyTranslation = {
  docLabel: 'Kontolöschung',
  updatedLabel: 'August 2026',
  sections: {
    appMethod: {
      title: 'Über die App',
      content: (
        <p>
          Du kannst dein Nocturne-Konto jederzeit direkt über die App löschen:{' '}
          <strong>Einstellungen → Konto löschen</strong>.
        </p>
      ),
    },
    dataDeleted: {
      title: 'Gelöschte Daten',
      content: (
        <>
          <p>Dadurch werden sofort und dauerhaft gelöscht:</p>
          <ul>
            <li>dein Profil und deine Fotos</li>
            <li>deine Nachrichten und Unterhaltungen</li>
            <li>deine Matches, Likes und Elegien</li>
            <li>deine Veranstaltungsanmeldungen</li>
            <li>dein Abo (automatisch gekündigt)</li>
          </ul>
        </>
      ),
    },
    emailMethod: {
      title: 'Hast du die App nicht mehr installiert?',
      content: (
        <>
          <p>
            Sende eine Löschanfrage an{' '}
            <a href="mailto:matthieuuzan@gmail.com?subject=Nocturne%20Account%20Deletion">
              matthieuuzan@gmail.com
            </a>{' '}
            von der mit deinem Konto verknüpften E-Mail-Adresse.
          </p>
          <Highlight>
            Dein Konto und alle zugehörigen Daten werden innerhalb von <strong>30 Tagen</strong> gelöscht.
          </Highlight>
        </>
      ),
    },
  },
}
