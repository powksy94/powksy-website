import { useCallback, useEffect, useState } from "react";

export type Loader<T> = (signal: AbortSignal) => Promise<T>

interface Result<T> {
    load: Loader<T>
    nonce: number
    data: T | null
    error: string | null
}

/**
 * Runs `load` whenever it changes (memoize it with useCallback) or when reload() is called.
 * Previous data is kept while a new request is in flight.
 */
export function useFetch<T>(load: Loader<T>) {
    const [nonce, setNonce] = useState(0)
    const [result, setResult] = useState<Result<T> | null>(null)

    useEffect(() => {
        const controller = new AbortController()
        load(controller.signal).then(
            data => setResult({ load, nonce, data, error: null }),
            (e: unknown) => {
                if (controller.signal.aborted) return
                setResult({ load, nonce, data: null, error: e instanceof Error ? e.message : 'Erreur inconnue' })
            },
        )
        return () => controller.abort()
    }, [load, nonce])

    const reload = useCallback(() => setNonce(n => n + 1), [])
    const fresh = result !== null && result.load === load && result.nonce === nonce

    return {
        data: result?.data ?? null,
        loading: !fresh,
        error: fresh ? result.error : null,
        reload,
    }
}