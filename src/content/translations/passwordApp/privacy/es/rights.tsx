import { BadgeYes } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const rights: SectionTranslation = {
  title: 'Sus derechos (RGPD)',
  content: (
    <>
      <p>De conformidad con el Reglamento General de Protección de Datos (RGPD):</p>
      <ul>
        <li><BadgeYes>Acceso</BadgeYes>: puede exportar toda su bóveda desde la aplicación.</li>
        <li><BadgeYes>Rectificación</BadgeYes>: puede modificar sus datos en cualquier momento.</li>
        <li><BadgeYes>Supresión</BadgeYes>: eliminación completa de la cuenta y los datos a través de la aplicación.</li>
        <li><BadgeYes>Portabilidad</BadgeYes>: exportación en JSON o archivo cifrado (.enc).</li>
        <li><BadgeYes>Oposición</BadgeYes>: puede desactivar los recordatorios de seguridad en cualquier momento.</li>
      </ul>
    </>
  ),
}
