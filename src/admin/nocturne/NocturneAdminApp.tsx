import { useState } from 'react'
import AuthScreen from './auth/AuthScreen'
import Dashboard from './Dashboard'

function loadToken(): string | null {
  return sessionStorage.getItem('nocturne_admin_token')
}

export default function NocturneAdminApp() {
  const [token, setToken] = useState<string | null>(loadToken)

  const handleAuthenticated = (t: string) => {
    sessionStorage.setItem('nocturne_admin_token', t)
    setToken(t)
  }

  const handleLogout = () => {
    sessionStorage.removeItem('nocturne_admin_token')
    setToken(null)
  }

  if (!token) return <AuthScreen onAuthenticated={handleAuthenticated} />

  return <Dashboard token={token} onLogout={handleLogout} />
}
