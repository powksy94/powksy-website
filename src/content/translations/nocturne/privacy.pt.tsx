import { Highlight, BadgeNo, BadgeYes } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const pt: PolicyTranslation = {
  docLabel: 'Política de Privacidade',
  updatedLabel: 'outubro de 2026',
  sections: {
    introduction: {
      title: 'Introdução',
      content: (
        <>
          <p>
            O <strong>Nocturne</strong> (<code>com.nocturne.app</code>) é um app de relacionamento
            dedicado à comunidade alternativa e gótica. Esta política descreve quais dados são
            coletados, como são protegidos e quais direitos você tem sobre eles.
          </p>
          <Highlight>
            O Nocturne é só para adultos. O acesso é estritamente limitado a usuários com{' '}
            <strong>18 anos ou mais</strong>.
          </Highlight>
        </>
      ),
    },
    dataCollected: {
      title: 'Dados coletados',
      content: (
        <ul>
          <li><strong>Conta</strong>:email e senha (armazenada como hash bcrypt em nossos servidores).</li>
          <li><strong>Perfil</strong>:nome de usuário, bio, data de nascimento/idade, gênero, preferências de gênero, pronomes, fotos, preferências musicais/estéticas, links de redes sociais, eventos seguidos.</li>
          <li><strong>Localização</strong>:posição GPS usada para pareamento por proximidade e filtro de distância.</li>
          <li><strong>Atividade</strong>:likes, matches, mensagens, elegias (mensagens de abertura), visitas ao perfil, contador diário de swipes.</li>
          <li><strong>Assinatura</strong>:plano escolhido (Ombre / Nocturne / Abyssal) e período de assinatura.</li>
          <li><strong>Pagamentos de eventos</strong>:valor e status da transação (processado via Stripe) para eventos pagos.</li>
          <li><strong>Técnico</strong>:token de notificações push (FCM), token de atualização (JWT, válido por 1h; refresh token 30 dias).</li>
          <li><strong>Códigos de verificação</strong>: códigos de uso único de 6 dígitos enviados por email (verificação de email no cadastro, redefinição de senha).</li>
          <li><strong>Integridade do dispositivo</strong>: token do Google Play Integrity enviado no cadastro (ver "Prevenção de fraude").</li>
        </ul>
      ),
    },
    emailVerification: {
      title: 'Verificação de email e redefinição de senha',
      content: (
        <>
          <ul>
            <li>No cadastro, um <strong>código de 6 dígitos</strong> é enviado para seu email para confirmar que você é o titular. Essa verificação é <strong>obrigatória</strong> antes que sua conta seja totalmente ativada.</li>
            <li>O recurso <em>Esqueci minha senha</em> também envia um código de uso único de 6 dígitos para definir uma nova senha.</li>
            <li><strong>Dados tratados</strong>: seu endereço de email e o conteúdo do email (o código de uso único). Nenhuma nova categoria de dado é coletada: o email já era o identificador da sua conta.</li>
          </ul>
          <p>
            Os emails são enviados pelo nosso processador <strong>Resend</strong>, uma empresa
            sediada nos Estados Unidos (ver "Serviços de terceiros").
          </p>
        </>
      ),
    },
    fraudPrevention: {
      title: 'Prevenção de fraude (Google Play Integrity)',
      content: (
        <>
          <p>
            O cadastro é protegido pelo <strong>Google Play Integrity</strong>, por meio do Firebase
            App Check. O app envia um token de integridade que comprova que está rodando em um
            dispositivo Android genuíno, sem modificações, e instalado a partir de uma fonte
            confiável.
          </p>
          <ul>
            <li><strong>Dados tratados</strong>: sinais técnicos do dispositivo (integridade do sistema, assinatura do app e origem da instalação), verificados pelo Google.</li>
            <li><strong>Finalidade</strong>: prevenir fraudes, contas falsas e cadastros automatizados.</li>
            <li>Esses sinais não são usados para identificá-lo pessoalmente nem para fins publicitários.</li>
          </ul>
        </>
      ),
    },
    noData: {
      title: 'Dados não coletados',
      content: (
        <ul>
          <li>Histórico de navegação fora do app <BadgeNo>não coletado</BadgeNo>.</li>
          <li>
            Dados biométricos <BadgeNo>não coletados</BadgeNo>, exceto o desbloqueio local por impressão digital/Face ID via <code>local_auth</code>, que nunca sai do seu dispositivo.
          </li>
          <li>Contatos do telefone <BadgeNo>não coletados</BadgeNo>.</li>
        </ul>
      ),
    },
    security: {
      title: 'Segurança',
      content: (
        <ul>
          <li>Hash de senhas: <strong>bcrypt</strong> (no servidor).</li>
          <li>Transporte: <strong>HTTPS / TLS</strong> exclusivamente.</li>
          <li>Autenticação via <strong>JWT</strong> (válido por 1h) com <strong>refresh token</strong> rotativo (30 dias).</li>
          <li><code>usesCleartextTraffic</code> desativado no Android.</li>
        </ul>
      ),
    },
    thirdParty: {
      title: 'Serviços de terceiros',
      content: (
        <>
          <p>O app utiliza os seguintes serviços:</p>
          <ul>
            <li><strong>Railway</strong>:hospedagem do servidor backend.</li>
            <li><strong>MongoDB Atlas</strong>:banco de dados.</li>
            <li><strong>Cloudinary</strong>:hospedagem das fotos de perfil.</li>
            <li><strong>Firebase / Google</strong>:notificações push via FCM, e verificações de integridade do dispositivo no cadastro via App Check / Play Integrity (<a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">política de privacidade</a>).</li>
            <li><strong>RevenueCat</strong>:gestão de assinaturas e compras no app.</li>
            <li><strong>Stripe</strong>:processamento de pagamentos para eventos pagos.</li>
            <li><strong>Resend</strong>:envio de emails transacionais (códigos de verificação e redefinição) (<a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">política de privacidade</a>, <a href="https://resend.com/legal/dpa" target="_blank" rel="noopener noreferrer">DPA</a>).</li>
          </ul>
          <p>Esses serviços estão sujeitos às suas próprias políticas de privacidade.</p>
          <p>
            A Resend é uma empresa sediada nos Estados Unidos. As transferências de dados para fora
            da União Europeia são regidas pelo seu Acordo de Tratamento de Dados (DPA), que se baseia
            nas Cláusulas Contratuais Padrão da Comissão Europeia, e pela sua certificação no âmbito
            do EU-U.S. Data Privacy Framework.
          </p>
        </>
      ),
    },
    retention: {
      title: 'Retenção de dados',
      content: (
        <p>
          Seus dados são mantidos enquanto sua conta estiver ativa. A exclusão da conta está
          disponível diretamente no app (<em>Configurações → Excluir minha conta</em>), o que apaga
          permanentemente: seu perfil, as fotos no Cloudinary, mensagens, matches, likes, elegias, e
          remove você dos eventos seguidos.
        </p>
      ),
    },
    rights: {
      title: 'Seus direitos (RGPD)',
      content: (
        <>
          <p>De acordo com o Regulamento Geral de Proteção de Dados (RGPD):</p>
          <ul>
            <li><BadgeYes>Acesso</BadgeYes>:você pode solicitar acesso a todos os seus dados.</li>
            <li><BadgeYes>Retificação</BadgeYes>:você pode atualizar seus dados a qualquer momento pelo app.</li>
            <li><BadgeYes>Exclusão</BadgeYes>:exclusão completa da conta e dos dados pelo app.</li>
            <li><BadgeYes>Portabilidade</BadgeYes>:exportação de dados disponível mediante solicitação.</li>
          </ul>
        </>
      ),
    },
    contact: {
      title: 'Contato',
      content: (
        <p>
          Para qualquer dúvida sobre seus dados pessoais, entre em contato:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
