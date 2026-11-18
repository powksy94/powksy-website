import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import I18nProvider from './i18n/I18nProvider.tsx'
import LocalizedLegalPage from './components/legal/LocalizedLegalPage.tsx'
import { passwordMobileAppPrivacyPolicies } from './content/privacyPolicy.passwordMobileApp.tsx'
import { nocturnePrivacyPolicies } from './content/privacyPolicy.nocturne.tsx'
import { nocturneTermsOfServices } from './content/termsOfService.nocturne.tsx'
import { passwordMobileAppTermsOfServices } from './content/termsOfService.passwordMobileApp.tsx'
import { dailyFactsDeleteAccountConfigs } from './content/deleteAccount.dailyFacts.tsx'
import { dailyFactsTermsOfServices } from './content/termsOfService.dailyFacts.tsx'
import { nocturneDeleteAccountConfigs } from './content/deleteAccount.nocturne.tsx'
import { nocturneChildSafetyStandardsConfigs } from './content/childSafetyStandards.nocturne.tsx'
import { AdminApp, NocturneAdminApp } from './admin/lazyAdminApp.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/xK9-admin/*" element={<Suspense fallback={null}><AdminApp /></Suspense>} />
        <Route path="/xK9-nocturne/*" element={<Suspense fallback={null}><NocturneAdminApp /></Suspense>} />
        <Route path="/password-mobile-app/privacy-policy" element={<LocalizedLegalPage configs={passwordMobileAppPrivacyPolicies} />} />
        <Route path="/nocturne/privacy-policy" element={<LocalizedLegalPage configs={nocturnePrivacyPolicies} />} />
        <Route path="/nocturne/terms-of-service" element={<LocalizedLegalPage configs={nocturneTermsOfServices} />} />
        <Route path="/nocturne/delete-account" element={<LocalizedLegalPage configs={nocturneDeleteAccountConfigs} />} />
        <Route path="/nocturne/child-safety-standards" element={<LocalizedLegalPage configs={nocturneChildSafetyStandardsConfigs} />} />
        <Route path="/password-mobile-app/terms-of-service" element={<LocalizedLegalPage configs={passwordMobileAppTermsOfServices} />} />
        <Route path="/daily-facts/delete-account" element={<LocalizedLegalPage configs={dailyFactsDeleteAccountConfigs} />} />
        <Route path="/daily-facts/terms-of-service" element={<LocalizedLegalPage configs={dailyFactsTermsOfServices} />} />
        {/* The locale comes from the first path segment (/en, /es, /pt-pt, /pt-br, /ar, /zh, /ja), French on / */}
        <Route path="/*" element={<I18nProvider><App /></I18nProvider>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
