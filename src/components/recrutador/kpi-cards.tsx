import { FileText, CheckCircle, XCircle, Briefcase, ClipboardCheck } from "lucide-react"

const kpis = [
  {
    title: "Currículos novos",
    value: "24",
    change: "+12% em relação à semana anterior",
    positive: true,
    icon: FileText,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Taxa média de acerto",
    value: "78%",
    change: "+5 p.p. em relação à semana anterior",
    positive: true,
    icon: CheckCircle,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Taxa média de erro",
    value: "22%",
    change: "-5 p.p. em relação à semana anterior",
    positive: false,
    icon: XCircle,
    iconBg: "bg-destructive/10",
    iconColor: "text-destructive",
  },
  {
    title: "Vagas em andamento",
    value: "6",
    change: "2 novas nesta semana",
    positive: true,
    icon: Briefcase,
    iconBg: "bg-muted",
    iconColor: "text-foreground",
  },
  {
    title: "Testes concluídos",
    value: "31",
    change: "+9 em relação à semana anterior",
    positive: true,
    icon: ClipboardCheck,
    iconBg: "bg-muted",
    iconColor: "text-foreground",
  },
]

export function KpiCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {kpis.map((kpi) => (
        <div
          key={kpi.title}
          className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
        >
          <div className={`flex size-10 shrink-0 items-center justify-center rounded-full ${kpi.iconBg}`}>
            <kpi.icon className={`size-5 ${kpi.iconColor}`} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground">{kpi.title}</p>
            <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
            <p className={`text-xs ${kpi.positive ? "text-primary" : "text-destructive"}`}>
              {kpi.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
