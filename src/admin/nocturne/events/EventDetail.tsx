import { CheckCircle, XCircle, CalendarDays, MapPin, Clock, Tag, UserCircle, Users2, ArrowLeft } from 'lucide-react'
import type { NocturneEvent } from '../api'

interface Props {
  event: NocturneEvent
  actionLoading: string | null
  onApprove: (id: string) => void
  onReject: (id: string) => void
  onBack: () => void
}

function fmt(d: string) {
  return new Date(d).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
  })
}

function DetailRow({ icon: Icon, label, children }: { icon: React.ElementType; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#7B00D415' }}>
        <Icon size={13} style={{ color: '#7B00D4' }} />
      </div>
      <div className="min-w-0">
        <p className="text-xs mb-0.5" style={{ color: '#5B3D7A' }}>{label}</p>
        <p className="text-sm" style={{ color: '#C4A8E0' }}>{children}</p>
      </div>
    </div>
  )
}

export default function EventDetail({ event, actionLoading, onApprove, onReject, onBack }: Props) {
  return (
    <div className="flex flex-col h-full">
      <button onClick={onBack} className="flex items-center gap-1.5 text-xs mb-5 lg:hidden" style={{ color: '#7B5590' }}>
        <ArrowLeft size={13} /> Retour
      </button>

      {event.imageUrl ? (
        <img src={event.imageUrl} alt={event.name} className="w-full h-40 object-cover rounded-2xl mb-5" />
      ) : (
        <div
          className="w-full h-36 rounded-2xl mb-5 flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #1C0030 0%, #3D0070 100%)' }}
        >
          <CalendarDays size={36} style={{ color: '#7B00D460' }} />
        </div>
      )}

      <h2 className="text-xl font-bold text-white mb-1">{event.name}</h2>

      {event.type && (
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full self-start mb-4"
          style={{ backgroundColor: '#7B00D420', color: '#C4A8E0', border: '1px solid #7B00D430' }}
        >
          {event.type}
        </span>
      )}

      <div className="space-y-3 flex-1">
        <DetailRow icon={CalendarDays} label="Date">
          {fmt(event.date)}
          {event.endDate && <span style={{ color: '#5B3D7A' }}> → {fmt(event.endDate)}</span>}
        </DetailRow>

        {event.location && <DetailRow icon={MapPin} label="Lieu">{event.location}</DetailRow>}
        {event.address  && <DetailRow icon={MapPin} label="Adresse">{event.address}</DetailRow>}

        {event.maxAttendees !== undefined && (
          <DetailRow icon={Users2} label="Capacité">
            {event.attendeesCount !== undefined
              ? `${event.attendeesCount} / ${event.maxAttendees} participants`
              : `${event.maxAttendees} max`}
          </DetailRow>
        )}

        {event.organizer && (
          <DetailRow icon={UserCircle} label="Organisateur">
            {event.organizer.username ?? event.organizer.email ?? event.organizer.id}
          </DetailRow>
        )}

        {event.createdAt && <DetailRow icon={Clock} label="Soumis le">{fmt(event.createdAt)}</DetailRow>}

        {event.tags && event.tags.length > 0 && (
          <DetailRow icon={Tag} label="Tags">
            <div className="flex flex-wrap gap-1.5 mt-1">
              {event.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: '#7B00D415', color: '#9B7DB8', border: '1px solid #7B00D425' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </DetailRow>
        )}

        {event.description && (
          <div className="rounded-xl p-4 mt-2" style={{ backgroundColor: '#1C0030', border: '1px solid #7B00D420' }}>
            <p className="text-xs mb-1" style={{ color: '#5B3D7A' }}>Description</p>
            <p className="text-sm leading-relaxed" style={{ color: '#C4A8E0' }}>{event.description}</p>
          </div>
        )}
      </div>

      <div className="flex gap-3 mt-6 pt-5 border-t" style={{ borderColor: '#7B00D420' }}>
        <button
          onClick={() => onApprove(event.id)}
          disabled={actionLoading === event.id}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all disabled:opacity-40"
          style={{ backgroundColor: '#0D2E1A', color: '#4ADE80', border: '1px solid #4ADE8030' }}
        >
          <CheckCircle size={16} /> Approuver
        </button>
        <button
          onClick={() => onReject(event.id)}
          disabled={actionLoading === event.id}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all disabled:opacity-40"
          style={{ backgroundColor: '#2E0D18', color: '#F87171', border: '1px solid #F8717130' }}
        >
          <XCircle size={16} /> Refuser
        </button>
      </div>
    </div>
  )
}
