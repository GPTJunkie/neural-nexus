"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, Image, BarChart3, Code, Database, Search, FolderOpen, Sparkles } from "lucide-react"

const categories = [
  {
    id: "ai-llm",
    name: "AI & LLM Tools",
    icon: Sparkles,
    scripts: 4207,
    ready: 3609,
    valueRange: "$1.3M - $6.4M",
    subcategories: ["AI Agents", "Content Generation", "Fine-Tuning", "LLM Orchestration", "Multi-LLM Systems"],
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    featured: true,
  },
  {
    id: "automation",
    name: "Automation Bots",
    icon: Bot,
    scripts: 811,
    ready: 663,
    valueRange: "$252K - $1.2M",
    subcategories: ["Data Extractors", "Instagram", "TikTok", "Twitter", "Web Scrapers"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    id: "media",
    name: "Media Processing",
    icon: Image,
    scripts: 1186,
    ready: 1028,
    valueRange: "$589K - $2.6M",
    subcategories: ["Audio Transcription", "Gallery Systems", "Image Processing", "Upscaling", "Video Editing"],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
  },
  {
    id: "business",
    name: "Business Tools",
    icon: BarChart3,
    scripts: 109,
    ready: 97,
    valueRange: "$32K - $160K",
    subcategories: ["Analytics Dashboards", "CRM Systems", "Lead Generation", "Revenue Tracking"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
  },
  {
    id: "web-dev",
    name: "Web Development",
    icon: Code,
    scripts: 228,
    ready: 211,
    valueRange: "$68K - $340K",
    subcategories: ["API Services", "Web Apps", "Website Generators"],
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    id: "data",
    name: "Data Analysis",
    icon: Database,
    scripts: 267,
    ready: 242,
    valueRange: "$121K - $607K",
    subcategories: ["CSV Tools", "Data Cleaners"],
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
  },
  {
    id: "seo",
    name: "Marketing & SEO",
    icon: Search,
    scripts: 32,
    ready: 32,
    valueRange: "$9.6K - $48K",
    subcategories: ["SEO Tools"],
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
  },
  {
    id: "utilities",
    name: "Utility Scripts",
    icon: FolderOpen,
    scripts: 2976,
    ready: 2615,
    valueRange: "$876K - $4.3M",
    subcategories: ["File Utilities"],
    color: "from-slate-500/20 to-gray-500/20",
    borderColor: "border-slate-500/30",
  },
]

export function ScriptCategories() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="relative border-y border-border bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Script <span className="text-gradient">Marketplace</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Browse by category or search our inventory of 9,800+ scripts
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/marketplace">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/marketplace/${category.id}`}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative overflow-hidden rounded-xl border bg-card p-5 transition-all hover:scale-[1.02] ${category.borderColor} ${
                hoveredId === category.id ? "border-opacity-100" : "border-opacity-50"
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-100`} />

              {/* Featured Badge */}
              {category.featured && (
                <Badge className="absolute right-3 top-3 bg-primary/20 text-primary border-primary/30">
                  Popular
                </Badge>
              )}

              {/* Content */}
              <div className="relative">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <category.icon className="h-5 w-5 text-foreground" />
                </div>

                <h3 className="mb-1 font-semibold text-foreground">{category.name}</h3>
                
                <div className="mb-3 flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">{category.scripts.toLocaleString()} scripts</span>
                  <span className="text-muted-foreground/50">|</span>
                  <span className="text-primary">{category.ready.toLocaleString()} ready</span>
                </div>

                {/* Subcategories Preview */}
                <div className="flex flex-wrap gap-1">
                  {category.subcategories.slice(0, 3).map((sub) => (
                    <span
                      key={sub}
                      className="rounded bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {sub}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <span className="px-2 py-0.5 text-xs text-muted-foreground">
                      +{category.subcategories.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
