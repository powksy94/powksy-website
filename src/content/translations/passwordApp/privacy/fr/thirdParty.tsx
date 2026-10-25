import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const thirdParty: SectionTranslation = {
  title: 'Services tiers',
  content: (
    <>
      <p>L'application utilise les sous-traitants suivants :</p>
      <ul>
        <li><strong>Railway</strong> : hébergement du serveur backend, région Union européenne (Amsterdam, Pays-Bas).</li>
        <li><strong>MongoDB Atlas</strong> : stockage du coffre chiffré.</li>
        <li><strong>PostgreSQL</strong> (hébergé sur Railway, même région) : comptes, sessions et préférences.</li>
        <li><strong>Google Firebase Cloud Messaging</strong> : envoi des notifications push (<a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>).</li>
        <li><strong>Resend</strong> : envoi des emails transactionnels, région Union européenne (Irlande) (<a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>, <a href="https://resend.com/legal/dpa" target="_blank" rel="noopener noreferrer">DPA</a>).</li>
        <li><strong>Google AdMob</strong> : affichage de publicités (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>).</li>
      </ul>
      <p>
        Ces services sont soumis à leurs propres politiques de confidentialité. Le contenu de
        votre coffre ne leur est transmis que sous forme chiffrée.
      </p>
    </>
  ),
}
