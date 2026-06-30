import { Highlight, BadgeNo, BadgeYes } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const es: PolicyTranslation = {
  docLabel: 'Política de privacidad',
  updatedLabel: 'mayo 2026',
  sections: {
    introduction: {
      title: 'Introducción',
      content: (
        <>
          <p>
            <strong>Password Mobile App</strong> (<code>com.passwordmobileapp.app</code>) es un gestor
            de contraseñas personal. Esta política describe qué datos se recopilan, cómo se protegen
            y qué derechos tiene usted sobre ellos.
          </p>
          <Highlight>
            Principio fundamental: sus contraseñas se cifran en su dispositivo antes de ser enviadas
            a nuestros servidores. Técnicamente no podemos leer su bóveda.
          </Highlight>
        </>
      ),
    },
    dataCollected: {
      title: 'Datos recopilados',
      content: (
        <ul>
          <li><strong>Dirección de correo electrónico</strong> — identificador de su cuenta.</li>
          <li><strong>Contraseña de inicio de sesión</strong> — almacenada con hash bcrypt en nuestros servidores. Nunca la conocemos en texto plano.</li>
          <li><strong>Salt de derivación</strong> — valor aleatorio utilizado para derivar su clave de cifrado en el cliente.</li>
          <li><strong>Bóveda cifrada</strong> — sus entradas (títulos, usuarios, contraseñas, notas) se cifran con AES-256-GCM en su dispositivo antes de ser enviadas.</li>
          <li><strong>Rol de usuario</strong> — user / admin / team_admin (gestión interna).</li>
        </ul>
      ),
    },
    noData: {
      title: 'Datos no recopilados',
      content: (
        <ul>
          <li>
            Contraseña maestra <BadgeNo>nunca transmitida</BadgeNo>
            — nunca abandona su dispositivo. Solo se utiliza para derivar la clave de cifrado localmente.
          </li>
          <li>Contenido en texto plano de la bóveda <BadgeNo>inaccesible</BadgeNo> — cifrado antes del envío.</li>
          <li>Ubicación, contactos, historial de navegación <BadgeNo>no recopilados</BadgeNo>.</li>
          <li>Datos biométricos <BadgeNo>no recopilados</BadgeNo> — gestionados exclusivamente por Android Keystore / iOS Secure Enclave, nunca transmitidos.</li>
        </ul>
      ),
    },
    security: {
      title: 'Seguridad',
      content: (
        <>
          <ul>
            <li>Cifrado: <strong>AES-256-GCM</strong> (bóveda), derivación de clave <strong>PBKDF2-SHA256</strong> (100 000 iteraciones).</li>
            <li>Hash de contraseñas: <strong>bcrypt</strong> (lado servidor).</li>
            <li>Transporte: <strong>HTTPS / TLS</strong> exclusivamente.</li>
            <li>Tokens JWT válidos durante <strong>30 días</strong>.</li>
            <li>Bloqueo automático de la bóveda tras <strong>5 minutos</strong> de inactividad.</li>
          </ul>
          <Highlight>
            Arquitectura de conocimiento cero: incluso si nuestros servidores se vieran
            comprometidos, sus contraseñas permanecen ilegibles sin su contraseña maestra.
          </Highlight>
        </>
      ),
    },
    thirdParty: {
      title: 'Servicios de terceros',
      content: (
        <>
          <p>La aplicación utiliza los siguientes servicios:</p>
          <ul>
            <li><strong>Railway</strong> — alojamiento del servidor backend (Europa / EE. UU.).</li>
            <li><strong>MongoDB Atlas</strong> — almacenamiento de la bóveda cifrada.</li>
            <li><strong>PostgreSQL</strong> — almacenamiento de cuentas de usuario.</li>
          </ul>
          <p>
            Estos servicios tienen sus propias políticas de privacidad.
            Sus datos solo se transmiten a ellos de forma cifrada.
          </p>
        </>
      ),
    },
    retention: {
      title: 'Conservación de datos',
      content: (
        <p>
          Sus datos se conservan mientras su cuenta esté activa. Puede eliminar su cuenta en
          cualquier momento desde <em>Ajustes → Eliminar mi cuenta</em>, lo que borrará
          definitivamente todos sus datos de nuestros servidores.
        </p>
      ),
    },
    rights: {
      title: 'Sus derechos (RGPD)',
      content: (
        <>
          <p>De conformidad con el Reglamento General de Protección de Datos (RGPD):</p>
          <ul>
            <li><BadgeYes>Acceso</BadgeYes> — puede exportar toda su bóveda desde la aplicación.</li>
            <li><BadgeYes>Rectificación</BadgeYes> — puede modificar sus datos en cualquier momento.</li>
            <li><BadgeYes>Supresión</BadgeYes> — eliminación completa de la cuenta y los datos a través de la aplicación.</li>
            <li><BadgeYes>Portabilidad</BadgeYes> — exportación en JSON o archivo cifrado (.enc).</li>
          </ul>
        </>
      ),
    },
    contact: {
      title: 'Contacto',
      content: (
        <p>
          Para cualquier consulta sobre sus datos personales, contáctenos en:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
