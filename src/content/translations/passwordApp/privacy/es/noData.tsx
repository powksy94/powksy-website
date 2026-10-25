import { BadgeNo } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const noData: SectionTranslation = {
  title: 'Datos no recopilados',
  content: (
    <ul>
      <li>
        Contraseña maestra <BadgeNo>nunca transmitida</BadgeNo>: nunca abandona su dispositivo.
        Solo se utiliza para derivar la clave de cifrado localmente.
      </li>
      <li>Contenido en texto plano de la bóveda <BadgeNo>inaccesible</BadgeNo>: cifrado antes del envío.</li>
      <li>Ubicación, contactos, historial de navegación <BadgeNo>no recopilados</BadgeNo>.</li>
      <li>Datos biométricos <BadgeNo>no recopilados</BadgeNo>: la verificación la realiza el sistema (Android Keystore / iOS Secure Enclave), no se transmite nada.</li>
    </ul>
  ),
}
