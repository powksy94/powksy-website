export async function encryptBytes(
  key: CryptoKey, data: Uint8Array<ArrayBuffer>
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
): Promise<Uint8Array<ArrayBuffer>> {
  const enc = Uint8Array.from(atob(encryptedData), c => c.charCodeAt(0))
  const ivBytes = Uint8Array.from(atob(iv), c => c.charCodeAt(0))
  const dec = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: ivBytes }, key, enc)
  return new Uint8Array(dec)
}
