import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faIdCard,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";
import {
  faLock,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import TimelineItem from "./TimelineItem";

export default function CandidateAuthInfo() {
  return (
    <section className="flex flex-col items-start text-start gap-5 lg:items-start lg:text-start lg:ml-20!">
      <div className="flex flex-col items-center justify-start gap-3">
        <Image src="/assets/logo-pre-ecologica.svg" alt="Logo pré ECOLógica Consultoria" width={120} height={120} priority className="h-auto w-30" />
        <div className="flex flex-col items-start justify-start pl-15">
                <p className="text-base text-[#010101]"> Cadastre-se para a vaga de </p>
                <h1 className="text-5xl font-medium leading-none sm:text-6xl"> Consultor Químico</h1>
                <div className="h-1 w-24 rounded-full bg-(--color-primary)" />
                <p className="text-sm leading-5 text-[#010101] lg:w-170 mt-3!"> Siga as etapas ao lado para concluir seu cadastro. Nosso processo é simples, seguro e transparente, garantindo uma experiência eficiente para você.</p>
        </div>
      </div>

      <div className="mt-8 flex w-full flex-col gap-3">
        <TimelineItem
          number="1"
          icon={<FontAwesomeIcon icon={faUser} />}
          title="Triagem Inicial"
          description="Validação básica da sua candidatura."
        />

        <TimelineItem
          number="2"
          icon={<FontAwesomeIcon icon={faLock} />}
          title="Controle de Acesso"
          description="Criação de login e verificação de segurança."
        />

        <TimelineItem
          number="3"
          icon={<FontAwesomeIcon icon={faIdCard} />}
          title="Coleta de Perfil"
          description="Dados cadastrais e informações profissionais."
        />

        <TimelineItem
          number="4"
          icon={<FontAwesomeIcon icon={faAward} />}
          title="Qualificação Técnica"
          description="Questionário técnico e avaliação de perfil."
        />

        <TimelineItem
          number="5"
          icon={<FontAwesomeIcon icon={faCircleCheck} />}
          title="Finalização e Alinhamento"
          description="Confirmação e envio para o RH."
        />
      </div>

      <div className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-[#CDD5AB] p-3! text-left text-base leading-5 text-[#010101]">
        <Image src="/assets/folha.svg" alt="" width={24} height={24} className="h-7 w-7" />
        <p> Resumo: o fluxo organiza a candidatura, garante coleta de dados e confirma o envio para retorno do RH.</p>
      </div>
    </section>
  );
}