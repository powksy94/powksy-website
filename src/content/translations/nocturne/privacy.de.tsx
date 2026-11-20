import { Highlight, BadgeNo, BadgeYes } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const de: PolicyTranslation = {
  docLabel: 'Datenschutzrichtlinie',
  updatedLabel: 'Oktober 2026',
  sections: {
    introduction: {
      title: 'Einführung',
      content: (
        <>
          <p>
            <strong>Nocturne</strong> (<code>com.nocturne.app</code>) ist eine Dating-App für die
            alternative und gothic Community. Diese Richtlinie beschreibt, welche Daten erhoben
            werden, wie sie geschützt werden und welche Rechte du in Bezug darauf hast.
          </p>
          <Highlight>
            Nocturne ist nur für Erwachsene. Der Zugang ist streng auf Nutzer ab{' '}
            <strong>18 Jahren</strong> beschränkt.
          </Highlight>
        </>
      ),
    },
    dataCollected: {
      title: 'Erhobene Daten',
      content: (
        <ul>
          <li><strong>Konto</strong>:E-Mail und Passwort (als bcrypt-Hash auf unseren Servern gespeichert).</li>
          <li><strong>Profil</strong>:Benutzername, Bio, Geburtsdatum/Alter, Geschlecht, Geschlechtspräferenzen, Pronomen, Fotos, Musik-/Ästhetikpräferenzen, Links zu sozialen Netzwerken, gefolgte Veranstaltungen.</li>
          <li><strong>Standort</strong>:GPS-Position für das Matching nach Nähe und die Entfernungsfilterung.</li>
          <li><strong>Aktivität</strong>:Likes, Matches, Nachrichten, Elegien (Eröffnungsnachrichten), Profilbesuche, täglicher Swipe-Zähler.</li>
          <li><strong>Abo</strong>:gewählter Plan (Ombre / Nocturne / Abyssal) und Abozeitraum.</li>
          <li><strong>Veranstaltungszahlungen</strong>:Transaktionsbetrag und -status (verarbeitet über Stripe) für kostenpflichtige Veranstaltungen.</li>
          <li><strong>Technisch</strong>:Push-Benachrichtigungstoken (FCM), Refresh-Token (JWT, 1 Std. gültig; Refresh-Token 30 Tage).</li>
          <li><strong>Bestätigungscodes</strong>: einmalig verwendbare 6-stellige Codes per E-Mail (E-Mail-Bestätigung bei der Registrierung, Passwort-Zurücksetzen).</li>
          <li><strong>Geräteintegrität</strong>: Google-Play-Integrity-Token, das bei der Registrierung gesendet wird (siehe „Betrugsprävention").</li>
        </ul>
      ),
    },
    emailVerification: {
      title: 'E-Mail-Bestätigung und Passwort-Zurücksetzen',
      content: (
        <>
          <ul>
            <li>Bei der Registrierung wird ein <strong>6-stelliger Code</strong> an deine E-Mail-Adresse gesendet, um zu bestätigen, dass sie dir gehört. Diese Bestätigung ist <strong>verpflichtend</strong>, bevor dein Konto vollständig aktiviert wird.</li>
            <li>Die Funktion <em>Passwort vergessen</em> sendet ebenfalls einen einmalig verwendbaren 6-stelligen Code, um ein neues Passwort festzulegen.</li>
            <li><strong>Verarbeitete Daten</strong>: deine E-Mail-Adresse und der Inhalt der E-Mail (der einmalige Code). Es wird keine neue Datenkategorie erhoben: die E-Mail war bereits deine Kontokennung.</li>
          </ul>
          <p>
            E-Mails werden von unserem Dienstleister <strong>Resend</strong> versendet, einem
            Unternehmen mit Sitz in den USA (siehe „Dienste Dritter").
          </p>
        </>
      ),
    },
    fraudPrevention: {
      title: 'Betrugsprävention (Google Play Integrity)',
      content: (
        <>
          <p>
            Die Registrierung ist durch <strong>Google Play Integrity</strong> über Firebase App
            Check geschützt. Die App sendet ein Integritätstoken, das belegt, dass sie auf einem
            echten, unveränderten Android-Gerät läuft und aus einer vertrauenswürdigen Quelle
            installiert wurde.
          </p>
          <ul>
            <li><strong>Verarbeitete Daten</strong>: technische Gerätesignale (Systemintegrität, App-Signatur und Installationsquelle), von Google verifiziert.</li>
            <li><strong>Zweck</strong>: Verhinderung von Betrug, Fake-Konten und automatisierten Registrierungen.</li>
            <li>Diese Signale werden nicht zu deiner persönlichen Identifizierung oder zu Werbezwecken verwendet.</li>
          </ul>
        </>
      ),
    },
    noData: {
      title: 'Nicht erhobene Daten',
      content: (
        <ul>
          <li>Browserverlauf außerhalb der App <BadgeNo>nicht erhoben</BadgeNo>.</li>
          <li>
            Biometrische Daten <BadgeNo>nicht erhoben</BadgeNo>, außer der lokalen Entsperrung per Fingerabdruck/Face ID über <code>local_auth</code>, die dein Gerät nie verlässt.
          </li>
          <li>Telefonkontakte <BadgeNo>nicht erhoben</BadgeNo>.</li>
        </ul>
      ),
    },
    security: {
      title: 'Sicherheit',
      content: (
        <ul>
          <li>Passwort-Hashing: <strong>bcrypt</strong> (serverseitig).</li>
          <li>Übertragung: ausschließlich <strong>HTTPS / TLS</strong>.</li>
          <li>Authentifizierung über <strong>JWT</strong> (1 Std. gültig) mit rotierendem <strong>Refresh-Token</strong> (30 Tage).</li>
          <li><code>usesCleartextTraffic</code> unter Android deaktiviert.</li>
        </ul>
      ),
    },
    thirdParty: {
      title: 'Dienste Dritter',
      content: (
        <>
          <p>Die App nutzt folgende Dienste:</p>
          <ul>
            <li><strong>Railway</strong>:Hosting des Backend-Servers.</li>
            <li><strong>MongoDB Atlas</strong>:Datenbank.</li>
            <li><strong>Cloudinary</strong>:Hosting der Profilfotos.</li>
            <li><strong>Firebase / Google</strong>:Push-Benachrichtigungen über FCM sowie Geräteintegritätsprüfungen bei der Registrierung über App Check / Play Integrity (<a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Datenschutzrichtlinie</a>).</li>
            <li><strong>RevenueCat</strong>:Verwaltung von Abos und In-App-Käufen.</li>
            <li><strong>Stripe</strong>:Zahlungsabwicklung für kostenpflichtige Veranstaltungen.</li>
            <li><strong>Resend</strong>:Versand transaktionaler E-Mails (Bestätigungs- und Zurücksetzungscodes) (<a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Datenschutzrichtlinie</a>, <a href="https://resend.com/legal/dpa" target="_blank" rel="noopener noreferrer">AVV</a>).</li>
          </ul>
          <p>Diese Dienste unterliegen ihren eigenen Datenschutzrichtlinien.</p>
          <p>
            Resend ist ein Unternehmen mit Sitz in den USA. Datenübermittlungen außerhalb der
            Europäischen Union unterliegen dessen Auftragsverarbeitungsvertrag (AVV), der auf den
            Standardvertragsklauseln der Europäischen Kommission beruht, sowie dessen Zertifizierung
            unter dem EU-U.S. Data Privacy Framework.
          </p>
        </>
      ),
    },
    retention: {
      title: 'Datenspeicherung',
      content: (
        <p>
          Deine Daten werden gespeichert, solange dein Konto aktiv ist. Die Kontolöschung ist direkt
          in der App verfügbar (<em>Einstellungen → Konto löschen</em>), wodurch dauerhaft gelöscht
          werden: dein Profil, die Cloudinary-Fotos, Nachrichten, Matches, Likes, Elegien, und du
          wirst aus gefolgten Veranstaltungen entfernt.
        </p>
      ),
    },
    rights: {
      title: 'Deine Rechte (DSGVO)',
      content: (
        <>
          <p>Gemäß der Datenschutz-Grundverordnung (DSGVO):</p>
          <ul>
            <li><BadgeYes>Zugang</BadgeYes>:du kannst Zugang zu all deinen Daten verlangen.</li>
            <li><BadgeYes>Berichtigung</BadgeYes>:du kannst deine Daten jederzeit über die App aktualisieren.</li>
            <li><BadgeYes>Löschung</BadgeYes>:vollständige Löschung von Konto und Daten über die App.</li>
            <li><BadgeYes>Übertragbarkeit</BadgeYes>:Datenexport auf Anfrage verfügbar.</li>
          </ul>
        </>
      ),
    },
    contact: {
      title: 'Kontakt',
      content: (
        <p>
          Bei Fragen zu deinen personenbezogenen Daten kontaktiere uns unter:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
