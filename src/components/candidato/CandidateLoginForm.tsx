import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CandidateLoginForm() {
  return (
    <section className="w-full rounded-4xl bg-(--white) p-8! shadow-[0_22px_55px_rgba(1,1,1,0.16)] sm:p-10">
      <h2 className="text-4xl font-normal text-(--green-100) sm:text-5xl">Entrar </h2>
      <p className="mt-3 text-sm text-foreground mb-4!"> Informe seus dados para continuar. </p>
      <form className="mt-7 flex flex-col gap-5">
        <Input label="E-mail" type="email" placeholder="seu.email@exemplo.com"autoComplete="email"/>
        <Input label="Senha" type="password" placeholder="Digite sua senha" autoComplete="current-password"/>
        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <label className="flex items-center gap-2 text-foreground">
            <input type="checkbox" className="h-4 w-4 accent-(--green-300)" />Lembrar de mim </label>
          <Link href="#" className="font-medium text-(--links) hover:underline"> Esqueci minha senha </Link>
        </div>
        <div className="my-4! flex flex-col gap-4">
          <Button type="submit"> Acessar conta <span className="ml-3">→</span> </Button>
          <Link href="/candidato/cadastro">
            <Button type="button" variant="secondary" className="w-full"> Criar nova conta </Button>
          </Link>
        </div>
      </form>
      <div className="mt-6! flex items-center justify-center gap-3 border-t-2 border-[#d9d9d9] pt-5 text-xs leading-5 text-foreground">
        <Image src="/assets/shield.svg" alt="Escudo de segurança" width={48} height={48} className="h-10 w-10 shrink-0"/>
        <p> Seus dados estão protegidos. As informações fornecidas serão usadas apenas para acesso ao portal e acompanhamento da candidatura.</p>
      </div>
    </section>
  );
}