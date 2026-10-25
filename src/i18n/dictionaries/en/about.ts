import type { Dictionary } from '../../types'

export const about: Dictionary['about'] = {
  titleStart: 'About',
  paragraphs: [
    'Powksy is an independent development studio specializing in web and mobile applications.',
    'The goal: build modern, high-performing and accessible digital products. From mobile apps published on the Play Store to full websites, every project is built to last.',
  ],
  stats: {
    projects: 'Projects delivered',
    apps: 'Published mobile apps',
    tech: 'Technologies mastered',
  },
  values: {
    web: {
      title: 'Custom web',
      desc: 'Websites and web applications built with modern technologies: React, Flask, Django.',
    },
    mobile: {
      title: 'Mobile apps',
      desc: 'Cross-platform Flutter applications, available on Android.',
    },
    deploy: {
      title: 'Continuous deployment',
      desc: 'Applications that are deployed and actively maintained, with regular updates.',
    },
    result: {
      title: 'Results-driven',
      desc: 'Every product is designed to meet a real need and deliver a smooth experience.',
    },
  },
  techTitle: 'Technologies we master',
}
