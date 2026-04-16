"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Search, 
  BookOpen, 
  Rocket, 
  Terminal, 
  Cpu, 
  Workflow, 
  Settings, 
  FileCode,
  ChevronRight
} from "lucide-react"

const docsNavigation = [
  {
    title: "Getting Started",
    icon: Rocket,
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Configuration", href: "/docs/configuration" },
    ],
  },
  {
    title: "Core Concepts",
    icon: BookOpen,
    items: [
      { title: "Pipelines", href: "/docs/concepts/pipelines" },
      { title: "Tasks & Jobs", href: "/docs/concepts/tasks" },
      { title: "Processors", href: "/docs/concepts/processors" },
      { title: "State Management", href: "/docs/concepts/state" },
    ],
  },
  {
    title: "SerpentFlow CLI",
    icon: Terminal,
    items: [
      { title: "Overview", href: "/docs/cli/overview" },
      { title: "Commands", href: "/docs/cli/commands" },
      { title: "Pipeline Config", href: "/docs/cli/config" },
      { title: "Plugins", href: "/docs/cli/plugins" },
    ],
  },
  {
    title: "AI & LLM Tools",
    icon: Cpu,
    items: [
      { title: "Batch Processing", href: "/docs/llm/batch" },
      { title: "Prompt Templates", href: "/docs/llm/prompts" },
      { title: "Cost Tracking", href: "/docs/llm/costs" },
      { title: "Multi-Provider", href: "/docs/llm/providers" },
    ],
  },
  {
    title: "Automation",
    icon: Workflow,
    items: [
      { title: "Web Scraping", href: "/docs/automation/scraping" },
      { title: "Data Extraction", href: "/docs/automation/extraction" },
      { title: "File Processing", href: "/docs/automation/files" },
      { title: "Scheduling", href: "/docs/automation/scheduling" },
    ],
  },
  {
    title: "API Reference",
    icon: FileCode,
    items: [
      { title: "Pipeline API", href: "/docs/api/pipeline" },
      { title: "Processor API", href: "/docs/api/processor" },
      { title: "Utils API", href: "/docs/api/utils" },
      { title: "Types", href: "/docs/api/types" },
    ],
  },
  {
    title: "Configuration",
    icon: Settings,
    items: [
      { title: "Environment Variables", href: "/docs/config/env" },
      { title: "Project Structure", href: "/docs/config/structure" },
      { title: "Best Practices", href: "/docs/config/best-practices" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedSections, setExpandedSections] = useState<string[]>(["Getting Started"])

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title) ? prev.filter(s => s !== title) : [...prev, title]
    )
  }

  const filteredNav = docsNavigation.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0)

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-border lg:block">
      <div className="flex h-full flex-col">
        {/* Search */}
        <div className="border-b border-border p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 p-4">
          <nav className="space-y-4">
            {filteredNav.map((section) => (
              <div key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-semibold text-foreground hover:bg-secondary"
                >
                  <section.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="flex-1 text-left">{section.title}</span>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 text-muted-foreground transition-transform",
                      expandedSections.includes(section.title) && "rotate-90"
                    )}
                  />
                </button>
                
                {expandedSections.includes(section.title) && (
                  <ul className="mt-1 space-y-1 pl-6">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block rounded-lg px-2 py-1.5 text-sm transition-colors",
                            pathname === item.href
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                          )}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  )
}
