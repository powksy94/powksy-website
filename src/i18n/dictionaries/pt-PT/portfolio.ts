import type { Dictionary } from '../../types'

export const portfolio: Dictionary['portfolio'] = {
  title: 'Os nossos projetos',
  subtitle: 'Uma seleção de projetos realizados em web, mobile e programação de sistemas.',
  projects: {
    discordBot: {
      title: 'Bot de Discord',
      description: 'Bot para um servidor Discord com citações, menu interativo, reprodução de áudio e gestão de funções.',
    },
    aliceConsole: {
      title: 'Jogo de consola - Alice in Bordeland',
      description: 'Jogo de consola baseado numa manga, com geração aleatória e modo multijogador.',
    },
    fileAnalyzer: {
      title: 'Site de análise de ficheiros e URL',
      description: 'Site web com análise de ficheiros/URL, gestão de registos de administração, autenticação e base SQLite.',
    },
    hashCompare: {
      title: 'Hash Compare',
      description: 'Ferramenta Python que compara ficheiros por impressão digital hash, orientada para a segurança e a integridade.',
    },
    passwordApp: {
      title: 'Password Mobile App',
      description: 'Aplicação Flutter de gestão segura de palavras-passe com Firebase e gerador integrado.',
    },
    aliceTrain: {
      title: 'AliceinBorderland Train Game',
      description: 'Jogo de consola em C# de sobrevivência num comboio com eventos aleatórios e condições de vitória.',
    },
    passwordBackend: {
      title: 'API Backend - Password App',
      description: 'Backend Express.js + MongoDB com autenticação, CRUD encriptado e API RESTful para a aplicação móvel.',
    },
    anecdoteApp: {
      title: 'Anecdote Mobile App',
      description: 'Aplicação Flutter para consultar e adicionar curiosidades, com navegação fluida e formulário.',
    },
    rpgGame: {
      title: 'Jogo RPG Python + MongoDB',
      description: 'RPG de consola com equipas de 3 personagens, combate por turnos e classificação guardada em base de dados.',
    },
    datingApp: {
      title: 'Dating App',
      description: 'Aplicação de encontros em Flutter com matching, perfis, animações de gosto/recusa e navegação fluida.',
    },
    datingBackend: {
      title: 'API Backend - Dating App',
      description: 'Backend TypeScript/Node.js para a Dating App com rotas RESTful, autenticação e arquitetura modular.',
    },
    cobol: {
      title: 'Gestão de transações COBOL',
      description: 'Programa COBOL de gestão de transações financeiras com menu de consola e ficheiro sequencial.',
    },
    cubeGame: {
      title: 'Cube Game (C# / WPF)',
      description: 'Aplicação de secretária WPF em C# com arquitetura em camadas (Core, lógica de jogo, interface).',
    },
  },
}
