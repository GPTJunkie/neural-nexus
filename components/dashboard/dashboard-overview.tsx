"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, CircleDot, ExternalLink, FileText, FolderKanban, Network, Plus, Search, ShieldCheck, Sparkles } from "lucide-react"

const assets = [
  { title: "DNA Cold Case AI", eyebrow: "The whale", description: "15 proprietary innovations, strategy, and market analysis ready for protection.", status: "Patent pending ready", value: "$100M+ exit path", icon: ShieldCheck, color: "text-fuchsia-300", border: "border-fuchsia-400/30", bg: "bg-fuchsia-400/10" },
  { title: "AI Empire Course", eyebrow: "Fast cash", description: "Production-ready audio, video, and a 4-hour NotebookLM course.", status: "Production ready", value: "$25k–$50k / mo", icon: Sparkles, color: "text-amber-300", border: "border-amber-400/30", bg: "bg-amber-400/10" },
  { title: "Python Automation", eyebrow: "The engine", description: "1,425 content-aware scripts across SEO, scraping, and POD.", status: "Cataloged", value: "$10k–$40k / mo", icon: FolderKanban, color: "text-cyan-300", border: "border-cyan-400/30", bg: "bg-cyan-400/10" },
  { title: "Music & Content", eyebrow: "The passive", description: "696MB of distribution-ready tracks for platforms and sync licensing.", status: "Distribution ready", value: "$15k–$65k / mo", icon: Network, color: "text-emerald-300", border: "border-emerald-400/30", bg: "bg-emerald-400/10" },
]

const flow = ["Source worlds", "Provenance", "Extraction", "Source-aware chunks", "Embeddings", "Semantic index"]

export function DashboardOverview() {
  const [activeAsset, setActiveAsset] = useState(0)

  return (
    <div className="mx-auto max-w-7xl space-y-6 pb-10">
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary"><CircleDot className="h-3.5 w-3.5" /> Empire command center</div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">Turn the archive into an operating system.</h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">A source-aware map of your worlds, products, and implementation paths. Similarity is evidence—not a reason to delete, merge, or declare duplicates.</p>
          </div>
          <div className="flex gap-2"><Button><Plus className="mr-2 h-4 w-4" /> Add source world</Button><Button variant="outline"><Search className="mr-2 h-4 w-4" /> Explore index</Button></div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {assets.map((asset, index) => {
          const Icon = asset.icon
          return <button key={asset.title} type="button" onClick={() => setActiveAsset(index)} className={`text-left transition-transform hover:-translate-y-0.5 ${activeAsset === index ? "ring-1 ring-primary" : ""}`}><Card className={`h-full ${asset.border}`}><CardContent className="p-5"><div className="flex items-start justify-between"><div className={`flex h-10 w-10 items-center justify-center rounded-xl ${asset.bg}`}><Icon className={`h-5 w-5 ${asset.color}`} /></div><Badge variant="outline" className="text-[10px]">{asset.status}</Badge></div><p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">{asset.eyebrow}</p><h2 className="mt-1 text-lg font-semibold">{asset.title}</h2><p className="mt-2 min-h-12 text-sm leading-5 text-muted-foreground">{asset.description}</p><div className={`mt-4 text-sm font-medium ${asset.color}`}>{asset.value}</div></CardContent></Card></button>
        })}
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <Card><CardHeader><div className="flex items-center justify-between gap-4"><div><CardTitle>Source-aware intelligence pipeline</CardTitle><CardDescription>Observe how provenance becomes connected signal.</CardDescription></div><Badge variant="secondary">Live map</Badge></div></CardHeader><CardContent><div className="overflow-x-auto pb-2"><div className="flex min-w-[720px] items-center gap-2">{flow.map((step, index) => <div key={step} className="flex items-center gap-2"><div className={`rounded-xl border px-3 py-3 text-center ${index === flow.length - 1 ? "border-primary/50 bg-primary/10" : "border-border bg-secondary/50"}`}><p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">0{index + 1}</p><p className="mt-1 whitespace-nowrap text-xs font-medium">{step}</p></div>{index < flow.length - 1 && <ArrowRight className="h-4 w-4 shrink-0 text-primary" />}</div>)}</div></div><div className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground"><span className="rounded-full border border-border px-3 py-1.5">Related-world paths</span><span className="rounded-full border border-border px-3 py-1.5">Semantic search</span><span className="rounded-full border border-border px-3 py-1.5">Lineage trails</span><span className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-primary">No deletion · no merging</span></div></CardContent></Card>

        <Card><CardHeader><CardTitle>Next implementation</CardTitle><CardDescription>{assets[activeAsset].title} is selected.</CardDescription></CardHeader><CardContent><div className="rounded-xl border border-border bg-secondary/40 p-4"><p className="text-xs uppercase tracking-widest text-primary">Recommended move</p><h3 className="mt-2 text-xl font-semibold">{activeAsset === 0 ? "Secure the IP" : activeAsset === 1 ? "Package the course" : activeAsset === 2 ? "Bundle the scripts" : "Distribute the catalog"}</h3><p className="mt-2 text-sm leading-5 text-muted-foreground">Create the evidence trail, assign an owner, and move this asset from observed to activated.</p><Button className="mt-5 w-full">Open action brief <ExternalLink className="ml-2 h-4 w-4" /></Button></div><div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground"><FileText className="h-4 w-4 text-primary" /> 4 source documents linked</div></CardContent></Card>
      </div>
    </div>
  )
}
