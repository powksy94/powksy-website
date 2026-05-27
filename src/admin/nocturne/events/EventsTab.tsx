import { CalendarDays } from 'lucide-react'
import type { NocturneEvent } from '../api'
import EventDetail from './EventDetail'

interface Props {
  events: NocturneEvent[]
  loading: boolean
  error: string | null
  selectedEvent: NocturneEvent | null
  actionLoading: string | null
  onSelect: (event: NocturneEvent) => void
  onDeselect: () => void
  onApprove: (id: string) => void
  onReject: (id: string) => void
  onRetry: () => void
}

function EventRow({ event, selected, onSelect }: { event: NocturneEvent; selected: boolean; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className="flex items-start gap-3 px-5 py-4 text-left border-b transition-colors w-full"
      style={{ borderColor: '#7B00D415', backgroundColor: selected ? '#7B00D412' : 'transparent' }}
      onMouseEnter={e => { if (!selected) e.currentTarget.style.backgroundColor = '#7B00D408' }}
      onMouseLeave={e => { if (!selected) e.currentTarget.style.backgroundColor = 'transparent' }}
    >
      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#7B00D415' }}>
        <CalendarDays size={15} style={{ color: '#7B00D4' }} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-white truncate">{event.name}</p>
        <p className="text-xs mt-0.5 truncate" style={{ color: '#9B7DB8' }}>
          {new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
          {event.location && <span style={{ color: '#5B3D7A' }}> · {event.location}</span>}
        </p>
        {event.type && <span className="text-xs mt-1 inline-block" style={{ color: '#7B00D4' }}>{event.type}</span>}
      </div>
      {selected && <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#7B00D4' }} />}
    </button>
  )
}

export default function EventsTab({ events, loading, error, selectedEvent, actionLoading, onSelect, onDeselect, onApprove, onReject, onRetry }: Props) {
  return (
    <div className="flex h-full min-h-0">

      {/* List */}
      <div
        className={`flex flex-col border-r overflow-y-auto ${selectedEvent ? 'hidden lg:flex lg:w-2/5' : 'w-full'}`}
        style={{ borderColor: '#7B00D420' }}
      >
        {loading && <p className="text-center py-20 px-6" style={{ color: '#5B3D7A' }}>Chargement…</p>}
        {error && (
          <div className="text-center py-20 px-6">
            <p className="mb-3" style={{ color: '#C0446A' }}>{error}</p>
            <button onClick={onRetry} className="text-sm" style={{ color: '#9B7DB8' }}>Réessayer</button>
          </div>
        )}
        {!loading && !error && events.length === 0 && (
          <p className="text-center py-20 px-6" style={{ color: '#5B3D7A' }}>Aucun événement en attente.</p>
        )}
        {!loading && !error && events.map(event => (
          <EventRow key={event.id} event={event} selected={selectedEvent?.id === event.id} onSelect={() => onSelect(event)} />
        ))}
      </div>

      {/* Detail */}
      {selectedEvent ? (
        <div className="flex-1 lg:w-3/5 overflow-y-auto px-8 py-7">
          <EventDetail event={selectedEvent} actionLoading={actionLoading} onApprove={onApprove} onReject={onReject} onBack={onDeselect} />
        </div>
      ) : (
        <div className="hidden lg:flex flex-1 items-center justify-center" style={{ color: '#3D0070' }}>
          <div className="text-center">
            <CalendarDays size={40} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm opacity-50">Sélectionne un événement</p>
          </div>
        </div>
      )}
    </div>
  )
}
