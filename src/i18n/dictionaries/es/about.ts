import type { Dictionary } from '../../types'

export const about: Dictionary['about'] = {
  titleStart: 'Sobre',
  paragraphs: [
    'Powksy es un estudio de desarrollo independiente especializado en la creación de aplicaciones web y móviles.',
    'El objetivo: diseñar productos digitales modernos, eficientes y accesibles. Desde apps móviles publicadas en Play Store hasta sitios web completos, cada proyecto está pensado para durar.',
  ],
  stats: {
    projects: 'Proyectos realizados',
    apps: 'Apps móviles publicadas',
    tech: 'Tecnologías dominadas',
  },
  values: {
    web: {
      title: 'Web a medida',
      desc: 'Sitios y aplicaciones web construidos con tecnologías modernas: React, Flask, Django.',
    },
    mobile: {
      title: 'Apps móviles',
      desc: 'Aplicaciones Flutter multiplataforma, disponibles en Android.',
    },
    deploy: {
      title: 'Despliegue continuo',
      desc: 'Aplicaciones desplegadas y mantenidas activamente, con actualizaciones regulares.',
    },
    result: {
      title: 'Orientado a resultados',
      desc: 'Cada producto está pensado para responder a una necesidad real y ofrecer una experiencia fluida.',
    },
  },
  techTitle: 'Tecnologías que dominamos',
}
