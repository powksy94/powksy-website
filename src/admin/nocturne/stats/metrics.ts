import { BarChart2, Heart, MessageSquare, Shuffle, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { MetricId } from "./types"

export interface Metric {
    id: MetricId
    label: string
    icon: LucideIcon
    accent: string
}

// Single source of truth for the overview cards and the detail pages
export const METRICS: readonly Metric[] = [
    { id: 'users',      label: 'Utilisateurs',  icon: Users,            accent: '#7B00D4' },
    { id: 'profiles',   label: 'Profils',       icon: BarChart2,        accent: '#7B00D4' },
    { id: 'likes',      label: 'Likes',         icon: Heart,            accent: '#D4006A' },
    { id: 'matches',    label: 'Matches',       icon: Shuffle,          accent: '#00A8D4' },
    { id: 'messages',   label: 'Messages',      icon: MessageSquare,    accent: '#7B00D4' },
]

export function findMetric(id: string | undefined): Metric | undefined {
    return METRICS.find(m => m.id === id)
}