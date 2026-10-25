import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const passwordReset: SectionTranslation = {
  title: 'Restablecimiento de la contraseña por correo electrónico',
  content: (
    <>
      <p>
        La función <em>He olvidado mi contraseña</em> le permite definir una nueva contraseña de
        inicio de sesión mediante un código de un solo uso enviado por correo electrónico.
      </p>
      <ul>
        <li><strong>Datos tratados</strong>: dirección de correo de la cuenta, idioma de la aplicación, código de un solo uso.</li>
        <li>El código se almacena únicamente como <strong>hash (HMAC)</strong>. Es válido durante <strong>15 minutos</strong>, con un máximo de <strong>5 intentos</strong>, y después se elimina automáticamente (purga diaria, como máximo 2 días después de su caducidad).</li>
        <li>El servidor no revela si una dirección de correo tiene una cuenta.</li>
        <li>Un restablecimiento correcto <strong>cierra inmediatamente la sesión en todos los dispositivos</strong> de la cuenta, incluido aquel desde el que se realiza.</li>
      </ul>
      <Highlight>
        Solo se restablece la contraseña de inicio de sesión. Su contraseña maestra y el
        contenido de su bóveda no pueden consultarse ni modificarse por este medio.
      </Highlight>
      <p>
        Los correos se envían desde <code>no-reply@powksy.com</code> a través de nuestro encargado
        del tratamiento <strong>Resend</strong>, región de envío Unión Europea (Irlanda).
      </p>
    </>
  ),
}
