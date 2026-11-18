export const PERIODS = [7, 30, 90] as const
export type Period = (typeof PERIODS)[number]

export const DEFAULT_PERIOD: Period = 30

// Reads ?days= from the URL; anything unexpected falls back to the default
export function parsePeriod(raw: string | null): Period {
    return PERIODS.find(p => p === Number(raw)) ?? DEFAULT_PERIOD
}