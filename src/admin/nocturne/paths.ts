// Absolute paths: relative links inside splat routes are ambiguous in React Router v7
export const ADMIN_ROOT = '/xK9-nocturne'

export const paths = {
    stats: `${ADMIN_ROOT}/stats`,
    metric: (id: string) => `${ADMIN_ROOT}/stats/${id}`,
    events: `${ADMIN_ROOT}/events`,
}