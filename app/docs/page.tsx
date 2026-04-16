import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocsSidebar } from "@/components/docs/docs-sidebar"
import { DocsContent } from "@/components/docs/docs-content"

export const metadata = {
  title: "Documentation | GPTJunkie",
  description: "Learn how to use GPTJunkie automation tools, SerpentFlow CLI, and Python scripts for AI workflows.",
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto flex max-w-7xl">
        <DocsSidebar />
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <DocsContent />
        </main>
      </div>
      <Footer />
    </div>
  )
}
