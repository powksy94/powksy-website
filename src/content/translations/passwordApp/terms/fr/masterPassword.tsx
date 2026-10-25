import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const masterPassword: SectionTranslation = {
  title: 'Mot de passe maître',
  content: (
    <>
      <p>
        Le mot de passe maître ne quitte jamais votre appareil. Il est utilisé localement
        pour dériver la clé de chiffrement de votre coffre. Il n'est connu ni de l'éditeur ni
        du serveur, et ne peut être ni récupéré ni réinitialisé.
      </p>
      <p>
        La fonction <em>Mot de passe oublié</em> concerne uniquement le mot de passe de
        connexion, jamais le mot de passe maître.
      </p>
      <Highlight>
        <strong>Avertissement critique :</strong> sans votre mot de passe maître (ou l'empreinte
        sur l'appareil déjà configuré), votre coffre est <strong>définitivement inaccessible</strong>.
        L'éditeur ne peut pas le restaurer : nos serveurs ne stockent jamais votre mot de passe
        maître ni aucune clé permettant de déchiffrer vos données.
      </Highlight>
      <p>
        Conservez votre mot de passe maître dans un endroit sûr, distinct de l'application, et
        effectuez des exports réguliers de votre coffre.
      </p>
    </>
  ),
}
