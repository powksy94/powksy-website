import { Link } from 'react-router-dom'
import { ArrowLeft, RefreshCw } from 'lucide-react'

interface Props {
    title: string
    subtitle?: string
    backTo?: string
    onRefresh?: () => void
    refreshing?: boolean
}

export default function PageHeader({ title, subtitle, backTo, onRefresh, refreshing = false }: Props) {
    return (
        <div className="px-4 py-4 md:px-8 md:py-5 border-b flex items-center justify-between gap-3" style={{ borderColor: '#7B00D420' }}>
            <div className="flex items-center gap-2 min-w-0">
                {backTo && (
                    <Link to={backTo} aria-label="Retour" className="p-2 -ml-2 rounded-lg flex-shrink-0" style={{ color: '#9B7DB8' }}>
                        <ArrowLeft size={16} />
                    </Link>
                )}
                <div className="min-w-0">
                    <h1 className="text-white font-semibold text-lg truncate">{title}</h1>
                    {subtitle && <p className="text-xs mt-0.5" style={{ color: '#7B5590' }}>{subtitle}</p>}
                </div>
            </div>

            {onRefresh && (
                <button
                    onClick={onRefresh}
                    disabled={refreshing}
                    aria-label="Rafraîchir"
                    className="p-2 rounded-lg disabled:opacity-40"
                    style={{ color: '#9B7DB8' }}
                >
                    <RefreshCw size={15} className={refreshing ? 'animate-spin' : ''} />
                </button>
            )}
        </div>
    )
}