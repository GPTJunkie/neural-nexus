import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    content: "I automated my entire content pipeline and accidentally became a creative cyborg. These scripts saved me 20+ hours per week.",
    author: "Sarah Chen",
    role: "Content Creator",
    platform: "YouTube",
    initials: "SC",
  },
  {
    content: "The LLM batch processing tools are insane. I went from manually prompting ChatGPT to processing 1000+ documents overnight.",
    author: "Marcus Rodriguez",
    role: "Marketing Consultant",
    platform: "Freelance",
    initials: "MR",
  },
  {
    content: "Finally, Python scripts that don&apos;t require a PhD to understand. Clean code, great docs, actually works out of the box.",
    author: "Alex Kim",
    role: "Indie Developer",
    platform: "Gumroad",
    initials: "AK",
  },
  {
    content: "I&apos;ve made back my investment 10x over selling these as custom automation services on Upwork. Game changer.",
    author: "Jordan Taylor",
    role: "Automation Specialist",
    platform: "Upwork",
    initials: "JT",
  },
  {
    content: "The media processing tools transformed my workflow. Bulk image optimization that used to take hours now runs in minutes.",
    author: "Priya Sharma",
    role: "Digital Artist",
    platform: "Fiverr",
    initials: "PS",
  },
  {
    content: "Built an entire SaaS product on top of these scripts. The architecture is solid and scales beautifully.",
    author: "David Park",
    role: "Startup Founder",
    platform: "Indie Hacker",
    initials: "DP",
  },
]

export function Testimonials() {
  return (
    <section className="relative border-y border-border bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by <span className="text-gradient">Automation Enthusiasts</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join thousands of creators, developers, and entrepreneurs who have transformed their workflows
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/10" />

              {/* Content */}
              <p className="relative text-sm leading-relaxed text-muted-foreground">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10 text-primary text-sm font-medium">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} &middot; {testimonial.platform}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
