import { Route, Routes} from "react-router-dom"
import StatsOverview from './overview/StatsOverview'
import MetricDetailPage from './detail/metric/MetricDetailPage'

interface Props {
    token: string
}

export default function StatsRoutes({ token }: Props) {
    return (
        <Routes>
            <Route index element={<StatsOverview token={token} />} />
            <Route path=":metric" element={<MetricDetailPage token={token} />} />
        </Routes>
    )
}