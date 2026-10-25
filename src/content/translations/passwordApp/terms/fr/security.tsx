import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const security: SectionTranslation = {
  title: 'Sécurité et chiffrement',
  content: (
    <ul>
      <li>Chiffrement <strong>AES-256-GCM</strong> côté client : clé dérivée localement par <strong>PBKDF2-SHA256</strong> (100 000 itérations).</li>
      <li>Nos serveurs ne reçoivent et ne stockent que des <strong>blobs chiffrés</strong> : vos mots de passe ne transitent jamais en clair.</li>
      <li>Le déverrouillage biométrique est géré exclusivement par le <strong>Keystore Android / iOS Secure Enclave</strong> : aucune donnée biométrique n'est transmise.</li>
      <li>Le coffre se <strong>verrouille automatiquement</strong> après 5 minutes d'inactivité.</li>
      <li>Les notifications push Firebase servent aux rappels de sécurité et aux demandes d'approbation admin. Elles ne contiennent aucune donnée de coffre.</li>
    </ul>
  ),
}
