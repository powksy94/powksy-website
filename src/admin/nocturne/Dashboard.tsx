import { Navigate, Route, Routes, useMatch } from 'react-router-dom'
import Sidebar from './layout/Sidebar'
import StatsRoutes from './stats/StatsRoutes'
import EventPage from './events/EventPage'
import { useEvents } from './events/useEvents'
import { paths } from './paths'

interface Props {
  token: string
  onLogout: () => void
}

export default function Dashboard({ token, onLogout }: Props) {
   // Lifted here so the sidebar badge stays visible from every page

  const events = useEvents(token)
  const onEventsPage = useMatch(paths.events) !== null
  const pending = events.events.length

  return (
    <div className="min-h-screen flex flex-col md:flex-row" style={{ backgroundColor: '#08000E' }}>
      <Sidebar
        eventsBadge={pending > 0 && !onEventsPage ? pending : undefined}
        onLogout={onLogout}
      />

      <main className="flex-1 flex flex-col min-w-0 md:h-screen">
        <Routes>
          <Route index element={<Navigate to={paths.stats} replace />} />
          <Route path="stats/*" element={<StatsRoutes token={token} />} />
          <Route path="events" element={<EventPage events={events} />}/>
          <Route path="*" element={<Navigate to={paths.stats} replace />} />
        </Routes>
      </main>
    </div>
  )
}
