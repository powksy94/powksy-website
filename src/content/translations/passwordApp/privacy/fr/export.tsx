import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const vaultExport: SectionTranslation = {
  title: 'Export du coffre',
  content: (
    <>
      <ul>
        <li>L'export est généré <strong>sur votre appareil</strong>. Vous choisissez sa destination (dossier du téléphone, par exemple Téléchargements, ou partage vers une autre application).</li>
        <li>L'export inclut les adresses des sites (URL).</li>
      </ul>
      <Highlight>
        Le format JSON contient vos mots de passe <strong>en clair</strong>. Vous êtes seul
        responsable du stockage et de la suppression de ce fichier.
      </Highlight>
    </>
  ),
}
