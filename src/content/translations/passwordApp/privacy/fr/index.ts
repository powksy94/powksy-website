import type { PolicyTranslation } from '../../../../../components/legal/privacyPolicyTypes'
import { introduction } from './introduction'
import { dataCollected } from './dataCollected'
import { noData } from './noData'
import { passwordReset } from './passwordReset'
import { sessions } from './sessions'
import { notifications } from './notifications'
import { deviceData } from './deviceData'
import { vaultExport } from './export'
import { security } from './security'
import { thirdParty } from './thirdParty'
import { retention } from './retention'
import { rights } from './rights'
import { contact } from './contact'

export const fr: PolicyTranslation = {
  updatedLabel: 'octobre 2026',
  sections: {
    introduction,
    dataCollected,
    noData,
    passwordReset,
    sessions,
    notifications,
    deviceData,
    export: vaultExport,
    security,
    thirdParty,
    retention,
    rights,
    contact,
  },
}
