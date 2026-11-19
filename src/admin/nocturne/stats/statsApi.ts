import { BASE } from "../api";
import type { MetricHistory, MetricId, ProfileDemographics, Stats, PeriodParam } from "./types";

async function getJson<T>(path: string, token: string, signal: AbortSignal | undefined, errorMessage: string): Promise<T> {
    const res = await fetch(`${BASE}${path}`, {
        headers: { Authorization: `Bearer ${token}` },
        signal,
    })
    if (!res.ok) throw new Error(errorMessage)
    return res.json()
}

export function getStats(token: string, signal?: AbortSignal): Promise<Stats> {
    return getJson('/api/admin/stats', token, signal, 'Impossible de charger les stats.')
}

export function getMetricHistory(token: string, metric: MetricId, period: PeriodParam, signal?: AbortSignal): Promise<MetricHistory> {
    return getJson(`/api/admin/stats/${metric}/history?days=${period}`, token, signal, "Impossible de charger l'historique.")
}

export function getProfileDemographics(token: string, period: PeriodParam, signal?: AbortSignal): Promise<ProfileDemographics> {
    return getJson(`/api/admin/stats/profiles/demographics?days=${period}`, token, signal, "Impossible de charger la démographie.")
}