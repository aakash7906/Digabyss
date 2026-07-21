import { Link, Outlet } from "react-router-dom"
import { Compass, ArrowLeft } from "lucide-react"

export function AuthLayout() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-background text-foreground antialiased">
      {/* Left Form Column */}
      <div className="flex flex-col gap-4 p-6 md:p-10 justify-between">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs">
              <Compass className="h-4 w-4" />
            </div>
            <span className="font-bold text-base tracking-tight">DigAbyss</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to website
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center py-6">
          <div className="w-full max-w-sm">
            <Outlet />
          </div>
        </div>

        <footer className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} DigAbyss Inc. All rights reserved.
        </footer>
      </div>

      {/* Right Banner / Image Column */}
      <div className="relative hidden bg-muted lg:block overflow-hidden border-l border-border/40">
        <img
          src="/auth-bg.png"
          alt="DigAbyss Workspace"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent p-10 flex flex-col justify-end">
          <div className="space-y-2 max-w-md backdrop-blur-md p-6 rounded-2xl bg-background/50 border border-border/40 text-foreground shadow-xl">
            <h2 className="text-xl font-semibold tracking-tight">
              Deep-sea data analytics & operations
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Accelerate your team workflow with real-time telemetry, intuitive dashboards, and seamless workspace collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
