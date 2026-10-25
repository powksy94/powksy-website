import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const account: SectionTranslation = {
  title: 'Compte et résiliation',
  content: (
    <ul>
      <li>
        Vous pouvez supprimer votre compte à tout moment depuis{' '}
        <em>Paramètres → Supprimer mon compte</em>. Cette action efface définitivement
        votre coffre chiffré de nos serveurs, vos données de compte, vos sessions et votre
        historique. Tous vos appareils sont déconnectés immédiatement.
      </li>
      <li>Aucune restauration n'est possible après suppression.</li>
      <li>Password Mobile App se réserve le droit de suspendre un compte en cas d'utilisation abusive.</li>
    </ul>
  ),
}
