export function formatNumber(n: number, maxFractionDigits = 0): string {
    return new Intl.NumberFormat('fr-FR', { maximumFractionDigits: maxFractionDigits }).format(n)
}

export function formatPercent(ratio: number): string {
    return new Intl.NumberFormat('fr-FR', { style: 'percent', maximumFractionDigits: 1 }).format(ratio)
}

// "YYYY-MM-DD" parsed as a local date: new Date('YYYY-MM-DD') is UTC and can shift a day
export function parseDay(day: string): Date {
    const [y, m, d] = day.split('-').map(Number)
    return new Date(y, m - 1, d)
}

export function formatDayShort(day: string): string {
    return parseDay(day).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
}

export function formatDayLong(day: string): string {
    return parseDay(day).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
}