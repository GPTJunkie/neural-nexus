import { Header } from "@/components/header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"

export const metadata = {
  title: "Dashboard | GPTJunkie",
  description: "Track your automation workflows, script usage, and AI processing costs.",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <DashboardOverview />
        </main>
      </div>
    </div>
  )
}
