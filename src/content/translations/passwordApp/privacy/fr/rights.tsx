import { BadgeYes } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const rights: SectionTranslation = {
  title: 'Vos droits (RGPD)',
  content: (
    <>
      <p>Conformément au Règlement Général sur la Protection des Données (RGPD) :</p>
      <ul>
        <li><BadgeYes>Accès</BadgeYes> : vous pouvez exporter l'intégralité de votre coffre depuis l'application.</li>
        <li><BadgeYes>Rectification</BadgeYes> : vous pouvez modifier vos données à tout moment.</li>
        <li><BadgeYes>Suppression</BadgeYes> : suppression complète du compte et des données via l'application.</li>
        <li><BadgeYes>Portabilité</BadgeYes> : export en JSON ou fichier chiffré (.enc).</li>
        <li><BadgeYes>Opposition</BadgeYes> : vous pouvez désactiver les rappels de sécurité à tout moment.</li>
      </ul>
    </>
  ),
}
