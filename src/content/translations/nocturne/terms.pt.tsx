import { Highlight, BadgeNo } from '../../../components/legal/PrivacyPolicyPage'
import type { PolicyTranslation } from '../../../components/legal/privacyPolicyTypes'

export const pt: PolicyTranslation = {
  docLabel: 'Termos de Serviço',
  updatedLabel: 'outubro de 2026',
  sections: {
    objective: {
      title: 'Sobre o serviço',
      content: (
        <>
          <p>
            O <strong>Nocturne</strong> (<code>com.nocturne.app</code>) é um app de relacionamento
            social para adultos, reservado à comunidade alternativa e gótica.
          </p>
          <Highlight>
            O uso do Nocturne é estritamente reservado a usuários com <strong>18 anos ou mais</strong>.
          </Highlight>
        </>
      ),
    },
    registration: {
      title: 'Requisitos de cadastro',
      content: (
        <ul>
          <li>Os usuários devem ter pelo menos <strong>18 anos</strong> para criar uma conta.</li>
          <li>Uma conta por pessoa real: as informações fornecidas devem ser precisas, sem personificação ou perfis falsos.</li>
          <li>Apenas uma conta é permitida por pessoa.</li>
          <li>Seu endereço de email deve ser <strong>verificado</strong> com o código de 6 dígitos enviado no cadastro. Até lá, a conta pode permanecer incompleta ou inativa.</li>
          <li>Você deve manter acesso ao email da sua conta: ele também é usado para redefinir sua senha.</li>
        </ul>
      ),
    },
    fraud: {
      title: 'Contas automatizadas e fraude',
      content: (
        <ul>
          <li>É proibido criar contas de forma automatizada ou fraudulenta (bots, scripts, cadastros em massa, dispositivos ou apps modificados).</li>
          <li>O cadastro verifica a integridade do dispositivo via <strong>Google Play Integrity</strong>. Um cadastro pode ser recusado se essa verificação falhar, por exemplo em um dispositivo modificado ou com um app que não foi instalado de uma fonte confiável.</li>
          <li>Qualquer abuso dos recursos de cadastro ou redefinição de senha (solicitações repetidas, tentativas em contas de outras pessoas) pode levar a limites técnicos e à suspensão da conta envolvida.</li>
        </ul>
      ),
    },
    prohibitions: {
      title: 'Regras de conduta e conteúdo proibido',
      content: (
        <ul>
          <li>Assédio, discurso de ódio, discriminação e conteúdo ilegal são proibidos.</li>
          <li>Conteúdo pornográfico e solicitação comercial ou prostituição são <BadgeNo>proibidos</BadgeNo>.</li>
          <li>Nomes de usuário e mensagens estão sujeitos a moderação automática por meio de uma lista de palavras bloqueadas.</li>
          <li>Violações podem resultar em suspensão ou exclusão da conta sem aviso prévio.</li>
        </ul>
      ),
    },
    reporting: {
      title: 'Denúncias e bloqueios',
      content: (
        <p>
          Cada usuário pode denunciar ou bloquear outro usuário diretamente no app. As denúncias são
          analisadas e podem resultar em sanções: aviso, suspensão ou exclusão permanente da conta.
        </p>
      ),
    },
    subscriptions: {
      title: 'Assinaturas e pagamentos',
      content: (
        <ul>
          <li>Três planos estão disponíveis: <strong>Ombre</strong> (gratuito), <strong>Nocturne</strong> e <strong>Abyssal</strong> (pagos).</li>
          <li>A cobrança dos planos pagos é feita pelo <strong>Google Play</strong>, com base no período escolhido (semanal, mensal ou anual).</li>
          <li>
            As assinaturas podem ser canceladas a qualquer momento pelas configurações do app ou pelo
            Google Play. Nenhum reembolso proporcional é emitido para o período de cobrança em curso,
            salvo quando exigido por lei.
          </li>
          <li>
            Eventos pagos são cobrados via <strong>Stripe</strong>. Nos termos do Artigo L221-28 12°
            do Código de Defesa do Consumidor francês (serviços de lazer prestados em uma data
            específica), o direito de arrependimento de 14 dias não se aplica: os ingressos não são
            reembolsáveis por simples mudança de ideia, exceto em caso de cancelamento ou alteração
            substancial do evento pelo organizador.
          </li>
        </ul>
      ),
    },
    liability: {
      title: 'Responsabilidade e segurança',
      content: (
        <>
          <p>
            O Nocturne é um serviço de pareamento: não verificamos a identidade real dos usuários nem
            garantimos a exatidão dos perfis.
          </p>
          <p>
            O app não é responsável por interações entre usuários, incluindo encontros presenciais.
            Cada usuário é o único responsável pela própria segurança.
          </p>
          <Highlight>
            Para sua segurança, recomendamos marcar o primeiro encontro em um local público e avisar
            alguém de confiança sobre o encontro.
          </Highlight>
        </>
      ),
    },
    account: {
      title: 'Conta e encerramento',
      content: (
        <ul>
          <li>
            Os usuários podem excluir sua conta a qualquer momento pelo app. Isso apaga
            permanentemente o perfil, as fotos, as mensagens e os matches associados à conta.
          </li>
          <li>
            O Nocturne se reserva o direito de suspender ou excluir uma conta em caso de violação
            destes termos.
          </li>
        </ul>
      ),
    },
    law: {
      title: 'Lei aplicável',
      content: (
        <p>
          Estes termos são regidos pela lei francesa. Qualquer disputa relacionada à sua
          interpretação ou aplicação está sujeita à jurisdição dos tribunais franceses competentes.
        </p>
      ),
    },
    contact: {
      title: 'Contato',
      content: (
        <p>
          Para qualquer dúvida sobre estes termos de serviço, entre em contato:
          <br /><a href="mailto:matthieuuzan@gmail.com">matthieuuzan@gmail.com</a>
        </p>
      ),
    },
  },
}
