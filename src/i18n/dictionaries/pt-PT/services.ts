import type { Dictionary } from '../../types'

export const services: Dictionary['services'] = {
  title: 'O que fazemos',
  subtitle: 'Da ideia ao lançamento: aplicações web e móveis concebidas para ter desempenho.',
  web: {
    title: 'Desenvolvimento Web',
    desc: 'Sites e aplicações web modernos, rápidos e escaláveis.',
  },
  mobile: {
    title: 'Aplicações Móveis',
    desc: 'Aplicações multiplataforma para iOS e Android desenvolvidas com Flutter.',
  },
  appsTitle: 'As nossas aplicações',
  appsSubtitle: 'Descubra as aplicações móveis desenvolvidas pela Powksy.',
  playStore: 'Ver na Play Store',
  comingSoon: 'Brevemente',
  apps: {
    password: {
      description: [
        'Aplicação móvel multiplataforma com Flutter',
        'Armazenamento seguro de palavras-passe com Firebase Authentication e Firestore',
      ],
      features: [
        'Criação e gestão de contas de utilizador com encriptação dos dados',
        'Gerador de palavras-passe aleatórias com critérios personalizáveis',
        'Interface intuitiva com navegação entre secções',
        'Sincronização em tempo real entre dispositivos via Firebase',
      ],
    },
    dailyFacts: {
      description: [
        'Aplicação móvel multiplataforma',
        'Arquitetura Flutter para a gestão dos ecrãs e da lógica',
      ],
      features: [
        'Apresentação dinâmica de curiosidades',
        'Adição de novas curiosidades através de um formulário',
        'Navegação fluida entre as secções da aplicação',
        'Interface móvel pensada para uma utilização simples e rápida',
      ],
    },
    nocturne: {
      description: [
        'Aplicação móvel de encontros multiplataforma com Flutter',
        'Arquitetura Dart com integração de componentes nativos (C++, Swift)',
      ],
      features: [
        'Interface de perfis de utilizadores com navegação fluida',
        'Sistema de matching entre utilizadores',
        'Gestão das interações (gostos, recusas) com animações',
        'Navegação entre as secções da aplicação',
      ],
    },
  },
}
