"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Workflow, 
  FileCode, 
  DollarSign, 
  Settings, 
  History,
  Key,
  Bell
} from "lucide-react"

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Pipelines", href: "/dashboard/pipelines", icon: Workflow },
  { name: "My Scripts", href: "/dashboard/scripts", icon: FileCode },
  { name: "Usage & Costs", href: "/dashboard/usage", icon: DollarSign },
  { name: "Activity", href: "/dashboard/activity", icon: History },
  { name: "API Keys", href: "/dashboard/api-keys", icon: Key },
  { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-56 shrink-0 border-r border-border bg-card/30 lg:block">
      <nav className="flex h-full flex-col p-4">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Upgrade Card */}
        <div className="mt-auto rounded-xl border border-primary/30 bg-primary/5 p-4">
          <h3 className="text-sm font-semibold text-foreground">Upgrade to Pro</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Unlock unlimited pipelines and advanced analytics.
          </p>
          <Link
            href="/pricing"
            className="mt-3 inline-block text-xs font-medium text-primary hover:underline"
          >
            View Plans
          </Link>
        </div>
      </nav>
    </aside>
  )
}
