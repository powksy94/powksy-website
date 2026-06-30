import { Highlight } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const es: PolicyTranslation = {
  docLabel: 'Condiciones de uso',
  updatedLabel: 'junio 2026',
  sections: {
    objective: {
      title: 'Acerca de la aplicación',
      content: (
        <>
          <p>
            <strong>Password Mobile App</strong> (<code>com.passwordmobileapp.app</code>) es un
            gestor de contraseñas personal con bóveda cifrada, generador de contraseñas, análisis
            de salud de la bóveda y funciones seguras de exportación/importación.
          </p>
          <ul>
            <li>Bóveda cifrada con <strong>AES-256-GCM</strong> — cifrado íntegramente en el cliente.</li>
            <li>Desbloqueo mediante <strong>contraseña maestra</strong> o <strong>biometría</strong> (huella digital / Face ID).</li>
            <li><strong>Generador</strong> de contraseñas personalizable.</li>
            <li><strong>Análisis de salud</strong> — detección de contraseñas débiles, reutilizadas o comprometidas.</li>
            <li><strong>Exportación / importación</strong> de la bóveda (CSV, exportación protegida con biometría).</li>
          </ul>
        </>
      ),
    },
    conditions: {
      title: 'Condiciones de uso',
      content: (
        <ul>
          <li>Debe crear una cuenta con información exacta y actualizada.</li>
          <li>Solo se permite una cuenta por persona.</li>
          <li>La aplicación está destinada a un <strong>uso personal exclusivo</strong>. Queda prohibido cualquier uso comercial no autorizado o redistribución.</li>
          <li>Usted es responsable de mantener la confidencialidad de sus credenciales de acceso.</li>
        </ul>
      ),
    },
    masterPassword: {
      title: 'Contraseña maestra',
      content: (
        <>
          <p>
            La contraseña maestra nunca abandona su dispositivo. Se utiliza localmente para
            derivar la clave de cifrado de su bóveda y nunca se transmite a nuestros servidores.
          </p>
          <Highlight>
            <strong>Advertencia crítica:</strong> la pérdida de su contraseña maestra implica
            la pérdida <strong>definitiva e irreversible</strong> del acceso a su bóveda. No
            existe ningún procedimiento de recuperación — nuestros servidores nunca almacenan
            su contraseña maestra ni ninguna clave que permita descifrar sus datos.
          </Highlight>
          <p>Guarde su contraseña maestra en un lugar seguro, separado de la aplicación.</p>
        </>
      ),
    },
    security: {
      title: 'Seguridad y cifrado',
      content: (
        <ul>
          <li>Cifrado <strong>AES-256-GCM</strong> en el cliente — clave derivada localmente mediante <strong>PBKDF2-SHA256</strong> (100 000 iteraciones).</li>
          <li>Nuestros servidores solo reciben y almacenan <strong>blobs cifrados</strong> — sus contraseñas nunca se transmiten en texto plano.</li>
          <li>El desbloqueo biométrico es gestionado exclusivamente por <strong>Android Keystore / iOS Secure Enclave</strong> — no se transmiten datos biométricos.</li>
          <li>La bóveda se <strong>bloquea automáticamente</strong> tras 5 minutos de inactividad.</li>
          <li>Las notificaciones push de Firebase se usan únicamente para solicitudes de aprobación del administrador — no contienen datos de la bóveda.</li>
        </ul>
      ),
    },
    export: {
      title: 'Exportación e importación de datos',
      content: (
        <>
          <p>
            La exportación CSV genera un archivo con todas sus contraseñas en texto plano.
            Esta operación está protegida por autenticación biométrica antes de su generación.
          </p>
          <Highlight>
            Una vez descargado, el archivo CSV contiene datos sensibles <strong>en texto plano</strong>.
            Usted es el único responsable — Password Mobile App no se hace responsable de su
            almacenamiento, uso compartido o pérdida una vez que ha salido de la aplicación.
          </Highlight>
          <p>
            La importación permite restaurar una bóveda desde un archivo de exportación compatible.
            Verifique siempre la procedencia del archivo antes de importarlo.
          </p>
        </>
      ),
    },
    ads: {
      title: 'Publicidad',
      content: (
        <>
          <p>La aplicación integra <strong>Google AdMob</strong> para mostrar anuncios publicitarios.</p>
          <ul>
            <li>Google puede recopilar ciertos datos con fines publicitarios, conforme a su propia <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">política de privacidad</a>.</li>
            <li>Los anuncios pueden limitarse a través de la configuración de personalización de su cuenta de Google.</li>
          </ul>
        </>
      ),
    },
    liability: {
      title: 'Limitación de responsabilidad',
      content: (
        <ul>
          <li>Password Mobile App es una herramienta de gestión local — no garantizamos la disponibilidad continua del servicio ni la ausencia de pérdidas de datos derivadas de eventos técnicos.</li>
          <li>No somos responsables de la pérdida de datos causada por el olvido de la contraseña maestra, la eliminación de la cuenta o el uso incorrecto de la función de exportación/importación.</li>
          <li>La aplicación no se responsabiliza de las consecuencias derivadas de un compromiso de su dispositivo o de sus datos biométricos locales.</li>
        </ul>
      ),
    },
    account: {
      title: 'Cuenta y baja',
      content: (
        <ul>
          <li>
            Puede eliminar su cuenta en cualquier momento desde{' '}
            <em>Ajustes → Eliminar mi cuenta</em>. Esta acción borra definitivamente su bóveda
            cifrada de nuestros servidores, sus datos de cuenta y su historial.
          </li>
          <li>Sin su contraseña maestra, no es posible ninguna restauración tras la eliminación.</li>
          <li>Password Mobile App se reserva el derecho de suspender una cuenta en caso de uso abusivo.</li>
        </ul>
      ),
    },
    law: {
      title: 'Legislación aplicable',
      content: (
        <p>
          Las presentes condiciones se rigen por el derecho francés. Cualquier litigio relativo
          a su interpretación o ejecución corresponderá a los tribunales competentes franceses.
        </p>
      ),
    },
    contact: {
      title: 'Contacto',
      content: (
        <p>
          Para cualquier consulta sobre estas condiciones, contáctenos en:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
