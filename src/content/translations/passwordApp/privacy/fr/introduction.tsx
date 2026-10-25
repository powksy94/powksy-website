import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const introduction: SectionTranslation = {
  title: 'Introduction',
  content: (
    <>
      <p>
        <strong>Password Mobile App</strong> (<code>com.passwordmobileapp.app</code>) est un gestionnaire
        de mots de passe personnel. Cette politique décrit quelles données sont collectées,
        comment elles sont protégées, et quels droits vous avez sur celles-ci.
      </p>
      <Highlight>
        Principe fondamental : vos mots de passe sont chiffrés sur votre appareil avant
        d'être envoyés à nos serveurs. Nous ne pouvons techniquement pas lire votre coffre.
      </Highlight>
    </>
  ),
}
