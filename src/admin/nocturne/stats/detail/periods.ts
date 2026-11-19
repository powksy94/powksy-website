export const PERIODS = [7, 30, 90, 'all'] as const
export type Period = (typeof PERIODS)[number]

export const DEFAULT_PERIOD: Period = 30

// Reads ?period= from the page URL (sent to the API as ?days=); anything unexpected falls back to the default
export function parsePeriod(raw: string | null): Period {
    if (raw === 'all') return 'all'
    const parsed = Number(raw)
    return PERIODS.find(p => p === parsed) ?? DEFAULT_PERIOD
}

// Button label: "7 jours", "Total"
export function periodLabel(period: Period): string {
    return period === 'all' ? 'Total' : `${period} jours`
}

// End of a sentence: "sur 7 jours", "depuis le lancement"
export function periodPhrase(period: Period): string {
    return period === 'all' ? 'depuis le lancement' : `sur ${period} jours`
}