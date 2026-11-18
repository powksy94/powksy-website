import { formatDayShort, formatNumber, formatPercent } from "../../../shared/format";
import type { Summary } from "./summarize";
import SummaryTile from "./SummaryTile";

interface Props {
    total: number
    days: number
    summary: Summary
    accent: string
}

export default function MetricSummary({ total, days, summary, accent }: Props) {
    const { periodTotal, dailyAverage, bestDay, growth } = summary

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <SummaryTile label="Total" value={formatNumber(total)} accent={accent} />
            <SummaryTile
                label={`Sur ${days} jours`}
                value={`+${formatNumber(periodTotal)}`}
                hint={growth !== null ? `+${formatPercent(growth)} vs avant` : undefined}
                accent={accent}
            />
            <SummaryTile label="Moyenne / jour" value={formatNumber(dailyAverage, 1)} accent={accent} />
            <SummaryTile
                label="Meilleur jour"
                value={bestDay ? formatNumber(bestDay.value) : '-'}
                hint={bestDay ? formatDayShort(bestDay.date) : undefined}
                accent={accent}
            />
        </div>
    )
}