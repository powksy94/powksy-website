import { PERIODS } from "./periods";
import type { Period } from "./periods";

interface Props {
    value: Period
    onChange: (period: Period) => void
}

export default function PeriodSelector({ value, onChange }: Props) {
    return (
        <div role="group" aria-label="Période" className="inline-flex rounded-xl p-1 border" style={{ backgroundColor: '#0D0016', borderColor: '#7B00D420' }}>
            {PERIODS.map(p => {
                const active = p === value
                return (
                    <button
                    key={p}
                    onClick={() => onChange(p)}
                    aria-pressed={active}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                    style={{ backgroundColor: active ? '#7B00D4' : 'transparent', color: active ? 'white' : '#9B7DB8' }}
                    >
                        {p} jours
                    </button>
                )
            })}
        </div>
    )
}