import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const es: PolicyTranslation = {
  docLabel: 'Normas de prevención del abuso y la explotación sexual infantil',
  updatedLabel: 'agosto de 2026',
  sections: {
    policy: {
      title: 'Política de tolerancia cero',
      content: (
        <>
          <p>
            <strong>Nocturne</strong> (<code>com.nocturne.app</code>) está restringido únicamente a
            adultos. El acceso a la app está estrictamente prohibido a cualquier persona menor de 18
            años, verificado mediante la fecha de nacimiento declarada al registrarse.
          </p>
          <p>
            Nocturne aplica una política de tolerancia cero ante cualquier contenido o comportamiento
            relacionado con el abuso o la explotación sexual infantil (CSAE), así como ante cualquier
            intento de uso de la app por parte de un menor.
          </p>
        </>
      ),
    },
    measures: {
      title: 'Medidas implementadas',
      content: (
        <ul>
          <li>Verificación de edad al registrarse (mínimo 18 años).</li>
          <li>Moderación automática de nombres de usuario y mensajes mediante un filtro de palabras prohibidas.</li>
          <li>
            Sistema de denuncia y bloqueo disponible en todo momento dentro de la app, para cualquier
            perfil o contenido sospechoso.
          </li>
          <li>
            Revisión manual de las denuncias, que puede dar lugar a una advertencia, suspensión o
            eliminación permanente de la cuenta implicada.
          </li>
          <li>
            Eliminación inmediata de cualquier contenido identificado como relacionado con CSAE, y
            denuncia a las autoridades correspondientes conforme a la legislación aplicable.
          </li>
        </ul>
      ),
    },
    reporting: {
      title: 'Denunciar un problema',
      content: (
        <>
          <p>
            Cualquier usuario puede denunciar un perfil o contenido directamente desde la app (botón
            de denuncia, disponible en cada perfil y conversación).
          </p>
          <p>
            Para cualquier pregunta sobre estas normas, o para denunciar un problema fuera de la app,
            contacta con:<br />
            <a href="mailto:matthieuuzan@gmail.com?subject=Nocturne%20-%20Child%20Safety%20Standards">
              matthieuuzan@gmail.com
            </a>
          </p>
        </>
      ),
    },
  },
}
