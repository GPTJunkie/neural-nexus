import { Header } from "@/components/header"
import { PlaygroundInterface } from "@/components/playground/playground-interface"

export const metadata = {
  title: "Prompt Playground | GPTJunkie",
  description: "Interactive prompt engineering playground. Test, iterate, and optimize your AI prompts in real-time.",
}

export default function PlaygroundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PlaygroundInterface />
      </main>
    </div>
  )
}
