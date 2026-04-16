import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Zap } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for exploring automation",
    price: 29,
    period: "one-time",
    features: [
      "50 Production-Ready Scripts",
      "Basic Documentation",
      "Community Support",
      "Lifetime Updates",
    ],
    cta: "Get Started",
    href: "/signup?plan=starter",
  },
  {
    name: "Professional",
    description: "For serious automation work",
    price: 199,
    period: "one-time",
    features: [
      "500+ Production-Ready Scripts",
      "Full Documentation Suite",
      "Priority Email Support",
      "SerpentFlow CLI Access",
      "Video Tutorials",
      "Private Discord Channel",
    ],
    cta: "Go Professional",
    href: "/signup?plan=professional",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Complete automation empire",
    price: 999,
    period: "one-time",
    features: [
      "All 9,800+ Scripts",
      "Complete Source Code",
      "1-on-1 Onboarding Call",
      "Custom Script Development",
      "White-label Rights",
      "Dedicated Support",
      "Early Access to New Tools",
    ],
    cta: "Contact Sales",
    href: "/contact?plan=enterprise",
  },
]

export function Pricing() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, <span className="text-gradient">One-Time</span> Pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            No subscriptions, no hidden fees. Pay once, own forever.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-card p-6 sm:p-8 ${
                plan.popular
                  ? "border-primary ring-1 ring-primary"
                  : "border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  <Zap className="mr-1 h-3 w-3" />
                  Most Popular
                </Badge>
              )}

              {/* Plan Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                <span className="text-muted-foreground"> / {plan.period}</span>
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                asChild
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Have questions?{" "}
            <Link href="/faq" className="text-primary hover:underline">
              Check our FAQ
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
