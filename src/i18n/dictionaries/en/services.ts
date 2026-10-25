import type { Dictionary } from '../../types'

export const services: Dictionary['services'] = {
  title: 'What we do',
  subtitle: 'From idea to launch: web and mobile applications built to perform.',
  web: {
    title: 'Web Development',
    desc: 'Modern, fast and scalable websites and web applications.',
  },
  mobile: {
    title: 'Mobile Apps',
    desc: 'Cross-platform iOS & Android apps built with Flutter.',
  },
  appsTitle: 'Our apps',
  appsSubtitle: 'Discover the mobile apps built by Powksy.',
  playStore: 'View on Play Store',
  comingSoon: 'Coming soon',
  apps: {
    password: {
      description: [
        'Cross-platform mobile app built with Flutter',
        'Secure password storage with Firebase Authentication and Firestore',
      ],
      features: [
        'User account creation and management with data encryption',
        'Random password generator with customizable criteria',
        'Intuitive user interface with navigation between sections',
        'Real-time sync across devices via Firebase',
      ],
    },
    dailyFacts: {
      description: [
        'Cross-platform mobile app',
        'Flutter architecture for screens and logic',
      ],
      features: [
        'Dynamic display of fun facts',
        'Add new facts through a form',
        'Smooth navigation between app sections',
        'Mobile interface designed to be simple and fast',
      ],
    },
    nocturne: {
      description: [
        'Cross-platform dating app built with Flutter',
        'Dart architecture with native components (C++, Swift)',
      ],
      features: [
        'User profile interface with smooth navigation',
        'Matching system between users',
        'Interaction handling (likes, passes) with animations',
        'Navigation between app sections',
      ],
    },
  },
}
