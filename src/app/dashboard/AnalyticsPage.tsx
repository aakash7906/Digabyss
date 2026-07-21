import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Eye, ArrowUpRight } from "lucide-react"

export function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytics & Telemetry</h1>
        <p className="text-sm text-muted-foreground">
          Deep dive into user interaction patterns, system usage, and traffic spikes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border border-border/60">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128,430</div>
            <p className="text-xs text-emerald-500 font-medium flex items-center mt-1">
              +14.2% <ArrowUpRight className="h-3 w-3 ml-0.5" />
            </p>
          </CardContent>
        </Card>

        <Card className="border border-border/60">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,892</div>
            <p className="text-xs text-emerald-500 font-medium flex items-center mt-1">
              +8.7% <ArrowUpRight className="h-3 w-3 ml-0.5" />
            </p>
          </CardContent>
        </Card>

        <Card className="border border-border/60">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.25%</div>
            <p className="text-xs text-emerald-500 font-medium flex items-center mt-1">
              +1.1% <ArrowUpRight className="h-3 w-3 ml-0.5" />
            </p>
          </CardContent>
        </Card>
      </div>

      <ChartAreaInteractive />
    </div>
  )
}
