import type { Dictionary } from '../../types'

export const legalNotice: Dictionary['legalNotice'] = {
  title: 'Legal notice',
  back: 'Back',
  updated: 'Last updated:',
  publisher: {
    title: '1. Website publisher',
    intro: <>The website <strong className="text-white">powksy.com</strong> is published by:</>,
    name: 'Name:',
    status: 'Status:',
    statusValue: 'Sole trader (French micro-entrepreneur)',
    address: 'Address:',
    siret: 'SIRET:',
    email: 'Email:',
  },
  director: { title: '2. Publication director' },
  hosting: {
    title: '3. Hosting',
    intro: 'The website is hosted by:',
    company: 'Company:',
    address: 'Address:',
    addressValue: '340 Pine Street, Suite 800, San Francisco, CA 94104, United States',
    website: 'Website:',
  },
  ip: {
    title: '4. Intellectual property',
    paragraphs: [
      <>
        All content on this website (text, images, logos, source code, visuals) is the exclusive property
        of <strong className="text-white">Powksy / Matthieu Uzan</strong>, unless stated otherwise.
      </>,
      'Any reproduction, representation, modification, publication or adaptation of all or part of the website, by any means or process, is prohibited without the prior written consent of Matthieu Uzan.',
      'The projects shown in the portfolio remain the property of their respective authors and are listed to illustrate the studio\'s skills.',
    ],
  },
  data: {
    title: '5. Personal data',
    noCollection: 'This website does not collect any personal data directly through forms. Interactions are limited to links to third-party services (GitHub, LinkedIn, Discord), which are subject to their own privacy policies.',
    rights: 'Under the General Data Protection Regulation (GDPR - EU Regulation 2016/679) and the French Data Protection Act, you have the right to access, rectify, object to and delete data concerning you. To exercise this right, contact:',
  },
  cookies: {
    title: '6. Cookies',
    text: (
      <>
        This website does not use cookies for tracking, advertising or behavioral analysis.
        Two technical values are kept in your browser's local storage:{' '}
        <code className="bg-white/10 px-1 rounded text-xs">powksy_welcomed</code>, so the welcome screen is
        only shown once, and <code className="bg-white/10 px-1 rounded text-xs">powksy_lang</code>, to
        remember the language you chose. They contain no personal data and are not shared with third parties.
      </>
    ),
  },
  liability: {
    title: '7. Limitation of liability',
    paragraphs: [
      'Powksy strives to provide accurate and up-to-date information. However, the accuracy, completeness or timeliness of the information cannot be guaranteed. Use of the information and content on this website is at the user\'s own risk.',
      'Powksy cannot be held liable for any direct or indirect damage resulting from access to the website or use of its content, nor for links to third-party websites whose content it does not control.',
    ],
  },
  law: {
    title: '8. Applicable law',
    text: 'This website and its legal notice are governed by French law. In the event of a dispute, and failing an amicable settlement, the French courts shall have sole jurisdiction.',
  },
}
