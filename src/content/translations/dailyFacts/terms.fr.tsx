import { Highlight } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const fr: PolicyTranslation = {
  docLabel: "Conditions d'utilisation",
  updatedLabel: 'novembre 2026',
  sections: {
    acceptance: {
      title: 'Acceptation des conditions',
      content: (
        <p>
          Daily Facts est éditée par <strong>Powksy</strong>. L'utilisation de l'application implique
          l'acceptation des présentes conditions. L'utilisateur qui ne les accepte pas doit cesser
          d'utiliser l'application.
        </p>
      ),
    },
    objective: {
      title: 'Objet du service',
      content: (
        <>
          <p>
            <strong>Daily Facts</strong> (<code>com.uzan.dailyfacts</code>) propose chaque jour un fait
            ou une anecdote par catégorie : histoire, sciences, sport, art, cinéma, musique, santé,
            inventions, etc. L'application est disponible sur Android (Google Play).
          </p>
          <ul>
            <li>Une partie des contenus est rédigée par l'éditeur, une autre provient de services tiers (<strong>API Ninjas</strong>).</li>
            <li>Les images proviennent principalement de <strong>Wikipedia / Wikimedia Commons</strong>.</li>
            <li>Les contenus sont rédigés en anglais puis traduits automatiquement (<strong>Google Translate</strong>) en français et en espagnol. Les traductions peuvent contenir des erreurs.</li>
          </ul>
        </>
      ),
    },
    account: {
      title: 'Compte utilisateur',
      content: (
        <ul>
          <li>L'inscription se fait par adresse email et mot de passe, via <strong>Firebase Authentication</strong>.</li>
          <li>Les données liées au compte (nom, adresse email, catégories choisies, favoris) sont stockées dans <strong>Firebase Firestore</strong>.</li>
          <li>L'utilisateur fournit des informations exactes et reste responsable de la confidentialité de ses identifiants.</li>
        </ul>
      ),
    },
    subscriptions: {
      title: 'Abonnement et paiements',
      content: (
        <ul>
          <li>L'abonnement <strong>Daily Facts Premium</strong> est mensuel ou annuel, à renouvellement automatique. Il est acheté via <strong>Google Play</strong> et géré par <strong>RevenueCat</strong>.</li>
          <li>Il donne accès à des favoris illimités synchronisés sur tous les appareils, à une application sans publicité et à un accès prioritaire aux nouvelles catégories.</li>
          <li>L'abonnement se renouvelle automatiquement, sauf résiliation dans les réglages du Play Store <strong>avant la fin de la période en cours</strong>.</li>
          <li>Les remboursements suivent la politique de Google Play.</li>
          <li>Le bouton <em>Restaurer les achats</em> de l'application permet de récupérer un abonnement déjà acheté.</li>
        </ul>
      ),
    },
    ads: {
      title: 'Publicités',
      content: (
        <ul>
          <li>Les utilisateurs de la version gratuite voient des publicités diffusées par <strong>Google AdMob</strong>. Les abonnés Premium n'en voient aucune.</li>
          <li>Google peut collecter certaines données à des fins publicitaires, conformément à sa propre <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>.</li>
        </ul>
      ),
    },
    content: {
      title: 'Contenus et propriété intellectuelle',
      content: (
        <ul>
          <li>L'application et les contenus rédigés par l'éditeur sont protégés par le droit de la propriété intellectuelle. Toute reproduction ou redistribution non autorisée est interdite.</li>
          <li>Les contenus fournis par des services tiers (<strong>API Ninjas</strong>) restent soumis aux conditions de ces services.</li>
          <li>Les images issues de <strong>Wikipedia / Wikimedia Commons</strong> restent soumises à leurs propres licences, définies par leurs auteurs.</li>
        </ul>
      ),
    },
    liability: {
      title: 'Limitation de responsabilité',
      content: (
        <>
          <p>
            Les contenus sont fournis à titre <strong>informatif et de divertissement uniquement</strong>.
            Leur exactitude, leur exhaustivité et leur actualité ne sont pas garanties, en particulier
            pour les contenus de services tiers et les traductions automatiques.
          </p>
          <Highlight>
            Les catégories santé (santé générale, santé mentale, médicaments, troubles rares) ne
            constituent <strong>pas un avis médical</strong>. Pour toute question concernant sa santé,
            l'utilisateur doit consulter un professionnel de santé.
          </Highlight>
          <p>La disponibilité continue du service n'est pas garantie.</p>
        </>
      ),
    },
    thirdParty: {
      title: 'Services tiers',
      content: (
        <>
          <p>L'application s'appuie sur des services tiers, chacun soumis à ses propres conditions :</p>
          <ul>
            <li><strong>Firebase Authentication</strong> et <strong>Firestore</strong> : compte et données associées.</li>
            <li><strong>Firebase Cloud Messaging</strong> : notifications.</li>
            <li><strong>Firebase Analytics</strong> : statistiques d'usage.</li>
            <li><strong>Google AdMob</strong> : publicités.</li>
            <li><strong>RevenueCat</strong> et <strong>Google Play</strong> : abonnements.</li>
            <li><strong>API Ninjas</strong>, <strong>Wikipedia / Wikimedia Commons</strong> et <strong>Google Translate</strong> : contenus, images et traductions.</li>
          </ul>
        </>
      ),
    },
    termination: {
      title: 'Compte et résiliation',
      content: (
        <ul>
          <li>
            L'utilisateur peut supprimer son compte et les données associées à tout moment, en suivant la
            procédure décrite sur la page{' '}
            <a href="/daily-facts/delete-account?lang=fr">Suppression de compte</a>.
          </li>
          <li>La suppression du compte ne résilie pas un abonnement Premium en cours : la résiliation se fait dans les réglages du Play Store.</li>
          <li>Daily Facts se réserve le droit de suspendre ou de supprimer un compte en cas de violation des présentes conditions.</li>
        </ul>
      ),
    },
    changes: {
      title: 'Modification des conditions',
      content: (
        <p>
          Les présentes conditions peuvent être modifiées, notamment pour tenir compte de l'évolution
          de l'application. La date de dernière mise à jour figure en haut de cette page. La poursuite
          de l'utilisation de l'application vaut acceptation des conditions mises à jour.
        </p>
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
