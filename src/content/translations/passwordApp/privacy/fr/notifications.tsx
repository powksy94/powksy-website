import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const notifications: SectionTranslation = {
  title: 'Rappels de sécurité (notifications push)',
  content: (
    <>
      <ul>
        <li><strong>Données</strong> : jeton de notification Firebase Cloud Messaging (FCM), langue de l'application, préférences de rappel (activation, inclusion des faiblesses moyennes, délais).</li>
        <li>Pour chaque élément du coffre : date depuis laquelle il est jugé « faible » ou « moyen », et palier de rappel atteint.</li>
        <li>Le niveau de robustesse est <strong>calculé sur votre appareil</strong>. Le contenu de vos mots de passe n'est jamais lu par le serveur.</li>
        <li>Les rappels sont désactivables à tout moment dans <em>Réglages → Rappels de sécurité</em>.</li>
      </ul>
      <p>
        Les notifications push servent également aux demandes d'approbation administrateur.
        Elles ne contiennent aucune donnée de coffre.
      </p>
    </>
  ),
}
