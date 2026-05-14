import Footer from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <section className="relative z-10 flex flex-1 items-center px-6 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_1.2fr]">
          <div className="flex items-center justify-center lg:justify-start">
            <div className="flex max-w-xl flex-col items-center gap-8 text-center lg:items-start lg:text-left">
              <Image src="/assets/logo-pre-ecologica.svg" alt="Logo pré ECOLógica Consultoria" width={150} height={150} priority className="h-auto w-32 sm:w-36 lg:w-40" />
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-[#67912F]"> Processo seletivo </p>
                <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#010101] sm:text-5xl lg:text-[56px]">
                  Consultoria ambiental com seleção mais organizada.
                </h1>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
                <article className="p-7">
                    <p className="text-base leading-7">
                    A pré ECOLógica Consultoria atua na área ambiental, auxiliando empresas
                    na organização de processos, adequações técnicas, controle de documentos
                    e atendimento às exigências relacionadas à sustentabilidade, segurança e
                    responsabilidade ambiental. Seu trabalho contribui para que organizações
                    desenvolvam práticas mais seguras, eficientes e alinhadas às normas do
                    setor.
                    </p>
                </article>

                <article className="p-7">
                    <p className="text-base leading-7">
                    Esta plataforma foi criada para organizar o processo seletivo da
                    consultoria, permitindo que candidatos enviem seus currículos, preencham
                    informações importantes, realizem avaliações técnicas e acompanhem as
                    etapas até a entrevista. A proposta é tornar a triagem mais clara,
                    padronizada e eficiente, facilitando também o acompanhamento pelo
                    recrutador.
                    </p>
                </article>
            </div>
        </div>
      </section>

      <section className="w-auto h-full px-6 pb-10! sm:px-10 lg:px-16">
        <div className="w-full h-full flex flex-col items-center justify-center gap-12 sm:flex-row">
          <Link href="/candidato/curriculo" className="py-2! bg-[#315D2C] lg:px-18! rounded-full flex flex-col items-center justify-center gap-2 transition hover:-translate-y-1 hover:bg-[#214A22] sm:h-28">
            <h2 className="text-2xl font-bold text-white! sm:text-3xl">Inscreva-se</h2>
            <p className="text-sm font-light text-white/85 sm:text-base">
              Área do Candidato
            </p>
          </Link>

          <Link href="/recrutador/login" className="py-2! bg-[#315D2C] lg:px-20! rounded-full flex flex-col items-center justify-center gap-2 transition hover:-translate-y-1 hover:bg-[#214A22] sm:h-28" >
            <h2 className="text-2xl text-white! font-bold sm:text-3xl">Acesse</h2>
            <p className="text-sm font-light text-white/85 sm:text-base">
              Área do Recrutador
            </p>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}