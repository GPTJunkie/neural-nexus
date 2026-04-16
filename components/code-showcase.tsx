"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, Terminal, FileCode, Cpu } from "lucide-react"

const codeExamples = [
  {
    id: "serpentflow",
    label: "SerpentFlow CLI",
    icon: Terminal,
    language: "python",
    code: `from serpentflow import Pipeline, AudioProcessor, Transcriber

# Initialize the automation pipeline
pipeline = Pipeline(
    name="content_automation",
    output_dir="./processed"
)

# Configure processors
audio = AudioProcessor(
    normalize=True,
    remove_silence=True,
    target_format="wav"
)

transcriber = Transcriber(
    model="whisper-large",
    language="en",
    timestamps=True
)

# Execute pipeline
@pipeline.task
async def process_media(source_dir: str):
    """Transform raw media into structured insights."""
    files = pipeline.discover(source_dir, patterns=["*.mp3", "*.wav"])
    
    for file in files:
        processed = await audio.process(file)
        transcript = await transcriber.transcribe(processed)
        
        yield {
            "file": file.name,
            "transcript": transcript.text,
            "segments": transcript.segments
        }

# Run with: serpentflow run content_automation`,
  },
  {
    id: "llm-batch",
    label: "LLM Batch Runner",
    icon: Cpu,
    language: "python",
    code: `from gptjunkie import BatchLLM, PromptTemplate

# Configure batch processing
batch = BatchLLM(
    provider="openai",
    model="gpt-4-turbo",
    rate_limit=100,  # requests per minute
    retry_strategy="exponential"
)

# Define reusable prompt template
template = PromptTemplate("""
Analyze the following content and extract:
1. Main topics
2. Key insights
3. Actionable items

Content: {content}
""")

# Process multiple files
async def process_documents(documents: list[str]):
    results = []
    
    async for response in batch.run_many(
        prompts=[template.format(content=doc) for doc in documents],
        temperature=0.3,
        max_tokens=500
    ):
        results.append({
            "analysis": response.text,
            "tokens_used": response.usage.total,
            "cost": response.cost
        })
    
    return results

# Execute with built-in cost tracking
summary = await process_documents(my_docs)
print(f"Total cost: \${sum(r['cost'] for r in summary):.4f}")`,
  },
  {
    id: "image-bulk",
    label: "Bulk Image Processor",
    icon: FileCode,
    language: "python",
    code: `from gptjunkie.media import BulkImageProcessor
from pathlib import Path

# Initialize processor with DALL-E integration
processor = BulkImageProcessor(
    input_dir="./raw_images",
    output_dir="./processed",
    quality="high"
)

# Configure transformations
processor.configure(
    resize=(1920, 1080),
    format="webp",
    compression=85,
    preserve_metadata=True
)

# Add AI-powered enhancements
processor.add_enhancement(
    "upscale",
    model="real-esrgan",
    scale=2
)

processor.add_enhancement(
    "background_remove",
    model="rembg",
    alpha_matting=True
)

# Process with progress tracking
async def main():
    stats = await processor.run(
        parallel_workers=4,
        on_progress=lambda p: print(f"Progress: {p:.1%}")
    )
    
    print(f"""
    Processed: {stats.processed} images
    Saved: {stats.space_saved_mb:.1f} MB
    Time: {stats.duration:.1f}s
    """)

# Run: python process_images.py
if __name__ == "__main__":
    import asyncio
    asyncio.run(main())`,
  },
]

export function CodeShowcase() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="relative py-20 sm:py-28">
      {/* Background Elements */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Code That <span className="text-gradient">Performs</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every script is battle-tested, documented, and ready for production. 
              No boilerplate, no bloat &mdash; just clean automation that works.
            </p>
            
            <ul className="mt-8 space-y-4">
              {[
                "Async-first architecture for maximum throughput",
                "Built-in cost tracking and rate limiting",
                "Comprehensive error handling and retries",
                "Modular design for easy customization",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Editor */}
          <div className="relative">
            <Tabs defaultValue="serpentflow" className="w-full">
              <TabsList className="h-auto w-full justify-start gap-1 rounded-t-lg border border-b-0 border-border bg-card p-1">
                {codeExamples.map((example) => (
                  <TabsTrigger
                    key={example.id}
                    value={example.id}
                    className="flex items-center gap-2 rounded px-3 py-2 text-xs font-medium data-[state=active]:bg-secondary sm:text-sm"
                  >
                    <example.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{example.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {codeExamples.map((example) => (
                <TabsContent
                  key={example.id}
                  value={example.id}
                  className="mt-0"
                >
                  <div className="relative overflow-hidden rounded-b-lg border border-t-0 border-border bg-[#0d1117]">
                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(example.id, example.code)}
                      className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-md bg-secondary/80 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {copied === example.id ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>

                    {/* Code Block */}
                    <pre className="overflow-x-auto p-4 text-xs leading-relaxed sm:text-sm">
                      <code className="text-slate-300">
                        {example.code.split('\n').map((line, i) => (
                          <div key={i} className="table-row">
                            <span className="table-cell select-none pr-4 text-right text-slate-600">
                              {i + 1}
                            </span>
                            <span className="table-cell whitespace-pre">
                              {highlightSyntax(line)}
                            </span>
                          </div>
                        ))}
                      </code>
                    </pre>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

function highlightSyntax(line: string): React.ReactNode {
  // Simple syntax highlighting
  const keywords = ['from', 'import', 'async', 'await', 'def', 'class', 'if', 'for', 'in', 'return', 'yield', 'with', 'as', 'try', 'except', 'finally', 'raise', 'True', 'False', 'None', 'and', 'or', 'not']
  const builtins = ['print', 'list', 'dict', 'str', 'int', 'float', 'bool', 'len', 'range', 'sum', 'asyncio']
  
  let result = line
  
  // Highlight strings
  result = result.replace(/(["'`])(?:(?!\1)[^\\]|\\.)*\1/g, '<span class="text-emerald-400">$&</span>')
  
  // Highlight comments
  if (line.includes('#')) {
    const commentIndex = line.indexOf('#')
    const beforeComment = line.substring(0, commentIndex)
    const comment = line.substring(commentIndex)
    result = beforeComment + `<span class="text-slate-500">${comment}</span>`
  }
  
  // Highlight keywords
  keywords.forEach(kw => {
    const regex = new RegExp(`\\b(${kw})\\b`, 'g')
    result = result.replace(regex, '<span class="text-pink-400">$1</span>')
  })
  
  // Highlight decorators
  result = result.replace(/(@\w+)/g, '<span class="text-yellow-400">$1</span>')
  
  // Highlight numbers
  result = result.replace(/\b(\d+\.?\d*)\b/g, '<span class="text-orange-400">$1</span>')
  
  return <span dangerouslySetInnerHTML={{ __html: result }} />
}
