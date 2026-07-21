import { Outlet } from "react-router-dom"
import Navbar from "@/Pages/Website/WebsiteComponent/Navbar"
import Footer from "@/Pages/Website/WebsiteComponent/Footer"

export function WebsiteLayout() {
  return (
    <div className="min-h-screen bg-[#121212] text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
