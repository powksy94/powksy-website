import type { Dictionary } from '../../types'

export const portfolio: Dictionary['portfolio'] = {
  title: '我们的项目',
  subtitle: '精选的 Web、移动端与系统编程项目。',
  projects: {
    discordBot: {
      title: 'Discord 机器人',
      description: '为 Discord 服务器开发的机器人, 支持语录、交互式菜单、音频播放和角色管理。',
    },
    aliceConsole: {
      title: '控制台游戏 - Alice in Bordeland',
      description: '改编自漫画的控制台游戏, 支持随机生成和多人模式。',
    },
    fileAnalyzer: {
      title: '文件与 URL 分析网站',
      description: '提供文件/URL 分析的网站, 包含管理员日志管理、用户认证和 SQLite 数据库。',
    },
    hashCompare: {
      title: 'Hash Compare',
      description: '通过哈希指纹比较文件的 Python 工具, 注重安全性与完整性。',
    },
    passwordApp: {
      title: 'Password Mobile App',
      description: '基于 Flutter 和 Firebase 的安全密码管理移动应用, 内置密码生成器。',
    },
    aliceTrain: {
      title: 'AliceinBorderland Train Game',
      description: '以列车为场景的 C# 控制台生存游戏, 包含随机事件和胜利条件。',
    },
    passwordBackend: {
      title: '后端 API - Password App',
      description: '基于 Express.js + MongoDB 的后端, 为移动应用提供认证、加密 CRUD 和 RESTful API。',
    },
    anecdoteApp: {
      title: 'Anecdote Mobile App',
      description: '用于浏览和添加趣味知识的 Flutter 应用, 导航流畅并带有表单。',
    },
    rpgGame: {
      title: 'Python + MongoDB 角色扮演游戏',
      description: '控制台 RPG, 3 人队伍回合制战斗, 排行榜保存在数据库中。',
    },
    datingApp: {
      title: 'Dating App',
      description: 'Flutter 交友应用, 包含匹配、个人资料、喜欢/跳过动画和流畅导航。',
    },
    datingBackend: {
      title: '后端 API - Dating App',
      description: 'Dating App 的 TypeScript/Node.js 后端, 包含 RESTful 路由、认证和模块化架构。',
    },
    cobol: {
      title: 'COBOL 交易管理',
      description: '使用控制台菜单和顺序文件管理金融交易的 COBOL 程序。',
    },
    cubeGame: {
      title: 'Cube Game (C# / WPF)',
      description: 'C# WPF 桌面应用, 采用分层架构 (Core、游戏逻辑、界面)。',
    },
  },
}
