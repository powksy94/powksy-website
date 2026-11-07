import type { Dictionary } from '../../types'

export const services: Dictionary['services'] = {
  title: '私たちのサービス',
  subtitle: 'アイデアからリリースまで: 高いパフォーマンスを追求した Web・モバイルアプリ。',
  web: {
    title: 'Web 開発',
    desc: 'モダンで高速、拡張性のある Web サイトと Web アプリ。',
  },
  mobile: {
    title: 'モバイルアプリ',
    desc: 'Flutter で開発する iOS・Android 対応のクロスプラットフォームアプリ。',
  },
  appsTitle: '私たちのアプリ',
  appsSubtitle: 'Powksy が開発したモバイルアプリをご覧ください。',
  playStore: 'Play Store で見る',
  comingSoon: '近日公開',
  apps: {
    password: {
      description: [
        'Flutter で開発したクロスプラットフォームのモバイルアプリ',
        'Firebase Authentication と Firestore によるパスワードの安全な保管',
      ],
      features: [
        'データ暗号化によるユーザーアカウントの作成と管理',
        '条件をカスタマイズできるランダムパスワード生成機能',
        'セクション間を移動できる直感的なユーザーインターフェース',
        'Firebase による複数デバイス間のリアルタイム同期',
      ],
    },
    dailyFacts: {
      description: [
        'クロスプラットフォームのモバイルアプリ',
        '画面とロジックを Flutter で構成',
      ],
      features: [
        '豆知識の動的な表示',
        'フォームから新しい豆知識を追加',
        'アプリ内のセクション間をスムーズに移動',
        'シンプルで素早く使えるモバイルインターフェース',
      ],
    },
    nocturne: {
      description: [
        'Flutter で開発したクロスプラットフォームのマッチングアプリ',
        'ネイティブコンポーネント (C++、Swift) を組み合わせた Dart アーキテクチャ',
      ],
      features: [
        'スムーズに操作できるプロフィール画面',
        'ユーザー同士のマッチング機能',
        'アニメーション付きのリアクション (いいね、スキップ)',
        'アプリ内のセクション間ナビゲーション',
      ],
    },
  },
}
