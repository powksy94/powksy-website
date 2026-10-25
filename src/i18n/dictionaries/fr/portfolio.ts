import type { Dictionary } from '../../types'

export const portfolio: Dictionary['portfolio'] = {
  title: 'Nos projets',
  subtitle: 'Une sélection de projets réalisés en web, mobile et programmation système.',
  projects: {
    discordBot: {
      title: 'Bot Discord',
      description: 'Bot dédié à un serveur Discord avec citations, menu interactif, lecture audio et gestion de rôles.',
    },
    aliceConsole: {
      title: 'Jeu console - Alice in Bordeland',
      description: 'Jeu en console basé sur un manga, avec génération aléatoire et gestion multi-joueurs.',
    },
    fileAnalyzer: {
      title: 'Site d\'analyse de fichiers et URL',
      description: 'Site web avec analyse de fichiers/URLs, gestion de logs admin, auth utilisateur et base SQLite.',
    },
    hashCompare: {
      title: 'Hash Compare',
      description: 'Outil Python de comparaison de fichiers par empreinte hash, orienté sécurité et intégrité.',
    },
    passwordApp: {
      title: 'Password Mobile App',
      description: 'App mobile Flutter de gestion sécurisée des mots de passe avec Firebase et générateur intégré.',
    },
    aliceTrain: {
      title: 'AliceinBorderland Train Game',
      description: 'Jeu console C# de survie dans un train avec événements aléatoires et conditions de victoire.',
    },
    passwordBackend: {
      title: 'API Backend - Password App',
      description: 'Backend Express.js + MongoDB avec auth, CRUD chiffré et API RESTful pour l\'app mobile.',
    },
    anecdoteApp: {
      title: 'Anecdote Mobile App',
      description: 'App Flutter pour consulter et ajouter des anecdotes, avec navigation fluide et formulaire.',
    },
    rpgGame: {
      title: 'Jeu RPG Python + MongoDB',
      description: 'Jeu RPG console avec équipes de 3 persos, combat tour par tour et classement persisté en BDD.',
    },
    datingApp: {
      title: 'Dating App',
      description: 'App mobile de rencontre Flutter avec matching, profils, animations likes/refus et nav fluide.',
    },
    datingBackend: {
      title: 'API Backend - Dating App',
      description: 'Backend TypeScript/Node.js pour la Dating App avec routes RESTful, auth et architecture modulaire.',
    },
    cobol: {
      title: 'Gestion de Transactions COBOL',
      description: 'Programme COBOL de gestion de transactions financières avec menu console et fichier séquentiel.',
    },
    cubeGame: {
      title: 'Cube Game (C# / WPF)',
      description: 'Application desktop WPF en C# avec architecture en couches (Core, logique de jeu, interface).',
    },
  },
}
