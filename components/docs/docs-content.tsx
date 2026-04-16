"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, ArrowRight, ExternalLink, Terminal, FileCode, Zap } from "lucide-react"

export function DocsContent() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <article className="prose prose-invert max-w-3xl">
      {/* Breadcrumb */}
      <div className="not-prose mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs" className="hover:text-foreground">Docs</Link>
        <span>/</span>
        <span className="text-foreground">Introduction</span>
      </div>

      {/* Title */}
      <h1 className="not-prose mb-4 text-4xl font-bold tracking-tight text-foreground">
        Introduction to <span className="text-gradient">GPTJunkie</span>
      </h1>
      
      <p className="not-prose mb-8 text-lg text-muted-foreground">
        GPTJunkie is your neural nexus for AI automation, prompt engineering, and Python scripting mastery. 
        This documentation will guide you through setting up and using our comprehensive toolkit.
      </p>

      {/* Quick Start Cards */}
      <div className="not-prose mb-12 grid gap-4 sm:grid-cols-2">
        <Link
          href="/docs/quick-start"
          className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <h3 className="mb-1 font-semibold text-foreground">Quick Start</h3>
          <p className="mb-3 text-sm text-muted-foreground">
            Get up and running in 5 minutes with our quick start guide.
          </p>
          <span className="flex items-center text-sm font-medium text-primary">
            Start Building
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>

        <Link
          href="/docs/cli/overview"
          className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
          <h3 className="mb-1 font-semibold text-foreground">SerpentFlow CLI</h3>
          <p className="mb-3 text-sm text-muted-foreground">
            Learn the powerful CLI for automation pipelines.
          </p>
          <span className="flex items-center text-sm font-medium text-primary">
            Explore CLI
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>

      {/* What is GPTJunkie */}
      <h2 className="not-prose mb-4 mt-12 text-2xl font-bold text-foreground">
        What is GPTJunkie?
      </h2>
      <p className="not-prose mb-4 text-muted-foreground leading-relaxed">
        GPTJunkie is a comprehensive Python automation framework designed for creative professionals, 
        developers, and anyone looking to harness the power of AI in their workflows. Our toolkit includes:
      </p>
      <ul className="not-prose mb-8 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
          <span><strong className="text-foreground">9,800+ Production-Ready Scripts</strong> across 8 categories</span>
        </li>
        <li className="flex items-start gap-2">
          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
          <span><strong className="text-foreground">SerpentFlow CLI</strong> for building automation pipelines</span>
        </li>
        <li className="flex items-start gap-2">
          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
          <span><strong className="text-foreground">LLM Batch Processing</strong> with cost tracking and rate limiting</span>
        </li>
        <li className="flex items-start gap-2">
          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
          <span><strong className="text-foreground">Media Processing Tools</strong> for audio, video, and images</span>
        </li>
      </ul>

      {/* Installation */}
      <h2 className="not-prose mb-4 mt-12 text-2xl font-bold text-foreground">
        Installation
      </h2>
      <p className="not-prose mb-4 text-muted-foreground">
        Install GPTJunkie using pip or your preferred package manager:
      </p>

      <Tabs defaultValue="pip" className="not-prose mb-8">
        <TabsList className="h-auto p-1">
          <TabsTrigger value="pip" className="text-xs sm:text-sm">pip</TabsTrigger>
          <TabsTrigger value="pipx" className="text-xs sm:text-sm">pipx</TabsTrigger>
          <TabsTrigger value="poetry" className="text-xs sm:text-sm">poetry</TabsTrigger>
        </TabsList>
        
        {[
          { id: "pip", command: "pip install serpentflow" },
          { id: "pipx", command: "pipx install serpentflow" },
          { id: "poetry", command: "poetry add serpentflow" },
        ].map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="mt-2">
            <div className="relative rounded-lg border border-border bg-[#0d1117] p-4">
              <button
                onClick={() => handleCopy(tab.id, tab.command)}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md bg-secondary/80 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {copied === tab.id ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
              <code className="font-mono text-sm text-slate-300">
                <span className="text-slate-500">$</span> {tab.command}
              </code>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* First Pipeline */}
      <h2 className="not-prose mb-4 mt-12 text-2xl font-bold text-foreground">
        Your First Pipeline
      </h2>
      <p className="not-prose mb-4 text-muted-foreground">
        Create a simple automation pipeline to process files:
      </p>

      <div className="not-prose relative mb-8 overflow-hidden rounded-lg border border-border bg-[#0d1117]">
        <div className="flex items-center justify-between border-b border-border px-4 py-2">
          <div className="flex items-center gap-2">
            <FileCode className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">pipeline.py</span>
          </div>
          <button
            onClick={() => handleCopy("pipeline", pipelineCode)}
            className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {copied === "pipeline" ? (
              <Check className="h-4 w-4 text-primary" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </div>
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code className="text-slate-300">{pipelineCode}</code>
        </pre>
      </div>

      {/* Next Steps */}
      <h2 className="not-prose mb-4 mt-12 text-2xl font-bold text-foreground">
        Next Steps
      </h2>
      <div className="not-prose grid gap-3 sm:grid-cols-2">
        {[
          { title: "Read the Quick Start", href: "/docs/quick-start" },
          { title: "Explore Scripts", href: "/marketplace" },
          { title: "Try the Playground", href: "/playground" },
          { title: "Join Community", href: "https://discord.gg/gptjunkie" },
        ].map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
          >
            {link.title}
            {link.href.startsWith("http") ? (
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            )}
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="not-prose mt-16 flex items-center justify-between border-t border-border pt-8">
        <div />
        <Link href="/docs/quick-start">
          <Button variant="outline">
            Quick Start
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </article>
  )
}

const pipelineCode = `from serpentflow import Pipeline, FileProcessor

# Create a new pipeline
pipeline = Pipeline(name="my_first_pipeline")

# Define a processor
@pipeline.processor
async def process_file(file_path: str) -> dict:
    """Process a single file and extract metadata."""
    content = await FileProcessor.read(file_path)
    
    return {
        "path": file_path,
        "size": len(content),
        "lines": content.count("\\n"),
        "words": len(content.split())
    }

# Run the pipeline
async def main():
    results = await pipeline.run(
        source_dir="./input",
        patterns=["*.txt", "*.md"]
    )
    
    for result in results:
        print(f"Processed: {result['path']}")
        print(f"  Lines: {result['lines']}, Words: {result['words']}")

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())`
