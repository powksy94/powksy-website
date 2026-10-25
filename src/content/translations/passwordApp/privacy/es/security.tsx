import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const security: SectionTranslation = {
  title: 'Seguridad',
  content: (
    <>
      <ul>
        <li>Cifrado: <strong>AES-256-GCM</strong> (bóveda), derivación de clave <strong>PBKDF2-SHA256</strong> (100 000 iteraciones).</li>
        <li>Hash de contraseñas: <strong>bcrypt</strong> (lado servidor).</li>
        <li>Transporte: <strong>HTTPS / TLS</strong> exclusivamente.</li>
        <li>Bloqueo automático de la bóveda tras <strong>5 minutos</strong> de inactividad.</li>
        <li>Limitación del número de solicitudes por dirección IP (inicio de sesión, restablecimiento): la IP se trata en memoria, no se almacena en base de datos y se conserva como máximo <strong>15 minutos</strong>.</li>
        <li>Registros del servidor: únicamente el identificador interno del usuario. Nunca contraseñas, códigos ni contenido de la bóveda.</li>
      </ul>
      <Highlight>
        Arquitectura de conocimiento cero: incluso si nuestros servidores se vieran
        comprometidos, sus contraseñas permanecen ilegibles sin su contraseña maestra.
      </Highlight>
    </>
  ),
}
