import { useState } from 'react'
import { LogOut, ShieldCheck, Users, Vault } from 'lucide-react'
import VaultSection from './vault/VaultSection'
import UsersSection from './UsersSection'
import { roleBadge } from './users/roles'

interface Props {
  token: string
  role: string
  onLogout: () => void
}

type Tab = 'users' | 'vault'

export default function Dashboard({ token, role, onLogout }: Props) {
  const [tab, setTab] = useState<Tab>('users')

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10 px-4 sm:px-6 py-4">
        {/* On mobile the tabs move to a second, full-width row */}
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <ShieldCheck className="text-violet-400 shrink-0" size={22} />
            <div>
              <h1 className="text-lg font-semibold leading-none">Panel Admin</h1>
              <p className="text-gray-500 text-xs mt-0.5">Powksy</p>
            </div>
            <span className={`text-xs border px-2 py-0.5 rounded-full font-medium ml-2 ${roleBadge[role] ?? roleBadge.user}`}>
              {role}
            </span>
          </div>
          <button
            onClick={onLogout}
            aria-label="Déconnexion"
            className="sm:order-last flex items-center gap-1.5 text-gray-500 hover:text-red-400 transition-colors text-sm px-3 py-1.5 rounded-lg hover:bg-white/5"
          >
            <LogOut size={14} />
          </button>
          <div className="w-full sm:w-auto sm:ml-auto flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setTab('users')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 text-xs px-3 py-2 sm:py-1.5 rounded-lg transition-colors ${tab === 'users' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              <Users size={13} /> Utilisateurs
            </button>
            {role === 'admin' && (
              <button
                onClick={() => setTab('vault')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 text-xs px-3 py-2 sm:py-1.5 rounded-lg transition-colors ${tab === 'vault' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <Vault size={13} /> Vault
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 sm:py-8">
        {tab === 'users' && <UsersSection token={token} />}
        {tab === 'vault' && <VaultSection token={token} />}
      </div>
    </div>
  )
}
