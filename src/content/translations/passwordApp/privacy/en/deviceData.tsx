import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const deviceData: SectionTranslation = {
  title: 'Data stored on the device',
  content: (
    <ul>
      <li>The vault key may be kept on the device, protected by secure hardware (Android Keystore) and your fingerprint. It <strong>never leaves the device</strong>.</li>
      <li>Once the session has expired, your fingerprint can replace entering the master password when signing back in, only on a device already used, and only after checking that the key actually decrypts the vault.</li>
      <li>Your email address stays saved on the device after a simple sign-out, to prefill the login screen. It is erased by a full sign-out or by deleting your account.</li>
      <li>No biometric data is collected: verification is handled by the operating system.</li>
    </ul>
  ),
}
