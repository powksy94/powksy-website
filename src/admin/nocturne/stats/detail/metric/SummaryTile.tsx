interface Props {
    label: string
    value: string
    hint?: string
    accent: string
}

export default function SummaryTile({ label, value, hint, accent }: Props) {
    return (
        <div className="rounded-2xl p-4 border" style={{ backgroundColor: '#110018', borderColor: '#7B00D420' }}>
            <p className="text-xs" style={{ color: '#7B5590' }}>{label}</p>
            <p className="text-2xl font-bold text-white mt-1 tracking-tight">{value}</p>
            {hint && <p className="text-xs mt-1" style={{ color: accent }}>{hint}</p>}
        </div>
    )
}