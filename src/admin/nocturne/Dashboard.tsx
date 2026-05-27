import { useState, useEffect } from 'react'
import { RefreshCw } from 'lucide-react'
import { getStats, getPendingEvents, approveEvent, rejectEvent } from './api'
import type { Stats, NocturneEvent } from './api'
import Sidebar from './layout/Sidebar'
import StatsTab from './stats/StatsTab'
import EventsTab from './events/EventsTab'

interface Props {
  token: string
  onLogout: () => void
}

type Tab = 'stats' | 'events'

export default function Dashboard({ token, onLogout }: Props) {
  const [tab, setTab] = useState<Tab>('stats')

  const [stats, setStats]               = useState<Stats | null>(null)
  const [statsLoading, setStatsLoading] = useState(true)
  const [statsError, setStatsError]     = useState<string | null>(null)

  const [events, setEvents]                 = useState<NocturneEvent[]>([])
  const [eventsLoading, setEventsLoading]   = useState(false)
  const [eventsError, setEventsError]       = useState<string | null>(null)
  const [actionLoading, setActionLoading]   = useState<string | null>(null)
  const [selectedEvent, setSelectedEvent]   = useState<NocturneEvent | null>(null)

  const fetchStats = async (signal?: AbortSignal) => {
    setStatsLoading(true); setStatsError(null)
    try {
      setStats(await getStats(token, signal))
    } catch (e) {
      if ((e as Error).name !== 'AbortError') setStatsError('Impossible de charger les stats.')
    } finally { setStatsLoading(false) }
  }

  const fetchEvents = async (signal?: AbortSignal) => {
    setEventsLoading(true); setEventsError(null)
    try {
      const data = await getPendingEvents(token, signal)
      setEvents(data)
      setSelectedEvent(prev => prev ? (data.find(e => e.id === prev.id) ?? null) : null)
    } catch (e) {
      if ((e as Error).name !== 'AbortError') setEventsError('Impossible de charger les événements.')
    } finally { setEventsLoading(false) }
  }

  useEffect(() => { const c = new AbortController(); fetchStats(c.signal); return () => c.abort() }, [])
  useEffect(() => {
    if (tab !== 'events') return
    const c = new AbortController(); fetchEvents(c.signal); return () => c.abort()
  }, [tab])

  const handleApprove = async (id: string) => {
    setActionLoading(id)
    try { await approveEvent(token, id); setEvents(p => p.filter(e => e.id !== id)); setSelectedEvent(p => p?.id === id ? null : p) } catch {}
    setActionLoading(null)
  }

  const handleReject = async (id: string) => {
    setActionLoading(id)
    try { await rejectEvent(token, id); setEvents(p => p.filter(e => e.id !== id)); setSelectedEvent(p => p?.id === id ? null : p) } catch {}
    setActionLoading(null)
  }

  const isLoading = tab === 'stats' ? statsLoading : eventsLoading
  const onRefresh = () => tab === 'stats' ? fetchStats() : fetchEvents()

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#08000E' }}>
      <Sidebar
        tab={tab}
        onTabChange={setTab}
        eventsBadge={events.length > 0 && tab !== 'events' ? events.length : undefined}
        onLogout={onLogout}
      />

      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="px-8 py-5 border-b flex items-center justify-between" style={{ borderColor: '#7B00D420' }}>
          <div>
            <h1 className="text-white font-semibold text-lg">
              {tab === 'stats' ? 'Statistiques' : 'Événements en attente'}
            </h1>
            <p className="text-xs mt-0.5" style={{ color: '#7B5590' }}>
              {tab === 'stats' ? "Vue globale de l'application" : `${events.length} événement${events.length > 1 ? 's' : ''} à modérer`}
            </p>
          </div>
          <button onClick={onRefresh} disabled={isLoading} className="p-2 rounded-lg disabled:opacity-40" style={{ color: '#9B7DB8' }}>
            <RefreshCw size={15} className={isLoading ? 'animate-spin' : ''} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 overflow-auto">
          {tab === 'stats' && (
            <div className="px-8 py-8">
              <StatsTab stats={stats} loading={statsLoading} error={statsError} onRetry={fetchStats} />
            </div>
          )}
          {tab === 'events' && (
            <EventsTab
              events={events}
              loading={eventsLoading}
              error={eventsError}
              selectedEvent={selectedEvent}
              actionLoading={actionLoading}
              onSelect={setSelectedEvent}
              onDeselect={() => setSelectedEvent(null)}
              onApprove={handleApprove}
              onReject={handleReject}
              onRetry={fetchEvents}
            />
          )}
        </div>
      </main>
    </div>
  )
}
