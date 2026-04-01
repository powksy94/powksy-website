import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WelcomePopup from './components/WelcomePopup'

export default function App() {
  const alreadySeen = !!localStorage.getItem('powksy_welcomed')
  const [ready, setReady] = useState(alreadySeen)

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <WelcomePopup onDone={() => setReady(true)} />
      <motion.div
        initial={{ opacity: alreadySeen ? 1 : 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </div>
  )
}
