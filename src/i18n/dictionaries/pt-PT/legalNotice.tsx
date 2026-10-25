import type { Dictionary } from '../../types'

export const legalNotice: Dictionary['legalNotice'] = {
  title: 'Informação legal',
  back: 'Voltar',
  updated: 'Última atualização:',
  publisher: {
    title: '1. Editor do site',
    intro: <>O site <strong className="text-white">powksy.com</strong> é editado por:</>,
    name: 'Nome:',
    status: 'Estatuto:',
    statusValue: 'Trabalhador independente (microempresário em França)',
    address: 'Morada:',
    siret: 'SIRET:',
    email: 'E-mail:',
  },
  director: { title: '2. Diretor da publicação' },
  hosting: {
    title: '3. Alojamento',
    intro: 'O site está alojado por:',
    company: 'Empresa:',
    address: 'Morada:',
    addressValue: '340 Pine Street, Suite 800, San Francisco, CA 94104, Estados Unidos',
    website: 'Site web:',
  },
  ip: {
    title: '4. Propriedade intelectual',
    paragraphs: [
      <>
        Todo o conteúdo deste site (textos, imagens, logótipos, código-fonte, elementos visuais) é propriedade
        exclusiva de <strong className="text-white">Powksy / Matthieu Uzan</strong>, salvo indicação em
        contrário.
      </>,
      'É proibida qualquer reprodução, representação, modificação, publicação ou adaptação da totalidade ou de parte dos elementos do site, por qualquer meio ou processo, sem autorização prévia e por escrito de Matthieu Uzan.',
      'Os projetos apresentados no portefólio continuam a ser propriedade dos respetivos autores e são referidos para ilustrar as competências do estúdio.',
    ],
  },
  data: {
    title: '5. Dados pessoais',
    noCollection: 'Este site não recolhe quaisquer dados pessoais diretamente através de formulários. As interações limitam-se a ligações para serviços de terceiros (GitHub, LinkedIn, Discord), sujeitos às suas próprias políticas de privacidade.',
    rights: 'Nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD - Regulamento UE 2016/679) e da lei francesa relativa à informática e às liberdades, tem o direito de acesso, retificação, oposição e apagamento dos dados que lhe dizem respeito. Para exercer este direito, contacte:',
  },
  cookies: {
    title: '6. Cookies',
    text: (
      <>
        Este site não utiliza cookies para fins de rastreio, publicidade ou análise comportamental.
        São guardadas duas informações técnicas no armazenamento local do seu navegador:{' '}
        <code className="bg-white/10 px-1 rounded text-xs">powksy_welcomed</code>, para mostrar o ecrã de
        boas-vindas apenas uma vez, e <code className="bg-white/10 px-1 rounded text-xs">powksy_lang</code>,
        para memorizar o idioma escolhido. Não contêm quaisquer dados pessoais e não são transmitidas a terceiros.
      </>
    ),
  },
  liability: {
    title: '7. Limitação de responsabilidade',
    paragraphs: [
      'A Powksy esforça-se por fornecer informações exatas e atualizadas. No entanto, não é possível garantir a exatidão, a integridade ou a atualidade das informações. A utilização das informações e conteúdos do site é da responsabilidade do utilizador.',
      'A Powksy não pode ser responsabilizada por danos diretos ou indiretos resultantes do acesso ao site ou da utilização do seu conteúdo, nem pelas ligações para sites de terceiros cujo conteúdo não controla.',
    ],
  },
  law: {
    title: '8. Lei aplicável',
    text: 'O presente site e a sua informação legal regem-se pela lei francesa. Em caso de litígio, e na falta de acordo amigável, os tribunais franceses serão os únicos competentes.',
  },
}
