import { Highlight } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const pt: PolicyTranslation = {
  docLabel: 'Exclusão de conta',
  updatedLabel: 'agosto de 2026',
  sections: {
    appMethod: {
      title: 'Pelo app',
      content: (
        <p>
          Você pode excluir sua conta do Nocturne a qualquer momento, diretamente pelo app:{' '}
          <strong>Configurações → Excluir minha conta</strong>.
        </p>
      ),
    },
    dataDeleted: {
      title: 'Dados excluídos',
      content: (
        <>
          <p>Isso apaga imediata e permanentemente:</p>
          <ul>
            <li>seu perfil e fotos</li>
            <li>suas mensagens e conversas</li>
            <li>seus matches, likes e elegias</li>
            <li>suas inscrições em eventos</li>
            <li>sua assinatura (cancelada automaticamente)</li>
          </ul>
        </>
      ),
    },
    emailMethod: {
      title: 'Não tem mais o app instalado?',
      content: (
        <>
          <p>
            Envie uma solicitação de exclusão para{' '}
            <a href="mailto:matthieuuzan@gmail.com?subject=Nocturne%20Account%20Deletion">
              matthieuuzan@gmail.com
            </a>{' '}
            a partir do endereço de email vinculado à sua conta.
          </p>
          <Highlight>
            Sua conta e todos os dados associados serão excluídos em até <strong>30 dias</strong>.
          </Highlight>
        </>
      ),
    },
  },
}
