import Link from "next/link"
import { ArrowRight, FileText, MessageSquare, Calendar, XCircle, ChevronRight } from "lucide-react"

const actions = [
  {
    title: "Revisar 24 novos currículos",
    description: "Recebidos nos últimos 7 dias",
    count: 24,
    icon: FileText,
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Liberar feedback pendente",
    description: "Aguardando sua avaliação",
    count: 8,
    icon: MessageSquare,
    color: "bg-amber-100",
    iconColor: "text-amber-700",
  },
  {
    title: "Agendar entrevistas",
    description: "5 candidatos aprovados",
    count: 5,
    icon: Calendar,
    color: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  {
    title: "Encerrar vaga",
    description: "Consultor Ambiental",
    count: 1,
    icon: XCircle,
    color: "bg-slate-100",
    iconColor: "text-slate-700",
  },
]

export function NextActions() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 font-semibold text-foreground">Próximas ações</h3>

      <div className="space-y-3">
        {actions.map((action) => (
          <Link
            key={action.title}
            href="#"
            className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
          >
            <div className={`flex size-10 items-center justify-center rounded-full ${action.color}`}>
              <action.icon className={`size-5 ${action.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{action.title}</p>
              <p className="text-xs text-muted-foreground truncate">{action.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-full bg-muted text-xs font-medium">
                {action.count}
              </span>
              <ChevronRight className="size-4 text-muted-foreground" />
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/recrutador/acoes"
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        Ver todas as ações
        <ArrowRight className="size-4" />
      </Link>
    </div>
  )
}
