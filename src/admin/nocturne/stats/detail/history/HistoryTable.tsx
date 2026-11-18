import { formatDayLong, formatNumber } from "../../../shared/format";
import type { HistoryPoint } from "../../types";

interface Props {
    history: HistoryPoint[]
}

export default function HistoryTable({ history }: Props) {
    // Most recent first, without mutating the prop
    const rows = history.slice().reverse()

    return (
        <div className="max-h-96 overflow-auto pr-4">
            <table className="w-full text-sm">
                <thead className="sticky top-0" style={{ backgroundColor: '#110018' }}>
                    <tr className="text-xs text-left" style={{ color: '#7B5590' }}>
                        <th className="font-medium py-2">Date</th>
                        <th className="font-medium py-2 text-right">Nouveaux</th>
                        <th className="font-medium py-2 text-right">Cumul</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(p => (
                        <tr key={p.date} className="border-t" style={{ borderColor: '#7B00D415' }}>
                            <td className="py-2 pr-3 first-letter:uppercase" style={{ color: '#C4A8E0' }}>{formatDayLong(p.date)}</td>
                            <td className="py-2 text-right tabular-nums" style={{ color: p.value > 0 ? '#E9DDF5' : '#5B3D7A'}}>
                                {p.value > 0 ? `+${formatNumber(p.value)}` : '0'}
                            </td>
                            <td className="py-2 text-right tabular-nums" style={{ color: '#9B7DB8'}}>
                                {p.cumulative !== undefined ? formatNumber(p.cumulative) : '-'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}