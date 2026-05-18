import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const candidates = [
  {
    id: "1",
    initials: "JM",
    name: "Juliana Martins",
    job: "Analista de Sustentabilidade",
    stage: "Qualificação técnica",
    score: 87,
    status: "Em análise",
    statusColor: "bg-amber-100 text-amber-800",
    date: "18/05/2024 10:45",
  },
  {
    id: "2",
    initials: "RO",
    name: "Rafael Oliveira",
    job: "Consultor Ambiental",
    stage: "Perfil cadastral",
    score: 76,
    status: "Aprovado para entrevista",
    statusColor: "bg-emerald-100 text-emerald-800",
    date: "18/05/2024 09:30",
  },
  {
    id: "3",
    initials: "CF",
    name: "Camila Ferreira",
    job: "Assistente Administrativo",
    stage: "Triagem inicial",
    score: null,
    status: "Aguardando feedback",
    statusColor: "bg-slate-100 text-slate-800",
    date: "17/05/2024 16:20",
  },
  {
    id: "4",
    initials: "BA",
    name: "Bruno Alencar",
    job: "Analista de ESG",
    stage: "Qualificação técnica",
    score: 58,
    status: "Reprovado",
    statusColor: "bg-red-100 text-red-800",
    date: "17/05/2024 14:15",
  },
  {
    id: "5",
    initials: "LS",
    name: "Letícia Souza",
    job: "Consultor Ambiental",
    stage: "Feedback final",
    score: 91,
    status: "Aprovado para entrevista",
    statusColor: "bg-emerald-100 text-emerald-800",
    date: "17/05/2024 11:05",
  },
]

export function RecentCandidates() {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="border-b border-border p-6">
        <h3 className="font-semibold text-foreground">Candidatos recentes</h3>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Vaga</TableHead>
            <TableHead>Etapa</TableHead>
            <TableHead>Nota do teste</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Última atualização</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {candidates.map((candidate) => (
            <TableRow key={candidate.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="size-8">
                    <AvatarFallback className="bg-primary/10 text-xs font-medium text-primary">
                      {candidate.initials}
                    </AvatarFallback>
                  </Avatar>
                  <Link href={`/recrutador/candidatos/${candidate.id}`} className="font-medium text-primary hover:underline">
                    {candidate.name}
                  </Link>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">{candidate.job}</TableCell>
              <TableCell className="text-muted-foreground">{candidate.stage}</TableCell>
              <TableCell>
                {candidate.score !== null ? (
                  <span className="font-medium">{candidate.score}%</span>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className={candidate.statusColor}>
                  {candidate.status}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{candidate.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="border-t border-border p-4">
        <Link
          href="/recrutador/candidatos"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Ver todos os candidatos
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  )
}
