import type { Dictionary } from '../../types'

export const services: Dictionary['services'] = {
  title: 'Lo que hacemos',
  subtitle: 'De la idea al lanzamiento: aplicaciones web y móviles diseñadas para rendir.',
  web: {
    title: 'Desarrollo Web',
    desc: 'Sitios y aplicaciones web modernos, rápidos y escalables.',
  },
  mobile: {
    title: 'Aplicaciones Móviles',
    desc: 'Aplicaciones multiplataforma para iOS y Android desarrolladas con Flutter.',
  },
  appsTitle: 'Nuestras aplicaciones',
  appsSubtitle: 'Descubre las apps móviles desarrolladas por Powksy.',
  playStore: 'Ver en Play Store',
  comingSoon: 'Próximamente',
  apps: {
    password: {
      description: [
        'Aplicación móvil multiplataforma con Flutter',
        'Almacenamiento seguro de contraseñas con Firebase Authentication y Firestore',
      ],
      features: [
        'Creación y gestión de cuentas de usuario con cifrado de datos',
        'Generador de contraseñas aleatorias con criterios personalizables',
        'Interfaz intuitiva con navegación entre secciones',
        'Sincronización en tiempo real entre dispositivos mediante Firebase',
      ],
    },
    dailyFacts: {
      description: [
        'Aplicación móvil multiplataforma',
        'Arquitectura Flutter para la gestión de pantallas y lógica',
      ],
      features: [
        'Visualización dinámica de curiosidades',
        'Añadir nuevas curiosidades mediante un formulario',
        'Navegación fluida entre las secciones de la aplicación',
        'Interfaz móvil pensada para un uso sencillo y rápido',
      ],
    },
    nocturne: {
      description: [
        'Aplicación móvil de citas multiplataforma con Flutter',
        'Arquitectura Dart con integración de componentes nativos (C++, Swift)',
      ],
      features: [
        'Interfaz de perfiles de usuario con navegación fluida',
        'Sistema de matching entre usuarios',
        'Gestión de interacciones (likes, rechazos) con animaciones',
        'Navegación entre las secciones de la aplicación',
      ],
    },
  },
}
