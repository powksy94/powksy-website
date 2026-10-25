import type { SectionTranslation } from '../../../../../components/legal/privacyPolicyTypes'

export const objective: SectionTranslation = {
  title: 'Objet du service',
  content: (
    <>
      <p>
        <strong>Password Mobile App</strong> (<code>com.passwordmobileapp.app</code>) est un
        gestionnaire de mots de passe personnel proposant un coffre-fort chiffré, un générateur
        de mots de passe, une analyse de santé du coffre, des rappels de sécurité et des
        fonctionnalités d'export/import sécurisées.
      </p>
      <ul>
        <li>Coffre chiffré <strong>AES-256-GCM</strong> : chiffrement intégralement côté client.</li>
        <li>Déverrouillage par <strong>mot de passe maître</strong> ou <strong>biométrie</strong> (empreinte / Face ID).</li>
        <li><strong>Générateur</strong> de mots de passe personnalisable.</li>
        <li><strong>Analyse de santé</strong> : détection des mots de passe faibles, réutilisés ou compromis.</li>
        <li><strong>Rappels de sécurité</strong> par notification pour les mots de passe faibles.</li>
        <li><strong>Export / import</strong> du coffre (export chiffré .enc ou JSON, import CSV depuis d'autres gestionnaires).</li>
      </ul>
    </>
  ),
}
