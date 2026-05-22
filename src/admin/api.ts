const BASE = 'https://passwordmobileappbackend-production.up.railway.app'

export interface User {
  id: string
  email: string
  role: string
  createdAt?: string
}

export interface AuthStatusResponse {
  status: 'pending' | 'approved' | 'denied'
  token?: string
}

export function parseJwtPayload(token: string): Record<string, unknown> {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch {
    return {}
  }
}

export async function requestAdminAuth(): Promise<{ sessionId: string }> {
  const res = await fetch(`${BASE}/admin-auth/request`, { method: 'POST' })
  if (!res.ok) throw new Error('Échec de la demande')
  return res.json()
}

export async function pollAuthStatus(sessionId: string, signal: AbortSignal): Promise<AuthStatusResponse> {
  const res = await fetch(`${BASE}/admin-auth/status/${sessionId}`, { signal })
  if (!res.ok) throw new Error('Échec du polling')
  return res.json()
}

export async function getUsers(token: string, signal: AbortSignal): Promise<User[]> {
  const res = await fetch(`${BASE}/admin/users`, {
    headers: { Authorization: `Bearer ${token}` },
    signal,
  })
  if (!res.ok) throw new Error('Non autorisé')
  return res.json()
}

export async function updateRole(token: string, userId: string, role: string): Promise<void> {
  const res = await fetch(`${BASE}/admin/role`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, role }),
  })
  if (!res.ok) throw new Error('Échec de la mise à jour du rôle')
}
