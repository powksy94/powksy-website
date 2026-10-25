import type { Dictionary } from '../../types'

export const legalNotice: Dictionary['legalNotice'] = {
  title: 'Aviso legal',
  back: 'Volver',
  updated: 'Última actualización:',
  publisher: {
    title: '1. Editor del sitio',
    intro: <>El sitio <strong className="text-white">powksy.com</strong> está editado por:</>,
    name: 'Nombre:',
    status: 'Estatus:',
    statusValue: 'Trabajador autónomo (microempresario en Francia)',
    address: 'Dirección:',
    siret: 'SIRET:',
    email: 'Correo electrónico:',
  },
  director: { title: '2. Director de la publicación' },
  hosting: {
    title: '3. Alojamiento',
    intro: 'El sitio está alojado por:',
    company: 'Empresa:',
    address: 'Dirección:',
    addressValue: '340 Pine Street, Suite 800, San Francisco, CA 94104, Estados Unidos',
    website: 'Sitio web:',
  },
  ip: {
    title: '4. Propiedad intelectual',
    paragraphs: [
      <>
        Todo el contenido de este sitio (textos, imágenes, logotipos, código fuente, elementos visuales) es
        propiedad exclusiva de <strong className="text-white">Powksy / Matthieu Uzan</strong>, salvo
        indicación contraria.
      </>,
      'Queda prohibida cualquier reproducción, representación, modificación, publicación o adaptación de la totalidad o parte de los elementos del sitio, por cualquier medio o procedimiento, sin la autorización previa y por escrito de Matthieu Uzan.',
      'Los proyectos presentados en el portafolio siguen siendo propiedad de sus respectivos autores y se muestran para ilustrar las competencias del estudio.',
    ],
  },
  data: {
    title: '5. Datos personales',
    noCollection: 'Este sitio no recopila ningún dato personal directamente mediante formularios. Las interacciones se limitan a enlaces hacia servicios de terceros (GitHub, LinkedIn, Discord), sujetos a sus propias políticas de privacidad.',
    rights: 'De conformidad con el Reglamento General de Protección de Datos (RGPD - Reglamento UE 2016/679) y la ley francesa de Informática y Libertades, usted dispone de un derecho de acceso, rectificación, oposición y supresión de los datos que le conciernen. Para ejercer este derecho, escriba a:',
  },
  cookies: {
    title: '6. Cookies',
    text: (
      <>
        Este sitio no utiliza cookies con fines de seguimiento, publicidad o análisis de comportamiento.
        Se guardan dos datos técnicos en el almacenamiento local de su navegador:{' '}
        <code className="bg-white/10 px-1 rounded text-xs">powksy_welcomed</code>, para mostrar la pantalla
        de bienvenida una sola vez, y <code className="bg-white/10 px-1 rounded text-xs">powksy_lang</code>,
        para recordar el idioma elegido. No contienen ningún dato personal y no se transmiten a terceros.
      </>
    ),
  },
  liability: {
    title: '7. Limitación de responsabilidad',
    paragraphs: [
      'Powksy se esfuerza por ofrecer información exacta y actualizada. Sin embargo, no puede garantizarse la exactitud, integridad o actualidad de la información. El uso de la información y los contenidos del sitio se realiza bajo la responsabilidad del usuario.',
      'Powksy no se hace responsable de los daños directos o indirectos derivados del acceso al sitio o del uso de su contenido, ni de los enlaces a sitios de terceros cuyo contenido no controla.',
    ],
  },
  law: {
    title: '8. Legislación aplicable',
    text: 'El presente sitio y su aviso legal se rigen por el derecho francés. En caso de litigio, y a falta de acuerdo amistoso, los tribunales franceses serán los únicos competentes.',
  },
}
