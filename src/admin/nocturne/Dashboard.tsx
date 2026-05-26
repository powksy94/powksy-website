import { useState, useEffect } from 'react'
import { LogOut, BarChart2, CalendarDays, RefreshCw, CheckCircle, XCircle, Users, Heart, MessageSquare, Shuffle } from 'lucide-react'
import { getStats, getPendingEvents, approveEvent, rejectEvent } from './api'
import type { Stats, NocturneEvent } from './api'

interface Props {
  token: string
  onLogout: () => void
}

type Tab = 'stats' | 'events'

export default function Dashboard({ token, onLogout }: Props) {
  const [tab, setTab] = useState<Tab>('stats')
  const [stats, setStats] = useState<Stats | null>(null)
  const [statsLoading, setStatsLoading] = useState(true)
  const [statsError, setStatsError] = useState<string | null>(null)
  const [events, setEvents] = useState<NocturneEvent[]>([])
  const [eventsLoading, setEventsLoading] = useState(false)
  const [eventsError, setEventsError] = useState<string | null>(null)
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  const fetchStats = async (signal?: AbortSignal) => {
    setStatsLoading(true)
    setStatsError(null)
    try {
      const data = await getStats(token, signal)
      setStats(data)
    } catch (e) {
      if ((e as Error).name !== 'AbortError') setStatsError('Impossible de charger les stats.')
    } finally {
      setStatsLoading(false)
    }
  }

  const fetchEvents = async (signal?: AbortSignal) => {
    setEventsLoading(true)
    setEventsError(null)
    try {
      const data = await getPendingEvents(token, signal)
      setEvents(data)
    } catch (e) {
      if ((e as Error).name !== 'AbortError') setEventsError('Impossible de charger les événements.')
    } finally {
      setEventsLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchStats(controller.signal)
    return () => controller.abort()
  }, [])

  useEffect(() => {
    if (tab !== 'events') return
    const controller = new AbortController()
    fetchEvents(controller.signal)
    return () => controller.abort()
  }, [tab])

  const handleApprove = async (id: string) => {
    setActionLoading(id)
    try {
      await approveEvent(token, id)
      setEvents(prev => prev.filter(e => e.id !== id))
    } catch {}
    setActionLoading(null)
  }

  const handleReject = async (id: string) => {
    setActionLoading(id)
    try {
      await rejectEvent(token, id)
      setEvents(prev => prev.filter(e => e.id !== id))
    } catch {}
    setActionLoading(null)
  }

  const statCards = stats ? [
    { label: 'Utilisateurs', value: stats.users, icon: Users },
    { label: 'Profils', value: stats.profiles, icon: BarChart2 },
    { label: 'Likes', value: stats.likes, icon: Heart },
    { label: 'Matches', value: stats.matches, icon: Shuffle },
    { label: 'Messages', value: stats.messages, icon: MessageSquare },
  ] : []

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#08000E' }}>

      {/* Sidebar */}
      <aside
        className="w-56 flex-shrink-0 flex flex-col border-r"
        style={{ backgroundColor: '#0D0016', borderColor: '#7B00D420' }}
      >
        {/* Logo */}
        <div className="px-5 py-6 border-b" style={{ borderColor: '#7B00D420' }}>
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #3D0070 0%, #7B00D4 100%)' }}
            >
              <span className="text-white font-bold text-base">N</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-none">Nocturne</p>
              <p className="text-xs mt-0.5" style={{ color: '#7B00D4' }}>Admin</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          <NavItem icon={BarChart2} label="Statistiques" active={tab === 'stats'} onClick={() => setTab('stats')} />
          <NavItem icon={CalendarDays} label="Événements" active={tab === 'events'} onClick={() => setTab('events')} badge={events.length > 0 && tab !== 'events' ? events.length : undefined} />
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t" style={{ borderColor: '#7B00D420' }}>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-colors"
            style={{ color: '#7B5590' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#FF6B8A'; e.currentTarget.style.backgroundColor = '#FF6B8A10' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#7B5590'; e.currentTarget.style.backgroundColor = 'transparent' }}
          >
            <LogOut size={15} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">

        {/* Header */}
        <div className="px-8 py-5 border-b flex items-center justify-between" style={{ borderColor: '#7B00D420' }}>
          <div>
            <h1 className="text-white font-semibold text-lg">
              {tab === 'stats' ? 'Statistiques' : 'Événements en attente'}
            </h1>
            <p className="text-xs mt-0.5" style={{ color: '#7B5590' }}>
              {tab === 'stats' ? 'Vue globale de l\'application' : 'Approbation des événements soumis'}
            </p>
          </div>
          <button
            onClick={() => tab === 'stats' ? fetchStats() : fetchEvents()}
            disabled={tab === 'stats' ? statsLoading : eventsLoading}
            className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition-colors disabled:opacity-40"
            style={{ color: '#9B7DB8' }}
          >
            <RefreshCw size={14} className={(tab === 'stats' ? statsLoading : eventsLoading) ? 'animate-spin' : ''} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-8 py-8">

          {/* Stats tab */}
          {tab === 'stats' && (
            <>
              {statsLoading && (
                <div className="text-center py-20" style={{ color: '#5B3D7A' }}>Chargement…</div>
              )}
              {statsError && (
                <div className="text-center py-20">
                  <p className="mb-3" style={{ color: '#C0446A' }}>{statsError}</p>
                  <button onClick={() => fetchStats()} className="text-sm" style={{ color: '#9B7DB8' }}>Réessayer</button>
                </div>
              )}
              {!statsLoading && !statsError && stats && (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {statCards.map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="rounded-2xl p-5 border"
                      style={{ backgroundColor: '#110018', borderColor: '#7B00D420' }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm" style={{ color: '#9B7DB8' }}>{label}</p>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#7B00D415' }}>
                          <Icon size={15} style={{ color: '#7B00D4' }} />
                        </div>
                      </div>
                      <p className="text-3xl font-bold text-white">{value.toLocaleString('fr-FR')}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Events tab */}
          {tab === 'events' && (
            <>
              {eventsLoading && (
                <div className="text-center py-20" style={{ color: '#5B3D7A' }}>Chargement…</div>
              )}
              {eventsError && (
                <div className="text-center py-20">
                  <p className="mb-3" style={{ color: '#C0446A' }}>{eventsError}</p>
                  <button onClick={() => fetchEvents()} className="text-sm" style={{ color: '#9B7DB8' }}>Réessayer</button>
                </div>
              )}
              {!eventsLoading && !eventsError && events.length === 0 && (
                <div className="text-center py-20" style={{ color: '#5B3D7A' }}>
                  Aucun événement en attente.
                </div>
              )}
              {!eventsLoading && !eventsError && events.length > 0 && (
                <div className="space-y-3">
                  {events.map(event => (
                    <div
                      key={event.id}
                      className="rounded-2xl p-5 border flex items-center gap-4"
                      style={{ backgroundColor: '#110018', borderColor: '#7B00D420' }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#7B00D415' }}
                      >
                        <CalendarDays size={18} style={{ color: '#7B00D4' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">{event.name}</p>
                        <div className="flex items-center gap-3 mt-0.5">
                          <span className="text-xs" style={{ color: '#9B7DB8' }}>
                            {new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                          {event.location && (
                            <span className="text-xs" style={{ color: '#5B3D7A' }}>· {event.location}</span>
                          )}
                        </div>
                        {event.description && (
                          <p className="text-xs mt-1 truncate" style={{ color: '#5B3D7A' }}>{event.description}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleApprove(event.id)}
                          disabled={actionLoading === event.id}
                          className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-xl transition-colors disabled:opacity-40"
                          style={{ backgroundColor: '#0D2E1A', color: '#4ADE80', border: '1px solid #4ADE8025' }}
                        >
                          <CheckCircle size={14} />
                          Approuver
                        </button>
                        <button
                          onClick={() => handleReject(event.id)}
                          disabled={actionLoading === event.id}
                          className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-xl transition-colors disabled:opacity-40"
                          style={{ backgroundColor: '#2E0D18', color: '#F87171', border: '1px solid #F8717125' }}
                        >
                          <XCircle size={14} />
                          Refuser
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  )
}

function NavItem({
  icon: Icon,
  label,
  active,
  onClick,
  badge,
}: {
  icon: React.ElementType
  label: string
  active: boolean
  onClick: () => void
  badge?: number
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all text-left"
      style={{
        backgroundColor: active ? '#7B00D420' : 'transparent',
        color: active ? '#C4A8E0' : '#7B5590',
        border: active ? '1px solid #7B00D430' : '1px solid transparent',
      }}
    >
      <Icon size={15} />
      <span className="flex-1">{label}</span>
      {badge !== undefined && (
        <span
          className="text-xs font-medium px-1.5 py-0.5 rounded-full"
          style={{ backgroundColor: '#7B00D4', color: 'white' }}
        >
          {badge}
        </span>
      )}
    </button>
  )
}
