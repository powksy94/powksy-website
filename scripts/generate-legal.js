import { writeFileSync } from 'fs'

const address = process.env.LEGAL_ADDRESS ?? ''
const siret = process.env.LEGAL_SIRET ?? ''

writeFileSync(
  'src/legal-info.ts',
  `export const LEGAL_ADDRESS = '${address}'\nexport const LEGAL_SIRET = '${siret}'\n`
)

console.log('legal-info.ts generated')
