import { Highlight, BadgeNo, BadgeYes } from '../components/legal/PrivacyPolicyPage'
import type { PrivacyPolicyConfig } from '../components/legal/privacyPolicyTypes'

export const nocturnePrivacyPolicy: PrivacyPolicyConfig = {
  appName: 'Nocturne',
  emoji: '🌙',
  updatedLabel: 'juin 2026',
  footerYear: 2026,
  theme: {
    bg: '#08000e',
    headerGradientEnd: '#1a0030',
    headerBorder: 'rgba(123, 0, 212, 0.25)',
    accent: '#b15cff',
    accentShadow: 'rgba(123, 0, 212, 0.5)',
    subtitleText: '#9a8aab',
    sectionBorder: 'rgba(123, 0, 212, 0.18)',
    bodyText: '#d4cce0',
    highlightBg: 'rgba(123, 0, 212, 0.1)',
    highlightText: '#d7baf5',
    footerText: '#6e5d80',
  },
  sections: [
    {
      icon: '📋',
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
    {
      icon: '📦',
      title: 'Données collectées',
      content: (
        <ul>
          <li><strong>Compte</strong> — email et mot de passe (stocké sous forme hachée bcrypt sur nos serveurs).</li>
          <li><strong>Profil</strong> — pseudo, bio, date de naissance/âge, genre, préférences de genre, pronoms, photos, préférences musicales/esthétiques, liens réseaux sociaux, événements suivis.</li>
          <li><strong>Géolocalisation</strong> — position GPS utilisée pour le matching par proximité et le filtre de distance.</li>
          <li><strong>Usage</strong> — likes, matchs, messages, élégies (messages d'accroche), visites de profil, compteur de swipes quotidien.</li>
          <li><strong>Abonnement</strong> — plan choisi (Ombre / Nocturne / Abyssal) et période de souscription.</li>
          <li><strong>Technique</strong> — token de notification push (FCM), refresh token (JWT, valable 1h ; refresh token 30 jours).</li>
        </ul>
      ),
    },
    {
      icon: '🚫',
      title: 'Données non collectées',
      content: (
        <ul>
          <li>Historique de navigation hors application <BadgeNo>non collecté</BadgeNo>.</li>
          <li>
            Données biométriques <BadgeNo>non collectées</BadgeNo>
            — sauf déverrouillage local par empreinte/Face ID via <code>local_auth</code>, qui ne quitte jamais votre appareil.
          </li>
          <li>Contacts du téléphone <BadgeNo>non collectés</BadgeNo>.</li>
        </ul>
      ),
    },
    {
      icon: '🔒',
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
    {
      icon: '🌐',
      title: 'Services tiers',
      content: (
        <>
          <p>L'application utilise les services suivants :</p>
          <ul>
            <li><strong>Railway</strong> — hébergement du serveur backend.</li>
            <li><strong>MongoDB Atlas</strong> — base de données.</li>
            <li><strong>Cloudinary</strong> — hébergement des photos de profil.</li>
            <li><strong>Firebase / Google</strong> — notifications push via FCM.</li>
          </ul>
          <p>Ces services sont soumis à leurs propres politiques de confidentialité.</p>
        </>
      ),
    },
    {
      icon: '🗄️',
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
    {
      icon: '⚖️',
      title: 'Vos droits (RGPD)',
      content: (
        <>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD) :</p>
          <ul>
            <li><BadgeYes>Accès</BadgeYes> — vous pouvez demander l'accès à l'ensemble de vos données.</li>
            <li><BadgeYes>Rectification</BadgeYes> — vous pouvez modifier vos données à tout moment depuis l'application.</li>
            <li><BadgeYes>Suppression</BadgeYes> — suppression complète du compte et des données via l'application.</li>
            <li><BadgeYes>Portabilité</BadgeYes> — export de vos données sur simple demande.</li>
          </ul>
        </>
      ),
    },
    {
      icon: '📩',
      title: 'Contact',
      content: (
        <p>
          Pour toute question relative à vos données personnelles, contactez-nous à :
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  ],
}
