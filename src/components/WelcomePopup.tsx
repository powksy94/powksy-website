import { useEffect, useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import powksyLogoSup  from '../assets/Powksy-logo-sup.png'

export default function WelcomePopup({ onDone }: { onDone?: () => void }) {
    const seen = localStorage.getItem('powksy_welcomed')
    const [visible, setVisible] = useState(!seen)

    useEffect(() => {
        if (!seen) {
            localStorage.setItem('powksy_welcomed', 'true')
            const timer = setTimeout(() => {
                setVisible(false)
                onDone?.()
            }, 4000)
            return () => clearTimeout(timer)
        }
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950"
                initial={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="flex flex-col items-center gap-8">

                        <motion.img
                            src={powksyLogoSup}
                            alt="Powksy"
                            className="w-48 h-48 object-contain"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: 'easeOut'}}
                        />

                        <div className="flex">
                            {'Bienvenue'.split('').map((letter, i) => (
                                <motion.span
                                    key={i}
                                    className="text-4xl font-bold text-white tracking-widest"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.4 + i * 0.08, ease: 'easeOut' }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>

                        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-violet-500 rounded-full"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 3.6, delay: 0.4, ease: 'linear' }}
                            />
                        </div>
                        
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}