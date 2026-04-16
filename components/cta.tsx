import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"

export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-20 sm:py-28">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Ready to <span className="text-gradient">Automate</span> Everything?
        </h2>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Join the neural uprising. Stop doing things manually and start orchestrating AI to work for you.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="h-12 min-w-[200px] bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="/signup">
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 min-w-[200px]" asChild>
            <Link href="/playground">
              <Terminal className="mr-2 h-4 w-4" />
              Try the Playground
            </Link>
          </Button>
        </div>

        {/* Trust Text */}
        <p className="mt-8 text-sm text-muted-foreground">
          No credit card required &middot; Full access to documentation &middot; Community support included
        </p>
      </div>
    </section>
  )
}
