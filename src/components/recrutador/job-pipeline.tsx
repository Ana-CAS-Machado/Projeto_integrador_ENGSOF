import { Info, Filter, UserCheck, Award, MessageSquare } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const stages = [
  { name: "Triagem inicial", candidates: 48, icon: Filter, color: "bg-primary" },
  { name: "Perfil cadastral", candidates: 32, icon: UserCheck, color: "bg-primary/80" },
  { name: "Qualificação técnica", candidates: 18, icon: Award, color: "bg-primary/60" },
  { name: "Feedback final", candidates: 9, icon: MessageSquare, color: "bg-primary/40" },
]

export function JobPipeline() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2">
        <h3 className="font-semibold text-foreground">Andamento das vagas</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="size-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Candidatos por etapa do processo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="space-y-3">
        {stages.map((stage) => (
          <div key={stage.name} className="flex items-center gap-3">
            <div className={`flex size-8 items-center justify-center rounded-full ${stage.color}`}>
              <stage.icon className="size-4 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">{stage.name}</span>
                <span className="text-sm font-semibold text-foreground">
                  {stage.candidates}
                  <span className="ml-1 font-normal text-muted-foreground">candidatos</span>
                </span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full ${stage.color}`}
                  style={{ width: `${(stage.candidates / 48) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">6 vagas ativas</span> no total
      </p>
    </div>
  )
}
