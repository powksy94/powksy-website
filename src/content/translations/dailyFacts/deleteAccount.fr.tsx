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
          <strong>Méthode la plus rapide.</strong> Ouvrez Daily Facts, appuyez sur votre profil en
          haut à droite, puis sur <strong>« Supprimer mon compte »</strong>. La suppression est
          immédiate et définitive.
        </p>
      ),
    },
    emailMethod: {
      title: "Sans l'application installée",
      content: (
        <p>
          Envoyez une demande de suppression à{' '}
          <a href="mailto:matthieuuzan@gmail.com?subject=Suppression%20de%20compte%20Daily%20Facts">
            matthieuuzan@gmail.com
          </a>, en précisant l'adresse e-mail associée à votre compte. Votre compte sera supprimé
          sous <strong>7 jours</strong>.
        </p>
      ),
    },
    dataDeleted: {
      title: 'Données supprimées',
      content: (
        <>
          <ul>
            <li>Adresse e-mail et nom associés au compte</li>
            <li>Vos favoris enregistrés</li>
            <li>Vos catégories de contenu préférées</li>
          </ul>
          <Highlight>
            Aucune donnée n'est conservée au-delà de la suppression : celle-ci est immédiate et ne
            fait l'objet d'aucun délai de rétention supplémentaire.
          </Highlight>
        </>
      ),
    },
  },
}
