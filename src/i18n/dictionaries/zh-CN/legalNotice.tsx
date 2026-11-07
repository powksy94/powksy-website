import type { Dictionary } from '../../types'

export const legalNotice: Dictionary['legalNotice'] = {
  title: '法律声明',
  back: '返回',
  updated: '最后更新:',
  publisher: {
    title: '1. 网站发布者',
    intro: <>网站 <strong className="text-white">powksy.com</strong> 由以下主体发布:</>,
    name: '姓名:',
    status: '身份:',
    statusValue: '个体经营者 (法国微型企业主)',
    address: '地址:',
    siret: 'SIRET 编号:',
    email: '电子邮件:',
  },
  director: { title: '2. 出版负责人' },
  hosting: {
    title: '3. 网站托管',
    intro: '本网站由以下公司托管:',
    company: '公司:',
    address: '地址:',
    addressValue: '340 Pine Street, Suite 800, San Francisco, CA 94104, 美国',
    website: '网站:',
  },
  ip: {
    title: '4. 知识产权',
    paragraphs: [
      <>
        除另有说明外, 本网站的所有内容 (文字、图片、标志、源代码、视觉元素) 均为{' '}
        <strong className="text-white">Powksy / Matthieu Uzan</strong> 的专有财产。
      </>,
      '未经 Matthieu Uzan 事先书面同意, 禁止以任何方式或手段复制、展示、修改、发布或改编本网站的全部或部分内容。',
      '作品集中展示的项目仍归其各自作者所有, 列出仅为展示工作室的能力。',
    ],
  },
  data: {
    title: '5. 个人数据',
    noCollection: '本网站不通过表单直接收集任何个人数据。互动仅限于指向第三方服务 (GitHub、LinkedIn、Discord) 的链接, 这些服务受其各自隐私政策的约束。',
    rights: '根据《通用数据保护条例》(GDPR - 欧盟第 2016/679 号条例) 和法国《数据保护法》, 您有权访问、更正、反对处理和删除与您有关的数据。如需行使此权利, 请联系:',
  },
  cookies: {
    title: '6. Cookie',
    text: (
      <>
        本网站不使用 Cookie 进行跟踪、广告或行为分析。
        您的浏览器本地存储中保存了两个技术值:{' '}
        <code className="bg-white/10 px-1 rounded text-xs">powksy_welcomed</code> 使欢迎界面只显示一次,{' '}
        <code className="bg-white/10 px-1 rounded text-xs">powksy_lang</code> 用于记住您选择的语言。
        它们不包含任何个人数据, 也不会与第三方共享。
      </>
    ),
  },
  liability: {
    title: '7. 责任限制',
    paragraphs: [
      'Powksy 力求提供准确且最新的信息, 但无法保证信息的准确性、完整性或时效性。用户使用本网站上的信息和内容, 风险自负。',
      '对于因访问本网站或使用其内容而造成的任何直接或间接损失, 以及指向其无法控制内容的第三方网站的链接, Powksy 概不负责。',
    ],
  },
  law: {
    title: '8. 适用法律',
    text: '本网站及其法律声明受法国法律管辖。如发生争议且无法友好解决, 由法国法院专属管辖。',
  },
}
