import { Highlight, BadgeNo } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const fr: PolicyTranslation = {
  docLabel: "Conditions d'utilisation",
  updatedLabel: 'juin 2026',
  sections: {
    objective: {
      title: 'Objet du service',
      content: (
        <>
          <p>
            <strong>Nocturne</strong> (<code>com.nocturne.app</code>) est une application de mise en
            relation entre personnes majeures, réservée à la communauté alternative et gothique.
          </p>
          <Highlight>
            L'usage de Nocturne est strictement réservé aux personnes âgées de{' '}
            <strong>18 ans et plus</strong>.
          </Highlight>
        </>
      ),
    },
    registration: {
      title: "Conditions d'inscription",
      content: (
        <ul>
          <li>L'utilisateur doit avoir <strong>18 ans révolus</strong> pour créer un compte.</li>
          <li>Un compte représente une seule personne réelle : les informations fournies doivent être exactes, sans usurpation d'identité ni faux profil.</li>
          <li>Un seul compte est autorisé par personne.</li>
        </ul>
      ),
    },
    prohibitions: {
      title: 'Règles de conduite et contenus interdits',
      content: (
        <ul>
          <li>Le harcèlement, les propos haineux, la discrimination et tout contenu illégal sont interdits.</li>
          <li>Les contenus à caractère pornographique et la sollicitation commerciale ou de prostitution sont interdits <BadgeNo>interdit</BadgeNo>.</li>
          <li>Les pseudos et messages sont soumis à une modération automatique basée sur une liste de mots interdits.</li>
          <li>Tout manquement à ces règles peut entraîner la suspension ou la suppression du compte, sans préavis.</li>
        </ul>
      ),
    },
    reporting: {
      title: 'Signalement et blocage',
      content: (
        <p>
          Chaque utilisateur peut signaler ou bloquer un autre utilisateur directement depuis
          l'application. Les signalements sont examinés et peuvent conduire à des sanctions :
          avertissement, suspension ou suppression définitive du compte concerné.
        </p>
      ),
    },
    subscriptions: {
      title: 'Abonnements et paiements',
      content: (
        <ul>
          <li>Trois formules sont proposées : <strong>Ombre</strong> (gratuite), <strong>Nocturne</strong> et <strong>Abyssal</strong> (payantes).</li>
          <li>La facturation des formules payantes est gérée par <strong>Google Play</strong>, selon la période choisie (semaine, mois ou année).</li>
          <li>
            L'abonnement est résiliable à tout moment depuis les réglages de l'application ou le Play
            Store. Aucun remboursement au prorata de la période en cours n'est effectué, sauf
            obligation légale contraire.
          </li>
        </ul>
      ),
    },
    liability: {
      title: 'Responsabilité et sécurité',
      content: (
        <>
          <p>
            Nocturne est un service de mise en relation : nous ne vérifions pas l'identité réelle des
            utilisateurs et ne garantissons pas l'exactitude des profils.
          </p>
          <p>
            L'application n'est pas responsable des interactions entre utilisateurs, y compris lors de
            rencontres en personne. Chaque utilisateur reste seul responsable de sa sécurité.
          </p>
          <Highlight>
            Par prudence, nous recommandons de privilégier un premier rendez-vous dans un lieu public
            et d'informer un proche de cette rencontre.
          </Highlight>
        </>
      ),
    },
    account: {
      title: 'Compte et résiliation',
      content: (
        <ul>
          <li>
            L'utilisateur peut supprimer son compte à tout moment depuis l'application. Cette action
            efface définitivement le profil, les photos, les messages et les matchs associés.
          </li>
          <li>
            Nocturne se réserve le droit de suspendre ou de supprimer un compte en cas de violation des
            présentes conditions.
          </li>
        </ul>
      ),
    },
    law: {
      title: 'Droit applicable',
      content: (
        <p>
          Les présentes conditions sont soumises au droit français. Tout litige relatif à leur
          interprétation ou leur exécution relève des tribunaux compétents français.
        </p>
      ),
    },
    contact: {
      title: 'Contact',
      content: (
        <p>
          Pour toute question relative aux présentes conditions d'utilisation, contactez-nous à :
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
