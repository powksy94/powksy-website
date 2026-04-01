import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const techColors: Record<string, string> = {
  'JavaScript': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'TypeScript': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Python': 'bg-sky-500/20 text-sky-400 border-sky-500/30',
  'Flutter': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'C#': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Node.js': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Flask': 'bg-gray-400/20 text-gray-300 border-gray-400/30',
  'MongoDB': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'Express': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
  'COBOL': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Dart': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  'HTML': 'bg-red-500/20 text-red-400 border-red-500/30',
  'CSS': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
}

const defaultColor = 'bg-violet-500/20 text-violet-400 border-violet-500/30'

const projects = [
  {
    title: 'Bot Discord',
    description: 'Bot dédié à un serveur Discord avec citations, menu interactif, lecture audio et gestion de rôles.',
    tech: ['Node.js', 'JavaScript'],
    link: 'https://github.com/powksy94/bot_discord',
  },
  {
    title: 'Jeu console - Alice in Bordeland',
    description: 'Jeu en console basé sur un manga, avec génération aléatoire et gestion multi-joueurs.',
    tech: ['C#'],
    link: 'https://github.com/powksy94/Alice_in_Bordeland_Games',
  },
  {
    title: 'Site d\'analyse de fichiers et URL',
    description: 'Site web avec analyse de fichiers/URLs, gestion de logs admin, auth utilisateur et base SQLite.',
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/powksy94/site',
  },
  {
    title: 'Hash Compare',
    description: 'Outil Python de comparaison de fichiers par empreinte hash, orienté sécurité et intégrité.',
    tech: ['Python'],
    link: 'https://github.com/powksy94/-hashcompare',
  },
  {
    title: 'Password Mobile App',
    description: 'App mobile Flutter de gestion sécurisée des mots de passe avec Firebase et générateur intégré.',
    tech: ['Flutter'],
    link: 'https://github.com/powksy94/PasswordMobileApp',
  },
  {
    title: 'AliceinBorderland Train Game',
    description: 'Jeu console C# de survie dans un train avec événements aléatoires et conditions de victoire.',
    tech: ['C#'],
    link: 'https://github.com/powksy94/AliceinBorderlandTrainGame',
  },
  {
    title: 'API Backend - Password App',
    description: 'Backend Express.js + MongoDB avec auth, CRUD chiffré et API RESTful pour l\'app mobile.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    link: 'https://github.com/powksy94/passwordmobileapp_backend',
  },
  {
    title: 'Anecdote Mobile App',
    description: 'App Flutter pour consulter et ajouter des anecdotes, avec navigation fluide et formulaire.',
    tech: ['Flutter'],
    link: 'https://github.com/powksy94/anecdote_app',
  },
  {
    title: 'Jeu RPG Python + MongoDB',
    description: 'Jeu RPG console avec équipes de 3 persos, combat tour par tour et classement persisté en BDD.',
    tech: ['Python', 'MongoDB'],
    link: 'https://github.com/powksy94/BDD_python_game',
  },
  {
    title: 'Dating App',
    description: 'App mobile de rencontre Flutter avec matching, profils, animations likes/refus et nav fluide.',
    tech: ['Flutter', 'Dart'],
    link: 'https://github.com/powksy94/dating_app',
  },
  {
    title: 'API Backend - Dating App',
    description: 'Backend TypeScript/Node.js pour la Dating App avec routes RESTful, auth et architecture modulaire.',
    tech: ['TypeScript', 'Node.js'],
    link: 'https://github.com/powksy94/dating_app_backend',
  },
  {
    title: 'Gestion de Transactions COBOL',
    description: 'Programme COBOL de gestion de transactions financières avec menu console et fichier séquentiel.',
    tech: ['COBOL'],
    link: 'https://github.com/powksy94/Cobol_test_transaction',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nos projets</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Une sélection de projets réalisés en web, mobile et programmation système.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-violet-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.07 }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-semibold text-white leading-snug pr-2">{p.title}</h3>
                <ExternalLink size={16} className="text-gray-600 group-hover:text-violet-400 transition-colors shrink-0 mt-0.5" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
              <div className="flex gap-1.5 flex-wrap">
                {p.tech.map(tag => (
                  <span
                    key={tag}
                    className={`text-xs border px-2.5 py-0.5 rounded-full font-medium ${techColors[tag] ?? defaultColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
