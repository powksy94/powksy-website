import type { Dictionary } from '../../types'

export const portfolio: Dictionary['portfolio'] = {
  title: 'Our projects',
  subtitle: 'A selection of projects in web, mobile and systems programming.',
  projects: {
    discordBot: {
      title: 'Discord Bot',
      description: 'Bot for a Discord server with quotes, interactive menu, audio playback and role management.',
    },
    aliceConsole: {
      title: 'Console game - Alice in Bordeland',
      description: 'Console game based on a manga, with random generation and multiplayer support.',
    },
    fileAnalyzer: {
      title: 'File and URL analysis website',
      description: 'Website with file/URL analysis, admin log management, user auth and an SQLite database.',
    },
    hashCompare: {
      title: 'Hash Compare',
      description: 'Python tool comparing files by hash fingerprint, focused on security and integrity.',
    },
    passwordApp: {
      title: 'Password Mobile App',
      description: 'Flutter mobile app for secure password management with Firebase and a built-in generator.',
    },
    aliceTrain: {
      title: 'AliceinBorderland Train Game',
      description: 'C# console survival game on a train with random events and win conditions.',
    },
    passwordBackend: {
      title: 'Backend API - Password App',
      description: 'Express.js + MongoDB backend with auth, encrypted CRUD and a RESTful API for the mobile app.',
    },
    anecdoteApp: {
      title: 'Anecdote Mobile App',
      description: 'Flutter app to browse and add fun facts, with smooth navigation and a form.',
    },
    rpgGame: {
      title: 'Python + MongoDB RPG',
      description: 'Console RPG with 3-character teams, turn-based combat and a leaderboard stored in a database.',
    },
    datingApp: {
      title: 'Dating App',
      description: 'Flutter dating app with matching, profiles, like/pass animations and smooth navigation.',
    },
    datingBackend: {
      title: 'Backend API - Dating App',
      description: 'TypeScript/Node.js backend for the Dating App with RESTful routes, auth and a modular architecture.',
    },
    cobol: {
      title: 'COBOL Transaction Management',
      description: 'COBOL program managing financial transactions with a console menu and a sequential file.',
    },
    cubeGame: {
      title: 'Cube Game (C# / WPF)',
      description: 'C# WPF desktop application with a layered architecture (Core, game logic, interface).',
    },
  },
}
