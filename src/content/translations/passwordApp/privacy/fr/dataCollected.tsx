import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const dataCollected: SectionTranslation = {
  title: 'Données collectées',
  content: (
    <ul>
      <li><strong>Adresse email</strong> : identifiant de votre compte.</li>
      <li><strong>Mot de passe de connexion</strong> : stocké sous forme hachée (bcrypt) sur nos serveurs. Nous ne le connaissons pas en clair.</li>
      <li><strong>Salt de dérivation</strong> : valeur aléatoire utilisée pour dériver votre clé de chiffrement côté client.</li>
      <li><strong>Coffre chiffré</strong> : vos entrées (titres, logins, mots de passe, adresses de sites, notes) sont chiffrées avec AES-256-GCM sur votre appareil avant envoi.</li>
      <li><strong>Rôle utilisateur</strong> : user / admin / team_admin (gestion interne).</li>
      <li><strong>Langue de l'application</strong> (en / fr / es) : utilisée pour les emails et les notifications.</li>
      <li><strong>Sessions de connexion</strong>, <strong>codes de réinitialisation</strong> et <strong>préférences de rappels</strong> : détaillés dans les sections ci-dessous.</li>
    </ul>
  ),
}
