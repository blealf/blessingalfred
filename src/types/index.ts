export interface Owner {
  readonly name: string
  readonly title: string
  readonly email: string
  readonly phone: string
  readonly linkedin: string
  readonly github: string
  readonly portfolio: string
  readonly location: string
  readonly availability: string
}

export interface Stat {
  readonly id: string
  readonly label: string
  readonly value: number
  readonly suffix?: string
}

export interface StackPill {
  readonly category: string
  readonly items: readonly string[]
}

export interface SkillMetric {
  readonly name: string
  readonly level: number
}

export interface SkillGroup {
  readonly title: string
  readonly description: string
  readonly metrics: readonly SkillMetric[]
}

export interface ExperienceItem {
  readonly id: string
  readonly title: string
  readonly company: string
  readonly period: string
  readonly responsibilities: readonly string[]
}

export interface ProjectItem {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly techs: readonly string[]
  readonly github?: string
  readonly link?: string
  readonly imageSrc?: string
}

export interface TimelineItem {
  readonly year: string
  readonly title: string
  readonly detail: string
}

export interface NavLink {
  readonly id: string
  readonly label: string
}

export interface SiteContent {
  readonly owner: Owner
  readonly navLinks: readonly NavLink[]
  readonly heroTagline: string
  readonly heroSummary: string
  readonly aboutParagraphs: readonly string[]
  readonly stats: readonly Stat[]
  readonly stackPills: readonly StackPill[]
  readonly skills: readonly SkillGroup[]
  readonly experience: readonly ExperienceItem[]
  readonly projects: readonly ProjectItem[]
  readonly timeline: readonly TimelineItem[]
}
