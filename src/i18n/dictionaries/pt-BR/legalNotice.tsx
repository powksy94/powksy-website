import type { Dictionary } from '../../types'

export const legalNotice: Dictionary['legalNotice'] = {
  title: 'Aviso legal',
  back: 'Voltar',
  updated: 'Última atualização:',
  publisher: {
    title: '1. Editor do site',
    intro: <>O site <strong className="text-white">powksy.com</strong> é publicado por:</>,
    name: 'Nome:',
    status: 'Situação:',
    statusValue: 'Profissional autônomo (microempreendedor na França)',
    address: 'Endereço:',
    siret: 'SIRET:',
    email: 'E-mail:',
  },
  director: { title: '2. Responsável pela publicação' },
  hosting: {
    title: '3. Hospedagem',
    intro: 'O site é hospedado por:',
    company: 'Empresa:',
    address: 'Endereço:',
    addressValue: '340 Pine Street, Suite 800, San Francisco, CA 94104, Estados Unidos',
    website: 'Site:',
  },
  ip: {
    title: '4. Propriedade intelectual',
    paragraphs: [
      <>
        Todo o conteúdo deste site (textos, imagens, logotipos, código-fonte, elementos visuais) é de propriedade
        exclusiva de <strong className="text-white">Powksy / Matthieu Uzan</strong>, salvo indicação em
        contrário.
      </>,
      'É proibida qualquer reprodução, representação, modificação, publicação ou adaptação total ou parcial dos elementos do site, por qualquer meio ou processo, sem autorização prévia e por escrito de Matthieu Uzan.',
      'Os projetos apresentados no portfólio continuam sendo propriedade de seus respectivos autores e são exibidos para ilustrar as competências do estúdio.',
    ],
  },
  data: {
    title: '5. Dados pessoais',
    noCollection: 'Este site não coleta nenhum dado pessoal diretamente por meio de formulários. As interações se limitam a links para serviços de terceiros (GitHub, LinkedIn, Discord), sujeitos às suas próprias políticas de privacidade.',
    rights: 'De acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD - Regulamento UE 2016/679) e a lei francesa de informática e liberdades, você tem direito de acesso, retificação, oposição e exclusão dos dados que lhe dizem respeito. Para exercer esse direito, entre em contato:',
  },
  cookies: {
    title: '6. Cookies',
    text: (
      <>
        Este site não usa cookies para rastreamento, publicidade ou análise comportamental.
        Duas informações técnicas são salvas no armazenamento local do seu navegador:{' '}
        <code className="bg-white/10 px-1 rounded text-xs">powksy_welcomed</code>, para exibir a tela de
        boas-vindas apenas uma vez, e <code className="bg-white/10 px-1 rounded text-xs">powksy_lang</code>,
        para lembrar o idioma escolhido. Elas não contêm nenhum dado pessoal e não são compartilhadas com terceiros.
      </>
    ),
  },
  liability: {
    title: '7. Limitação de responsabilidade',
    paragraphs: [
      'A Powksy se esforça para fornecer informações precisas e atualizadas. No entanto, não é possível garantir a exatidão, a completude ou a atualidade das informações. O uso das informações e dos conteúdos do site é de responsabilidade do usuário.',
      'A Powksy não pode ser responsabilizada por danos diretos ou indiretos decorrentes do acesso ao site ou do uso de seu conteúdo, nem pelos links para sites de terceiros cujo conteúdo não controla.',
    ],
  },
  law: {
    title: '8. Legislação aplicável',
    text: 'Este site e seu aviso legal são regidos pela lei francesa. Em caso de litígio, e na falta de acordo amigável, os tribunais franceses serão os únicos competentes.',
  },
}
