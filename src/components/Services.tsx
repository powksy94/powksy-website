import { motion } from 'framer-motion'
import { Globe, Smartphone } from 'lucide-react'
import dailyFactsLogo from '../assets/daily-facts-logo.png'
import nocturneLogo from '../assets/nocturne-logo.png'

const webServices = [
  { label: 'React', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  { label: 'Flask', color: 'bg-gray-500/20 text-gray-300 border-gray-500/30' },
  { label: 'Django', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
]

const mobileApps = [
  {
    name: 'Password Mobile App',
    logo: null as string | null,
    playStore: '#',
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
  {
    name: 'Daily Facts',
    logo: dailyFactsLogo,
    playStore: '#',
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
  {
    name: 'Nocturne',
    logo: nocturneLogo,
    playStore: '#',
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
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Web Services */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What we do</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From idea to launch — web apps and mobile experiences built to perform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-violet-500/50 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center mb-6">
              <Globe className="text-violet-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Web Development</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sites et applications web modernes, rapides et scalables.
            </p>
            <div className="flex gap-2 flex-wrap">
              {webServices.map(s => (
                <span key={s.label} className={`text-xs border px-3 py-1 rounded-full font-medium ${s.color}`}>
                  {s.label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-violet-500/50 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center mb-6">
              <Smartphone className="text-violet-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Mobile Apps</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Applications iOS & Android multiplateformes développées avec Flutter.
            </p>
            <span className="text-xs border border-blue-500/30 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-medium">
              Flutter
            </span>
          </motion.div>
        </div>

        {/* Mobile Apps Showcase */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nos applications</h2>
          <p className="text-gray-400">Découvrez les apps mobiles développées par Powksy.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mobileApps.map((app, i) => (
            <motion.div
              key={app.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-violet-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-5 text-2xl font-bold text-white overflow-hidden">
                {app.logo
                  ? <img src={app.logo} alt={app.name} className="w-full h-full object-contain" />
                  : app.name[0]
                }
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">{app.name}</h3>

              <div className="text-gray-400 text-sm leading-relaxed mb-4 flex flex-col gap-1">
                {app.description.map((d, j) => <p key={j}>{d}</p>)}
              </div>

              <ul className="text-gray-500 text-xs flex flex-col gap-1.5 mb-6 flex-1">
                {app.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-violet-500 mt-0.5">•</span> {f}
                  </li>
                ))}
              </ul>

              <a
                href={app.playStore}
                className="mt-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-violet-600 border border-white/10 hover:border-violet-500 text-white text-sm px-4 py-2.5 rounded-xl font-medium transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.18 23.76a2 2 0 0 0 2.18-.22l12.76-7.37-2.9-2.9-12.04 10.49ZM.54 1.1A2 2 0 0 0 0 2.5v19a2 2 0 0 0 .54 1.4l.07.07L11.07 12.5v-.24L.61 1.03l-.07.07ZM20.65 10.23l-2.72-1.57-3.19 3.19 3.19 3.19 2.73-1.58a2.01 2.01 0 0 0 0-3.23ZM3.18.24 15.22 7.53l-2.9 2.9L.36.46A2 2 0 0 1 3.18.24Z"/>
                </svg>
                Voir sur le Play Store
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
