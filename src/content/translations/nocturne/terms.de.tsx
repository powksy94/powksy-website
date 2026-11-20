import { Highlight, BadgeNo } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const de: PolicyTranslation = {
  docLabel: 'Nutzungsbedingungen',
  updatedLabel: 'Oktober 2026',
  sections: {
    objective: {
      title: 'Über den Dienst',
      content: (
        <>
          <p>
            <strong>Nocturne</strong> (<code>com.nocturne.app</code>) ist eine soziale Dating-App für
            Erwachsene, die der alternativen und gothic Community vorbehalten ist.
          </p>
          <Highlight>
            Die Nutzung von Nocturne ist ausschließlich Nutzern ab <strong>18 Jahren</strong> vorbehalten.
          </Highlight>
        </>
      ),
    },
    registration: {
      title: 'Registrierungsvoraussetzungen',
      content: (
        <ul>
          <li>Nutzer müssen mindestens <strong>18 Jahre</strong> alt sein, um ein Konto zu erstellen.</li>
          <li>Ein Konto pro realer Person: die angegebenen Informationen müssen korrekt sein, ohne Identitätstäuschung oder Fake-Profile.</li>
          <li>Pro Person ist nur ein Konto erlaubt.</li>
          <li>Deine E-Mail-Adresse muss mit dem bei der Registrierung gesendeten 6-stelligen Code <strong>bestätigt</strong> werden. Bis dahin kann das Konto unvollständig oder inaktiv bleiben.</li>
          <li>Du musst Zugriff auf die E-Mail-Adresse deines Kontos behalten: sie wird auch zum Zurücksetzen deines Passworts verwendet.</li>
        </ul>
      ),
    },
    fraud: {
      title: 'Automatisierte Konten und Betrug',
      content: (
        <ul>
          <li>Das automatisierte oder betrügerische Erstellen von Konten ist verboten (Bots, Skripte, Massenregistrierungen, modifizierte Geräte oder Apps).</li>
          <li>Die Registrierung prüft die Geräteintegrität über <strong>Google Play Integrity</strong>. Eine Registrierung kann abgelehnt werden, wenn diese Prüfung fehlschlägt, etwa auf einem modifizierten Gerät oder mit einer App, die nicht aus einer vertrauenswürdigen Quelle installiert wurde.</li>
          <li>Jeder Missbrauch der Registrierungs- oder Passwort-Zurücksetzen-Funktionen (wiederholte Anfragen, Versuche an Konten anderer Personen) kann zu technischen Beschränkungen und zur Sperrung des betroffenen Kontos führen.</li>
        </ul>
      ),
    },
    prohibitions: {
      title: 'Verhaltensregeln und verbotene Inhalte',
      content: (
        <ul>
          <li>Belästigung, Hassrede, Diskriminierung und illegale Inhalte sind verboten.</li>
          <li>Pornografische Inhalte sowie kommerzielle Anbahnung oder Prostitution sind <BadgeNo>verboten</BadgeNo>.</li>
          <li>Benutzernamen und Nachrichten unterliegen einer automatischen Moderation über eine Liste gesperrter Wörter.</li>
          <li>Verstöße können ohne vorherige Ankündigung zur Sperrung oder Löschung des Kontos führen.</li>
        </ul>
      ),
    },
    reporting: {
      title: 'Melden und Blockieren',
      content: (
        <p>
          Jeder Nutzer kann einen anderen Nutzer direkt in der App melden oder blockieren. Meldungen
          werden geprüft und können zu Maßnahmen führen: Verwarnung, Sperrung oder endgültige Löschung
          des Kontos.
        </p>
      ),
    },
    subscriptions: {
      title: 'Abos und Zahlungen',
      content: (
        <ul>
          <li>Es gibt drei Pläne: <strong>Ombre</strong> (kostenlos), <strong>Nocturne</strong> und <strong>Abyssal</strong> (kostenpflichtig).</li>
          <li>Die Abrechnung der kostenpflichtigen Pläne erfolgt über <strong>Google Play</strong>, je nach gewähltem Zeitraum (wöchentlich, monatlich oder jährlich).</li>
          <li>
            Abos können jederzeit über die App-Einstellungen oder Google Play gekündigt werden. Für
            den laufenden Abrechnungszeitraum wird keine anteilige Rückerstattung gewährt, sofern
            gesetzlich nicht anders vorgeschrieben.
          </li>
          <li>
            Kostenpflichtige Veranstaltungen werden über <strong>Stripe</strong> abgerechnet. Gemäß
            Artikel L221-28 12° des französischen Verbrauchergesetzbuchs (Freizeitdienstleistungen,
            die an einem bestimmten Datum erbracht werden) gilt das 14-tägige Widerrufsrecht nicht:
            Tickets sind bei einfacher Meinungsänderung nicht erstattungsfähig, außer bei Absage oder
            wesentlicher Änderung der Veranstaltung durch den Veranstalter.
          </li>
        </ul>
      ),
    },
    liability: {
      title: 'Haftung und Sicherheit',
      content: (
        <>
          <p>
            Nocturne ist ein Matching-Dienst: wir überprüfen nicht die tatsächliche Identität der
            Nutzer und garantieren nicht die Richtigkeit der Profile.
          </p>
          <p>
            Die App ist nicht verantwortlich für Interaktionen zwischen Nutzern, einschließlich
            persönlicher Treffen. Jeder Nutzer ist allein für seine eigene Sicherheit verantwortlich.
          </p>
          <Highlight>
            Zu deiner Sicherheit empfehlen wir, sich beim ersten Treffen an einem öffentlichen Ort zu
            verabreden und eine Vertrauensperson über das Treffen zu informieren.
          </Highlight>
        </>
      ),
    },
    account: {
      title: 'Konto und Kündigung',
      content: (
        <ul>
          <li>
            Nutzer können ihr Konto jederzeit über die App löschen. Dadurch werden Profil, Fotos,
            Nachrichten und Matches, die mit dem Konto verknüpft sind, dauerhaft gelöscht.
          </li>
          <li>
            Nocturne behält sich das Recht vor, ein Konto bei Verstoß gegen diese Bedingungen zu
            sperren oder zu löschen.
          </li>
        </ul>
      ),
    },
    law: {
      title: 'Anwendbares Recht',
      content: (
        <p>
          Diese Bedingungen unterliegen französischem Recht. Jede Streitigkeit bezüglich ihrer
          Auslegung oder Durchsetzung unterliegt der Zuständigkeit der zuständigen französischen
          Gerichte.
        </p>
      ),
    },
    contact: {
      title: 'Kontakt',
      content: (
        <p>
          Bei Fragen zu diesen Nutzungsbedingungen kontaktiere uns unter:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
