import type { Dictionary } from '../../types'

export const services: Dictionary['services'] = {
  title: 'Ce que nous faisons',
  subtitle: 'De l\'idée au lancement — des applications web et mobiles conçues pour performer.',
  web: {
    title: 'Développement Web',
    desc: 'Sites et applications web modernes, rapides et scalables.',
  },
  mobile: {
    title: 'Applications Mobiles',
    desc: 'Applications iOS & Android multiplateformes développées avec Flutter.',
  },
  appsTitle: 'Nos applications',
  appsSubtitle: 'Découvrez les apps mobiles développées par Powksy.',
  playStore: 'Voir sur Play Store',
  comingSoon: 'Bientôt disponible',
  apps: {
    password: {
      description: [
        'Application mobile multiplateforme avec Flutter',
        'Stockage sécurisé des mots de passe avec Firebase Authentication et Firestore',
      ],
      features: [
        'Création et gestion de comptes utilisateur avec chiffrement des données',
        'Générateur de mots de passe aléatoires avec critères personnalisables',
        'Interface utilisateur intuitive avec navigation entre les sections',
        'Synchronisation en temps réel entre appareils via Firebase',
      ],
    },
    dailyFacts: {
      description: [
        'Application mobile multiplateforme',
        'Architecture Flutter pour la gestion des écrans et de la logique',
      ],
      features: [
        'Affichage dynamique d\'anecdotes',
        'Ajout de nouvelles anecdotes via formulaire',
        'Navigation fluide entre les sections de l\'application',
        'Interface mobile pensée pour une utilisation simple et rapide',
      ],
    },
    nocturne: {
      description: [
        'Application mobile de rencontre multiplateforme avec Flutter',
        'Architecture Dart avec intégration de composants natifs (C++, Swift)',
      ],
      features: [
        'Interface de profils utilisateurs avec navigation fluide',
        'Système de matching entre utilisateurs',
        'Gestion des interactions (likes, refus) avec animations',
        'Navigation entre les sections de l\'application',
      ],
    },
  },
}
