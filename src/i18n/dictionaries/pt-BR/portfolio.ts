import type { Dictionary } from '../../types'

export const portfolio: Dictionary['portfolio'] = {
  title: 'Nossos projetos',
  subtitle: 'Uma seleção de projetos feitos em web, mobile e programação de sistemas.',
  projects: {
    discordBot: {
      title: 'Bot do Discord',
      description: 'Bot para um servidor do Discord com citações, menu interativo, reprodução de áudio e gerenciamento de cargos.',
    },
    aliceConsole: {
      title: 'Jogo de console - Alice in Bordeland',
      description: 'Jogo de console baseado em um mangá, com geração aleatória e modo multijogador.',
    },
    fileAnalyzer: {
      title: 'Site de análise de arquivos e URL',
      description: 'Site com análise de arquivos/URLs, gerenciamento de logs de administração, autenticação e banco SQLite.',
    },
    hashCompare: {
      title: 'Hash Compare',
      description: 'Ferramenta em Python que compara arquivos por hash, voltada para segurança e integridade.',
    },
    passwordApp: {
      title: 'Password Mobile App',
      description: 'Aplicativo Flutter de gerenciamento seguro de senhas com Firebase e gerador integrado.',
    },
    aliceTrain: {
      title: 'AliceinBorderland Train Game',
      description: 'Jogo de console em C# de sobrevivência em um trem com eventos aleatórios e condições de vitória.',
    },
    passwordBackend: {
      title: 'API Backend - Password App',
      description: 'Backend Express.js + MongoDB com autenticação, CRUD criptografado e API RESTful para o aplicativo.',
    },
    anecdoteApp: {
      title: 'Anecdote Mobile App',
      description: 'Aplicativo Flutter para consultar e adicionar curiosidades, com navegação fluida e formulário.',
    },
    rpgGame: {
      title: 'Jogo RPG Python + MongoDB',
      description: 'RPG de console com times de 3 personagens, combate por turnos e ranking salvo em banco de dados.',
    },
    datingApp: {
      title: 'Dating App',
      description: 'Aplicativo de relacionamento em Flutter com match, perfis, animações de curtida/recusa e navegação fluida.',
    },
    datingBackend: {
      title: 'API Backend - Dating App',
      description: 'Backend TypeScript/Node.js para o Dating App com rotas RESTful, autenticação e arquitetura modular.',
    },
    cobol: {
      title: 'Gerenciamento de transações COBOL',
      description: 'Programa COBOL de gerenciamento de transações financeiras com menu de console e arquivo sequencial.',
    },
    cubeGame: {
      title: 'Cube Game (C# / WPF)',
      description: 'Aplicação desktop WPF em C# com arquitetura em camadas (Core, lógica de jogo, interface).',
    },
  },
}
