import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const retention: SectionTranslation = {
  title: 'Conservation et suppression des données',
  content: (
    <>
      <p>
        Vos données sont conservées tant que votre compte est actif. Les codes de
        réinitialisation et les jetons de session sont purgés automatiquement selon les
        durées indiquées ci-dessus.
      </p>
      <p>
        Vous pouvez supprimer votre compte à tout moment depuis <em>Paramètres → Supprimer mon compte</em>.
        Cette action efface définitivement de nos serveurs votre coffre chiffré, vos données de
        compte, vos sessions, vos codes de réinitialisation en attente, vos préférences de
        rappels et la date du dernier changement de mot de passe. Les jetons encore valides de
        ce compte sont refusés immédiatement.
      </p>
    </>
  ),
}
