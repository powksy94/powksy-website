import { useState, useEffect } from 'react'
import { RefreshCw } from 'lucide-react'
import { getUsers, updateRole } from './api'
import type { User } from './api'
import UserCard from './users/UserCard'
import UserRow from './users/UserRow'

interface Props {
  token: string
}

export default function UsersSection({ token }: Props) {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pendingRoles, setPendingRoles] = useState<Record<string, string>>({})
  const [saving, setSaving] = useState<string | null>(null)
  const [saveError, setSaveError] = useState<string | null>(null)
  const [expandedUserId, setExpandedUserId] = useState<string | null>(null)

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

  const toggleExpand = (userId: string) => {
    setExpandedUserId(prev => (prev === userId ? null : userId))
  }

  return (
    <div>
      <div className="flex items-center justify-end mb-4">
        <button
          onClick={() => fetchUsers()}
          disabled={loading}
          className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm px-3 py-1.5 rounded-lg hover:bg-white/5 disabled:opacity-40"
        >
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      {saveError && (
        <div className="mb-4 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
          {saveError}
        </div>
      )}

      {loading && !users.length && (
        <div className="text-center py-20 text-gray-500">Chargement…</div>
      )}

      {!loading && error && (
        <div className="text-center py-20">
          <p className="text-red-400 mb-3">{error}</p>
          <button onClick={() => fetchUsers()} className="text-sm text-gray-400 hover:text-white transition-colors">
            Réessayer
          </button>
        </div>
      )}

      {!loading && !error && users.length === 0 && (
        <div className="text-center py-20 text-gray-500">Aucun utilisateur trouvé.</div>
      )}

      {users.length > 0 && (
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <ul className="md:hidden divide-y divide-white/5">
            {users.map(user => (
              <UserCard
                key={user.id}
                user={user}
                token={token}
                pendingRole={pendingRoles[user.id]}
                saving={saving === user.id}
                expanded={expandedUserId === user.id}
                onRoleChange={role => handleRoleChange(user.id, role)}
                onSave={() => handleSave(user.id)}
                onToggleExpand={() => toggleExpand(user.id)}
              />
            ))}
          </ul>

          <table className="hidden md:table w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-gray-500 text-xs uppercase tracking-wide">
                <th className="text-left px-5 py-3 w-8"></th>
                <th className="text-left px-5 py-3">#</th>
                <th className="text-left px-5 py-3">Email</th>
                <th className="text-left px-5 py-3">Rôle actuel</th>
                <th className="text-left px-5 py-3">Modifier le rôle</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <UserRow
                  key={user.id}
                  user={user}
                  index={i}
                  token={token}
                  pendingRole={pendingRoles[user.id]}
                  saving={saving === user.id}
                  expanded={expandedUserId === user.id}
                  onRoleChange={role => handleRoleChange(user.id, role)}
                  onSave={() => handleSave(user.id)}
                  onToggleExpand={() => toggleExpand(user.id)}
                />
              ))}
            </tbody>
          </table>
          <div className="px-5 py-2.5 border-t border-white/5 text-gray-600 text-xs">
            {users.length} utilisateur{users.length > 1 ? 's' : ''}
          </div>
        </div>
      )}
    </div>
  )
}
