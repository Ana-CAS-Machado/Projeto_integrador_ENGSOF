"use client"

import { Info, CheckCircle } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const data = [
  { name: "Acertos", value: 78, color: "oklch(0.55 0.15 145)" },
  { name: "Erros", value: 22, color: "oklch(0.55 0.2 25)" },
]

export function TestPerformanceChart() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex items-center gap-2">
        <h3 className="font-semibold text-foreground">Desempenho nos testes</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="size-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Taxa de acertos e erros nos testes</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative h-[160px] w-[160px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-muted-foreground">Total</span>
            <span className="text-2xl font-bold text-foreground">210</span>
            <span className="text-xs text-muted-foreground">testes</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-primary" />
            <span className="text-sm text-foreground">Acertos</span>
            <span className="font-semibold text-primary">78%</span>
            <span className="text-sm text-muted-foreground">(164)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-destructive" />
            <span className="text-sm text-foreground">Erros</span>
            <span className="font-semibold text-destructive">22%</span>
            <span className="text-sm text-muted-foreground">(46)</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary/10 p-3">
        <CheckCircle className="size-4 text-primary" />
        <p className="text-sm text-primary">
          Desempenho médio de acertos acima da meta (70%).
        </p>
      </div>
    </div>
  )
}
