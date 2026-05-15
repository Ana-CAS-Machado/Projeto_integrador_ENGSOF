import CandidateAuthInfo from "@/components/candidato/CandidateAuthInfo";
import CandidateRegisterForm from "@/components/candidato/CandidateRegisterForm";
import Footer from "@/components/layout/footer";


export default function CandidateRegisterPage() {
  return (
    <>
      <main className="flex min-h-[calc(100vh-84px)] items-center px-6 py-12 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-44">
          <CandidateAuthInfo />

          <div className="flex justify-center lg:justify-end">
            <CandidateRegisterForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}