"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, EyeOff, ArrowRight, User, Monitor, FileText, BarChart3, Shield, Leaf, Loader2, AlertCircle } from "lucide-react"

// Credenciais de acesso
const VALID_CREDENTIALS = {
  email: "recrutador@preecologica.com.br",
  password: "123456"
}

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    // Validação de campos vazios
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.")
      return
    }

    setIsLoading(true)

    // Simula delay de autenticação
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Verifica credenciais
    if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
      // Login bem-sucedido - redireciona para dashboard
      router.push("/recrutador/dashboard")
    } else {
      setError("E-mail ou senha incorretos. Tente novamente.")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f3ef]">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Branding */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Pré ECOLógica Consultoria"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <span className="text-lg font-medium">pré </span>
                <span className="text-lg font-bold text-primary">ECO</span>
                <span className="text-lg font-medium text-blue-800">Lógica</span>
                <p className="text-xs text-muted-foreground">Consultoria</p>
              </div>
            </div>

            {/* Title */}
            <div>
              <p className="text-lg text-muted-foreground">Painel do</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">recrutador</h1>
            </div>

            {/* Description */}
            <p className="text-muted-foreground max-w-md">
              Gerencie vagas, acompanhe candidatos e tome decisões com mais agilidade e eficiência.
            </p>

            {/* Feature Cards */}
            <div className="space-y-3">
              <FeatureCard
                icon={<Monitor className="w-5 h-5" />}
                title="Monitore candidatos em tempo real"
                description="Acompanhe cada etapa do processo seletivo com atualizações instantâneas."
              />
              <FeatureCard
                icon={<FileText className="w-5 h-5" />}
                title="Analise currículos e testes"
                description="Avalie perfis, testes e competências para encontrar os melhores talentos."
              />
              <FeatureCard
                icon={<BarChart3 className="w-5 h-5" />}
                title="Acompanhe o andamento das vagas"
                description="Visualize o status das vagas e registre feedbacks de forma organizada."
              />
            </div>

            {/* LGPD Notice */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-green-50 border border-green-100 rounded-lg px-4 py-3">
              <Shield className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Seus acessos e dados da sua empresa estão protegidos de acordo com a LGPD.</span>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-foreground">Entrar como recrutador</h2>
                <p className="text-muted-foreground">Acesse o painel para gerenciar vagas e candidatos.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                {/* Mensagem de erro */}
                {error && (
                  <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Dica de credenciais */}
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg text-sm">
                  <p className="font-medium text-primary">Credenciais de demonstração:</p>
                  <p className="text-muted-foreground">E-mail: recrutador@preecologica.com.br</p>
                  <p className="text-muted-foreground">Senha: 123456</p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail corporativo
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu.nome@empresa.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-foreground">
                    Senha
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    />
                    <label htmlFor="remember" className="text-sm text-foreground cursor-pointer">
                      Lembrar de mim
                    </label>
                  </div>
                  <a href="#" className="text-sm text-primary hover:underline font-medium">
                    Esqueci minha senha
                  </a>
                </div>

                <Button type="submit" className="w-full h-12 text-base gap-2" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Entrando...
                    </>
                  ) : (
                    <>
                      Entrar no painel
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <Link href="/candidato/login">
                  <Button type="button" variant="outline" className="w-full h-12 text-base gap-2">
                    <User className="w-4 h-4" />
                    Acessar área do candidato
                  </Button>
                </Link>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">ou</span>
                </div>
              </div>

              {/* Credential Request */}
              <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Precisa de acesso?</p>
                    <p className="text-xs text-muted-foreground">
                      Solicite o credenciamento da sua empresa para um de nossos consultores.
                    </p>
                  </div>
                </div>
                <a href="#" className="text-sm text-primary hover:underline font-medium whitespace-nowrap">
                  Solicitar credenciamento &gt;
                </a>
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p>
                  Seus dados estão protegidos. As informações fornecidas serão utilizadas apenas para fins de acesso ao painel e estão em conformidade com a LGPD.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Leaf className="w-4 h-4 text-primary" />
            <span>Cuidando do hoje, construindo o amanhã.</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">pré </span>
            <span className="font-bold text-primary">ECO</span>
            <span className="font-medium">Lógica</span>
            <span> Consultoria © 2024</span>
          </div>
        </div>
      </footer>

      {/* Decorative Leaves */}
      <div className="fixed bottom-0 left-0 w-48 h-48 pointer-events-none opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path
            fill="currentColor"
            d="M20,180 Q60,140 40,100 Q20,60 60,40 Q100,20 120,60 Q140,100 100,140 Q60,180 20,180"
          />
        </svg>
      </div>
      <div className="fixed bottom-0 right-0 w-48 h-48 pointer-events-none opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary">
          <path
            fill="currentColor"
            d="M180,180 Q140,140 160,100 Q180,60 140,40 Q100,20 80,60 Q60,100 100,140 Q140,180 180,180"
          />
        </svg>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-green-100 shadow-sm">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
