import type { Dictionary } from '../../types'

export const legalNotice: Dictionary['legalNotice'] = {
  title: 'Mentions légales',
  back: 'Retour',
  updated: 'Dernière mise à jour :',
  publisher: {
    title: '1. Éditeur du site',
    intro: <>Le site <strong className="text-white">powksy.com</strong> est édité par :</>,
    name: 'Nom :',
    status: 'Statut :',
    statusValue: 'Auto-entrepreneur / Micro-entrepreneur',
    address: 'Adresse :',
    siret: 'SIRET :',
    email: 'Email :',
  },
  director: { title: '2. Directeur de la publication' },
  hosting: {
    title: '3. Hébergement',
    intro: 'Le site est hébergé par :',
    company: 'Société :',
    address: 'Adresse :',
    addressValue: '340 Pine Street, Suite 800, San Francisco, CA 94104, États-Unis',
    website: 'Site web :',
  },
  ip: {
    title: '4. Propriété intellectuelle',
    paragraphs: [
      <>
        L'ensemble du contenu de ce site (textes, images, logos, code source, visuels) est la propriété exclusive
        de <strong className="text-white">Powksy / Matthieu Uzan</strong>, sauf mention contraire.
      </>,
      'Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de Matthieu Uzan.',
      'Les projets présentés dans le portfolio restent la propriété de leurs auteurs respectifs et sont référencés à titre d\'illustration des compétences du studio.',
    ],
  },
  data: {
    title: '5. Données personnelles',
    noCollection: 'Ce site ne collecte aucune donnée personnelle directement via des formulaires. Les interactions sont limitées à des liens vers des services tiers (GitHub, LinkedIn, Discord) soumis à leurs propres politiques de confidentialité.',
    rights: 'Conformément au Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez d\'un droit d\'accès, de rectification, d\'opposition et de suppression des données vous concernant. Pour exercer ce droit, contactez :',
  },
  cookies: {
    title: '6. Cookies',
    text: (
      <>
        Ce site n'utilise pas de cookies à des fins de suivi, de publicité ou d'analyse comportementale.
        Deux informations techniques sont conservées dans le stockage local de votre navigateur :{' '}
        <code className="bg-white/10 px-1 rounded text-xs">powksy_welcomed</code>, pour n'afficher l'écran
        d'accueil qu'une seule fois, et <code className="bg-white/10 px-1 rounded text-xs">powksy_lang</code>,
        pour mémoriser la langue choisie. Elles ne contiennent aucune donnée personnelle et ne sont pas
        transmises à des tiers.
      </>
    ),
  },
  liability: {
    title: '7. Limitation de responsabilité',
    paragraphs: [
      'Powksy s\'efforce de fournir des informations exactes et à jour. Cependant, l\'exactitude, la complétude ou l\'actualité des informations ne peuvent être garanties. L\'utilisation des informations et contenus du site se fait sous la responsabilité de l\'utilisateur.',
      'Powksy ne saurait être tenu responsable des dommages directs ou indirects résultant de l\'accès au site ou de l\'utilisation de son contenu, ni des liens vers des sites tiers dont il ne contrôle pas le contenu.',
    ],
  },
  law: {
    title: '8. Droit applicable',
    text: 'Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, et à défaut d\'accord amiable, les tribunaux français seront seuls compétents.',
  },
}
