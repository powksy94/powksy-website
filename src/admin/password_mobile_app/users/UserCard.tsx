import { ChevronDown, ChevronRight } from 'lucide-react'
import type { User } from '../api'
import UserVaultStats from '../UserVaultStats'
import RoleEditor from './RoleEditor'
import { roleBadge } from './roles'

interface Props {
  user: User
  token: string
  pendingRole?: string
  saving: boolean
  expanded: boolean
  onRoleChange: (role: string) => void
  onSave: () => void
  onToggleExpand: () => void
}

/** Mobile layout of a user: replaces the table row below the md breakpoint */
export default function UserCard({ user, token, pendingRole, saving, expanded, onRoleChange, onSave, onToggleExpand }: Props) {
  const isDirty = pendingRole !== undefined && pendingRole !== user.role

  return (
    <li className="px-4 py-3.5">
      <div className="flex items-start justify-between gap-3">
        <p className="text-gray-300 font-mono text-xs break-all pt-0.5">{user.email}</p>
        <span className={`shrink-0 text-xs border px-2 py-0.5 rounded-full font-medium ${roleBadge[user.role] ?? roleBadge.user}`}>
          {user.role}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <RoleEditor
          value={pendingRole ?? user.role}
          isDirty={isDirty}
          saving={saving}
          onChange={onRoleChange}
          onSave={onSave}
        />
        <button
          onClick={onToggleExpand}
          aria-expanded={expanded}
          className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors py-1.5"
        >
          {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />} Coffre
        </button>
      </div>
      {expanded && <UserVaultStats token={token} userId={user.id} />}
    </li>
  )
}
