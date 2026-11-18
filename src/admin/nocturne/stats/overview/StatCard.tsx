import { Link } from 'react-router-dom'
import { ChevronRight, TrendingUp, TrendingDown } from 'lucide-react'
import { formatNumber } from '../../shared/format'
import { paths } from '../../paths'
import type { Metric } from '../metrics'
import type { StatTrend } from '../types'
import Sparkline from './Sparkline'

interface Props {
  metric: Metric
  value: number
  trend?: StatTrend
}

export default function StatCard({ metric, value, trend }: Props) {
  const { icon: Icon, accent, label } = metric
  const pct = trend?.deltaPercent
  const positive = (pct ?? 0) >= 0
  const history = trend?.history

  return (
    <Link
      to={paths.metric(metric.id)}
      className="group rounded-2xl p-4 md:p-5 border flex flex-col gap-3 transition-colors bg-[#110018] border-[#7B00D420] hover:border-[#7B00D460] focus-visible:outline focus-visible:outline-[#7B00D4]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium flex items-center gap-1" style={{ color: '#9B7DB8' }}>
          {label}
          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </p>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${accent}18` }}>
          <Icon size={16} style={{ color: accent }} />
        </div>
      </div>

      {/* Value + trend */}
      <div>
        <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {formatNumber(value)}
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
                ({positive ? '+' : ''}{formatNumber(trend.delta)})
              </span>
            )}
          </div>
        )}
      </div>

      {/* Sparkline */}
      {history && history.length > 1 && (
        <div className="-mx-1">
          <Sparkline data={history} accent={accent} />
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
            {formatNumber(trend.secondaryValue)}
          </span>
        </div>
      )}
    </Link>
  )
}
