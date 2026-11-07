import type { Dictionary } from '../../types'

export const about: Dictionary['about'] = {
  titleStart: '关于',
  paragraphs: [
    'Powksy 是一家专注于 Web 与移动应用的独立开发工作室。',
    '我们的目标: 打造现代、高性能且易于使用的数字产品。从上架 Play Store 的移动应用到完整的网站, 每个项目都为长久运行而打造。',
  ],
  stats: {
    projects: '已交付项目',
    apps: '已上架移动应用',
    tech: '掌握的技术',
  },
  values: {
    web: {
      title: '定制 Web',
      desc: '使用现代技术构建的网站和 Web 应用: React、Flask、Django。',
    },
    mobile: {
      title: '移动应用',
      desc: '基于 Flutter 的跨平台应用, 已在 Android 上线。',
    },
    deploy: {
      title: '持续部署',
      desc: '应用已部署并持续维护, 定期更新。',
    },
    result: {
      title: '以结果为导向',
      desc: '每个产品都为满足真实需求而设计, 提供流畅的体验。',
    },
  },
  techTitle: '我们掌握的技术',
}
