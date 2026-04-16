"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal } from "lucide-react"

export function MarketplaceHero() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative border-b border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Script <span className="text-gradient">Marketplace</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Browse 9,800+ production-ready Python scripts. Search, filter, and find the perfect automation tool.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search scripts, tools, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 pl-10 text-base"
              />
            </div>
            <Button size="lg" className="h-12 lg:hidden" variant="outline">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <span className="text-muted-foreground">
              <span className="font-semibold text-foreground">9,816</span> Total Scripts
            </span>
            <span className="text-muted-foreground">
              <span className="font-semibold text-foreground">8,497</span> Ready to Deploy
            </span>
            <span className="text-muted-foreground">
              <span className="font-semibold text-foreground">8</span> Categories
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
