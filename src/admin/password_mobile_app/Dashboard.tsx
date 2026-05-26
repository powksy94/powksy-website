import { useState, useEffect } from 'react'
import { RefreshCw, LogOut, ShieldCheck, Users, Vault } from 'lucide-react'
import { getUsers, updateRole } from './api'
import type { User } from './api'
import VaultSection from './vault/VaultSection'

interface Props {
  token: string
  role: string
  onLogout: () => void
}

const ROLES = ['user', 'viewer', 'admin', 'team_admin']

const roleBadge: Record<string, string> = {
  admin:      'bg-violet-500/20 text-violet-300 border-violet-500/30',
  team_admin: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  viewer:     'bg-blue-500/20 text-blue-300 border-blue-500/30',
  user:       'bg-gray-500/20 text-gray-400 border-gray-500/30',
}

type Tab = 'users' | 'vault'

export default function Dashboard({ token, role, onLogout }: Props) {
  const [tab, setTab] = useState<Tab>('users')
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pendingRoles, setPendingRoles] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState<string | null>(null)
  const [saveError, setSaveError] = useState<string | null>(null)

  const isReadOnly = role === 'viewer'

  const fetchUsers = async (signal?: AbortSignal) => {
    setLoading(true)
    setError(null)
    try {
      const data = await getUsers(token, signal ?? new AbortController().signal)
      setUsers(data)
    } catch (e) {
      if ((e as Error).name !== 'AbortError') setError('Impossible de charger les utilisateurs.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    fetchUsers(controller.signal)
    return () => controller.abort()
  }, [])

  const handleRoleChange = (userId: string, newRole: string) => {
    setPendingRoles(prev => ({ ...prev, [userId]: newRole }))
  }

  const handleSave = async (userId: string) => {
    const newRole = pendingRoles[userId]
    if (!newRole) return
    setSaving(userId)
    setSaveError(null)
    try {
      await updateRole(token, userId, newRole)
      setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u))
      setPendingRoles(prev => { const next = { ...prev }; delete next[userId]; return next })
    } catch {
      setSaveError(`Échec pour l'utilisateur ${userId}`)
    } finally {
      setSaving(null)
    }
  }

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
            {tab === 'users' && (
              <button
                onClick={() => fetchUsers()}
                disabled={loading}
                className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm px-3 py-1.5 rounded-lg hover:bg-white/5 disabled:opacity-40"
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              </button>
            )}
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
        {tab === 'vault' && <VaultSection token={token} />}
        {tab === 'users' && isReadOnly && (
          <div className="mb-4 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-2">
            Mode lecture seule — modification des rôles désactivée.
          </div>
        )}

        {tab === 'users' && saveError && (
          <div className="mb-4 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
            {saveError}
          </div>
        )}

        {tab === 'users' && loading && !users.length && (
          <div className="text-center py-20 text-gray-500">Chargement…</div>
        )}

        {tab === 'users' && error && (
          <div className="text-center py-20">
            <p className="text-red-400 mb-3">{error}</p>
            <button onClick={() => fetchUsers()} className="text-sm text-gray-400 hover:text-white transition-colors">
              Réessayer
            </button>
          </div>
        )}

        {tab === 'users' && !loading && !error && users.length === 0 && (
          <div className="text-center py-20 text-gray-500">Aucun utilisateur trouvé.</div>
        )}

        {tab === 'users' && users.length > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-gray-500 text-xs uppercase tracking-wide">
                  <th className="text-left px-5 py-3">#</th>
                  <th className="text-left px-5 py-3">Email</th>
                  <th className="text-left px-5 py-3">Rôle actuel</th>
                  {!isReadOnly && <th className="text-left px-5 py-3">Modifier le rôle</th>}
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => {
                  const pending = pendingRoles[user.id]
                  const isDirty = pending !== undefined && pending !== user.role
                  return (
                    <tr key={user.id} className="border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors">
                      <td className="px-5 py-3.5 text-gray-600">{i + 1}</td>
                      <td className="px-5 py-3.5 text-gray-300 font-mono text-xs">{user.email}</td>
                      <td className="px-5 py-3.5">
                        <span className={`text-xs border px-2 py-0.5 rounded-full font-medium ${roleBadge[user.role] ?? roleBadge.user}`}>
                          {user.role}
                        </span>
                      </td>
                      {!isReadOnly && (
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-2">
                            <select
                              value={pending ?? user.role}
                              onChange={e => handleRoleChange(user.id, e.target.value)}
                              className="bg-gray-900 border border-white/10 text-gray-300 text-xs rounded-lg px-2 py-1.5 focus:outline-none focus:border-violet-500/50"
                            >
                              {ROLES.map(r => (
                                <option key={r} value={r}>{r}</option>
                              ))}
                            </select>
                            {isDirty && (
                              <button
                                onClick={() => handleSave(user.id)}
                                disabled={saving === user.id}
                                className="text-xs bg-violet-600/80 hover:bg-violet-600 transition-colors text-white px-3 py-1.5 rounded-lg disabled:opacity-50"
                              >
                                {saving === user.id ? '…' : 'Sauvegarder'}
                              </button>
                            )}
                          </div>
                        </td>
                      )}
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="px-5 py-2.5 border-t border-white/5 text-gray-600 text-xs">
              {users.length} utilisateur{users.length > 1 ? 's' : ''}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
