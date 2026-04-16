"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, RotateCcw } from "lucide-react"

const categories = [
  { id: "ai-llm", label: "AI & LLM Tools", count: 4207 },
  { id: "automation", label: "Automation Bots", count: 811 },
  { id: "media", label: "Media Processing", count: 1186 },
  { id: "business", label: "Business Tools", count: 109 },
  { id: "web-dev", label: "Web Development", count: 228 },
  { id: "data", label: "Data Analysis", count: 267 },
  { id: "seo", label: "Marketing & SEO", count: 32 },
  { id: "utilities", label: "Utility Scripts", count: 2976 },
]

const statuses = [
  { id: "ready", label: "Ready to Deploy", count: 8497 },
  { id: "beta", label: "Beta", count: 892 },
  { id: "experimental", label: "Experimental", count: 427 },
]

const tags = [
  "async", "api", "scraping", "llm", "gpt", "image", "video", "audio",
  "automation", "cli", "dashboard", "analytics", "batch", "streaming"
]

export function MarketplaceFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(["ready"])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 500])

  const toggleCategory = (id: string) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    )
  }

  const toggleStatus = (id: string) => {
    setSelectedStatuses(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  const resetFilters = () => {
    setSelectedCategories([])
    setSelectedStatuses(["ready"])
    setSelectedTags([])
    setPriceRange([0, 500])
  }

  return (
    <div className="sticky top-20 space-y-6">
      {/* Reset Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetFilters}
          className="h-8 text-xs text-muted-foreground"
        >
          <RotateCcw className="mr-1 h-3 w-3" />
          Reset
        </Button>
      </div>

      {/* Categories */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <span className="text-sm font-medium">Categories</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 pt-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => toggleCategory(category.id)}
                />
                <Label
                  htmlFor={category.id}
                  className="text-sm font-normal text-muted-foreground cursor-pointer"
                >
                  {category.label}
                </Label>
              </div>
              <span className="text-xs text-muted-foreground">{category.count.toLocaleString()}</span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Status */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <span className="text-sm font-medium">Status</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 pt-2">
          {statuses.map((status) => (
            <div key={status.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id={status.id}
                  checked={selectedStatuses.includes(status.id)}
                  onCheckedChange={() => toggleStatus(status.id)}
                />
                <Label
                  htmlFor={status.id}
                  className="text-sm font-normal text-muted-foreground cursor-pointer"
                >
                  {status.label}
                </Label>
              </div>
              <span className="text-xs text-muted-foreground">{status.count.toLocaleString()}</span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Price Range */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <span className="text-sm font-medium">Price Range</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={500}
            step={10}
            className="mb-2"
          />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}+</span>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Tags */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <span className="text-sm font-medium">Tags</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
