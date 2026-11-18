import { BASE } from "../api";
import type { MetricHistory, MetricId, ProfileDemographics, Stats } from "./types";

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

export function getMetricHistory(token: string, metric: MetricId, days: number, signal?: AbortSignal): Promise<MetricHistory> {
    return getJson(`/api/admin/stats/${metric}/history?days=${days}`, token, signal, "Impossible de charger l'historique.")
}

export function getProfileDemographics(token: string, signal?: AbortSignal): Promise<ProfileDemographics> {
    return getJson('/api/admin/stats/profiles/demographics', token, signal, "Impossible de charger la démographie.")
}