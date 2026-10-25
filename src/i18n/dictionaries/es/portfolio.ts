import type { Dictionary } from '../../types'

export const portfolio: Dictionary['portfolio'] = {
  title: 'Nuestros proyectos',
  subtitle: 'Una selección de proyectos realizados en web, móvil y programación de sistemas.',
  projects: {
    discordBot: {
      title: 'Bot de Discord',
      description: 'Bot para un servidor de Discord con citas, menú interactivo, reproducción de audio y gestión de roles.',
    },
    aliceConsole: {
      title: 'Juego de consola - Alice in Bordeland',
      description: 'Juego de consola basado en un manga, con generación aleatoria y modo multijugador.',
    },
    fileAnalyzer: {
      title: 'Sitio de análisis de archivos y URL',
      description: 'Sitio web con análisis de archivos/URL, gestión de logs de administración, autenticación y base SQLite.',
    },
    hashCompare: {
      title: 'Hash Compare',
      description: 'Herramienta Python que compara archivos por huella hash, orientada a la seguridad y la integridad.',
    },
    passwordApp: {
      title: 'Password Mobile App',
      description: 'App móvil Flutter de gestión segura de contraseñas con Firebase y generador integrado.',
    },
    aliceTrain: {
      title: 'AliceinBorderland Train Game',
      description: 'Juego de consola en C# de supervivencia en un tren con eventos aleatorios y condiciones de victoria.',
    },
    passwordBackend: {
      title: 'API Backend - Password App',
      description: 'Backend Express.js + MongoDB con autenticación, CRUD cifrado y API RESTful para la app móvil.',
    },
    anecdoteApp: {
      title: 'Anecdote Mobile App',
      description: 'App Flutter para consultar y añadir curiosidades, con navegación fluida y formulario.',
    },
    rpgGame: {
      title: 'Juego RPG Python + MongoDB',
      description: 'RPG de consola con equipos de 3 personajes, combate por turnos y clasificación guardada en base de datos.',
    },
    datingApp: {
      title: 'Dating App',
      description: 'App de citas en Flutter con matching, perfiles, animaciones de like/rechazo y navegación fluida.',
    },
    datingBackend: {
      title: 'API Backend - Dating App',
      description: 'Backend TypeScript/Node.js para la Dating App con rutas RESTful, autenticación y arquitectura modular.',
    },
    cobol: {
      title: 'Gestión de transacciones COBOL',
      description: 'Programa COBOL de gestión de transacciones financieras con menú de consola y archivo secuencial.',
    },
    cubeGame: {
      title: 'Cube Game (C# / WPF)',
      description: 'Aplicación de escritorio WPF en C# con arquitectura por capas (Core, lógica de juego, interfaz).',
    },
  },
}
