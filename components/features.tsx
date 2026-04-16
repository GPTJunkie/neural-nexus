import { 
  Cpu, 
  Wand2, 
  FileCode2, 
  Workflow, 
  Layers, 
  Zap 
} from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "AI/LLM Tools",
    description: "4,200+ scripts for content generation, fine-tuning, multi-model orchestration, and AI agent frameworks.",
    stats: "4,207 scripts",
  },
  {
    icon: Wand2,
    title: "Automation Bots",
    description: "Data extractors, social media automation, web scrapers, and intelligent bots for every platform.",
    stats: "811 scripts",
  },
  {
    icon: FileCode2,
    title: "Media Processing",
    description: "Audio transcription, image processing, video editing, gallery systems, and upscaling tools.",
    stats: "1,186 scripts",
  },
  {
    icon: Workflow,
    title: "Business Tools",
    description: "Analytics dashboards, CRM systems, lead generation, and revenue tracking solutions.",
    stats: "109 scripts",
  },
  {
    icon: Layers,
    title: "Web Development",
    description: "API services, web apps, website generators, and full-stack development tools.",
    stats: "228 scripts",
  },
  {
    icon: Zap,
    title: "Utility Scripts",
    description: "File utilities, data cleaners, SEO tools, and productivity enhancers for every workflow.",
    stats: "2,976 scripts",
  },
]

export function Features() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Your <span className="text-gradient">Arsenal</span> of Automation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Production-ready Python scripts across 8 categories, built for creative professionals who refuse to do things the slow way.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>

              {/* Stats Badge */}
              <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {feature.stats}
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
