import { Link } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-14 shrink-0 items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 h-4 data-vertical:self-auto"
        />
        <h1 className="text-sm font-semibold">DigAbyss Workspace</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" render={<Link to="/" />} className="text-xs text-muted-foreground gap-1 hidden sm:inline-flex">
          <Home className="h-3.5 w-3.5" />
          Website
        </Button>
      </div>
    </header>
  )
}
