import { Highlight, BadgeNo, BadgeYes } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const es: PolicyTranslation = {
  docLabel: 'Política de Privacidad',
  updatedLabel: 'octubre de 2026',
  sections: {
    introduction: {
      title: 'Introducción',
      content: (
        <>
          <p>
            <strong>Nocturne</strong> (<code>com.nocturne.app</code>) es una app de citas dedicada a
            la comunidad alternativa y gótica. Esta política describe qué datos se recopilan, cómo
            se protegen y qué derechos tienes sobre ellos.
          </p>
          <Highlight>
            Nocturne es solo para adultos. El acceso está estrictamente limitado a usuarios de{' '}
            <strong>18 años o más</strong>.
          </Highlight>
        </>
      ),
    },
    dataCollected: {
      title: 'Datos recopilados',
      content: (
        <ul>
          <li><strong>Cuenta</strong>:email y contraseña (almacenada como hash bcrypt en nuestros servidores).</li>
          <li><strong>Perfil</strong>:nombre de usuario, bio, fecha de nacimiento/edad, género, preferencias de género, pronombres, fotos, preferencias musicales/estéticas, enlaces a redes sociales, eventos seguidos.</li>
          <li><strong>Ubicación</strong>:posición GPS utilizada para el emparejamiento por proximidad y el filtrado por distancia.</li>
          <li><strong>Actividad</strong>:likes, matches, mensajes, elegías (mensajes de apertura), visitas al perfil, contador diario de swipes.</li>
          <li><strong>Suscripción</strong>:plan elegido (Ombre / Nocturne / Abyssal) y periodo de suscripción.</li>
          <li><strong>Pagos de eventos</strong>:importe y estado de la transacción (procesado vía Stripe) para eventos de pago.</li>
          <li><strong>Técnico</strong>:token de notificaciones push (FCM), token de actualización (JWT, válido 1h; refresh token 30 días).</li>
          <li><strong>Códigos de verificación</strong>: códigos de un solo uso de 6 dígitos enviados por email (verificación de email al registrarse, restablecimiento de contraseña).</li>
          <li><strong>Integridad del dispositivo</strong>: token de Google Play Integrity enviado al registrarse (ver "Prevención del fraude").</li>
        </ul>
      ),
    },
    emailVerification: {
      title: 'Verificación de email y restablecimiento de contraseña',
      content: (
        <>
          <ul>
            <li>Al registrarte, se envía un <strong>código de 6 dígitos</strong> a tu dirección de email para confirmar que eres su titular. Esta verificación es <strong>obligatoria</strong> antes de que tu cuenta esté completamente activada.</li>
            <li>La función <em>Contraseña olvidada</em> también envía un código de un solo uso de 6 dígitos para establecer una nueva contraseña.</li>
            <li><strong>Datos tratados</strong>: tu dirección de email y el contenido del email (el código de un solo uso). No se recopila ninguna categoría de datos nueva: el email ya era el identificador de tu cuenta.</li>
          </ul>
          <p>
            Los emails son enviados por nuestro proveedor <strong>Resend</strong>, una empresa con
            sede en Estados Unidos (ver "Servicios de terceros").
          </p>
        </>
      ),
    },
    fraudPrevention: {
      title: 'Prevención del fraude (Google Play Integrity)',
      content: (
        <>
          <p>
            El registro está protegido por <strong>Google Play Integrity</strong>, a través de
            Firebase App Check. La app envía un token de integridad que demuestra que se ejecuta en
            un dispositivo Android genuino, sin modificar, e instalada desde una fuente de confianza.
          </p>
          <ul>
            <li><strong>Datos tratados</strong>: señales técnicas del dispositivo (integridad del sistema, firma de la app y origen de instalación), verificadas por Google.</li>
            <li><strong>Finalidad</strong>: prevenir el fraude, las cuentas falsas y los registros automatizados.</li>
            <li>Estas señales no se utilizan para identificarte personalmente ni con fines publicitarios.</li>
          </ul>
        </>
      ),
    },
    noData: {
      title: 'Datos no recopilados',
      content: (
        <ul>
          <li>Historial de navegación fuera de la app <BadgeNo>no recopilado</BadgeNo>.</li>
          <li>
            Datos biométricos <BadgeNo>no recopilados</BadgeNo>, excepto el desbloqueo local mediante huella dactilar/Face ID a través de <code>local_auth</code>, que nunca sale de tu dispositivo.
          </li>
          <li>Contactos del teléfono <BadgeNo>no recopilados</BadgeNo>.</li>
        </ul>
      ),
    },
    security: {
      title: 'Seguridad',
      content: (
        <ul>
          <li>Hash de contraseñas: <strong>bcrypt</strong> (del lado del servidor).</li>
          <li>Transporte: <strong>HTTPS / TLS</strong> exclusivamente.</li>
          <li>Autenticación mediante <strong>JWT</strong> (válido 1h) con <strong>refresh token</strong> rotatorio (30 días).</li>
          <li><code>usesCleartextTraffic</code> desactivado en Android.</li>
        </ul>
      ),
    },
    thirdParty: {
      title: 'Servicios de terceros',
      content: (
        <>
          <p>La app utiliza los siguientes servicios:</p>
          <ul>
            <li><strong>Railway</strong>:alojamiento del servidor backend.</li>
            <li><strong>MongoDB Atlas</strong>:base de datos.</li>
            <li><strong>Cloudinary</strong>:alojamiento de fotos de perfil.</li>
            <li><strong>Firebase / Google</strong>:notificaciones push vía FCM, y verificaciones de integridad del dispositivo al registrarse vía App Check / Play Integrity (<a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">política de privacidad</a>).</li>
            <li><strong>RevenueCat</strong>:gestión de suscripciones y compras dentro de la app.</li>
            <li><strong>Stripe</strong>:procesamiento de pagos para eventos de pago.</li>
            <li><strong>Resend</strong>:envío de emails transaccionales (códigos de verificación y restablecimiento) (<a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">política de privacidad</a>, <a href="https://resend.com/legal/dpa" target="_blank" rel="noopener noreferrer">DPA</a>).</li>
          </ul>
          <p>Estos servicios están sujetos a sus propias políticas de privacidad.</p>
          <p>
            Resend es una empresa con sede en Estados Unidos. Las transferencias de datos fuera de la
            Unión Europea se rigen por su Acuerdo de Tratamiento de Datos (DPA), que se basa en las
            Cláusulas Contractuales Tipo de la Comisión Europea, y por su certificación bajo el Marco
            de Privacidad de Datos UE-EE. UU.
          </p>
        </>
      ),
    },
    retention: {
      title: 'Conservación de datos',
      content: (
        <p>
          Tus datos se conservan mientras tu cuenta esté activa. La eliminación de la cuenta está
          disponible directamente en la app (<em>Ajustes → Eliminar mi cuenta</em>), lo que borra
          permanentemente: tu perfil, las fotos en Cloudinary, los mensajes, matches, likes, elegías,
          y te elimina de los eventos seguidos.
        </p>
      ),
    },
    rights: {
      title: 'Tus derechos (RGPD)',
      content: (
        <>
          <p>Conforme al Reglamento General de Protección de Datos (RGPD):</p>
          <ul>
            <li><BadgeYes>Acceso</BadgeYes>:puedes solicitar acceso a todos tus datos.</li>
            <li><BadgeYes>Rectificación</BadgeYes>:puedes actualizar tus datos en cualquier momento desde la app.</li>
            <li><BadgeYes>Eliminación</BadgeYes>:eliminación completa de la cuenta y los datos a través de la app.</li>
            <li><BadgeYes>Portabilidad</BadgeYes>:exportación de datos disponible previa solicitud.</li>
          </ul>
        </>
      ),
    },
    contact: {
      title: 'Contacto',
      content: (
        <p>
          Para cualquier pregunta relativa a tus datos personales, contáctanos en:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
