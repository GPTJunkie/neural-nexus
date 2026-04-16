import Link from "next/link"
import { Zap, Github, Twitter } from "lucide-react"

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "Scripts", href: "/marketplace" },
      { name: "Documentation", href: "/docs" },
      { name: "Playground", href: "/playground" },
      { name: "Pricing", href: "/#pricing" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Tutorials", href: "/tutorials" },
      { name: "Blog", href: "/blog" },
      { name: "Changelog", href: "/changelog" },
      { name: "API Reference", href: "/docs/api" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
      { name: "Partners", href: "/partners" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "License", href: "/license" },
    ],
  },
}

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/gptjunkie" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/gptjunkie" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <span className="text-lg font-bold">
                GPT<span className="text-primary">Junkie</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The Neural Nexus for AI automation, prompt engineering, and Python scripting mastery.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GPTJunkie. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Python, powered by obsession.
          </p>
        </div>
      </div>
    </footer>
  )
}
