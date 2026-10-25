import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const security: SectionTranslation = {
  title: 'Seguridad y cifrado',
  content: (
    <ul>
      <li>Cifrado <strong>AES-256-GCM</strong> en el cliente: clave derivada localmente mediante <strong>PBKDF2-SHA256</strong> (100 000 iteraciones).</li>
      <li>Nuestros servidores solo reciben y almacenan <strong>blobs cifrados</strong>: sus contraseñas nunca se transmiten en texto plano.</li>
      <li>El desbloqueo biométrico es gestionado exclusivamente por <strong>Android Keystore / iOS Secure Enclave</strong>: no se transmiten datos biométricos.</li>
      <li>La bóveda se <strong>bloquea automáticamente</strong> tras 5 minutos de inactividad.</li>
      <li>Las notificaciones push de Firebase se usan para los recordatorios de seguridad y las solicitudes de aprobación del administrador. No contienen datos de la bóveda.</li>
    </ul>
  ),
}
