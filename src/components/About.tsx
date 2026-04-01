import { motion } from 'framer-motion'
import { Zap, Target, Code2, Smartphone } from 'lucide-react'
import csharpIcon from '../assets/c-sharp.png'
import cobolIcon from '../assets/cobol-icon.png'

const values = [
  {
    icon: Code2,
    title: 'Web sur-mesure',
    desc: 'Des sites et applications web construits avec les technologies modernes : React, Flask, Django.',
  },
  {
    icon: Smartphone,
    title: 'Apps mobiles',
    desc: 'Des applications Flutter multiplateformes, disponibles sur Android.',
  },
  {
    icon: Zap,
    title: 'Déploiement continu',
    desc: 'Des applications déployées et maintenues activement, avec des mises à jour régulières.',
  },
  {
    icon: Target,
    title: 'Orienté résultat',
    desc: 'Chaque produit est pensé pour répondre à un besoin réel et offrir une expérience fluide.',
  },
]

// slug = nom utilisé par simpleicons.org
const row1 = [
  { name: 'Python',      slug: 'python',       color: '#3776AB' },
  { name: 'JavaScript',  slug: 'javascript',   color: '#F7DF1E' },
  { name: 'TypeScript',  slug: 'typescript',   color: '#3178C6' },
  { name: 'React',       slug: 'react',        color: '#61DAFB' },
  { name: 'Flutter',     slug: 'flutter',      color: '#02569B' },
  { name: 'Node.js',     slug: 'nodedotjs',    color: '#339933' },
  { name: 'Flask',       slug: 'flask',        color: '#ffffff' },
  { name: 'Django',      slug: 'django',       color: '#092E20' },
  { name: 'MongoDB',     slug: 'mongodb',      color: '#47A248' },
  { name: 'MySQL',       slug: 'mysql',        color: '#4479A1' },
]

const row2 = [
  { name: 'C#',          slug: 'csharp',       color: '#239120', localIcon: csharpIcon },
  { name: 'C++',         slug: 'cplusplus',    color: '#00599C' },
  { name: 'HTML/CSS',    slug: 'html5',        color: '#E34F26' },
  { name: 'Tailwind',    slug: 'tailwindcss',  color: '#06B6D4' },
  { name: 'Express',     slug: 'express',      color: '#ffffff' },
  { name: 'Laravel',     slug: 'laravel',      color: '#FF2D20' },
  { name: 'PostgreSQL',  slug: 'postgresql',   color: '#4169E1' },
  { name: 'SQLite',      slug: 'sqlite',       color: '#003B57' },
  { name: 'Bash',        slug: 'gnubash',      color: '#4EAA25' },
  { name: 'COBOL',       slug: 'cobol',        color: '#ffffff', localIcon: cobolIcon },
]

type Tech = { name: string; slug: string; color: string; localIcon?: string }

function TechBadge({ tech }: { tech: Tech }) {
  return (
    <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 shrink-0">
      {tech.localIcon ? (
        <div
          className="w-[18px] h-[18px] rounded-sm flex items-center justify-center shrink-0"
          style={{ backgroundColor: tech.name === 'COBOL' ? '#ffffff' : 'transparent' }}
        >
          <img src={tech.localIcon} alt={tech.name} width={14} height={14} className="object-contain" />
        </div>
      ) : (
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${tech.slug}.svg`}
          alt={tech.name}
          width={18}
          height={18}
          style={{ filter: 'invert(1)' }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
      )}
      <span className="text-sm text-gray-300 font-medium whitespace-nowrap">{tech.name}</span>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }: { items: Tech[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex gap-3 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {doubled.map((tech, i) => (
          <TechBadge key={`${tech.slug}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Description + values */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              À propos de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                Powksy
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Powksy est un studio de développement indépendant spécialisé dans la création d&apos;applications web et mobiles.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              L&apos;objectif : concevoir des produits digitaux modernes, performants et accessibles — des apps mobiles publiées sur le Play Store aux sites web complets, chaque projet est pensé pour durer.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-white">12+</p>
                <p className="text-gray-400 text-sm">Projets réalisés</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">3</p>
                <p className="text-gray-400 text-sm">Apps mobiles publiées</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">20+</p>
                <p className="text-gray-400 text-sm">Technologies maîtrisées</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-violet-500/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-9 h-9 bg-violet-600/20 rounded-lg flex items-center justify-center mb-4">
                  <v.icon className="text-violet-400" size={18} />
                </div>
                <h4 className="text-white font-semibold mb-1 text-sm">{v.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technologies maîtrisées</h3>
          <div className="flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <MarqueeRow items={row1} />
            <MarqueeRow items={row2} reverse />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
