import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AdminApp from './admin/password_mobile_app/AdminApp.tsx'
import NocturneAdminApp from './admin/nocturne/NocturneAdminApp.tsx'
import PrivacyPolicyPage from './components/legal/PrivacyPolicyPage.tsx'
import { passwordMobileAppPrivacyPolicy } from './content/privacyPolicy.passwordMobileApp.tsx'
import { nocturnePrivacyPolicy } from './content/privacyPolicy.nocturne.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/xK9-admin/*" element={<AdminApp />} />
        <Route path="/xK9-nocturne/*" element={<NocturneAdminApp />} />
        <Route path="/password-mobile-app/privacy-policy" element={<PrivacyPolicyPage config={passwordMobileAppPrivacyPolicy} />} />
        <Route path="/nocturne/privacy-policy" element={<PrivacyPolicyPage config={nocturnePrivacyPolicy} />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
