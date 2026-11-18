export const BASE = import.meta.env.DEV
  ? '/nocturne-api'
  : 'https://datingappbackend-production-a9e3.up.railway.app'

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

type RawNocturneEvent = Omit<NocturneEvent, 'id' | 'organizer'> & {
  id?: string
  _id?: string
  organizer?: { id?: string; _id?: string; username?: string; email?: string }
}

function normalizeEvent(raw: RawNocturneEvent): NocturneEvent {
  return {
    ...raw,
    id: raw.id ?? raw._id ?? '',
    organizer: raw.organizer
      ? { ...raw.organizer, id: raw.organizer.id ?? raw.organizer._id ?? '' }
      : undefined,
  }
}

export async function getPendingEvents(token: string, signal?: AbortSignal): Promise<NocturneEvent[]> {
  const res = await fetch(`${BASE}/api/events/pending`, {
    headers: { Authorization: `Bearer ${token}` },
    signal,
  })
  if (!res.ok) throw new Error('Impossible de charger les événements')
  const data: RawNocturneEvent[] = await res.json()
  return data.map(normalizeEvent)
}

async function throwWithServerDetail(res: Response, fallback: string): Promise<never> {
  const body = await res.text()
  throw new Error(`${fallback} (${res.status})${body ? ` - ${body}` : ''}`)
}

export async function approveEvent(token: string, id: string): Promise<void> {
  const res = await fetch(`${BASE}/api/events/${id}/approve`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) await throwWithServerDetail(res, "Échec de l'approbation")
}

export async function rejectEvent(token: string, id: string): Promise<void> {
  const res = await fetch(`${BASE}/api/events/${id}/reject`, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) await throwWithServerDetail(res, 'Échec du refus')
}
