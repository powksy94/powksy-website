import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const sessions: SectionTranslation = {
  title: 'Sessions et sécurité du compte',
  content: (
    <ul>
      <li>Le changement de votre mot de passe <strong>déconnecte immédiatement tous les autres appareils</strong>.</li>
      <li>La réinitialisation via <em>Mot de passe oublié</em> <strong>déconnecte immédiatement tous les appareils</strong>, y compris celui utilisé.</li>
      <li>Si la réutilisation d'un jeton de session volé est détectée, la session est révoquée et vous devez vous reconnecter.</li>
    </ul>
  ),
}
