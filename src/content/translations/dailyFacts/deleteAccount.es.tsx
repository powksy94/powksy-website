import { Highlight } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const es: PolicyTranslation = {
  docLabel: 'Eliminación de cuenta',
  updatedLabel: 'agosto 2026',
  sections: {
    appMethod: {
      title: 'Desde la aplicación',
      content: (
        <p>
          <strong>Método más rápido.</strong> Abre Daily Facts, toca tu perfil en la esquina
          superior derecha y luego toca <strong>«Eliminar mi cuenta»</strong>. La eliminación es
          inmediata y definitiva.
        </p>
      ),
    },
    emailMethod: {
      title: 'Sin la aplicación instalada',
      content: (
        <p>
          Envía una solicitud de eliminación a{' '}
          <a href="mailto:matthieuuzan@gmail.com?subject=Eliminaci%C3%B3n%20de%20cuenta%20Daily%20Facts">
            matthieuuzan@gmail.com
          </a>, indicando la dirección de correo electrónico asociada a tu cuenta. Tu cuenta será
          eliminada en un plazo de <strong>7 días</strong>.
        </p>
      ),
    },
    dataDeleted: {
      title: 'Datos eliminados',
      content: (
        <>
          <ul>
            <li>Dirección de correo electrónico y nombre asociados a la cuenta</li>
            <li>Tus favoritos guardados</li>
            <li>Tus categorías de contenido preferidas</li>
          </ul>
          <Highlight>
            Ningún dato se conserva después de la eliminación: esta es inmediata y no está sujeta
            a ningún período de retención adicional.
          </Highlight>
        </>
      ),
    },
  },
}
