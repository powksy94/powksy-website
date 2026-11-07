import type { Dictionary } from '../../types'

export const legalNotice: Dictionary['legalNotice'] = {
  title: '法的情報',
  back: '戻る',
  updated: '最終更新日:',
  publisher: {
    title: '1. サイト運営者',
    intro: <>Web サイト <strong className="text-white">powksy.com</strong> は以下の者が運営しています:</>,
    name: '氏名:',
    status: '事業形態:',
    statusValue: '個人事業主 (フランスのマイクロアントレプレナー)',
    address: '住所:',
    siret: 'SIRET 番号:',
    email: 'メール:',
  },
  director: { title: '2. 発行責任者' },
  hosting: {
    title: '3. ホスティング',
    intro: '本サイトは以下の会社がホスティングしています:',
    company: '会社:',
    address: '住所:',
    addressValue: '340 Pine Street, Suite 800, San Francisco, CA 94104, アメリカ合衆国',
    website: 'Web サイト:',
  },
  ip: {
    title: '4. 知的財産権',
    paragraphs: [
      <>
        特に記載がない限り、本サイトのすべてのコンテンツ (テキスト、画像、ロゴ、ソースコード、ビジュアル) は{' '}
        <strong className="text-white">Powksy / Matthieu Uzan</strong> に独占的に帰属します。
      </>,
      'Matthieu Uzan の事前の書面による同意なく、手段や方法を問わず、本サイトの全部または一部を複製、表示、改変、公開、翻案することを禁じます。',
      'ポートフォリオに掲載しているプロジェクトはそれぞれの作者に帰属し、スタジオのスキルを紹介する目的で掲載しています。',
    ],
  },
  data: {
    title: '5. 個人データ',
    noCollection: '本サイトはフォームを通じて個人データを直接収集することはありません。外部サービス (GitHub、LinkedIn、Discord) へのリンクのみを提供しており、これらのサービスにはそれぞれのプライバシーポリシーが適用されます。',
    rights: 'EU 一般データ保護規則 (GDPR - EU 規則 2016/679) およびフランスのデータ保護法に基づき、ご自身に関するデータへのアクセス、訂正、処理への異議申し立て、削除を求める権利があります。この権利を行使するには、以下までご連絡ください:',
  },
  cookies: {
    title: '6. Cookie',
    text: (
      <>
        本サイトは、トラッキング、広告、行動分析を目的とした Cookie を使用していません。
        ブラウザのローカルストレージには、技術的な値が 2 つ保存されます:{' '}
        <code className="bg-white/10 px-1 rounded text-xs">powksy_welcomed</code> はウェルカム画面を一度だけ表示するため、{' '}
        <code className="bg-white/10 px-1 rounded text-xs">powksy_lang</code> は選択した言語を記憶するためのものです。
        個人データは含まれず、第三者と共有されることもありません。
      </>
    ),
  },
  liability: {
    title: '7. 免責事項',
    paragraphs: [
      'Powksy は正確で最新の情報を提供するよう努めていますが、情報の正確性、完全性、最新性を保証するものではありません。本サイトの情報およびコンテンツの利用は、利用者ご自身の責任で行ってください。',
      'Powksy は、本サイトへのアクセスまたはコンテンツの利用によって生じた直接的・間接的な損害、および管理外の外部サイトへのリンクについて、一切の責任を負いません。',
    ],
  },
  law: {
    title: '8. 準拠法',
    text: '本サイトおよび本法的情報はフランス法に準拠します。紛争が生じ、友好的な解決に至らない場合は、フランスの裁判所を専属的管轄裁判所とします。',
  },
}
