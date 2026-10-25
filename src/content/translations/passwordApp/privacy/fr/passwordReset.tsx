import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const passwordReset: SectionTranslation = {
  title: 'Réinitialisation du mot de passe par email',
  content: (
    <>
      <p>
        La fonction <em>Mot de passe oublié</em> vous permet de redéfinir votre mot de passe
        de connexion à l'aide d'un code à usage unique envoyé par email.
      </p>
      <ul>
        <li><strong>Données traitées</strong> : adresse email du compte, langue de l'application, code à usage unique.</li>
        <li>Le code est stocké uniquement sous forme d'<strong>empreinte (HMAC)</strong>. Il est valable <strong>15 minutes</strong>, limité à <strong>5 essais</strong>, puis supprimé automatiquement (purge quotidienne, au plus 2 jours après expiration).</li>
        <li>Le serveur ne révèle pas si une adresse email possède un compte.</li>
        <li>Une réinitialisation réussie <strong>déconnecte immédiatement tous les appareils</strong> du compte, y compris celui depuis lequel elle est faite.</li>
      </ul>
      <Highlight>
        Seul le mot de passe de connexion est réinitialisé. Votre mot de passe maître et le
        contenu de votre coffre ne sont ni accessibles ni modifiables par ce moyen.
      </Highlight>
      <p>
        Les emails sont envoyés depuis <code>no-reply@powksy.com</code> par notre sous-traitant{' '}
        <strong>Resend</strong>, région d'envoi Union européenne (Irlande).
      </p>
    </>
  ),
}
