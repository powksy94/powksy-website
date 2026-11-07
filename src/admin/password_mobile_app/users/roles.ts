export const ROLES = ['user', 'admin', 'team_admin']

export const roleBadge: Record<string, string> = {
  admin:      'bg-violet-500/20 text-violet-300 border-violet-500/30',
  team_admin: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  viewer:     'bg-blue-500/20 text-blue-300 border-blue-500/30',
  user:       'bg-gray-500/20 text-gray-400 border-gray-500/30',
}
