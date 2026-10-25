import type { PolicyTranslation } from '../../../../../components/legal/privacyPolicyTypes'
import { objective } from './objective'
import { conditions } from './conditions'
import { masterPassword } from './masterPassword'
import { recovery } from './recovery'
import { sessions } from './sessions'
import { security } from './security'
import { vaultExport } from './export'
import { notifications } from './notifications'
import { ads } from './ads'
import { liability } from './liability'
import { account } from './account'
import { law } from './law'
import { contact } from './contact'

export const fr: PolicyTranslation = {
  docLabel: "Conditions d'utilisation",
  updatedLabel: 'octobre 2026',
  sections: {
    objective,
    conditions,
    masterPassword,
    recovery,
    sessions,
    security,
    export: vaultExport,
    notifications,
    ads,
    liability,
    account,
    law,
    contact,
  },
}
