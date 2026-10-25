import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const vaultExport: SectionTranslation = {
  title: 'Export et import des données',
  content: (
    <>
      <p>
        L'export est généré sur votre appareil et enregistré à l'emplacement que vous choisissez
        (dossier du téléphone ou partage vers une autre application). Trois formats sont proposés :
        chiffré biométrique (.enc), chiffré portable (.enc) et JSON en texte brut. Il inclut les
        adresses des sites (URL).
      </p>
      <Highlight>
        L'export JSON contient vos mots de passe <strong>en clair</strong>. Vous êtes seul
        responsable des fichiers exportés : Password Mobile App n'est pas responsable de leur
        stockage, partage, suppression ou perte une fois sortis de l'application.
      </Highlight>
      <p>
        L'import permet de restaurer un coffre depuis un fichier d'export compatible, ou
        d'importer un fichier CSV provenant d'un autre gestionnaire de mots de passe.
        Vérifiez soigneusement la provenance du fichier avant importation.
      </p>
    </>
  ),
}
