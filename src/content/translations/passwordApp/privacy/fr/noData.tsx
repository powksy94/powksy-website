import { BadgeNo } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const noData: SectionTranslation = {
  title: 'Données non collectées',
  content: (
    <ul>
      <li>
        Mot de passe maître <BadgeNo>jamais transmis</BadgeNo> : ne quitte jamais votre appareil.
        Il sert uniquement à dériver la clé de chiffrement localement.
      </li>
      <li>Contenu en clair de votre coffre <BadgeNo>inaccessible</BadgeNo> : chiffré avant envoi.</li>
      <li>Localisation, contacts, historique de navigation <BadgeNo>non collectés</BadgeNo>.</li>
      <li>Données biométriques <BadgeNo>non collectées</BadgeNo> : la vérification est effectuée par le système (Android Keystore / iOS Secure Enclave), rien n'est transmis.</li>
    </ul>
  ),
}
