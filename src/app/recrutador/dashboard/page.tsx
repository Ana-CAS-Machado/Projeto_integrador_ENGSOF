import { SidebarNav } from "@/components/recrutador/sidebar-nav"
import { Header } from "@/components/recrutador/header"
import { KpiCards } from "@/components/recrutador/kpi-cards"
import { ResumeAnalysisChart } from "@/components/recrutador/resume-analysis-chart"
import { TestPerformanceChart } from "@/components/recrutador/test-performance-chart"
import { JobPipeline } from "@/components/recrutador/job-pipeline"
import { RecentCandidates } from "@/components/recrutador/recent-candidates"
import { NextActions } from "@/components/recrutador/next-actions"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <SidebarNav />
      
      <div className="ml-64 flex-1">
        <Header />
        
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Dashboard do recrutador</h1>
            <p className="text-muted-foreground">
              Acompanhe os indicadores e o andamento dos seus processos seletivos.
            </p>
          </div>

          <div className="space-y-6">
            <KpiCards />

            <div className="grid gap-6 lg:grid-cols-3">
              <ResumeAnalysisChart />
              <TestPerformanceChart />
              <JobPipeline />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RecentCandidates />
              </div>
              <NextActions />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
