import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const sessions: SectionTranslation = {
  title: 'Sesiones de inicio de sesión',
  content: (
    <>
      <ul>
        <li>Un <strong>token de sesión</strong> (refresh token) se almacena de forma segura en su dispositivo, y únicamente como hash (SHA-256) en nuestros servidores.</li>
        <li>Duración: <strong>60 días renovables</strong> (se prolonga con cada uso), con un token de acceso de corta duración que se renueva automáticamente.</li>
        <li>El servidor registra la fecha del último cambio o restablecimiento de su contraseña: cualquier token emitido antes de esa fecha se rechaza inmediatamente.</li>
        <li>Revocación: cierre de sesión, cambio o restablecimiento de la contraseña (todas las sesiones, efecto inmediato), eliminación de la cuenta (efecto inmediato).</li>
        <li>Los tokens revocados se purgan a los 30 días, los tokens caducados a diario.</li>
      </ul>
      <p>
        Finalidad: permitirle mantener la sesión iniciada sin volver a introducir sus credenciales,
        detectar un posible robo de sesión y cortar el acceso de los demás dispositivos tras un
        cambio de contraseña.
      </p>
    </>
  ),
}
