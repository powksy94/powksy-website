const BASE = 'https://passwordmobileappbackend-production.up.railway.app'

export interface User {
  id: string
  email: string
  role: string
  createdAt?: string
}

export interface VaultItem {
  id: string
  name: string
  type: 'note' | 'file'
  fileName?: string
  encryptedData: string
  iv: string
  createdAt: string
}

export interface VaultData {
  salt: string       // base64, global per vault, created by backend on first GET
  items: VaultItem[]
}

// Backend endpoints required:
//   GET    /admin/vault           → VaultData (creates salt on first call)
//   POST   /admin/vault           → VaultItem  body: Omit<VaultItem, 'id'|'createdAt'>
//   DELETE /admin/vault/:id       → 204

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

export async function requestAdminAuth(email: string): Promise<{ sessionId: string }> {
  const res = await fetch(`${BASE}/admin-auth/request`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
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

export interface VaultAuthStatus {
  status: 'pending' | 'approved' | 'denied'
  vaultKey?: string // base64 raw AES-256 key, returned on approval
}

// Backend endpoints required:
//   POST /admin/vault/auth           → { sessionId }  (sends push notification)
//   GET  /admin/vault/auth/:id       → VaultAuthStatus
//   GET  /admin/vault                → VaultData (creates salt on first call)
//   POST /admin/vault                → VaultItem
//   DELETE /admin/vault/:id          → 204

export async function requestVaultUnlock(token: string): Promise<{ sessionId: string }> {
  const res = await fetch(`${BASE}/admin/vault/auth`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error('Échec de la demande')
  return res.json()
}

export async function pollVaultUnlockStatus(
  token: string, sessionId: string, signal: AbortSignal
): Promise<VaultAuthStatus> {
  const res = await fetch(`${BASE}/admin/vault/auth/${sessionId}`, {
    headers: { Authorization: `Bearer ${token}` },
    signal,
  })
  if (!res.ok) throw new Error('Échec du polling')
  return res.json()
}

export async function getVault(token: string, signal: AbortSignal): Promise<VaultData> {
  const res = await fetch(`${BASE}/admin/vault`, {
    headers: { Authorization: `Bearer ${token}` },
    signal,
  })
  if (!res.ok) throw new Error('Erreur vault')
  return res.json()
}

export async function addVaultItem(
  token: string,
  item: Omit<VaultItem, 'id' | 'createdAt'>
): Promise<VaultItem> {
  const res = await fetch(`${BASE}/admin/vault`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  })
  if (!res.ok) throw new Error('Ajout échoué')
  return res.json()
}

export async function deleteVaultItem(token: string, id: string): Promise<void> {
  const res = await fetch(`${BASE}/admin/vault/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error('Suppression échouée')
}
