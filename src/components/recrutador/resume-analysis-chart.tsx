"use client"

import { Info } from "lucide-react"
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const data = [
  { name: "Novos", value: 72, color: "oklch(0.85 0.1 145)" },
  { name: "Em análise", value: 48, color: "oklch(0.75 0.15 70)" },
  { name: "Aprovados", value: 31, color: "oklch(0.55 0.15 145)" },
  { name: "Reprovados", value: 15, color: "oklch(0.4 0.02 140)" },
]

export function ResumeAnalysisChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2">
        <h3 className="font-semibold text-foreground">Análise de currículos</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="size-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Distribuição dos currículos por status</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "oklch(0.5 0.02 140)" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "oklch(0.5 0.02 140)" }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        Total de <span className="font-semibold text-foreground">166 currículos</span>
      </p>
    </div>
  )
}
