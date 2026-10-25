import type { Dictionary } from '../../types'

export const services: Dictionary['services'] = {
  title: 'O que fazemos',
  subtitle: 'Da ideia ao lançamento: aplicações web e mobile feitas para ter alto desempenho.',
  web: {
    title: 'Desenvolvimento Web',
    desc: 'Sites e aplicações web modernos, rápidos e escaláveis.',
  },
  mobile: {
    title: 'Aplicativos Mobile',
    desc: 'Aplicativos multiplataforma para iOS e Android desenvolvidos com Flutter.',
  },
  appsTitle: 'Nossos aplicativos',
  appsSubtitle: 'Conheça os aplicativos mobile desenvolvidos pela Powksy.',
  playStore: 'Ver na Play Store',
  comingSoon: 'Em breve',
  apps: {
    password: {
      description: [
        'Aplicativo mobile multiplataforma com Flutter',
        'Armazenamento seguro de senhas com Firebase Authentication e Firestore',
      ],
      features: [
        'Criação e gerenciamento de contas de usuário com criptografia dos dados',
        'Gerador de senhas aleatórias com critérios personalizáveis',
        'Interface intuitiva com navegação entre as seções',
        'Sincronização em tempo real entre dispositivos via Firebase',
      ],
    },
    dailyFacts: {
      description: [
        'Aplicativo mobile multiplataforma',
        'Arquitetura Flutter para o gerenciamento das telas e da lógica',
      ],
      features: [
        'Exibição dinâmica de curiosidades',
        'Inclusão de novas curiosidades por meio de um formulário',
        'Navegação fluida entre as seções do aplicativo',
        'Interface mobile pensada para um uso simples e rápido',
      ],
    },
    nocturne: {
      description: [
        'Aplicativo de relacionamento multiplataforma com Flutter',
        'Arquitetura Dart com integração de componentes nativos (C++, Swift)',
      ],
      features: [
        'Interface de perfis de usuários com navegação fluida',
        'Sistema de match entre usuários',
        'Gerenciamento das interações (curtidas, recusas) com animações',
        'Navegação entre as seções do aplicativo',
      ],
    },
  },
}
