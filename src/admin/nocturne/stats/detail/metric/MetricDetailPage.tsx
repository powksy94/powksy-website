import { Navigate, useParams } from "react-router-dom";
import { paths } from "../../../paths";
import { findMetric } from '../../metrics'
import MetricDetail from './MetricDetail'

interface Props {
    token: string
}

export default function MetricDetailPage({ token }: Props) {
    const metric = findMetric(useParams().metric)
    if (!metric) return <Navigate to={paths.stats} replace />

    // key: reset local state when navigating from one metric to another
    return <MetricDetail key={metric.id} token={token} metric={metric} />
}