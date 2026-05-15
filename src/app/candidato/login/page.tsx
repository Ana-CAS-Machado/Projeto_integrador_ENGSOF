import CandidateLoginInfo from "@/components/candidato/CandidateLoginInfo";
import CandidateLoginForm from "@/components/candidato/CandidateLoginForm";
import Footer from "@/components/layout/footer";


export default function CandidateLoginPage() {
  return (
    <>
      <main className="flex min-h-[calc(100vh-84px)] items-center px-6 py-12 sm:px-10 lg:px-16">
        <div className="flex flex-row items-center justify-center gap-16 lg:gap-44 w-full">
          <CandidateLoginInfo />

          <div className="flex justify-center lg:justify-end">
            <CandidateLoginForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}