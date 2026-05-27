import { TrendingUp, TrendingDown } from 'lucide-react'
import type { StatTrend } from '../api'

interface Props {
  label: string
  value: number
  icon: React.ElementType
  trend?: StatTrend
  accent?: string
}

export default function StatCard({ label, value, icon: Icon, trend, accent = '#7B00D4' }: Props) {
  const positive = (trend?.deltaPercent ?? 0) >= 0
  const pct = trend?.deltaPercent

  return (
    <div
      className="rounded-2xl p-5 border flex flex-col gap-3"
      style={{ backgroundColor: '#110018', borderColor: '#7B00D420' }}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium" style={{ color: '#9B7DB8' }}>{label}</p>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${accent}18` }}>
          <Icon size={16} style={{ color: accent }} />
        </div>
      </div>

      <div>
        <p className="text-4xl font-bold text-white tracking-tight">
          {value.toLocaleString('fr-FR')}
        </p>
        {pct !== undefined && (
          <div className="flex items-center gap-1.5 mt-2">
            {positive
              ? <TrendingUp size={13} style={{ color: '#4ADE80' }} />
              : <TrendingDown size={13} style={{ color: '#F87171' }} />
            }
            <span className="text-xs font-semibold" style={{ color: positive ? '#4ADE80' : '#F87171' }}>
              {positive ? '+' : ''}{pct.toFixed(1)}%
            </span>
            {trend?.delta !== undefined && (
              <span className="text-xs" style={{ color: '#5B3D7A' }}>
                ({positive ? '+' : ''}{trend.delta.toLocaleString('fr-FR')})
              </span>
            )}
          </div>
        )}
      </div>

      {trend?.secondaryValue !== undefined && (
        <div
          className="flex items-center justify-between pt-3 mt-auto border-t"
          style={{ borderColor: '#7B00D415' }}
        >
          <span className="text-xs" style={{ color: '#5B3D7A' }}>{trend.secondaryLabel}</span>
          <span className="text-sm font-semibold" style={{ color: '#C4A8E0' }}>
            {trend.secondaryValue.toLocaleString('fr-FR')}
          </span>
        </div>
      )}
    </div>
  )
}
