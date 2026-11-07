import type { Dictionary } from '../../types'

// \u200E (left-to-right mark) keeps "C#" from being displayed as "#C" inside Arabic text

export const portfolio: Dictionary['portfolio'] = {
  title: 'مشاريعنا',
  subtitle: 'مجموعة مختارة من المشاريع في الويب والجوال وبرمجة الأنظمة.',
  projects: {
    discordBot: {
      title: 'بوت Discord',
      description: 'بوت لخادم Discord يتضمن اقتباسات وقائمة تفاعلية وتشغيل الصوت وإدارة الأدوار.',
    },
    aliceConsole: {
      title: 'لعبة طرفية - Alice in Bordeland',
      description: 'لعبة طرفية مستوحاة من مانغا، مع توليد عشوائي ودعم اللعب الجماعي.',
    },
    fileAnalyzer: {
      title: 'موقع لتحليل الملفات والروابط',
      description: 'موقع لتحليل الملفات والروابط مع إدارة سجلات المشرف ومصادقة المستخدمين وقاعدة بيانات SQLite.',
    },
    hashCompare: {
      title: 'Hash Compare',
      description: 'أداة Python تقارن الملفات عبر بصمة التجزئة، مع التركيز على الأمان والسلامة.',
    },
    passwordApp: {
      title: 'Password Mobile App',
      description: 'تطبيق جوال بتقنية Flutter لإدارة كلمات المرور بأمان عبر Firebase مع مولّد مدمج.',
    },
    aliceTrain: {
      title: 'AliceinBorderland Train Game',
      description: 'لعبة بقاء طرفية بلغة C#\u200E على متن قطار مع أحداث عشوائية وشروط للفوز.',
    },
    passwordBackend: {
      title: 'واجهة API خلفية - Password App',
      description: 'خادم خلفي بـ Express.js وMongoDB مع مصادقة وعمليات CRUD مشفّرة وواجهة RESTful لتطبيق الجوال.',
    },
    anecdoteApp: {
      title: 'Anecdote Mobile App',
      description: 'تطبيق Flutter لتصفّح المعلومات الطريفة وإضافتها، مع تنقّل سلس ونموذج إدخال.',
    },
    rpgGame: {
      title: 'لعبة RPG بـ Python وMongoDB',
      description: 'لعبة RPG طرفية بفرق من 3 شخصيات وقتال بالأدوار ولوحة صدارة محفوظة في قاعدة بيانات.',
    },
    datingApp: {
      title: 'Dating App',
      description: 'تطبيق تعارف بتقنية Flutter مع نظام توافق وملفات شخصية ورسوم متحركة للإعجاب والتجاوز وتنقّل سلس.',
    },
    datingBackend: {
      title: 'واجهة API خلفية - Dating App',
      description: 'خادم خلفي بـ TypeScript وNode.js لتطبيق Dating App مع مسارات RESTful ومصادقة وبنية معيارية.',
    },
    cobol: {
      title: 'إدارة المعاملات بلغة COBOL',
      description: 'برنامج COBOL لإدارة المعاملات المالية عبر قائمة طرفية وملف تسلسلي.',
    },
    cubeGame: {
      title: 'Cube Game (C# / WPF)',
      description: 'تطبيق سطح مكتب بـ C#\u200E وWPF ببنية متعددة الطبقات (Core، منطق اللعبة، الواجهة).',
    },
  },
}
