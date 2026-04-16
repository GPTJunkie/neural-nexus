"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Star, Eye, Code, ArrowRight, Grid3X3, List } from "lucide-react"

const scripts = [
  {
    id: "serpentflow-cli",
    name: "SerpentFlow CLI",
    description: "Complete automation pipeline framework for audio processing, transcription, and content workflows.",
    category: "AI & LLM Tools",
    price: 99,
    rating: 4.9,
    downloads: 2847,
    views: 12453,
    tags: ["cli", "async", "pipeline", "audio"],
    status: "ready",
    featured: true,
  },
  {
    id: "llm-batch-runner",
    name: "LLM Batch Runner",
    description: "High-throughput batch processing for multiple LLM providers with built-in cost tracking.",
    category: "AI & LLM Tools",
    price: 79,
    rating: 4.8,
    downloads: 1923,
    views: 8721,
    tags: ["llm", "batch", "gpt", "async"],
    status: "ready",
    featured: true,
  },
  {
    id: "bulk-image-processor",
    name: "Bulk Image Processor",
    description: "Async image processing with AI upscaling, background removal, and format conversion.",
    category: "Media Processing",
    price: 49,
    rating: 4.7,
    downloads: 3421,
    views: 15234,
    tags: ["image", "async", "batch"],
    status: "ready",
  },
  {
    id: "social-scraper-pro",
    name: "Social Scraper Pro",
    description: "Multi-platform social media data extractor with rate limiting and proxy support.",
    category: "Automation Bots",
    price: 129,
    rating: 4.6,
    downloads: 987,
    views: 5432,
    tags: ["scraping", "api", "automation"],
    status: "ready",
  },
  {
    id: "video-transcriber",
    name: "Video Transcriber",
    description: "Whisper-based video transcription with timestamp extraction and SRT generation.",
    category: "Media Processing",
    price: 59,
    rating: 4.8,
    downloads: 2156,
    views: 9876,
    tags: ["video", "audio", "llm"],
    status: "ready",
  },
  {
    id: "csv-merge-wizard",
    name: "CSV Merge Wizard",
    description: "Intelligent CSV merging with schema detection, deduplication, and validation.",
    category: "Data Analysis",
    price: 29,
    rating: 4.5,
    downloads: 4532,
    views: 18765,
    tags: ["csv", "data", "batch"],
    status: "ready",
  },
  {
    id: "api-gateway-builder",
    name: "API Gateway Builder",
    description: "FastAPI-based API gateway generator with authentication, rate limiting, and documentation.",
    category: "Web Development",
    price: 89,
    rating: 4.7,
    downloads: 1234,
    views: 6543,
    tags: ["api", "async", "dashboard"],
    status: "ready",
  },
  {
    id: "seo-audit-toolkit",
    name: "SEO Audit Toolkit",
    description: "Comprehensive SEO analysis with performance metrics, broken link detection, and recommendations.",
    category: "Marketing & SEO",
    price: 69,
    rating: 4.4,
    downloads: 876,
    views: 4321,
    tags: ["scraping", "analytics", "automation"],
    status: "ready",
  },
  {
    id: "prompt-optimizer",
    name: "Prompt Optimizer",
    description: "AI-powered prompt engineering toolkit with A/B testing and performance tracking.",
    category: "AI & LLM Tools",
    price: 59,
    rating: 4.9,
    downloads: 3245,
    views: 14532,
    tags: ["llm", "gpt", "automation"],
    status: "ready",
    featured: true,
  },
]

export function MarketplaceGrid() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("popular")

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{scripts.length}</span> scripts
        </p>
        <div className="flex items-center gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="h-9 w-[160px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
          <div className="hidden items-center rounded-lg border border-border sm:flex">
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 rounded-r-none ${view === "grid" ? "bg-secondary" : ""}`}
              onClick={() => setView("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`h-9 w-9 rounded-l-none ${view === "list" ? "bg-secondary" : ""}`}
              onClick={() => setView("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className={view === "grid" 
        ? "grid gap-4 sm:grid-cols-2 xl:grid-cols-3" 
        : "space-y-4"
      }>
        {scripts.map((script) => (
          <Link
            key={script.id}
            href={`/marketplace/${script.id}`}
            className={`group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:bg-card/80 ${
              view === "list" ? "flex items-center gap-6 p-4" : "p-5"
            }`}
          >
            {/* Featured Badge */}
            {script.featured && (
              <Badge className="absolute right-3 top-3 bg-primary/20 text-primary border-primary/30 z-10">
                Featured
              </Badge>
            )}

            {view === "grid" ? (
              <>
                {/* Grid View Content */}
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground line-clamp-1">{script.name}</h3>
                    <p className="text-xs text-muted-foreground">{script.category}</p>
                  </div>
                </div>

                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {script.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-1">
                  {script.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-secondary/50 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      {script.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {script.downloads.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {script.views.toLocaleString()}
                    </span>
                  </div>
                  <span className="font-semibold text-foreground">${script.price}</span>
                </div>
              </>
            ) : (
              <>
                {/* List View Content */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground">{script.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{script.description}</p>
                    </div>
                    <span className="shrink-0 font-semibold text-foreground">${script.price}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{script.category}</span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      {script.rating}
                    </span>
                    <span>{script.downloads.toLocaleString()} downloads</span>
                  </div>
                </div>

                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Link>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <Button variant="outline" size="lg">
          Load More Scripts
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
