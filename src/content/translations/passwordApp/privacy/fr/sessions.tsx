import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const sessions: SectionTranslation = {
  title: 'Sessions de connexion',
  content: (
    <>
      <ul>
        <li>Un <strong>jeton de session</strong> (refresh token) est stocké de façon sécurisée sur votre appareil, et uniquement sous forme d'empreinte (SHA-256) sur nos serveurs.</li>
        <li>Durée : <strong>60 jours glissants</strong> (prolongée à chaque utilisation), avec un jeton d'accès de courte durée renouvelé automatiquement.</li>
        <li>Le serveur enregistre la date du dernier changement ou de la dernière réinitialisation de votre mot de passe : tout jeton émis avant cette date est immédiatement refusé.</li>
        <li>Révocation : déconnexion, changement ou réinitialisation du mot de passe (toutes les sessions, effet immédiat), suppression du compte (effet immédiat).</li>
        <li>Les jetons révoqués sont purgés après 30 jours, les jetons expirés quotidiennement.</li>
      </ul>
      <p>
        Finalité : vous permettre de rester connecté sans ressaisir vos identifiants, détecter
        un éventuel vol de session et couper l'accès des autres appareils après un changement
        de mot de passe.
      </p>
    </>
  ),
}
