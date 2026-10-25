import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const deviceData: SectionTranslation = {
  title: "Données conservées sur l'appareil",
  content: (
    <ul>
      <li>La clé du coffre peut être conservée sur l'appareil, protégée par le matériel sécurisé (Android Keystore) et l'empreinte digitale. Elle <strong>ne quitte jamais l'appareil</strong>.</li>
      <li>Après expiration de la session, l'empreinte peut remplacer la saisie du mot de passe maître lors de la reconnexion, uniquement sur l'appareil déjà utilisé, et seulement après vérification que la clé déchiffre bien le coffre.</li>
      <li>Votre adresse email reste enregistrée sur l'appareil après une déconnexion simple, pour préremplir l'écran de connexion. Elle est effacée par une déconnexion complète ou la suppression du compte.</li>
      <li>Aucune donnée biométrique n'est collectée : la vérification est faite par le système.</li>
    </ul>
  ),
}
