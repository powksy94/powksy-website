import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const thirdParty: SectionTranslation = {
  title: 'Servicios de terceros',
  content: (
    <>
      <p>La aplicación utiliza los siguientes encargados del tratamiento:</p>
      <ul>
        <li><strong>Railway</strong>: alojamiento del servidor backend (Europa / EE. UU.).</li>
        <li><strong>MongoDB Atlas</strong>: almacenamiento de la bóveda cifrada.</li>
        <li><strong>PostgreSQL</strong> (alojado en Railway): cuentas, sesiones y preferencias.</li>
        <li><strong>Google Firebase Cloud Messaging</strong>: envío de notificaciones push (<a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">política de privacidad</a>).</li>
        <li><strong>Resend</strong>: envío de correos transaccionales, región Unión Europea (Irlanda) (<a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">política de privacidad</a>, <a href="https://resend.com/legal/dpa" target="_blank" rel="noopener noreferrer">DPA</a>).</li>
        <li><strong>Google AdMob</strong>: publicidad (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">política de privacidad</a>).</li>
      </ul>
      <p>
        Estos servicios tienen sus propias políticas de privacidad. El contenido de su bóveda solo
        se les transmite de forma cifrada.
      </p>
    </>
  ),
}
