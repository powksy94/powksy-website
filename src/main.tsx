import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AdminApp from './admin/password_mobile_app/AdminApp.tsx'
import NocturneAdminApp from './admin/nocturne/NocturneAdminApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/xK9-admin/*" element={<AdminApp />} />
        <Route path="/xK9-nocturne/*" element={<NocturneAdminApp />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
