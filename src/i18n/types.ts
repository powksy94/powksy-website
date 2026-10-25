import type { ReactNode } from 'react'

export type AppId = 'password' | 'dailyFacts' | 'nocturne'

export type ProjectId =
  | 'discordBot'
  | 'aliceConsole'
  | 'fileAnalyzer'
  | 'hashCompare'
  | 'passwordApp'
  | 'aliceTrain'
  | 'passwordBackend'
  | 'anecdoteApp'
  | 'rpgGame'
  | 'datingApp'
  | 'datingBackend'
  | 'cobol'
  | 'cubeGame'

export type ValueId = 'web' | 'mobile' | 'deploy' | 'result'

export interface Dictionary {
  meta: {
    title: string
    description: string
  }
  header: {
    nav: { services: string; portfolio: string; about: string; contact: string }
    language: string
    menu: string
  }
  welcome: {
    word: string
  }
  hero: {
    badge: string
    titleStart: string
    titleHighlight: string
    titleEnd: string
    subtitle: string
    ctaProjects: string
    ctaStart: string
  }
  services: {
    title: string
    subtitle: string
    web: { title: string; desc: string }
    mobile: { title: string; desc: string }
    appsTitle: string
    appsSubtitle: string
    playStore: string
    comingSoon: string
    apps: Record<AppId, { description: string[]; features: string[] }>
  }
  portfolio: {
    title: string
    subtitle: string
    projects: Record<ProjectId, { title: string; description: string }>
  }
  about: {
    titleStart: string
    paragraphs: string[]
    stats: { projects: string; apps: string; tech: string }
    values: Record<ValueId, { title: string; desc: string }>
    techTitle: string
  }
  contact: {
    title: string
    subtitle: string
    emailLabel: string
    preferEmail: string
  }
  footer: {
    rights: string
    legal: string
  }
  legalNotice: {
    title: string
    back: string
    updated: string
    publisher: {
      title: string
      intro: ReactNode
      name: string
      status: string
      statusValue: string
      address: string
      siret: string
      email: string
    }
    director: { title: string }
    hosting: {
      title: string
      intro: string
      company: string
      address: string
      addressValue: string
      website: string
    }
    ip: { title: string; paragraphs: ReactNode[] }
    data: { title: string; noCollection: string; rights: string }
    cookies: { title: string; text: ReactNode }
    liability: { title: string; paragraphs: string[] }
    law: { title: string; text: string }
  }
}
