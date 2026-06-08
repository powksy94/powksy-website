import { useState } from 'react'
import { LogOut, ShieldCheck, Users, Vault } from 'lucide-react'
import VaultSection from './vault/VaultSection'
import UsersSection from './UsersSection'

interface Props {
  token: string
  role: string
  onLogout: () => void
}

const roleBadge: Record<string, string> = {
  admin:      'bg-violet-500/20 text-violet-300 border-violet-500/30',
  team_admin: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  viewer:     'bg-blue-500/20 text-blue-300 border-blue-500/30',
  user:       'bg-gray-500/20 text-gray-400 border-gray-500/30',
}

type Tab = 'users' | 'vault'

export default function Dashboard({ token, role, onLogout }: Props) {
  const [tab, setTab] = useState<Tab>('users')

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-violet-400" size={22} />
            <div>
              <h1 className="text-lg font-semibold leading-none">Panel Admin</h1>
              <p className="text-gray-500 text-xs mt-0.5">Powksy</p>
            </div>
            <span className={`text-xs border px-2 py-0.5 rounded-full font-medium ml-2 ${roleBadge[role] ?? roleBadge.user}`}>
              {role}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
              <button
                onClick={() => setTab('users')}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors ${tab === 'users' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
              >
                <Users size={13} /> Utilisateurs
              </button>
              {role === 'admin' && (
                <button
                  onClick={() => setTab('vault')}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors ${tab === 'vault' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  <Vault size={13} /> Vault
                </button>
              )}
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 text-gray-500 hover:text-red-400 transition-colors text-sm px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              <LogOut size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {tab === 'users' && <UsersSection token={token} />}
        {tab === 'vault' && <VaultSection token={token} />}
      </div>
    </div>
  )
}
