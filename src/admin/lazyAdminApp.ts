import { lazy } from 'react'

// Admin panels are loaded on demand so public visitors never download them (nor recharts)
export const AdminApp = lazy(() => import('./password_mobile_app/AdminApp.tsx'))
export const NocturneAdminApp = lazy(() => import('./nocturne/NocturneAdminApp.tsx'))