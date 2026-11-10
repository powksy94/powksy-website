import { Highlight } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const es: PolicyTranslation = {
  docLabel: 'Condiciones de uso',
  updatedLabel: 'noviembre de 2026',
  sections: {
    acceptance: {
      title: 'Aceptación de las condiciones',
      content: (
        <p>
          Daily Facts es una aplicación publicada por <strong>Powksy</strong>. El uso de la aplicación
          implica la aceptación de las presentes condiciones. El usuario que no las acepte debe dejar
          de utilizar la aplicación.
        </p>
      ),
    },
    objective: {
      title: 'Objeto del servicio',
      content: (
        <>
          <p>
            <strong>Daily Facts</strong> (<code>com.uzan.dailyfacts</code>) ofrece cada día un dato o
            una anécdota por categoría: historia, ciencias, deporte, arte, cine, música, salud,
            inventos, etc. La aplicación está disponible en Android (Google Play).
          </p>
          <ul>
            <li>Una parte de los contenidos la redacta el editor y otra procede de servicios de terceros (<strong>API Ninjas</strong>).</li>
            <li>Las imágenes proceden principalmente de <strong>Wikipedia / Wikimedia Commons</strong>.</li>
            <li>Los contenidos se redactan en inglés y se traducen automáticamente (<strong>Google Translate</strong>) al francés y al español. Las traducciones pueden contener errores.</li>
          </ul>
        </>
      ),
    },
    account: {
      title: 'Cuenta de usuario',
      content: (
        <ul>
          <li>El registro se realiza con una dirección de correo electrónico y una contraseña, mediante <strong>Firebase Authentication</strong>.</li>
          <li>Los datos vinculados a la cuenta (nombre, correo electrónico, categorías elegidas, favoritos) se almacenan en <strong>Firebase Firestore</strong>.</li>
          <li>El usuario proporciona información exacta y es responsable de la confidencialidad de sus credenciales.</li>
        </ul>
      ),
    },
    subscriptions: {
      title: 'Suscripción y pagos',
      content: (
        <ul>
          <li><strong>Daily Facts Premium</strong> es una suscripción mensual o anual de renovación automática. Se compra a través de <strong>Google Play</strong> y se gestiona con <strong>RevenueCat</strong>.</li>
          <li>Incluye favoritos ilimitados sincronizados en todos los dispositivos, una aplicación sin publicidad y acceso prioritario a las nuevas categorías.</li>
          <li>La suscripción se renueva automáticamente, salvo cancelación en los ajustes de Play Store <strong>antes del final del periodo en curso</strong>.</li>
          <li>Los reembolsos siguen la política de Google Play.</li>
          <li>El botón <em>Restaurar compras</em> de la aplicación permite recuperar una suscripción ya comprada.</li>
        </ul>
      ),
    },
    ads: {
      title: 'Publicidad',
      content: (
        <ul>
          <li>Los usuarios de la versión gratuita ven anuncios servidos por <strong>Google AdMob</strong>. Los suscriptores Premium no ven ninguno.</li>
          <li>Google puede recopilar ciertos datos con fines publicitarios, de acuerdo con su propia <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">política de privacidad</a>.</li>
        </ul>
      ),
    },
    content: {
      title: 'Contenidos y propiedad intelectual',
      content: (
        <ul>
          <li>La aplicación y los contenidos redactados por el editor están protegidos por el derecho de propiedad intelectual. Queda prohibida toda reproducción o redistribución no autorizada.</li>
          <li>Los contenidos proporcionados por servicios de terceros (<strong>API Ninjas</strong>) siguen sujetos a las condiciones de dichos servicios.</li>
          <li>Las imágenes de <strong>Wikipedia / Wikimedia Commons</strong> siguen sujetas a sus propias licencias, definidas por sus autores.</li>
        </ul>
      ),
    },
    liability: {
      title: 'Limitación de responsabilidad',
      content: (
        <>
          <p>
            Los contenidos se ofrecen con fines <strong>exclusivamente informativos y de entretenimiento</strong>.
            No se garantiza su exactitud, exhaustividad ni actualidad, en particular en el caso de los
            contenidos de terceros y las traducciones automáticas.
          </p>
          <Highlight>
            Las categorías de salud (salud general, salud mental, medicamentos, trastornos raros){' '}
            <strong>no constituyen consejo médico</strong>. Ante cualquier duda sobre su salud, el
            usuario debe consultar a un profesional sanitario.
          </Highlight>
          <p>No se garantiza la disponibilidad continua del servicio.</p>
        </>
      ),
    },
    thirdParty: {
      title: 'Servicios de terceros',
      content: (
        <>
          <p>La aplicación utiliza servicios de terceros, cada uno sujeto a sus propias condiciones:</p>
          <ul>
            <li><strong>Firebase Authentication</strong> y <strong>Firestore</strong>: cuenta y datos asociados.</li>
            <li><strong>Firebase Cloud Messaging</strong>: notificaciones.</li>
            <li><strong>Firebase Analytics</strong>: estadísticas de uso.</li>
            <li><strong>Google AdMob</strong>: publicidad.</li>
            <li><strong>RevenueCat</strong> y <strong>Google Play</strong>: suscripciones.</li>
            <li><strong>API Ninjas</strong>, <strong>Wikipedia / Wikimedia Commons</strong> y <strong>Google Translate</strong>: contenidos, imágenes y traducciones.</li>
          </ul>
        </>
      ),
    },
    termination: {
      title: 'Cuenta y rescisión',
      content: (
        <ul>
          <li>
            El usuario puede eliminar su cuenta y los datos asociados en cualquier momento siguiendo el
            procedimiento descrito en la página{' '}
            <a href="/daily-facts/delete-account?lang=es">Eliminación de cuenta</a>.
          </li>
          <li>Eliminar la cuenta no cancela una suscripción Premium activa: la cancelación se realiza en los ajustes de Play Store.</li>
          <li>Daily Facts se reserva el derecho de suspender o eliminar una cuenta que incumpla las presentes condiciones.</li>
        </ul>
      ),
    },
    changes: {
      title: 'Modificación de las condiciones',
      content: (
        <p>
          Las presentes condiciones pueden modificarse, en particular para reflejar la evolución de la
          aplicación. La fecha de la última actualización figura en la parte superior de esta página.
          Seguir utilizando la aplicación implica la aceptación de las condiciones actualizadas.
        </p>
      ),
    },
    law: {
      title: 'Legislación aplicable',
      content: (
        <p>
          Las presentes condiciones se rigen por la legislación francesa. Cualquier litigio relativo a
          su interpretación o ejecución será competencia de los tribunales franceses competentes.
        </p>
      ),
    },
    contact: {
      title: 'Contacto',
      content: (
        <p>
          Para cualquier pregunta sobre las presentes condiciones de uso, contáctenos en:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
