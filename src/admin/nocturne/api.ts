const BASE = 'https://datingappbackend-production-a9e3.up.railway.app'

export interface HistoryPoint {
  date: string   // ex: "2026-05-20"
  value: number
}

export interface StatTrend {
  deltaPercent?: number
  delta?: number
  secondaryValue?: number
  secondaryLabel?: string
  history?: HistoryPoint[]
}

export interface Stats {
  users: number
  profiles: number
  likes: number
  matches: number
  messages: number
  // Champs optionnels — renvoyés si le backend les supporte
  trends?: {
    users?: StatTrend
    profiles?: StatTrend
    likes?: StatTrend
    matches?: StatTrend
    messages?: StatTrend
  }
}

export interface NocturneEvent {
  id: string
  name: string
  date: string
  endDate?: string
  location?: string
  address?: string
  description?: string
  createdAt?: string
  type?: string
  maxAttendees?: number
  attendeesCount?: number
  imageUrl?: string
  tags?: string[]
  organizer?: {
    id: string
    username?: string
    email?: string
  }
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

export async function requestAdminAuth(email: string): Promise<{ sessionId: string }> {
  const res = await fetch(`${BASE}/api/admin-auth/request`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  if (!res.ok) throw new Error('Échec de la demande')
  return res.json()
}

export async function pollAuthStatus(sessionId: string, signal: AbortSignal): Promise<AuthStatusResponse> {
  const res = await fetch(`${BASE}/api/admin-auth/status/${sessionId}`, { signal })
  if (!res.ok) throw new Error('Échec du polling')
  return res.json()
}

export async function getStats(token: string, signal?: AbortSignal): Promise<Stats> {
  const res = await fetch(`${BASE}/api/admin/stats`, {
    headers: { Authorization: `Bearer ${token}` },
    signal,
  })
  if (!res.ok) throw new Error('Impossible de charger les stats')
  return res.json()
}

export async function getPendingEvents(token: string, signal?: AbortSignal): Promise<NocturneEvent[]> {
  const res = await fetch(`${BASE}/api/events/pending`, {
    headers: { Authorization: `Bearer ${token}` },
    signal,
  })
  if (!res.ok) throw new Error('Impossible de charger les événements')
  return res.json()
}

export async function approveEvent(token: string, id: string): Promise<void> {
  const res = await fetch(`${BASE}/api/events/${id}/approve`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error("Échec de l'approbation")
}

export async function rejectEvent(token: string, id: string): Promise<void> {
  const res = await fetch(`${BASE}/api/events/${id}/reject`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error('Échec du refus')
}
