import type { Dictionary } from '../../types'

export const about: Dictionary['about'] = {
  titleStart: '私たちについて',
  paragraphs: [
    'Powksy は Web アプリとモバイルアプリを専門とする独立系の開発スタジオです。',
    '目指すのは、モダンで高性能、そして使いやすいデジタルプロダクト。Play Store で公開しているモバイルアプリから本格的な Web サイトまで、どのプロジェクトも長く使えるように作っています。',
  ],
  stats: {
    projects: '納品したプロジェクト',
    apps: '公開中のモバイルアプリ',
    tech: '習得した技術',
  },
  values: {
    web: {
      title: 'オーダーメイドの Web',
      desc: 'React、Flask、Django などのモダンな技術で作る Web サイトと Web アプリ。',
    },
    mobile: {
      title: 'モバイルアプリ',
      desc: 'Android で公開中の Flutter クロスプラットフォームアプリ。',
    },
    deploy: {
      title: '継続的なデプロイ',
      desc: '公開後も定期的なアップデートで継続的に保守しているアプリ。',
    },
    result: {
      title: '成果を重視',
      desc: 'どのプロダクトも実際のニーズに応え、快適な体験を届けるために設計しています。',
    },
  },
  techTitle: '習得している技術',
}
