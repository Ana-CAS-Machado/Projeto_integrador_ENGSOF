"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Briefcase,
  Users,
  FileText,
  BarChart3,
  Settings,
  MessageCircle,
  Leaf,
} from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/recrutador/dashboard", icon: LayoutDashboard },
  { name: "Vagas", href: "/recrutador/vagas", icon: Briefcase },
  { name: "Candidatos", href: "/recrutador/candidatos", icon: Users },
  { name: "Testes", href: "/recrutador/testes", icon: FileText },
  { name: "Relatórios", href: "/recrutador/relatorios", icon: BarChart3 },
  { name: "Configurações", href: "/recrutador/configuracoes", icon: Settings },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex items-center gap-3 p-6">
        <Image
          src="/images/logo.png"
          alt="Pré ECOLógica Consultoria"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">pré</span>
          <div>
            <span className="text-lg font-bold text-primary">ECO</span>
            <span className="text-lg font-bold text-blue-800">Lógica</span>
          </div>
          <span className="text-xs text-muted-foreground">Consultoria</span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )}
            >
              <item.icon className="size-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <Link
          href="/recrutador/suporte"
          className="flex items-center gap-3 rounded-lg bg-muted p-3 text-sm hover:bg-accent"
        >
          <MessageCircle className="size-5 text-primary" />
          <div>
            <p className="font-medium">Dúvidas ou sugestões?</p>
            <p className="text-xs text-muted-foreground">Fale com nosso suporte</p>
          </div>
        </Link>
      </div>

      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Leaf className="size-4 text-primary" />
          <span>Cuidando do hoje, construindo o amanhã.</span>
        </div>
      </div>
    </aside>
  )
}
