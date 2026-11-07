import { Fragment } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import type { User } from '../api'
import UserVaultStats from '../UserVaultStats'
import RoleEditor from './RoleEditor'
import { roleBadge } from './roles'

interface Props {
  user: User
  index: number
  token: string
  pendingRole?: string
  saving: boolean
  expanded: boolean
  onRoleChange: (role: string) => void
  onSave: () => void
  onToggleExpand: () => void
}

/** Desktop layout of a user: a table row, plus the vault stats row when expanded */
export default function UserRow({ user, index, token, pendingRole, saving, expanded, onRoleChange, onSave, onToggleExpand }: Props) {
  const isDirty = pendingRole !== undefined && pendingRole !== user.role

  return (
    <Fragment>
      <tr className="border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors">
        <td className="px-5 py-3.5">
          <button
            onClick={onToggleExpand}
            className="text-gray-600 hover:text-gray-300 transition-colors"
            aria-label="Voir les statistiques du coffre"
          >
            {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>
        </td>
        <td className="px-5 py-3.5 text-gray-600">{index + 1}</td>
        <td className="px-5 py-3.5 text-gray-300 font-mono text-xs">{user.email}</td>
        <td className="px-5 py-3.5">
          <span className={`text-xs border px-2 py-0.5 rounded-full font-medium ${roleBadge[user.role] ?? roleBadge.user}`}>
            {user.role}
          </span>
        </td>
        <td className="px-5 py-3.5">
          <RoleEditor
            value={pendingRole ?? user.role}
            isDirty={isDirty}
            saving={saving}
            onChange={onRoleChange}
            onSave={onSave}
          />
        </td>
      </tr>
      {expanded && (
        <tr className="border-b border-white/5 last:border-0 bg-white/2">
          <td colSpan={5} className="px-5">
            <UserVaultStats token={token} userId={user.id} />
          </td>
        </tr>
      )}
    </Fragment>
  )
}
