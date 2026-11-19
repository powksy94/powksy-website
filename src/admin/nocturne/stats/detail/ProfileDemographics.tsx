import { useCallback } from "react";
import LoadState from "../../shared/LoadState";
import { useFetch } from "../../shared/useFetch";
import { getProfileDemographics } from "../statsApi";
import DistributionPie from "./DistributionPie";
import { periodPhrase } from "./periods";
import type { Period } from "./periods";

interface Props {
    token: string
    period: Period
}

export default function ProfileDemographics({ token, period }: Props) {
    const load = useCallback(
        (signal: AbortSignal) => getProfileDemographics(token, period, signal),
        [token, period],
    )
    const { data, loading, error, reload } = useFetch(load)

    // On a bounded period the pies describe new sign-ups, not the whole base
    const scope = period === 'all' ? 'tous les profils' : `profils créés ${periodPhrase(period)}`

    return (
        <LoadState loading={loading && !data} error={error} onRetry={reload}>
            {data && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <DistributionPie title={`Tranches d'âge · ${scope}`} slices={data.ages} />
                    <DistributionPie title={`Pays · ${scope}`} slices={data.countries} />
                </div>
            )}
        </LoadState>
    )
}