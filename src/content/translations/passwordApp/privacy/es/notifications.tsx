import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const notifications: SectionTranslation = {
  title: 'Recordatorios de seguridad (notificaciones push)',
  content: (
    <>
      <ul>
        <li><strong>Datos</strong>: token de notificación de Firebase Cloud Messaging (FCM), idioma de la aplicación, preferencias de recordatorio (activación, inclusión de debilidades medias, plazos).</li>
        <li>Para cada elemento de la bóveda: fecha desde la que se considera «débil» o «media», y nivel de recordatorio alcanzado.</li>
        <li>El nivel de robustez se <strong>calcula en su dispositivo</strong>. El servidor nunca lee el contenido de sus contraseñas.</li>
        <li>Los recordatorios pueden desactivarse en cualquier momento en <em>Ajustes → Recordatorios de seguridad</em>.</li>
      </ul>
      <p>
        Las notificaciones push también se usan para las solicitudes de aprobación del
        administrador. No contienen ningún dato de la bóveda.
      </p>
    </>
  ),
}
