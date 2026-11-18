import type { HistoryPoint } from "../../types";

export interface Summary {
    periodTotal: number
    dailyAverage: number
    bestDay: HistoryPoint | null
    growth: number | null // ratio vs everything before the period, null when nothing before
}

export function summarize(history: HistoryPoint[], total: number): Summary {
    const periodTotal = history.reduce((sum, p) => sum + p.value, 0)
    const dailyAverage = history.length > 0 ? periodTotal / history.length : 0
    const bestDay = history.reduce<HistoryPoint | null>(
        (best, p) => (p.value > 0 && (!best || p.value > best.value) ? p : best),
        null,
    )
    const before = total - periodTotal

    return { periodTotal, dailyAverage, bestDay, growth: before > 0 ? periodTotal / before : null }
}