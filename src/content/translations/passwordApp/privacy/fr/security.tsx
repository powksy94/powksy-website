import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const security: SectionTranslation = {
  title: 'Sécurité',
  content: (
    <>
      <ul>
        <li>Chiffrement : <strong>AES-256-GCM</strong> (coffre), dérivation de clé <strong>PBKDF2-SHA256</strong> (100 000 itérations).</li>
        <li>Hachage des mots de passe : <strong>bcrypt</strong> (côté serveur).</li>
        <li>Transport : <strong>HTTPS / TLS</strong> exclusivement.</li>
        <li>Verrouillage automatique du coffre après <strong>5 minutes</strong> d'inactivité.</li>
        <li>Limitation du nombre de requêtes par adresse IP (connexion, réinitialisation) : l'IP est traitée en mémoire, n'est pas stockée en base et est conservée au plus <strong>15 minutes</strong>.</li>
        <li>Journaux serveur : uniquement l'identifiant interne de l'utilisateur. Jamais de mot de passe, de code ni de contenu de coffre.</li>
      </ul>
      <Highlight>
        Architecture zero-knowledge : même en cas de compromission de nos serveurs,
        vos mots de passe restent illisibles sans votre mot de passe maître.
      </Highlight>
    </>
  ),
}
