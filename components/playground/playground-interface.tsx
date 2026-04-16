"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Play, 
  Copy, 
  Check, 
  RotateCcw, 
  Save, 
  Share, 
  Settings,
  Sparkles,
  Clock,
  DollarSign,
  Zap,
  History,
  BookOpen
} from "lucide-react"

const presetPrompts = [
  {
    id: "summarize",
    name: "Text Summarizer",
    prompt: "Summarize the following text in 3 bullet points, focusing on the key insights and actionable takeaways:\n\n{input}",
    description: "Condense long content into key points"
  },
  {
    id: "code-review",
    name: "Code Reviewer",
    prompt: "Review this code for:\n1. Potential bugs or errors\n2. Performance improvements\n3. Best practices violations\n4. Security concerns\n\nProvide specific, actionable feedback.\n\nCode:\n```\n{input}\n```",
    description: "AI-powered code review"
  },
  {
    id: "content-writer",
    name: "Content Writer",
    prompt: "Write engaging content about the following topic. Use a conversational tone, include specific examples, and structure with clear headings.\n\nTopic: {input}\n\nRequirements:\n- 500-800 words\n- Include a compelling hook\n- End with a call-to-action",
    description: "Generate blog posts and articles"
  },
  {
    id: "data-extractor",
    name: "Data Extractor",
    prompt: "Extract structured data from the following text. Return a JSON object with relevant fields.\n\nText:\n{input}\n\nExtract:\n- Names (people, companies)\n- Dates and times\n- Locations\n- Key metrics/numbers\n- Action items",
    description: "Parse unstructured text into JSON"
  },
]

const models = [
  { id: "gpt-4-turbo", name: "GPT-4 Turbo", provider: "OpenAI", cost: "$0.01/1K" },
  { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo", provider: "OpenAI", cost: "$0.001/1K" },
  { id: "claude-3-opus", name: "Claude 3 Opus", provider: "Anthropic", cost: "$0.015/1K" },
  { id: "claude-3-sonnet", name: "Claude 3 Sonnet", provider: "Anthropic", cost: "$0.003/1K" },
  { id: "gemini-pro", name: "Gemini Pro", provider: "Google", cost: "$0.001/1K" },
]

const historyItems = [
  { id: 1, prompt: "Summarize quarterly report...", model: "GPT-4 Turbo", time: "2 min ago", tokens: 1234 },
  { id: 2, prompt: "Review Python function...", model: "Claude 3 Sonnet", time: "15 min ago", tokens: 856 },
  { id: 3, prompt: "Extract data from email...", model: "GPT-3.5 Turbo", time: "1 hour ago", tokens: 2341 },
]

export function PlaygroundInterface() {
  const [prompt, setPrompt] = useState("")
  const [systemPrompt, setSystemPrompt] = useState("You are a helpful AI assistant focused on productivity and automation.")
  const [selectedModel, setSelectedModel] = useState("gpt-4-turbo")
  const [temperature, setTemperature] = useState([0.7])
  const [maxTokens, setMaxTokens] = useState([1000])
  const [output, setOutput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setOutput("")
    
    // Simulate streaming response
    const sampleOutput = `Based on the analysis of your input, here are the key findings:

**Summary:**
The provided content discusses automation workflows and their impact on productivity. Key themes include:

1. **Efficiency Gains** - Automation can reduce manual task time by up to 80%
2. **Scalability** - Automated systems handle increased load without proportional cost increases
3. **Consistency** - Removes human error from repetitive processes

**Recommendations:**
- Start with high-frequency, low-complexity tasks
- Implement monitoring for automated workflows
- Build in manual override capabilities

**Next Steps:**
1. Identify top 5 time-consuming manual processes
2. Evaluate automation feasibility for each
3. Create pilot project for highest-impact opportunity

The analysis suggests strong potential for workflow optimization through strategic automation implementation.`

    let i = 0
    const interval = setInterval(() => {
      if (i < sampleOutput.length) {
        setOutput(sampleOutput.slice(0, i + 5))
        i += 5
      } else {
        clearInterval(interval)
        setIsGenerating(false)
      }
    }, 10)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePreset = (preset: typeof presetPrompts[0]) => {
    setPrompt(preset.prompt)
  }

  const selectedModelData = models.find(m => m.id === selectedModel)

  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Prompt <span className="text-gradient">Playground</span>
          </h1>
          <p className="text-muted-foreground">
            Test and iterate on your prompts in real-time
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <History className="mr-2 h-4 w-4" />
            History
          </Button>
          <Button variant="outline" size="sm">
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Main Editor */}
        <div className="space-y-6">
          {/* Prompt Presets */}
          <div className="flex flex-wrap gap-2">
            {presetPrompts.map((preset) => (
              <button
                key={preset.id}
                onClick={() => handlePreset(preset)}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {preset.name}
              </button>
            ))}
          </div>

          {/* System Prompt */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium">
                <Settings className="h-4 w-4 text-muted-foreground" />
                System Prompt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                placeholder="Set the AI's behavior and context..."
                className="min-h-[80px] resize-none text-sm"
              />
            </CardContent>
          </Card>

          {/* User Prompt */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Your Prompt
                </CardTitle>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setPrompt("")}
                  className="h-7 text-xs text-muted-foreground"
                >
                  <RotateCcw className="mr-1 h-3 w-3" />
                  Clear
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here... Use {input} as a placeholder for dynamic content."
                className="min-h-[160px] resize-none font-mono text-sm"
              />
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {prompt.length} characters &middot; ~{Math.ceil(prompt.length / 4)} tokens
                </p>
                <Button 
                  onClick={handleGenerate}
                  disabled={!prompt || isGenerating}
                  className="bg-primary text-primary-foreground"
                >
                  {isGenerating ? (
                    <>
                      <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Run Prompt
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Output */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Zap className="h-4 w-4 text-primary" />
                  Output
                </CardTitle>
                {output && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={handleCopy}
                    className="h-7 text-xs text-muted-foreground"
                  >
                    {copied ? (
                      <Check className="mr-1 h-3 w-3 text-primary" />
                    ) : (
                      <Copy className="mr-1 h-3 w-3" />
                    )}
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] rounded-lg border border-border bg-muted/30 p-4">
                {output ? (
                  <div className="prose prose-sm prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm text-foreground">
                      {output}
                      {isGenerating && <span className="animate-pulse">|</span>}
                    </pre>
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                    Output will appear here...
                  </div>
                )}
              </ScrollArea>
              {output && !isGenerating && (
                <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    1.2s
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    847 tokens
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    $0.0085
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Model Selection */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Model</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {models.map((model) => (
                    <SelectItem key={model.id} value={model.id}>
                      <div className="flex items-center gap-2">
                        <span>{model.name}</span>
                        <Badge variant="outline" className="text-[10px]">
                          {model.provider}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedModelData && (
                <p className="text-xs text-muted-foreground">
                  Cost: {selectedModelData.cost} tokens
                </p>
              )}
            </CardContent>
          </Card>

          {/* Parameters */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-muted-foreground">Temperature</label>
                  <span className="text-sm font-medium">{temperature[0]}</span>
                </div>
                <Slider
                  value={temperature}
                  onValueChange={setTemperature}
                  min={0}
                  max={2}
                  step={0.1}
                />
                <p className="text-xs text-muted-foreground">
                  Higher = more creative, Lower = more focused
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-muted-foreground">Max Tokens</label>
                  <span className="text-sm font-medium">{maxTokens[0]}</span>
                </div>
                <Slider
                  value={maxTokens}
                  onValueChange={setMaxTokens}
                  min={100}
                  max={4000}
                  step={100}
                />
              </div>
            </CardContent>
          </Card>

          {/* Recent History */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium">
                <History className="h-4 w-4 text-muted-foreground" />
                Recent
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {historyItems.map((item) => (
                <button
                  key={item.id}
                  className="w-full rounded-lg border border-border bg-muted/30 p-3 text-left transition-colors hover:border-primary/50"
                >
                  <p className="text-xs font-medium text-foreground line-clamp-1">
                    {item.prompt}
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-[10px] text-muted-foreground">
                    <span>{item.model}</span>
                    <span>&middot;</span>
                    <span>{item.time}</span>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-sm font-medium">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                Pro Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
                  <span>Use specific instructions for better results</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
                  <span>Include examples in your prompt</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 h-1 w-1 rounded-full bg-primary" />
                  <span>Lower temperature for factual tasks</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
