import { X } from 'lucide-react'
import { LEGAL_ADDRESS, LEGAL_SIRET } from '../legal-info'

interface Props {
  onClose: () => void
}

export default function MentionsLegales({ onClose }: Props) {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Mentions légales</h1>
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <X size={18} />
            Retour
          </button>
        </div>

        <div className="space-y-10 text-gray-300 text-sm leading-relaxed">

          {/* 1. Éditeur */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              1. Éditeur du site
            </h2>
            <p>Le site <strong className="text-white">powksy.com</strong> est édité par :</p>
            <ul className="mt-3 space-y-1">
              <li><span className="text-gray-500">Nom :</span> <span className="text-white font-medium">Matthieu Uzan</span></li>
              <li><span className="text-gray-500">Statut :</span> Auto-entrepreneur / Micro-entrepreneur</li>
              <li>
                <span className="text-gray-500">Adresse :</span>{' '}
                <span className="text-white">{LEGAL_ADDRESS}</span>
              </li>
              <li>
                <span className="text-gray-500">SIRET :</span>{' '}
                <span className="text-white">{LEGAL_SIRET}</span>
              </li>
              <li>
                <span className="text-gray-500">Email :</span>{' '}
                <a href="mailto:matthieuuzan@gmail.com" className="text-white hover:text-gray-300 transition-colors">
                  matthieuuzan@gmail.com
                </a>
              </li>
            </ul>
          </section>

          {/* 2. Directeur de publication */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              2. Directeur de la publication
            </h2>
            <p>Matthieu Uzan</p>
          </section>

          {/* 3. Hébergeur */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              3. Hébergement
            </h2>
            <p>Le site est hébergé par :</p>
            <ul className="mt-3 space-y-1">
              <li><span className="text-gray-500">Société :</span> <span className="text-white font-medium">Railway, Inc.</span></li>
              <li><span className="text-gray-500">Adresse :</span> 340 Pine Street, Suite 800, San Francisco, CA 94104, États-Unis</li>
              <li>
                <span className="text-gray-500">Site web :</span>{' '}
                <a
                  href="https://railway.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  railway.app
                </a>
              </li>
            </ul>
          </section>

          {/* 4. Propriété intellectuelle */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              4. Propriété intellectuelle
            </h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, code source, visuels) est la propriété exclusive
              de <strong className="text-white">Powksy / Matthieu Uzan</strong>, sauf mention contraire.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments
              du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de
              Matthieu Uzan.
            </p>
            <p className="mt-3">
              Les projets présentés dans le portfolio restent la propriété de leurs auteurs respectifs et sont référencés
              à titre d'illustration des compétences du studio.
            </p>
          </section>

          {/* 5. Données personnelles */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              5. Données personnelles
            </h2>
            <p>
              Ce site ne collecte aucune donnée personnelle directement via des formulaires. Les interactions sont
              limitées à des liens vers des services tiers (GitHub, LinkedIn, Discord) soumis à leurs propres politiques
              de confidentialité.
            </p>
            <p className="mt-3">
              Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la
              loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'opposition et de
              suppression des données vous concernant. Pour exercer ce droit, contactez :{' '}
              <a href="mailto:matthieuuzan@gmail.com" className="text-white hover:text-gray-300 transition-colors">
                matthieuuzan@gmail.com
              </a>
            </p>
          </section>

          {/* 6. Cookies */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              6. Cookies
            </h2>
            <p>
              Ce site n'utilise pas de cookies à des fins de suivi, de publicité ou d'analyse comportementale.
              Un cookie technique de session (<code className="bg-white/10 px-1 rounded text-xs">powksy_welcomed</code>)
              est utilisé uniquement pour mémoriser l'affichage de l'écran d'accueil pendant votre visite.
              Il ne collecte aucune donnée personnelle et n'est pas transmis à des tiers.
            </p>
          </section>

          {/* 7. Limitation de responsabilité */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              7. Limitation de responsabilité
            </h2>
            <p>
              Powksy s'efforce de fournir des informations exactes et à jour. Cependant, l'exactitude, la complétude
              ou l'actualité des informations ne peuvent être garanties. L'utilisation des informations et contenus du
              site se fait sous la responsabilité de l'utilisateur.
            </p>
            <p className="mt-3">
              Powksy ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès au site
              ou de l'utilisation de son contenu, ni des liens vers des sites tiers dont il ne contrôle pas le contenu.
            </p>
          </section>

          {/* 8. Droit applicable */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-3 border-b border-white/10 pb-2">
              8. Droit applicable
            </h2>
            <p>
              Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, et à défaut
              d'accord amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          {/* Footer note */}
          <p className="text-gray-600 text-xs pt-4 border-t border-white/5">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  )
}
