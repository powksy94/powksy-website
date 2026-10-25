import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const dataCollected: SectionTranslation = {
  title: 'Datos recopilados',
  content: (
    <ul>
      <li><strong>Dirección de correo electrónico</strong>: identificador de su cuenta.</li>
      <li><strong>Contraseña de inicio de sesión</strong>: almacenada con hash bcrypt en nuestros servidores. Nunca la conocemos en texto plano.</li>
      <li><strong>Salt de derivación</strong>: valor aleatorio utilizado para derivar su clave de cifrado en el cliente.</li>
      <li><strong>Bóveda cifrada</strong>: sus entradas (títulos, usuarios, contraseñas, direcciones de sitios, notas) se cifran con AES-256-GCM en su dispositivo antes de ser enviadas.</li>
      <li><strong>Rol de usuario</strong>: user / admin / team_admin (gestión interna).</li>
      <li><strong>Idioma de la aplicación</strong> (en / fr / es): utilizado para los correos electrónicos y las notificaciones.</li>
      <li><strong>Sesiones de inicio de sesión</strong>, <strong>códigos de restablecimiento</strong> y <strong>preferencias de recordatorios</strong>: detallados en las secciones siguientes.</li>
    </ul>
  ),
}
