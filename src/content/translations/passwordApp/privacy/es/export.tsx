import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const vaultExport: SectionTranslation = {
  title: 'Exportación de la bóveda',
  content: (
    <>
      <ul>
        <li>La exportación se genera <strong>en su dispositivo</strong>. Usted elige su destino (carpeta del teléfono, por ejemplo Descargas, o compartir con otra aplicación).</li>
        <li>La exportación incluye las direcciones de los sitios (URL).</li>
      </ul>
      <Highlight>
        El formato JSON contiene sus contraseñas <strong>en texto plano</strong>. Usted es el único
        responsable del almacenamiento y la eliminación de este archivo.
      </Highlight>
    </>
  ),
}
