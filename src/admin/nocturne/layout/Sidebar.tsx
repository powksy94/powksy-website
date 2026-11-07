import { BarChart2, CalendarDays, LogOut } from 'lucide-react'
import NavItem from './NavItem'


type Tab = 'stats' | 'events'

interface Props {
  tab: Tab
  onTabChange: (tab: Tab) => void
  eventsBadge?: number
  onLogout: () => void
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #3D0070 0%, #7B00D4 100%)', boxShadow: '0 0 16px #7B00D430' }}
      >
        <span className="text-white font-bold text-base">N</span>
      </div>
      <div>
        <p className="text-white font-semibold text-sm leading-none">Nocturne</p>
        <p className="text-xs mt-0.5" style={{ color: '#7B00D4' }}>Admin</p>
      </div>
    </div>
  )
}

export default function Sidebar({ tab, onTabChange, eventsBadge, onLogout }: Props) {
  return (
    <>
      {/* Mobile: top bar with the tabs below it */}
      <header className="md:hidden sticky top-0 z-20 border-b" style={{ backgroundColor: '#0D0016', borderColor: '#7B00D420' }}>
        <div className="px-4 py-3 flex items-center justify-between">
          <Logo />
          <button
            onClick={onLogout}
            aria-label="Déconnexion"
            className="p-2 rounded-xl transition-colors"
            style={{ color: '#7B5590' }}
          >
            <LogOut size={18} />
          </button>
        </div>
        <nav className="px-3 pb-3 grid grid-cols-2 gap-2">
          <NavItem icon={BarChart2}    label="Statistiques" active={tab === 'stats'}  onClick={() => onTabChange('stats')} />
          <NavItem icon={CalendarDays} label="Événements"   active={tab === 'events'} onClick={() => onTabChange('events')} badge={eventsBadge} />
        </nav>
      </header>

      <aside className="hidden md:flex w-56 flex-shrink-0 flex-col border-r" style={{ backgroundColor: '#0D0016', borderColor: '#7B00D420' }}>
        <div className="px-5 py-6 border-b" style={{ borderColor: '#7B00D420' }}>
          <Logo />
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          <NavItem icon={BarChart2}    label="Statistiques" active={tab === 'stats'}  onClick={() => onTabChange('stats')} />
          <NavItem icon={CalendarDays} label="Événements"   active={tab === 'events'} onClick={() => onTabChange('events')} badge={eventsBadge} />
        </nav>

        <div className="px-3 py-4 border-t" style={{ borderColor: '#7B00D420' }}>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-colors"
            style={{ color: '#7B5590' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#F87171'; e.currentTarget.style.backgroundColor = '#F8717110' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#7B5590'; e.currentTarget.style.backgroundColor = 'transparent' }}
          >
            <LogOut size={15} /> Déconnexion
          </button>
        </div>
      </aside>
    </>
  )
}
