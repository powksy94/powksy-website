import { Highlight, BadgeNo, BadgeYes } from '../components/legal/PrivacyPolicyPage'
import type { PrivacyPolicyConfig } from '../components/legal/privacyPolicyTypes'

export const passwordMobileAppPrivacyPolicy: PrivacyPolicyConfig = {
  appName: 'Password Mobile App',
  emoji: '🔐',
  updatedLabel: 'mai 2026',
  footerYear: 2026,
  theme: {
    bg: '#0a0f1e',
    headerGradientEnd: '#0d1b3e',
    headerBorder: 'rgba(0, 255, 255, 0.2)',
    accent: '#00e5ff',
    accentShadow: 'rgba(0, 229, 255, 0.4)',
    subtitleText: '#90a4ae',
    sectionBorder: 'rgba(0, 229, 255, 0.12)',
    bodyText: '#cfd8dc',
    highlightBg: 'rgba(0, 229, 255, 0.07)',
    highlightText: '#b2ebf2',
    footerText: '#546e7a',
  },
  sections: [
    {
      icon: '📋',
      title: 'Introduction',
      content: (
        <>
          <p>
            <strong>Password Mobile App</strong> (<code>com.passwordmobileapp.app</code>) est un gestionnaire
            de mots de passe personnel. Cette politique décrit quelles données sont collectées,
            comment elles sont protégées, et quels droits vous avez sur celles-ci.
          </p>
          <Highlight>
            Principe fondamental : vos mots de passe sont chiffrés sur votre appareil avant
            d'être envoyés à nos serveurs. Nous ne pouvons techniquement pas lire votre coffre.
          </Highlight>
        </>
      ),
    },
    {
      icon: '📦',
      title: 'Données collectées',
      content: (
        <ul>
          <li><strong>Adresse email</strong> — identifiant de votre compte.</li>
          <li><strong>Mot de passe de connexion</strong> — stocké sous forme hachée (bcrypt) sur nos serveurs. Nous ne le connaissons pas en clair.</li>
          <li><strong>Salt de dérivation</strong> — valeur aléatoire utilisée pour dériver votre clé de chiffrement côté client.</li>
          <li><strong>Coffre chiffré</strong> — vos entrées (titres, logins, mots de passe, notes) sont chiffrées avec AES-256-GCM sur votre appareil avant envoi.</li>
          <li><strong>Rôle utilisateur</strong> — user / admin / team_admin (gestion interne).</li>
        </ul>
      ),
    },
    {
      icon: '🚫',
      title: 'Données non collectées',
      content: (
        <ul>
          <li>
            Mot de passe maître <BadgeNo>jamais transmis</BadgeNo>
            — ne quitte jamais votre appareil. Il sert uniquement à dériver la clé de chiffrement localement.
          </li>
          <li>Contenu en clair de votre coffre <BadgeNo>inaccessible</BadgeNo> — chiffré avant envoi.</li>
          <li>Localisation, contacts, historique de navigation <BadgeNo>non collectés</BadgeNo>.</li>
          <li>Données biométriques <BadgeNo>non collectées</BadgeNo> — gérées uniquement par le Keystore Android / iOS Secure Enclave, jamais transmises.</li>
        </ul>
      ),
    },
    {
      icon: '🔒',
      title: 'Sécurité',
      content: (
        <>
          <ul>
            <li>Chiffrement : <strong>AES-256-GCM</strong> (coffre), dérivation de clé <strong>PBKDF2-SHA256</strong> (100 000 itérations).</li>
            <li>Hachage des mots de passe : <strong>bcrypt</strong> (côté serveur).</li>
            <li>Transport : <strong>HTTPS / TLS</strong> exclusivement.</li>
            <li>Tokens d'authentification JWT valables <strong>30 jours</strong>.</li>
            <li>Verrouillage automatique du coffre après <strong>5 minutes</strong> d'inactivité.</li>
          </ul>
          <Highlight>
            Architecture zero-knowledge : même en cas de compromission de nos serveurs,
            vos mots de passe restent illisibles sans votre mot de passe maître.
          </Highlight>
        </>
      ),
    },
    {
      icon: '🌐',
      title: 'Services tiers',
      content: (
        <>
          <p>L'application utilise les services suivants :</p>
          <ul>
            <li><strong>Railway</strong> — hébergement du serveur backend (Europe / US).</li>
            <li><strong>MongoDB Atlas</strong> — stockage du coffre chiffré.</li>
            <li><strong>PostgreSQL</strong> — stockage des comptes utilisateurs.</li>
          </ul>
          <p>
            Ces services sont soumis à leurs propres politiques de confidentialité.
            Vos données y sont transmises uniquement sous forme chiffrée.
          </p>
        </>
      ),
    },
    {
      icon: '🗄️',
      title: 'Conservation des données',
      content: (
        <p>
          Vos données sont conservées tant que votre compte est actif.
          Vous pouvez supprimer votre compte à tout moment depuis <em>Paramètres → Supprimer mon compte</em>,
          ce qui efface définitivement toutes vos données de nos serveurs.
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
            <li><BadgeYes>Accès</BadgeYes> — vous pouvez exporter l'intégralité de votre coffre depuis l'application.</li>
            <li><BadgeYes>Rectification</BadgeYes> — vous pouvez modifier vos données à tout moment.</li>
            <li><BadgeYes>Suppression</BadgeYes> — suppression complète du compte et des données via l'application.</li>
            <li><BadgeYes>Portabilité</BadgeYes> — export en JSON ou fichier chiffré (.enc).</li>
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
