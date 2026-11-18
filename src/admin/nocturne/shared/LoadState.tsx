import type { ReactNode } from "react"

interface Props {
    loading: boolean
    error: string | null
    onRetry: () => void
    children: ReactNode
}

export default function LoadState({ loading, error, onRetry, children }: Props) {
    if (error) return (
        <div className="text-center py-20">
            <p className="mb-3" style={{ color: '#C0446A' }}>{error}</p>
            <button onClick={onRetry} className="text-sm" style={{ color: '#9B7DB8'}}>Réessayer</button>
        </div>
    )

    if (loading) return <p className="text-center py-20" style={{ color: '#5B3D7A'}}>Chargement...</p>

    return <>{children}</>
}