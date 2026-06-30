import { useSearchParams } from 'react-router-dom'

export function useLang(supported: string[], fallback = 'fr'): string {
  const [params] = useSearchParams()
  const lang = params.get('lang')?.toLowerCase()
  return lang && supported.includes(lang) ? lang : fallback
}
