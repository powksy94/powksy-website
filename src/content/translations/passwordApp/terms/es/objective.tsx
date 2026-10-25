import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const objective: SectionTranslation = {
  title: 'Acerca de la aplicación',
  content: (
    <>
      <p>
        <strong>Password Mobile App</strong> (<code>com.passwordmobileapp.app</code>) es un
        gestor de contraseñas personal con bóveda cifrada, generador de contraseñas, análisis
        de salud de la bóveda, recordatorios de seguridad y funciones seguras de
        exportación/importación.
      </p>
      <ul>
        <li>Bóveda cifrada con <strong>AES-256-GCM</strong>: cifrado íntegramente en el cliente.</li>
        <li>Desbloqueo mediante <strong>contraseña maestra</strong> o <strong>biometría</strong> (huella digital / Face ID).</li>
        <li><strong>Generador</strong> de contraseñas personalizable.</li>
        <li><strong>Análisis de salud</strong>: detección de contraseñas débiles, reutilizadas o comprometidas.</li>
        <li><strong>Recordatorios de seguridad</strong> por notificación para las contraseñas débiles.</li>
        <li><strong>Exportación / importación</strong> de la bóveda (exportación protegida con biometría).</li>
      </ul>
    </>
  ),
}
