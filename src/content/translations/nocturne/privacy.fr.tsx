import { Highlight, BadgeNo, BadgeYes } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const fr: PolicyTranslation = {
  updatedLabel: 'octobre 2026',
  sections: {
    introduction: {
      title: 'Introduction',
      content: (
        <>
          <p>
            <strong>Nocturne</strong> (<code>com.nocturne.app</code>) est une application de rencontres
            dédiée à la communauté alternative et gothique. Cette politique décrit quelles données
            sont collectées, comment elles sont protégées, et quels droits vous avez sur celles-ci.
          </p>
          <Highlight>
            Nocturne est réservée aux personnes majeures. L'accès à l'application est strictement
            limité aux utilisateurs âgés de <strong>18 ans et plus</strong>.
          </Highlight>
        </>
      ),
    },
    dataCollected: {
      title: 'Données collectées',
      content: (
        <ul>
          <li><strong>Compte</strong> :email et mot de passe (stocké sous forme hachée bcrypt sur nos serveurs).</li>
          <li><strong>Profil</strong> :pseudo, bio, date de naissance/âge, genre, préférences de genre, pronoms, photos, préférences musicales/esthétiques, liens réseaux sociaux, événements suivis.</li>
          <li><strong>Géolocalisation</strong> :position GPS utilisée pour le matching par proximité et le filtre de distance.</li>
          <li><strong>Usage</strong> :likes, matchs, messages, élégies (messages d'accroche), visites de profil, compteur de swipes quotidien.</li>
          <li><strong>Abonnement</strong> :plan choisi (Ombre / Nocturne / Abyssal) et période de souscription.</li>
          <li><strong>Paiements d'événements</strong> :montant et statut de la transaction (paiement traité via Stripe) pour les événements payants.</li>
          <li><strong>Technique</strong> :token de notification push (FCM), refresh token (JWT, valable 1h ; refresh token 30 jours).</li>
          <li><strong>Codes de vérification</strong> : codes à 6 chiffres à usage unique envoyés par email (vérification de l'adresse à l'inscription, réinitialisation du mot de passe).</li>
          <li><strong>Intégrité de l'appareil</strong> : jeton Google Play Integrity transmis lors de l'inscription (voir « Prévention de la fraude »).</li>
        </ul>
      ),
    },
    emailVerification: {
      title: "Vérification de l'email et réinitialisation du mot de passe",
      content: (
        <>
          <ul>
            <li>À l'inscription, un <strong>code à 6 chiffres</strong> est envoyé à votre adresse email pour confirmer que vous en êtes bien le titulaire. Cette vérification est <strong>obligatoire</strong> avant l'activation complète du compte.</li>
            <li>La fonction <em>Mot de passe oublié</em> envoie également un code à 6 chiffres à usage unique pour redéfinir votre mot de passe.</li>
            <li><strong>Données traitées</strong> : votre adresse email et le contenu de l'email (le code à usage unique). Aucune nouvelle catégorie de données n'est collectée : l'email servait déjà d'identifiant de compte.</li>
          </ul>
          <p>
            Les emails sont envoyés par notre sous-traitant <strong>Resend</strong>, société basée aux
            États-Unis (voir « Services tiers »).
          </p>
        </>
      ),
    },
    fraudPrevention: {
      title: 'Prévention de la fraude (Google Play Integrity)',
      content: (
        <>
          <p>
            L'inscription est protégée par <strong>Google Play Integrity</strong>, via Firebase App
            Check. L'application transmet un jeton d'intégrité qui atteste qu'elle s'exécute sur un
            appareil Android authentique, non modifié, et qu'elle a été installée depuis une source
            de confiance.
          </p>
          <ul>
            <li><strong>Données traitées</strong> : signaux techniques de l'appareil (intégrité du système, signature et origine d'installation de l'application), vérifiés par Google.</li>
            <li><strong>Finalité</strong> : prévention de la fraude, des faux comptes et des inscriptions automatisées.</li>
            <li>Ces signaux ne servent pas à vous identifier personnellement ni à des fins publicitaires.</li>
          </ul>
        </>
      ),
    },
    noData: {
      title: 'Données non collectées',
      content: (
        <ul>
          <li>Historique de navigation hors application <BadgeNo>non collecté</BadgeNo>.</li>
          <li>
            Données biométriques <BadgeNo>non collectées</BadgeNo>, sauf déverrouillage local par empreinte/Face ID via <code>local_auth</code>, qui ne quitte jamais votre appareil.
          </li>
          <li>Contacts du téléphone <BadgeNo>non collectés</BadgeNo>.</li>
        </ul>
      ),
    },
    security: {
      title: 'Sécurité',
      content: (
        <ul>
          <li>Hachage des mots de passe : <strong>bcrypt</strong> (côté serveur).</li>
          <li>Transport : <strong>HTTPS / TLS</strong> exclusivement.</li>
          <li>Authentification par <strong>JWT</strong> (valable 1h) avec <strong>refresh token</strong> à rotation (30 jours).</li>
          <li><code>usesCleartextTraffic</code> désactivé côté Android.</li>
        </ul>
      ),
    },
    thirdParty: {
      title: 'Services tiers',
      content: (
        <>
          <p>L'application utilise les services suivants :</p>
          <ul>
            <li><strong>Railway</strong> :hébergement du serveur backend.</li>
            <li><strong>MongoDB Atlas</strong> :base de données.</li>
            <li><strong>Cloudinary</strong> :hébergement des photos de profil.</li>
            <li><strong>Firebase / Google</strong> :notifications push via FCM, et vérification de l'intégrité de l'appareil à l'inscription via App Check / Play Integrity (<a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>).</li>
            <li><strong>RevenueCat</strong> :gestion des abonnements et achats intégrés.</li>
            <li><strong>Stripe</strong> :traitement des paiements pour les événements payants.</li>
            <li><strong>Resend</strong> :envoi des emails transactionnels (codes de vérification et de réinitialisation) (<a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>, <a href="https://resend.com/legal/dpa" target="_blank" rel="noopener noreferrer">DPA</a>).</li>
          </ul>
          <p>Ces services sont soumis à leurs propres politiques de confidentialité.</p>
          <p>
            Resend est une société basée aux États-Unis. Les transferts de données hors de l'Union
            européenne sont encadrés par son accord de traitement des données (DPA), qui repose sur
            les clauses contractuelles types de la Commission européenne, et par sa certification
            au Data Privacy Framework UE-États-Unis.
          </p>
        </>
      ),
    },
    retention: {
      title: 'Conservation des données',
      content: (
        <p>
          Vos données sont conservées tant que votre compte est actif. La suppression de compte
          est disponible directement dans l'application (<em>Paramètres → Supprimer mon compte</em>),
          ce qui efface définitivement : votre profil, vos photos Cloudinary, vos messages, vos matchs,
          vos likes, vos élégies, et vous retire des événements suivis.
        </p>
      ),
    },
    rights: {
      title: 'Vos droits (RGPD)',
      content: (
        <>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD) :</p>
          <ul>
            <li><BadgeYes>Accès</BadgeYes> :vous pouvez demander l'accès à l'ensemble de vos données.</li>
            <li><BadgeYes>Rectification</BadgeYes> :vous pouvez modifier vos données à tout moment depuis l'application.</li>
            <li><BadgeYes>Suppression</BadgeYes> :suppression complète du compte et des données via l'application.</li>
            <li><BadgeYes>Portabilité</BadgeYes> :export de vos données sur simple demande.</li>
          </ul>
        </>
      ),
    },
    contact: {
      title: 'Contact',
      content: (
        <p>
          Pour toute question relative à vos données personnelles, contactez-nous à :
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
