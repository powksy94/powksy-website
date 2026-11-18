import PageHeader from "../layout/PageHeader";
import EventsTab from "./EventsTab";
import type { EventsState } from "./useEvents";

interface Props {
    events: EventsState
}

export default function EventPage({ events: s }: Props) {
    const count = s.events.length

    return (
        <>
            <PageHeader
                title="Événements en attente"
                subtitle={`${count} événements${count > 1 ? 's' : ''} à modérer`}
                onRefresh={s.reload}
                refreshing={s.loading}
            />
            <div className="flex-1 min-h-0 overflow-auto">
                <EventsTab
                    events={s.events}
                    loading={s.loading}
                    error={s.error}
                    selectedEvent={s.selectedEvent}
                    actionLoading={s.actionLoading}
                    actionError={s.actionError}
                    onSelect={s.select}
                    onDeselect={s.deselect}
                    onApprove={s.approve}
                    onReject={s.reject}
                    onRetry={s.reload}
                />
            </div>
        </>
    )
}