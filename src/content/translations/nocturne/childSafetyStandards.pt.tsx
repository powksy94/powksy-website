import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const pt: PolicyTranslation = {
  docLabel: 'Normas de prevenção ao abuso e exploração sexual infantil',
  updatedLabel: 'agosto de 2026',
  sections: {
    policy: {
      title: 'Política de tolerância zero',
      content: (
        <>
          <p>
            O <strong>Nocturne</strong> (<code>com.nocturne.app</code>) é restrito apenas a adultos.
            O acesso ao app é estritamente proibido a qualquer pessoa menor de 18 anos, verificado
            pela data de nascimento declarada no cadastro.
          </p>
          <p>
            O Nocturne aplica uma política de tolerância zero a qualquer conteúdo ou comportamento
            relacionado a abuso ou exploração sexual infantil (CSAE), assim como a qualquer tentativa
            de uso do app por um menor.
          </p>
        </>
      ),
    },
    measures: {
      title: 'Medidas implementadas',
      content: (
        <ul>
          <li>Verificação de idade no cadastro (mínimo de 18 anos).</li>
          <li>Moderação automática de nomes de usuário e mensagens por meio de um filtro de palavras banidas.</li>
          <li>
            Sistema de denúncia e bloqueio disponível a qualquer momento dentro do app, para qualquer
            perfil ou conteúdo suspeito.
          </li>
          <li>
            Análise manual das denúncias, que pode resultar em advertência, suspensão ou exclusão
            permanente da conta envolvida.
          </li>
          <li>
            Remoção imediata de qualquer conteúdo identificado como relacionado a CSAE, e denúncia às
            autoridades competentes conforme a legislação aplicável.
          </li>
        </ul>
      ),
    },
    reporting: {
      title: 'Denunciar um problema',
      content: (
        <>
          <p>
            Qualquer usuário pode denunciar um perfil ou conteúdo diretamente pelo app (botão de
            denúncia, disponível em todo perfil e conversa).
          </p>
          <p>
            Para qualquer dúvida sobre estas normas, ou para denunciar um problema fora do app, entre
            em contato:<br />
            <a href="mailto:matthieuuzan@gmail.com?subject=Nocturne%20-%20Child%20Safety%20Standards">
              matthieuuzan@gmail.com
            </a>
          </p>
        </>
      ),
    },
  },
}
