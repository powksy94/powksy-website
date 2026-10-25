import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const introduction: SectionTranslation = {
  title: 'Introducción',
  content: (
    <>
      <p>
        <strong>Password Mobile App</strong> (<code>com.passwordmobileapp.app</code>) es un gestor
        de contraseñas personal. Esta política describe qué datos se recopilan, cómo se protegen
        y qué derechos tiene usted sobre ellos.
      </p>
      <Highlight>
        Principio fundamental: sus contraseñas se cifran en su dispositivo antes de ser enviadas
        a nuestros servidores. Técnicamente no podemos leer su bóveda.
      </Highlight>
    </>
  ),
}
