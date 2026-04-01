import powksyLogoLong from '../assets/Powksy-logo-long.png'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <img src={powksyLogoLong} alt="Powksy" className="w-1/2 h-auto" />
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} — All rights reserved.
        </p>
        <a href="#"
        className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
        >
            Mentions légales
        </a>
      </div>
    </footer>
  )
}
