import type { Dictionary } from '../../types'

export const services: Dictionary['services'] = {
  title: '我们的服务',
  subtitle: '从创意到上线: 为性能而打造的 Web 与移动应用。',
  web: {
    title: 'Web 开发',
    desc: '现代、快速、可扩展的网站与 Web 应用。',
  },
  mobile: {
    title: '移动应用',
    desc: '使用 Flutter 构建的 iOS 与 Android 跨平台应用。',
  },
  appsTitle: '我们的应用',
  appsSubtitle: '探索 Powksy 开发的移动应用。',
  playStore: '在 Play Store 查看',
  comingSoon: '即将推出',
  apps: {
    password: {
      description: [
        '使用 Flutter 构建的跨平台移动应用',
        '通过 Firebase Authentication 和 Firestore 安全存储密码',
      ],
      features: [
        '用户账户的创建与管理, 数据加密',
        '可自定义规则的随机密码生成器',
        '直观的用户界面, 各板块之间轻松切换',
        '通过 Firebase 实现多设备实时同步',
      ],
    },
    dailyFacts: {
      description: [
        '跨平台移动应用',
        '基于 Flutter 的界面与逻辑架构',
      ],
      features: [
        '动态展示趣味知识',
        '通过表单添加新内容',
        '应用各板块之间流畅切换',
        '简洁快速的移动端界面',
      ],
    },
    nocturne: {
      description: [
        '使用 Flutter 构建的跨平台交友应用',
        'Dart 架构, 结合原生组件 (C++、Swift)',
      ],
      features: [
        '用户资料界面, 流畅导航',
        '用户之间的匹配系统',
        '互动处理 (喜欢、跳过) 及动画效果',
        '应用各板块之间的导航',
      ],
    },
  },
}
