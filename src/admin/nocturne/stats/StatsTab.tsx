import { BarChart2, Users, Heart, MessageSquare, Shuffle } from 'lucide-react'
import type { Stats } from '../api'
import StatCard from './StatCard'

interface Props {
  stats: Stats | null
  loading: boolean
  error: string | null
  onRetry: () => void
}

function buildCards(stats: Stats) {
  return [
    { label: 'Utilisateurs', value: stats.users,    icon: Users,         trend: stats.trends?.users },
    { label: 'Profils',      value: stats.profiles,  icon: BarChart2,     trend: stats.trends?.profiles },
    { label: 'Likes',        value: stats.likes,     icon: Heart,         trend: stats.trends?.likes,   accent: '#D4006A' },
    { label: 'Matches',      value: stats.matches,   icon: Shuffle,       trend: stats.trends?.matches, accent: '#00A8D4' },
    { label: 'Messages',     value: stats.messages,  icon: MessageSquare, trend: stats.trends?.messages },
  ]
}

export default function StatsTab({ stats, loading, error, onRetry }: Props) {
  if (loading) return <p className="text-center py-20" style={{ color: '#5B3D7A' }}>Chargement…</p>

  if (error) return (
    <div className="text-center py-20">
      <p className="mb-3" style={{ color: '#C0446A' }}>{error}</p>
      <button onClick={onRetry} className="text-sm" style={{ color: '#9B7DB8' }}>Réessayer</button>
    </div>
  )

  if (!stats) return null

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {buildCards(stats).map(c => <StatCard key={c.label} {...c} />)}
    </div>
  )
}
