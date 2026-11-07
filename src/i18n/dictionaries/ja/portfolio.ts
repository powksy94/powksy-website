import type { Dictionary } from '../../types'

export const portfolio: Dictionary['portfolio'] = {
  title: '私たちのプロジェクト',
  subtitle: 'Web、モバイル、システムプログラミングのプロジェクトから厳選してご紹介します。',
  projects: {
    discordBot: {
      title: 'Discord ボット',
      description: '名言、インタラクティブメニュー、音声再生、ロール管理を備えた Discord サーバー用ボット。',
    },
    aliceConsole: {
      title: 'コンソールゲーム - Alice in Bordeland',
      description: 'マンガを題材にしたコンソールゲーム。ランダム生成とマルチプレイに対応。',
    },
    fileAnalyzer: {
      title: 'ファイル・URL 解析サイト',
      description: 'ファイル/URL 解析、管理者ログ管理、ユーザー認証、SQLite データベースを備えた Web サイト。',
    },
    hashCompare: {
      title: 'Hash Compare',
      description: 'ハッシュ値でファイルを比較する Python ツール。セキュリティと完全性を重視。',
    },
    passwordApp: {
      title: 'Password Mobile App',
      description: 'Firebase を使った安全なパスワード管理用の Flutter モバイルアプリ。生成機能を内蔵。',
    },
    aliceTrain: {
      title: 'AliceinBorderland Train Game',
      description: '列車を舞台にした C# のコンソールサバイバルゲーム。ランダムイベントと勝利条件あり。',
    },
    passwordBackend: {
      title: 'バックエンド API - Password App',
      description: 'モバイルアプリ向けの Express.js + MongoDB バックエンド。認証、暗号化 CRUD、RESTful API を提供。',
    },
    anecdoteApp: {
      title: 'Anecdote Mobile App',
      description: '豆知識を閲覧・追加できる Flutter アプリ。スムーズなナビゲーションと入力フォーム付き。',
    },
    rpgGame: {
      title: 'Python + MongoDB RPG',
      description: '3 人パーティーのターン制バトルと、データベースに保存されるランキングを備えたコンソール RPG。',
    },
    datingApp: {
      title: 'Dating App',
      description: 'マッチング、プロフィール、いいね/スキップのアニメーション、スムーズな操作を備えた Flutter マッチングアプリ。',
    },
    datingBackend: {
      title: 'バックエンド API - Dating App',
      description: 'Dating App 用の TypeScript/Node.js バックエンド。RESTful ルート、認証、モジュール構成。',
    },
    cobol: {
      title: 'COBOL 取引管理',
      description: 'コンソールメニューと順次ファイルで金融取引を管理する COBOL プログラム。',
    },
    cubeGame: {
      title: 'Cube Game (C# / WPF)',
      description: 'レイヤー構成 (Core、ゲームロジック、インターフェース) の C# WPF デスクトップアプリ。',
    },
  },
}
