import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MarketplaceHero } from "@/components/marketplace/marketplace-hero"
import { MarketplaceFilters } from "@/components/marketplace/marketplace-filters"
import { MarketplaceGrid } from "@/components/marketplace/marketplace-grid"

export const metadata = {
  title: "Script Marketplace | GPTJunkie",
  description: "Browse 9,800+ production-ready Python scripts for AI automation, media processing, and creative workflows.",
}

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <MarketplaceHero />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            <aside className="w-full shrink-0 lg:w-64">
              <MarketplaceFilters />
            </aside>
            <div className="flex-1">
              <MarketplaceGrid />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
