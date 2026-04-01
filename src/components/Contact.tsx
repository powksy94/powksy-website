import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react'

type IconProps = { className?: string }

const GithubIcon = ({ className }: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

const LinkedinIcon = ({ className }: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const socials: { icon: (props: IconProps) => React.ReactElement; label: string; handle: string; href: string; color: string }[] = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    handle: '@powksy94',
    href: 'https://github.com/powksy94',
    color: 'hover:border-gray-400/50 hover:bg-gray-400/5',
  },
  {
    icon: ({ className }) => <Mail size={20} className={className} />,
    label: 'Email',
    handle: 'matthieuuzan@gmail.com',
    href: 'mailto:matthieuuzan@gmail.com',
    color: 'hover:border-violet-400/50 hover:bg-violet-400/5',
  },
  {
    icon: ({ className }) => <MessageCircle size={20} className={className} />,
    label: 'Discord',
    handle: 'powksy',
    href: 'https://discord.com/users/powksy',
    color: 'hover:border-indigo-400/50 hover:bg-indigo-400/5',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    handle: 'Matthieu Uzan',
    href: 'https://www.linkedin.com/in/matthieu-uzan-7b4078279/',
    color: 'hover:border-blue-400/50 hover:bg-blue-400/5',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Une question sur un produit, une collaboration ou juste envie d&apos;échanger ?
            Retrouvez Powksy sur ces plateformes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 transition-all ${s.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                <s.icon className="text-gray-300" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 mb-0.5">{s.label}</p>
                <p className="text-white font-medium text-sm truncate">{s.handle}</p>
              </div>
              <ArrowUpRight size={16} className="text-gray-600 group-hover:text-white transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm">
            Préférez l&apos;email ?{' '}
            <a
              href="mailto:matthieuuzan@gmail.com"
              className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-4"
            >
              matthieuuzan@gmail.com
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  )
}
