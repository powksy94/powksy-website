import { useCallback } from "react";
import LoadState from "../../shared/LoadState";
import { useFetch } from "../../shared/useFetch";
import { getProfileDemographics } from "../statsApi";
import DistributionPie from "./DistributionPie";

interface Props {
    token: string
}

export default function ProfileDemographics({ token }: Props) {
    const load = useCallback((signal: AbortSignal) => getProfileDemographics(token, signal), [token])
    const { data, loading, error, reload } = useFetch(load)

    return (
        <LoadState loading={loading && !data} error={error} onRetry={reload}>
            {data && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <DistributionPie title="Tranches d'âge" slices={data.ages} />
                    <DistributionPie title="Pays" slices={data.countries} />
                </div>
            )}
        </LoadState>
    )
}