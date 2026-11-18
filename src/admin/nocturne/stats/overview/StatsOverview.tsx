import { useCallback } from "react"
import PageHeader from "../../layout/PageHeader"
import LoadState from "../../shared/LoadState"
import { useFetch } from "../../shared/useFetch"
import { METRICS } from "../metrics"
import { getStats } from "../statsApi"
import StatCard from "./StatCard"

interface Props {
    token: string
}

export default function StatsOverview({ token }: Props) {
    const load = useCallback((signal: AbortSignal) => getStats(token, signal), [token])
    const { data, loading, error, reload } = useFetch(load)

    return (
        <>
            <PageHeader title="Statistiques" subtitle="Vue globale de l'application" onRefresh={reload} refreshing={loading} />
            <div className="flex-1 min-h-0 overflow-auto px-4 py-5 md:px-8 md:py-8">
                <LoadState loading={loading && !data} error={error} onRetry={reload}>
                    {data && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                            {METRICS.map(m => (
                                <StatCard key={m.id} metric={m} value={data[m.id]} trend={data.trends?.[m.id]} />
                            ))}
                        </div>
                    )}
                </LoadState>
            </div>
        </>
    )
}