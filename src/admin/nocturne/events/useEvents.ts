import { useCallback, useMemo, useState } from "react"
import { approveEvent, getPendingEvents, rejectEvent } from "../api"
import type { NocturneEvent } from "../api"
import { useFetch } from '../shared/useFetch'

type EventAction = (token: string, id: string) => Promise<void>

export function useEvents(token: string) {
    const load = useCallback((signal: AbortSignal) => getPendingEvents(token, signal), [token])
    const { data, loading, error, reload } = useFetch(load)

    // Moderated events are hidden locally without refetching the whole list
    const [handledIds, setHandledIds]         = useState<ReadonlySet<string>>(new Set())
    const [selectedId, setSelectedId]           = useState<string | null>(null)
    const [actionLoading, setActionLoading] = useState<string | null>(null)
    const [actionError, setActionError]     = useState<string | null>(null)

    const events = useMemo(
        () => (data ?? []).filter(e => !handledIds.has(e.id)),
        [data, handledIds],
    )
    const selectedEvent = events.find(e => e.id === selectedId) ?? null

    const run = async (id: string, action: EventAction) => {
        setActionLoading(id); setActionError(null)
        try {
            await action(token, id)
            setHandledIds(prev => new Set(prev).add(id))
        } catch (e) {
            setActionError((e as Error).message)
        } finally {
            setActionLoading(null)
        }
    }

    return {
        events,
        loading,
        error,
        reload,
        selectedEvent,
        select: (event: NocturneEvent) => setSelectedId(event.id),
        deselect: () => setSelectedId(null),
        actionLoading,
        actionError,
        approve: (id: string) => run(id, approveEvent),
        reject: (id: string) => run(id, rejectEvent),
    }
}

export type EventsState = ReturnType<typeof useEvents>