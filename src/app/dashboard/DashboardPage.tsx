import { SectionCards } from "@/components/section-cards"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import tableData from "./data.json"

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-sm text-muted-foreground">
          Welcome back! Here is a summary of your workspace activities and metrics.
        </p>
      </div>

      <SectionCards />
      
      <div className="grid grid-cols-1 gap-6">
        <ChartAreaInteractive />
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">Recent Activity Log</h2>
        <DataTable data={tableData} />
      </div>
    </div>
  )
}
