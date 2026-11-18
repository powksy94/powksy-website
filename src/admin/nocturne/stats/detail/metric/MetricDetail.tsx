import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import PageHeader from "../../../layout/PageHeader";
import LoadState from "../../../shared/LoadState";
import Panel from "../../../shared/Panel";
import { useFetch } from "../../../shared/useFetch";
import { paths } from "../../../paths";
import type { Metric } from "../../metrics";
import { getMetricHistory } from "../../statsApi";
import { parsePeriod } from "../periods";
import type { Period } from "../periods";
import PeriodSelector from "../PeriodSelector";
import ProfileDemographics from "../ProfileDemographics";
import HistoryChart from '../history/HistoryChart'
import HistoryTable from '../history/HistoryTable'
import MetricSummary from './MetricSummary'
import { summarize } from './summarize';

interface Props {
    token: string
    metric: Metric
}

export default function MetricDetail({ token, metric }: Props) {
    // Period lives in the URL so a refresh keeps it
    const [params, setParams] = useSearchParams()
    const days = parsePeriod(params.get('days'))

    const load = useCallback(
        (signal: AbortSignal) => getMetricHistory(token, metric.id, days, signal),
        [token, metric.id, days],
    )
    const { data, loading, error, reload } = useFetch(load)

    const changePeriod = (period: Period) => setParams({ days: String(period) }, { replace: true })

    return (
        <>
            <PageHeader
                title={metric.label}
                subtitle={`Évolution sur ${days} jours`}
                backTo={paths.stats}
                onRefresh={reload}
                refreshing={loading}
            />
            <div className="flex-1 min-h-0 overflow-auto px-4 py-5 md:px-8 md:py-8 space-y-4 md:space-y-6">
                <PeriodSelector value={days} onChange={changePeriod} />

                <LoadState loading={loading && !data} error={error} onRetry={reload}>
                    {data && (
                        <>
                            <MetricSummary total={data.total} days={data.days} summary={summarize(data.history, data.total)}  accent={metric.accent} />
                            <Panel title="Chronologie">
                                <HistoryChart history={data.history} accent={metric.accent} />
                            </Panel>
                            {metric.id === 'profiles' && <ProfileDemographics token={token} />}
                            <Panel title="Détail par jour">
                                <HistoryTable history={data.history} />
                            </Panel>
                        </>
                    )}
                </LoadState>
            </div>
        </>
    )
}