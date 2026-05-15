import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPenToSquare,
  faCommentDots,
} from "@fortawesome/free-regular-svg-icons";

export default function CandidateLoginInfo() {
  return (
    <section className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-[35%]">
      <div className="flex items-center justify-center w-full">
        <Image src="/assets/logo-pre-ecologica.svg" alt="Logo pré ECOLógica Consultoria" width={120} height={120} priority className="my-5! h-auto w-28"/>
      </div>
      <p className="text-base text-foreground">Acesse sua</p>
      <h1 className="mt-2! text-5xl font-medium leading-none text-(--blue-400) sm:text-6xl"> Conta </h1>
      <div className="mt-3 h-1 w-24 rounded-full bg-(--green-200)"/>
      <p className="my-4! text-base leading-5 text-foreground">Acompanhe o andamento da sua candidatura, edite seus dados e receba o retorno do RH de forma simples e segura.</p>
      <div className="mt-8 flex w-full flex-col gap-3">
        <LoginFeature icon={<FontAwesomeIcon icon={faCircleCheck}/>} title="Acompanhe o andamento" description="Veja o status da sua candidatura durante o processo seletivo."/>
        <LoginFeature icon={<FontAwesomeIcon icon={faPenToSquare}/>} title="Atualize seus dados" description="Mantenha suas informações pessoais e profissionais atualizadas."/>
        <LoginFeature icon={<FontAwesomeIcon icon={faCommentDots}/>} title="Receba feedback do RH" description="Fique por dentro dos retornos e das próximas etapas."/>
      </div>
      <div className="mt-6! flex items-center gap-3 rounded-xl bg-(--green-10) p-4! text-left text-base leading-5 text-foreground">
        <Image src="/assets/folha.svg" alt="" width={24} height={24}/>
        <p> Seu acesso é seguro e seus dados serão utilizados apenas para o processo seletivo. </p>
      </div>
    </section>
  );
}

type LoginFeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function LoginFeature({ icon, title, description }: LoginFeatureProps) {
  return (
    <div className="flex lg:min-h-16 items-center gap-4 rounded-xl border border-[#d9d9d9] bg-(--white) p-3!">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--green-10) text-(--green-300)">{icon}</span>
      <div>
        <strong className="block text-lg font-semibold text-(--green-300)">{title}</strong>
        <p className="text-base leading-5 text-(--text-secondary)">{description}</p>
      </div>
    </div>
  );
}