import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const retention: SectionTranslation = {
  title: 'Conservación y eliminación de datos',
  content: (
    <>
      <p>
        Sus datos se conservan mientras su cuenta esté activa. Los códigos de restablecimiento y
        los tokens de sesión se purgan automáticamente según los plazos indicados anteriormente.
      </p>
      <p>
        Puede eliminar su cuenta en cualquier momento desde <em>Ajustes → Eliminar mi cuenta</em>.
        Esta acción borra definitivamente de nuestros servidores su bóveda cifrada, sus datos de
        cuenta, sus sesiones, los códigos de restablecimiento pendientes, sus preferencias de
        recordatorios y la fecha del último cambio de contraseña. Los tokens aún válidos de esta
        cuenta se rechazan inmediatamente.
      </p>
    </>
  ),
}
