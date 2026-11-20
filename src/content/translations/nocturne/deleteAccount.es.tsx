import { Highlight } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const es: PolicyTranslation = {
  docLabel: 'Eliminación de cuenta',
  updatedLabel: 'agosto de 2026',
  sections: {
    appMethod: {
      title: 'Desde la app',
      content: (
        <p>
          Puedes eliminar tu cuenta de Nocturne en cualquier momento, directamente desde la app:{' '}
          <strong>Ajustes → Eliminar mi cuenta</strong>.
        </p>
      ),
    },
    dataDeleted: {
      title: 'Datos eliminados',
      content: (
        <>
          <p>Esto borra inmediata y permanentemente:</p>
          <ul>
            <li>tu perfil y fotos</li>
            <li>tus mensajes y conversaciones</li>
            <li>tus matches, likes y elegías</li>
            <li>tus inscripciones a eventos</li>
            <li>tu suscripción (cancelada automáticamente)</li>
          </ul>
        </>
      ),
    },
    emailMethod: {
      title: '¿Ya no tienes la app instalada?',
      content: (
        <>
          <p>
            Envía una solicitud de eliminación a{' '}
            <a href="mailto:matthieuuzan@gmail.com?subject=Nocturne%20Account%20Deletion">
              matthieuuzan@gmail.com
            </a>{' '}
            desde la dirección de email vinculada a tu cuenta.
          </p>
          <Highlight>
            Tu cuenta y todos los datos asociados se eliminarán en un plazo de <strong>30 días</strong>.
          </Highlight>
        </>
      ),
    },
  },
}
