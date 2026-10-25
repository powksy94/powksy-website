import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const sessions: SectionTranslation = {
  title: 'Sesiones y seguridad de la cuenta',
  content: (
    <ul>
      <li>Cambiar su contraseña <strong>cierra inmediatamente la sesión en todos los demás dispositivos</strong>.</li>
      <li>El restablecimiento mediante <em>He olvidado mi contraseña</em> <strong>cierra inmediatamente la sesión en todos los dispositivos</strong>, incluido el utilizado.</li>
      <li>Si se detecta la reutilización de un token de sesión robado, la sesión se revoca y debe volver a iniciar sesión.</li>
    </ul>
  ),
}
