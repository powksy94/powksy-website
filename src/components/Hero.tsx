import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-violet-950" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-3xl pointer-events-none"/>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-violet-400 text-sm font-medium tracking-widest uppercase mb-6 border border-violet-500/30 px-4 py-1.5 rounded-full">
                    Applications &amp; Sites Web
                    </span>
                </motion.div>

                <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Nous créons des
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400"> produits digitaux</span>
                    <br />qui comptent
                </motion.h1>

                <motion.p 
                className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2}}
                >
                    Powksy conçoit des applications web modernes et des apps mobiles sur diverses thématiques.
                </motion.p>

                <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate= {{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <a
                    href="#portfolio"
                    className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-3.5 rounded-xl font-medium transition-colors"
                    >
                      Voir nos projets <ArrowRight size={18} />
                    </a>
                    <a
                    href="#contact"
                    className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-xl font-medium transition-colors"
                    >
                      Démarrer un projet
                    </a>

                </motion.div>
            </div>
        </section>
    )
}