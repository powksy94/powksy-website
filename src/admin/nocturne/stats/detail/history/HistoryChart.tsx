import { Bar, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { formatDayLong, formatDayShort, formatNumber } from "../../../shared/format";
import { axisTick, CHART, tooltipProps } from "../../chartTheme";
import type { HistoryPoint } from "../../types";

interface Props  {
    history: HistoryPoint[]
    accent: string
}

export default function HistoryChart({ history, accent }: Props) {
    return (
        <div className="h-56 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={history} margin={{ top: 8, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke={CHART.grid} vertical={false} />
                    <XAxis
                        dataKey="date"
                        tickFormatter={d => formatDayShort(String(d))}
                        tick={axisTick}
                        axisLine={false}
                        tickLine={false}
                        interval="preserveStartEnd"
                        minTickGap={24}
                    />
                    <YAxis yAxisId="daily" allowDecimals={false} width={32} tick={axisTick} axisLine={false} tickLine={false} />
                    <YAxis yAxisId="cumulative" orientation="right" allowDecimals={false} width={40} tick={axisTick} axisLine={false} tickLine={false} />
                    <Tooltip
                        {...tooltipProps}
                        cursor={{ fill: CHART.cursor }}
                        labelFormatter={d => formatDayLong(String(d))}
                        formatter={v => formatNumber(Number(v))}
                    />
                    <Bar yAxisId="daily" dataKey="value" name="Nouveaux" fill={accent} fillOpacity={0.7} radius={[3, 3, 0, 0]} maxBarSize={24} />
                    <Line yAxisId="cumulative" dataKey="cumulative" name="Cumul" type="monotone" stroke={CHART.secondary} strokeWidth={2} dot={false} />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}