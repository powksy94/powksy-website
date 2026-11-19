export type MetricId = 'users' | 'profiles' | 'likes' | 'matches' | 'messages'

// Number of days, or 'all' for "since the app launch"
export type PeriodParam = number | 'all'

export interface HistoryPoint {
    date: string        // "YYYY-MM-DD", Europe/Paris day
    value: number
    cumulative?: number // only on the detailed history enpoint
}

export interface StatTrend {
    deltaPercent?: number
    delta?: number
    secondaryValue?: number
    secondaryLabel?: string
    history?: HistoryPoint[]
}

export type Stats = Record<MetricId, number> & {
    trends?: Partial<Record<MetricId, StatTrend>>
}

export interface MetricHistory {
    metric: MetricId
    days: number
    total: number
    history: Required<HistoryPoint>[]
}

export interface Slice {
    label:  string
    value: number
}

export interface ProfileDemographics {
    ages: Slice[]
    countries: Slice[]
}