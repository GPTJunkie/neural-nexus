"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Copy, Check, Terminal, Sparkles } from "lucide-react"

const typewriterTexts = [
  "AI Automation Workflows",
  "Prompt Engineering",
  "Python Scripting",
  "Creative Automation",
  "LLM Orchestration",
]

export function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % typewriterTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText("pip install serpentflow")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>9,800+ Production-Ready Scripts</span>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-foreground">The Neural Nexus for</span>
            <span className="mt-2 block text-gradient">{typewriterTexts[currentText]}</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Transform chaos into creative empire. Master AI workflows, prompt engineering, 
            and Python automation with tools built for the modern creative professional.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 min-w-[180px] bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/marketplace">
                Browse Scripts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 min-w-[180px]" asChild>
              <Link href="/docs">
                <Terminal className="mr-2 h-4 w-4" />
                Read the Docs
              </Link>
            </Button>
          </div>

          {/* Install Command */}
          <div className="mt-12">
            <button
              onClick={handleCopy}
              className="group inline-flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 font-mono text-sm transition-colors hover:border-primary/50 hover:bg-card/80"
            >
              <span className="text-muted-foreground">$</span>
              <span className="text-foreground">pip install serpentflow</span>
              {copied ? (
                <Check className="h-4 w-4 text-primary" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              )}
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16">
            <p className="mb-6 text-sm font-medium text-muted-foreground">Trusted by automation enthusiasts at</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
              {["Upwork", "Fiverr", "Gumroad", "Codester", "GitHub"].map((brand) => (
                <span key={brand} className="text-lg font-semibold tracking-tight text-foreground/80">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
