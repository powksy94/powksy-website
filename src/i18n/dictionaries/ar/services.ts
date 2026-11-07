import type { Dictionary } from '../../types'

export const services: Dictionary['services'] = {
  title: 'ماذا نقدّم',
  subtitle: 'من الفكرة إلى الإطلاق: تطبيقات ويب وجوال مصمّمة للأداء.',
  web: {
    title: 'تطوير الويب',
    desc: 'مواقع وتطبيقات ويب حديثة وسريعة وقابلة للتوسع.',
  },
  mobile: {
    title: 'تطبيقات الجوال',
    desc: 'تطبيقات متعددة المنصات لنظامي iOS وAndroid مبنية بتقنية Flutter.',
  },
  appsTitle: 'تطبيقاتنا',
  appsSubtitle: 'اكتشف تطبيقات الجوال التي طوّرتها Powksy.',
  playStore: 'عرض على Play Store',
  comingSoon: 'قريبًا',
  apps: {
    password: {
      description: [
        'تطبيق جوال متعدد المنصات مبني بتقنية Flutter',
        'تخزين آمن لكلمات المرور عبر Firebase Authentication وFirestore',
      ],
      features: [
        'إنشاء حسابات المستخدمين وإدارتها مع تشفير البيانات',
        'مولّد كلمات مرور عشوائية بمعايير قابلة للتخصيص',
        'واجهة مستخدم سهلة مع تنقّل بين الأقسام',
        'مزامنة فورية بين الأجهزة عبر Firebase',
      ],
    },
    dailyFacts: {
      description: [
        'تطبيق جوال متعدد المنصات',
        'بنية Flutter للشاشات والمنطق البرمجي',
      ],
      features: [
        'عرض ديناميكي للمعلومات الطريفة',
        'إضافة معلومات جديدة عبر نموذج',
        'تنقّل سلس بين أقسام التطبيق',
        'واجهة جوال مصمّمة لتكون بسيطة وسريعة',
      ],
    },
    nocturne: {
      description: [
        'تطبيق تعارف متعدد المنصات مبني بتقنية Flutter',
        // \u200E (left-to-right mark) keeps "C++" from being displayed as "++C" inside Arabic text
        'بنية Dart مع مكوّنات أصلية (C++\u200E وSwift)',
      ],
      features: [
        'واجهة الملف الشخصي مع تنقّل سلس',
        'نظام توافق بين المستخدمين',
        'إدارة التفاعلات (إعجاب، تجاوز) مع رسوم متحركة',
        'تنقّل بين أقسام التطبيق',
      ],
    },
  },
}
