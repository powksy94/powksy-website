import { Highlight } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const fr: PolicyTranslation = {
  docLabel: "Conditions d'utilisation",
  updatedLabel: 'juin 2026',
  sections: {
    objective: {
      title: 'Objet du service',
      content: (
        <>
          <p>
            <strong>Password Mobile App</strong> (<code>com.passwordmobileapp.app</code>) est un
            gestionnaire de mots de passe personnel proposant un coffre-fort chiffré, un générateur
            de mots de passe, une analyse de santé du coffre et des fonctionnalités d'export/import
            sécurisées.
          </p>
          <ul>
            <li>Coffre chiffré <strong>AES-256-GCM</strong> — chiffrement intégralement côté client.</li>
            <li>Déverrouillage par <strong>mot de passe maître</strong> ou <strong>biométrie</strong> (empreinte / Face ID).</li>
            <li><strong>Générateur</strong> de mots de passe personnalisable.</li>
            <li><strong>Analyse de santé</strong> — détection des mots de passe faibles, réutilisés ou compromis.</li>
            <li><strong>Export / import</strong> du coffre (CSV, export protégé par biométrie).</li>
          </ul>
        </>
      ),
    },
    conditions: {
      title: "Conditions d'utilisation",
      content: (
        <ul>
          <li>Vous devez créer un compte avec des informations exactes et à jour.</li>
          <li>Un seul compte est autorisé par personne.</li>
          <li>L'application est destinée à un <strong>usage personnel exclusif</strong>. Toute utilisation commerciale ou redistribution non autorisée est interdite.</li>
          <li>Vous êtes responsable de la confidentialité de vos identifiants de connexion.</li>
        </ul>
      ),
    },
    masterPassword: {
      title: 'Mot de passe maître',
      content: (
        <>
          <p>
            Le mot de passe maître ne quitte jamais votre appareil. Il est utilisé localement
            pour dériver la clé de chiffrement de votre coffre et n'est jamais transmis à nos serveurs.
          </p>
          <Highlight>
            <strong>Avertissement critique :</strong> la perte de votre mot de passe maître entraîne
            la perte <strong>définitive et irréversible</strong> de l'accès à votre coffre. Aucune
            procédure de récupération n'est possible — nos serveurs ne stockent jamais votre mot de
            passe maître ni aucune clé permettant de déchiffrer vos données.
          </Highlight>
          <p>Conservez votre mot de passe maître dans un endroit sûr, distinct de l'application.</p>
        </>
      ),
    },
    security: {
      title: 'Sécurité et chiffrement',
      content: (
        <ul>
          <li>Chiffrement <strong>AES-256-GCM</strong> côté client — clé dérivée localement par <strong>PBKDF2-SHA256</strong> (100 000 itérations).</li>
          <li>Nos serveurs ne reçoivent et ne stockent que des <strong>blobs chiffrés</strong> — vos mots de passe ne transitent jamais en clair.</li>
          <li>Le déverrouillage biométrique est géré exclusivement par le <strong>Keystore Android / iOS Secure Enclave</strong> — aucune donnée biométrique n'est transmise.</li>
          <li>Le coffre se <strong>verrouille automatiquement</strong> après 5 minutes d'inactivité.</li>
          <li>Les notifications push Firebase servent uniquement aux demandes d'approbation admin — elles ne contiennent aucune donnée de coffre.</li>
        </ul>
      ),
    },
    export: {
      title: 'Export et import des données',
      content: (
        <>
          <p>
            L'export CSV génère un fichier listant l'ensemble de vos mots de passe en clair.
            Cette opération est protégée par authentification biométrique avant génération.
          </p>
          <Highlight>
            Une fois téléchargé, le fichier CSV contient des données sensibles <strong>en clair</strong>.
            Vous en êtes seul responsable : Password Mobile App n'est pas responsable de son
            stockage, partage ou perte une fois sorti de l'application.
          </Highlight>
          <p>
            L'import permet de restaurer un coffre depuis un fichier d'export compatible.
            Vérifiez soigneusement la provenance du fichier avant importation.
          </p>
        </>
      ),
    },
    ads: {
      title: 'Publicités',
      content: (
        <>
          <p>L'application intègre <strong>Google AdMob</strong> pour l'affichage de publicités.</p>
          <ul>
            <li>Google peut collecter certaines données à des fins publicitaires, conformément à sa propre <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>.</li>
            <li>Les publicités peuvent être limitées via les paramètres de personnalisation de votre compte Google.</li>
          </ul>
        </>
      ),
    },
    liability: {
      title: 'Limitation de responsabilité',
      content: (
        <ul>
          <li>Password Mobile App est un outil de gestion locale — nous ne garantissons pas la disponibilité continue du service ni l'absence de pertes de données liées à des événements techniques.</li>
          <li>Nous ne sommes pas responsables des pertes de données résultant d'un oubli de mot de passe maître, d'une suppression de compte ou d'un mauvais usage de la fonctionnalité d'export/import.</li>
          <li>L'application n'est pas responsable des conséquences d'une compromission de votre appareil ou de vos données biométriques locales.</li>
        </ul>
      ),
    },
    account: {
      title: 'Compte et résiliation',
      content: (
        <ul>
          <li>
            Vous pouvez supprimer votre compte à tout moment depuis{' '}
            <em>Paramètres → Supprimer mon compte</em>. Cette action efface définitivement
            votre coffre chiffré de nos serveurs, vos données de compte et votre historique.
          </li>
          <li>Sans votre mot de passe maître, aucune restauration n'est possible après suppression.</li>
          <li>Password Mobile App se réserve le droit de suspendre un compte en cas d'utilisation abusive.</li>
        </ul>
      ),
    },
    law: {
      title: 'Droit applicable',
      content: (
        <p>
          Les présentes conditions sont soumises au droit français. Tout litige relatif à leur
          interprétation ou leur exécution relève des tribunaux compétents français.
        </p>
      ),
    },
    contact: {
      title: 'Contact',
      content: (
        <p>
          Pour toute question relative aux présentes conditions, contactez-nous à :
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
