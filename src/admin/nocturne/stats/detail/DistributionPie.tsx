import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Panel from "../../shared/Panel";
import { formatNumber, formatPercent } from "../../shared/format";
import { tooltipProps } from "../chartTheme";
import type { Slice } from "../types";

// 10 colours: at most 8 countries + "Autres pays" + "Non renseigné"
const PALETTE = [
    '#7B00D4', '#D4006A', '#00A8D4', '#4ADE80', '#FBBF24',
    '#F87171', '#C4A8E0', '#2DD4BF', '#7B5590', '#3D2A4D',
]

interface Props {
    title: string
    slices: Slice[]
}

export default function DistributionPie({ title, slices }: Props) {
    const total = slices.reduce((sum, s) => sum + s.value, 0)
    const data = slices.map((s, i) => ({ ...s, fill: PALETTE[i % PALETTE.length] }))

    return (
        <Panel title={title}>
            {total === 0 ? (
                <p className="text-sm py-10 text-center" style={{ color: '#5B3D7A' }}>Aucune donnée.</p>
            ) : (
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-44 h-44 flex-shrink-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={data} dataKey="value" nameKey="label" innerRadius="55%" outerRadius="100%" paddingAngle={2} stroke="none" />
                                <Tooltip
                                    {...tooltipProps}
                                    formatter={(v, name) => [`${formatNumber(Number(v))} (${formatPercent(Number(v) / total)})`, String(name)]}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <ul className="w-full space-y-2">
                        {data.map(s => (
                            <li key={s.label} className="flex items-center gap-2.5 text-sm">
                                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: s.fill }} />
                                <span className="flex-1 truncate" style={{ color: '#C4A8E0' }}>{s.label}</span>
                                <span className="tabular-nums" style={{ color: '#7B5590'}}>{formatPercent(s.value / total)}</span>
                            </li>
                        ))}
                    </ul>

                </div>
            )}
        </Panel>
    )
}