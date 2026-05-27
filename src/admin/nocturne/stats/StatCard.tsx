import { TrendingUp, TrendingDown } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import type { StatTrend } from '../api'

interface Props {
  label: string
  value: number
  icon: React.ElementType
  trend?: StatTrend
  accent?: string
}

function Sparkline({ data, accent }: { data: { date: string; value: number }[]; accent: string }) {
  return (
    <ResponsiveContainer width="100%" height={56}>
      <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={`grad-${accent.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity={0.3} />
            <stop offset="100%" stopColor={accent} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" hide />
        <Tooltip
          contentStyle={{ backgroundColor: '#1C0030', border: '1px solid #7B00D430', borderRadius: 8, fontSize: 11 }}
          labelStyle={{ color: '#9B7DB8' }}
          itemStyle={{ color: accent }}
          formatter={(v: number) => [v.toLocaleString('fr-FR'), '']}
          labelFormatter={(d: string) => new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke={accent}
          strokeWidth={1.5}
          fill={`url(#grad-${accent.replace('#', '')})`}
          dot={false}
          activeDot={{ r: 3, fill: accent, strokeWidth: 0 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default function StatCard({ label, value, icon: Icon, trend, accent = '#7B00D4' }: Props) {
  const positive = (trend?.deltaPercent ?? 0) >= 0
  const pct = trend?.deltaPercent
  const hasHistory = trend?.history && trend.history.length > 1

  return (
    <div
      className="rounded-2xl p-5 border flex flex-col gap-3"
      style={{ backgroundColor: '#110018', borderColor: '#7B00D420' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium" style={{ color: '#9B7DB8' }}>{label}</p>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${accent}18` }}>
          <Icon size={16} style={{ color: accent }} />
        </div>
      </div>

      {/* Value + trend */}
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

      {/* Sparkline */}
      {hasHistory && (
        <div className="-mx-1">
          <Sparkline data={trend!.history!} accent={accent} />
        </div>
      )}

      {/* Secondary metric */}
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
