const PBKDF2_ITERATIONS = 100_000

export async function deriveVaultKey(password: string, saltB64: string): Promise<CryptoKey> {
  const salt = Uint8Array.from(atob(saltB64), c => c.charCodeAt(0))
  const keyMaterial = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']
  )
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  )
}

export async function encryptBytes(
  key: CryptoKey, data: Uint8Array
): Promise<{ encryptedData: string; iv: string }> {
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, data)
  return {
    encryptedData: btoa(String.fromCharCode(...new Uint8Array(encrypted))),
    iv: btoa(String.fromCharCode(...iv)),
  }
}

export async function decryptBytes(
  key: CryptoKey, encryptedData: string, iv: string
): Promise<Uint8Array> {
  const enc = Uint8Array.from(atob(encryptedData), c => c.charCodeAt(0))
  const ivBytes = Uint8Array.from(atob(iv), c => c.charCodeAt(0))
  const dec = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: ivBytes }, key, enc)
  return new Uint8Array(dec)
}
