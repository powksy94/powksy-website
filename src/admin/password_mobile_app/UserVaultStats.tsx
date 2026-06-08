import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { getUserVaultStats } from './api'
import type { VaultStrengthStats } from './api'

interface Props {
  token: string
  userId: string
}

const COLORS = {
  strong: '#4ADE80',
  medium: '#FBBF24',
  weak: '#F87171',
  unrated: '#5B3D7A',
} as const

const LABELS: Record<keyof typeof COLORS, string> = {
  strong: 'Fort',
  medium: 'Moyen',
  weak: 'Faible',
  unrated: 'Non noté',
}

export default function UserVaultStats({ token, userId }: Props) {
  const [stats, setStats] = useState<VaultStrengthStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    let cancelled = false

    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await getUserVaultStats(token, userId, controller.signal)
        if (!cancelled) setStats(data)
      } catch (e) {
        if (!cancelled && (e as Error).name !== 'AbortError') setError('Impossible de charger les statistiques.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()

    return () => { cancelled = true; controller.abort() }
  }, [token, userId])

  if (loading) {
    return <div className="text-center py-6 text-gray-500 text-sm">Chargement des statistiques…</div>
  }

  if (error || !stats) {
    return <div className="text-center py-6 text-red-400 text-sm">{error ?? 'Aucune donnée.'}</div>
  }

  if (stats.total === 0) {
    return <p className="text-center py-6 text-gray-500 text-sm">Ce coffre est vide.</p>
  }

  const rated = stats.total - stats.unrated
  const strongPct = rated > 0 ? Math.round((stats.strong / rated) * 100) : 0

  const segments = (['strong', 'medium', 'weak', 'unrated'] as const)
    .map(key => ({ key, label: LABELS[key], value: stats[key] }))
    .filter(s => s.value > 0)

  return (
    <div className="flex items-center gap-6 py-4 px-2">
      {segments.length > 0 && (
        <div className="w-24 h-24 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={segments}
                dataKey="value"
                nameKey="label"
                innerRadius={28}
                outerRadius={42}
                paddingAngle={2}
                stroke="none"
              >
                {segments.map(s => <Cell key={s.key} fill={COLORS[s.key]} />)}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1C0030', border: '1px solid #7B00D430', borderRadius: 8, fontSize: 11 }}
                labelStyle={{ color: '#9B7DB8' }}
                itemStyle={{ color: '#C4A8E0' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className="space-y-2.5">
        <p className="text-sm text-gray-300">
          {rated > 0 ? (
            <>
              Sur <span className="text-white font-semibold">{rated}</span> mot{rated > 1 ? 's' : ''} de passe noté{rated > 1 ? 's' : ''},{' '}
              <span className="font-semibold" style={{ color: COLORS.strong }}>{strongPct}%</span> sont forts.
            </>
          ) : (
            'Aucun mot de passe noté pour le moment.'
          )}
          {stats.unrated > 0 && (
            <span className="text-gray-600"> ({stats.unrated} non noté{stats.unrated > 1 ? 's' : ''})</span>
          )}
        </p>
        <div className="flex items-center gap-4 text-xs">
          {(['strong', 'medium', 'weak', 'unrated'] as const).map(key => (
            <div key={key} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[key] }} />
              <span className="text-gray-500">{LABELS[key]}</span>
              <span className="text-gray-300 font-medium">{stats[key]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
