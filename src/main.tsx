import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AdminApp from './admin/password_mobile_app/AdminApp.tsx'
import NocturneAdminApp from './admin/nocturne/NocturneAdminApp.tsx'
import LocalizedLegalPage from './components/legal/LocalizedLegalPage.tsx'
import { passwordMobileAppPrivacyPolicies } from './content/privacyPolicy.passwordMobileApp.tsx'
import { nocturnePrivacyPolicies } from './content/privacyPolicy.nocturne.tsx'
import { nocturneTermsOfServices } from './content/termsOfService.nocturne.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/xK9-admin/*" element={<AdminApp />} />
        <Route path="/xK9-nocturne/*" element={<NocturneAdminApp />} />
        <Route path="/password-mobile-app/privacy-policy" element={<LocalizedLegalPage configs={passwordMobileAppPrivacyPolicies} />} />
        <Route path="/nocturne/privacy-policy" element={<LocalizedLegalPage configs={nocturnePrivacyPolicies} />} />
        <Route path="/nocturne/terms-of-service" element={<LocalizedLegalPage configs={nocturneTermsOfServices} />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
