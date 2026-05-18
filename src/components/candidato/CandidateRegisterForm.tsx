import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CandidateRegisterForm() {
  return (
    <section className="w-full rounded-4xl bg-white p-8! shadow-[0_22px_55px_rgba(1,1,1,0.16)] sm:p-10">
      <div className="flex flex-col items-start justify-center mb-4!">
        <h2 className="text-4xl font-normal text-[#214A22] sm:text-5xl">Crie sua conta </h2>
        <p className="mt-3 text-sm text-[#010101]"> Preencha os campos abaixo para começar. </p>
      </div>
      <form className="mt-7 flex flex-col gap-5">
        <Input label="Nome completo" placeholder="Digite seu nome completo" />
        <Input label="E-mail" type="email" placeholder="seu.email@exemplo.com" />
        <Input label="Telefone / WhatsApp" type="tel" placeholder="(00) 00000-0000"/>
        <div className="grid gap-5 sm:grid-cols-2">
          <Input  label="Criar senha" type="password" placeholder="Crie uma senha segura"/>
          <Input label="Confirmar senha" type="password"  placeholder="Confirme sua senha" />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 my-5!">
            <div className="mt-4 flex flex-row gap-2 items-center justify-center w-full">
                <Button type="submit"> Continuar cadastro <span className="ml-3"> →</span> </Button>
            </div>
            <p className="text-center text-xs text-[#010101]"> Já possui cadastro?{" "}
                <Link href="/candidato/login" className="font-medium text-[#00206E] hover:underline">
                    Entrar
                </Link>
            </p>
        </div>
      </form>
      <div className="mt-6 flex gap-2 border-t-2 border-[#d9d9d9] pt-5 text-xs leading-5 text-[#010101]">
        <Image src="/assets/shield.svg" alt="Escudo de proteção" width={48} height={48} className="mt-1 shrink-0" />
        <p> Seus dados estão protegidos. As informações fornecidas serão utilizadas apenas para fins de seleção e não serão compartilhadas com terceiros.</p>
      </div>
    </section>
  );
}