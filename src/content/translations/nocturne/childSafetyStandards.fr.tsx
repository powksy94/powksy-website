import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const fr: PolicyTranslation = {
  docLabel: "Normes de lutte contre l'exploitation et les abus sexuels sur mineurs",
  updatedLabel: 'août 2026',
  sections: {
    policy: {
      title: 'Politique de tolérance zéro',
      content: (
        <>
          <p>
            <strong>Nocturne</strong> (<code>com.nocturne.app</code>) est réservée aux personnes
            majeures. L'accès à l'application est strictement interdit aux personnes de moins de
            18 ans, vérifié par la date de naissance déclarée à l'inscription.
          </p>
          <p>
            Nocturne applique une politique de tolérance zéro envers tout contenu ou comportement
            lié à l'exploitation ou aux abus sexuels sur mineurs (CSAE), ainsi qu'envers toute
            tentative d'utilisation de l'application par une personne mineure.
          </p>
        </>
      ),
    },
    measures: {
      title: 'Mesures en place',
      content: (
        <ul>
          <li>Vérification de l'âge à l'inscription (18 ans minimum).</li>
          <li>Modération automatique des pseudos et messages par liste de mots interdits.</li>
          <li>
            Système de signalement et de blocage accessible à tout moment depuis l'application,
            pour tout profil ou contenu suspect.
          </li>
          <li>
            Examen manuel des signalements, pouvant conduire à un avertissement, une suspension
            ou une suppression définitive du compte concerné.
          </li>
          <li>
            Suppression immédiate de tout contenu identifié comme relevant de l'exploitation ou
            des abus sexuels sur mineurs, et signalement aux autorités compétentes conformément à
            la législation applicable.
          </li>
        </ul>
      ),
    },
    reporting: {
      title: 'Signaler un problème',
      content: (
        <>
          <p>
            Tout utilisateur peut signaler un profil ou un contenu directement depuis
            l'application (bouton signaler, disponible sur chaque profil et conversation).
          </p>
          <p>
            Pour toute question relative à ces normes, ou pour signaler une préoccupation en
            dehors de l'application, contactez :<br />
            <a href="mailto:matthieuuzan@gmail.com?subject=Nocturne%20-%20Normes%20de%20s%C3%A9curit%C3%A9%20enfantine">
              matthieuuzan@gmail.com
            </a>
          </p>
        </>
      ),
    },
  },
}
