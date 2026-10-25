import { Highlight } from '../../../../../components/legal/PrivacyPolicyPage'
import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const masterPassword: SectionTranslation = {
  title: 'Contraseña maestra',
  content: (
    <>
      <p>
        La contraseña maestra nunca abandona su dispositivo. Se utiliza localmente para
        derivar la clave de cifrado de su bóveda. No la conocen ni el editor ni el servidor,
        y no puede recuperarse ni restablecerse.
      </p>
      <p>
        La función <em>He olvidado mi contraseña</em> solo afecta a la contraseña de inicio de
        sesión, nunca a la contraseña maestra.
      </p>
      <Highlight>
        <strong>Advertencia crítica:</strong> sin su contraseña maestra (o la huella en el
        dispositivo ya configurado), su bóveda queda <strong>definitivamente inaccesible</strong>.
        El editor no puede restaurarla: nuestros servidores nunca almacenan su contraseña
        maestra ni ninguna clave que permita descifrar sus datos.
      </Highlight>
      <p>
        Guarde su contraseña maestra en un lugar seguro, separado de la aplicación, y exporte
        su bóveda con regularidad.
      </p>
    </>
  ),
}
