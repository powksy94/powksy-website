import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { formatDayShort, formatNumber } from "../../shared/format"
import { tooltipProps } from "../chartTheme";
import type { HistoryPoint } from "../types";

interface Props {
    data: HistoryPoint[]
    accent: string
}

export default function Sparkline({ data, accent }: Props) {
    const gradientId = `spark-${accent.replace('#', '')}`

    return (
        <ResponsiveContainer width="100%" height={56}>
            <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={accent} stopOpacity={0.3}/>
                        <stop offset="100%" stopColor={accent} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="date" hide />
                <Tooltip
                    {...tooltipProps}
                    itemStyle={{ color: accent }}
                    formatter={v => [formatNumber(Number(v)), '']}
                    labelFormatter={d => formatDayShort(String(d))}
                />
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke={accent}
                    strokeWidth={1.5}
                    fill={`url(#${gradientId})`}
                    dot={false}
                    activeDot={{ r: 3, fill: accent, strokeWidth: 0}}
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}