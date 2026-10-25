import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const deviceData: SectionTranslation = {
  title: 'Datos almacenados en el dispositivo',
  content: (
    <ul>
      <li>La clave de la bóveda puede conservarse en el dispositivo, protegida por el hardware seguro (Android Keystore) y la huella digital. <strong>Nunca abandona el dispositivo</strong>.</li>
      <li>Tras la caducidad de la sesión, la huella puede sustituir a la contraseña maestra al volver a iniciar sesión, únicamente en el dispositivo ya utilizado y solo después de comprobar que la clave descifra correctamente la bóveda.</li>
      <li>Su dirección de correo permanece guardada en el dispositivo tras un cierre de sesión simple, para rellenar la pantalla de inicio de sesión. Se borra con un cierre de sesión completo o con la eliminación de la cuenta.</li>
      <li>No se recopila ningún dato biométrico: la verificación la realiza el sistema.</li>
    </ul>
  ),
}
