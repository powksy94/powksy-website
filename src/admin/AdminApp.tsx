import { useState } from 'react'
import AuthScreen from './AuthScreen'
import Dashboard from './Dashboard'

interface AuthState {
  token: string
  role: string
}

function loadAuth(): AuthState | null {
  const token = sessionStorage.getItem('admin_token')
  const role = sessionStorage.getItem('admin_role')
  if (token && role) return { token, role }
  return null
}

export default function AdminApp() {
  const [auth, setAuth] = useState<AuthState | null>(loadAuth)

  const handleAuthenticated = (token: string, role: string) => {
    sessionStorage.setItem('admin_token', token)
    sessionStorage.setItem('admin_role', role)
    setAuth({ token, role })
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin_token')
    sessionStorage.removeItem('admin_role')
    setAuth(null)
  }

  if (!auth) return <AuthScreen onAuthenticated={handleAuthenticated} />

  return <Dashboard token={auth.token} role={auth.role} onLogout={handleLogout} />
}
