import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const vaultExport: SectionTranslation = {
  title: 'Exportación e importación de datos',
  content: (
    <>
      <p>
        La exportación se genera en su dispositivo, tras una autenticación biométrica, y se guarda
        en la ubicación que usted elija (carpeta del teléfono o compartir con otra aplicación).
        Incluye las direcciones de los sitios (URL).
      </p>
      <Highlight>
        La exportación JSON contiene sus contraseñas <strong>en texto plano</strong>. Usted es el
        único responsable de los archivos exportados: Password Mobile App no se hace responsable
        de su almacenamiento, uso compartido, eliminación o pérdida una vez que han salido de la
        aplicación.
      </Highlight>
      <p>
        La importación permite restaurar una bóveda desde un archivo de exportación compatible.
        Verifique siempre la procedencia del archivo antes de importarlo.
      </p>
    </>
  ),
}
