import { Highlight } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const fr: PolicyTranslation = {
  docLabel: 'Suppression de compte',
  updatedLabel: 'août 2026',
  sections: {
    appMethod: {
      title: "Depuis l'application",
      content: (
        <p>
          Vous pouvez supprimer votre compte Nocturne à tout moment, directement depuis
          l'application : <strong>Réglages → Supprimer mon compte</strong>.
        </p>
      ),
    },
    dataDeleted: {
      title: 'Données supprimées',
      content: (
        <>
          <p>Cette action efface définitivement et immédiatement :</p>
          <ul>
            <li>votre profil et vos photos</li>
            <li>vos messages et conversations</li>
            <li>vos matchs, likes et élégies</li>
            <li>vos inscriptions aux événements</li>
            <li>votre abonnement (résilié automatiquement)</li>
          </ul>
        </>
      ),
    },
    emailMethod: {
      title: "Vous n'avez plus l'application installée ?",
      content: (
        <>
          <p>
            Envoyez une demande de suppression à{' '}
            <a href="mailto:matthieuuzan@gmail.com?subject=Suppression%20de%20compte%20Nocturne">
              matthieuuzan@gmail.com
            </a>{' '}
            depuis l'adresse e-mail associée à votre compte.
          </p>
          <Highlight>
            Votre compte et toutes les données associées seront supprimés sous <strong>30 jours</strong>.
          </Highlight>
        </>
      ),
    },
  },
}
