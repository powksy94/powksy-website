import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const de: PolicyTranslation = {
  docLabel: 'Standards zur Prävention von sexuellem Missbrauch und Ausbeutung von Kindern',
  updatedLabel: 'August 2026',
  sections: {
    policy: {
      title: 'Null-Toleranz-Richtlinie',
      content: (
        <>
          <p>
            <strong>Nocturne</strong> (<code>com.nocturne.app</code>) ist ausschließlich Erwachsenen
            vorbehalten. Der Zugang zur App ist Personen unter 18 Jahren strikt untersagt, verifiziert
            anhand des bei der Registrierung angegebenen Geburtsdatums.
          </p>
          <p>
            Nocturne verfolgt eine Null-Toleranz-Politik gegenüber jeglichen Inhalten oder
            Verhaltensweisen im Zusammenhang mit sexuellem Missbrauch oder Ausbeutung von Kindern
            (CSAE), sowie gegenüber jedem Versuch, die App durch eine minderjährige Person zu nutzen.
          </p>
        </>
      ),
    },
    measures: {
      title: 'Getroffene Maßnahmen',
      content: (
        <ul>
          <li>Altersverifizierung bei der Registrierung (mindestens 18 Jahre).</li>
          <li>Automatisierte Moderation von Benutzernamen und Nachrichten über einen Filter gesperrter Wörter.</li>
          <li>
            Melde- und Blockierfunktion jederzeit innerhalb der App verfügbar, für jedes verdächtige
            Profil oder jeden verdächtigen Inhalt.
          </li>
          <li>
            Manuelle Prüfung von Meldungen, die zu einer Verwarnung, Sperrung oder endgültigen
            Löschung des betroffenen Kontos führen kann.
          </li>
          <li>
            Sofortige Entfernung jeglicher als CSAE-bezogen identifizierter Inhalte sowie Meldung an
            die zuständigen Behörden gemäß geltendem Recht.
          </li>
        </ul>
      ),
    },
    reporting: {
      title: 'Ein Problem melden',
      content: (
        <>
          <p>
            Jeder Nutzer kann ein Profil oder einen Inhalt direkt in der App melden (Melden-Button,
            auf jedem Profil und in jeder Unterhaltung verfügbar).
          </p>
          <p>
            Bei Fragen zu diesen Standards oder um ein Anliegen außerhalb der App zu melden,
            kontaktiere:
            <br />
            <a href="mailto:matthieuuzan@gmail.com?subject=Nocturne%20-%20Child%20Safety%20Standards">
              matthieuuzan@gmail.com
            </a>
          </p>
        </>
      ),
    },
  },
}
