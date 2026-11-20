import { Highlight, BadgeNo } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const es: PolicyTranslation = {
  docLabel: 'Términos de Servicio',
  updatedLabel: 'octubre de 2026',
  sections: {
    objective: {
      title: 'Sobre el servicio',
      content: (
        <>
          <p>
            <strong>Nocturne</strong> (<code>com.nocturne.app</code>) es una app de contactos
            sociales para adultos, reservada a la comunidad alternativa y gótica.
          </p>
          <Highlight>
            El uso de Nocturne está estrictamente reservado a usuarios de <strong>18 años o más</strong>.
          </Highlight>
        </>
      ),
    },
    registration: {
      title: 'Requisitos de registro',
      content: (
        <ul>
          <li>Los usuarios deben tener al menos <strong>18 años</strong> para crear una cuenta.</li>
          <li>Una cuenta por persona real: la información proporcionada debe ser exacta, sin suplantación ni perfiles falsos.</li>
          <li>Solo se permite una cuenta por persona.</li>
          <li>Tu dirección de email debe estar <strong>verificada</strong> con el código de 6 dígitos enviado al registrarte. Hasta entonces, la cuenta puede permanecer incompleta o inactiva.</li>
          <li>Debes mantener el acceso al email de tu cuenta: también se usa para restablecer tu contraseña.</li>
        </ul>
      ),
    },
    fraud: {
      title: 'Cuentas automatizadas y fraude',
      content: (
        <ul>
          <li>Está prohibido crear cuentas de forma automatizada o fraudulenta (bots, scripts, registros masivos, dispositivos o apps modificados).</li>
          <li>El registro verifica la integridad del dispositivo mediante <strong>Google Play Integrity</strong>. Un registro puede ser rechazado si esta verificación falla, por ejemplo en un dispositivo modificado o con una app que no fue instalada desde una fuente de confianza.</li>
          <li>Cualquier abuso de las funciones de registro o restablecimiento de contraseña (solicitudes repetidas, intentos sobre cuentas de otras personas) puede dar lugar a límites técnicos y a la suspensión de la cuenta implicada.</li>
        </ul>
      ),
    },
    prohibitions: {
      title: 'Normas de conducta y contenido prohibido',
      content: (
        <ul>
          <li>El acoso, el discurso de odio, la discriminación y el contenido ilegal están prohibidos.</li>
          <li>El contenido pornográfico y la solicitud comercial o la prostitución están <BadgeNo>prohibidos</BadgeNo>.</li>
          <li>Los nombres de usuario y mensajes están sujetos a moderación automática mediante una lista de palabras bloqueadas.</li>
          <li>Las infracciones pueden dar lugar a la suspensión o eliminación de la cuenta sin previo aviso.</li>
        </ul>
      ),
    },
    reporting: {
      title: 'Denuncias y bloqueos',
      content: (
        <p>
          Cada usuario puede denunciar o bloquear a otro usuario directamente desde la app. Las
          denuncias se revisan y pueden dar lugar a sanciones: advertencia, suspensión o eliminación
          permanente de la cuenta.
        </p>
      ),
    },
    subscriptions: {
      title: 'Suscripciones y pagos',
      content: (
        <ul>
          <li>Hay tres planes disponibles: <strong>Ombre</strong> (gratuito), <strong>Nocturne</strong> y <strong>Abyssal</strong> (de pago).</li>
          <li>La facturación de los planes de pago la gestiona <strong>Google Play</strong>, según el periodo elegido (semanal, mensual o anual).</li>
          <li>
            Las suscripciones se pueden cancelar en cualquier momento desde los ajustes de la app o
            desde Google Play. No se emite ningún reembolso prorrateado por el periodo de facturación
            en curso, salvo que la ley lo exija.
          </li>
          <li>
            Los eventos de pago se facturan a través de <strong>Stripe</strong>. En virtud del
            artículo L221-28 12° del Código de Consumo francés (servicios de ocio prestados en una
            fecha específica), el derecho de desistimiento de 14 días no se aplica: las entradas no
            son reembolsables por un simple cambio de opinión, salvo en caso de cancelación o
            modificación sustancial del evento por parte del organizador.
          </li>
        </ul>
      ),
    },
    liability: {
      title: 'Responsabilidad y seguridad',
      content: (
        <>
          <p>
            Nocturne es un servicio de emparejamiento: no verificamos la identidad real de los
            usuarios ni garantizamos la exactitud de los perfiles.
          </p>
          <p>
            La app no es responsable de las interacciones entre usuarios, incluidos los encuentros en
            persona. Cada usuario es el único responsable de su propia seguridad.
          </p>
          <Highlight>
            Por tu seguridad, te recomendamos quedar por primera vez en un lugar público e informar a
            alguien de confianza sobre el encuentro.
          </Highlight>
        </>
      ),
    },
    account: {
      title: 'Cuenta y baja',
      content: (
        <ul>
          <li>
            Los usuarios pueden eliminar su cuenta en cualquier momento desde la app. Esto borra
            permanentemente el perfil, las fotos, los mensajes y los matches asociados a la cuenta.
          </li>
          <li>
            Nocturne se reserva el derecho de suspender o eliminar una cuenta en caso de
            incumplimiento de estos términos.
          </li>
        </ul>
      ),
    },
    law: {
      title: 'Ley aplicable',
      content: (
        <p>
          Estos términos se rigen por la legislación francesa. Cualquier disputa relativa a su
          interpretación o aplicación está sujeta a la jurisdicción de los tribunales franceses
          competentes.
        </p>
      ),
    },
    contact: {
      title: 'Contacto',
      content: (
        <p>
          Para cualquier pregunta sobre estos términos de servicio, contáctanos en:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
