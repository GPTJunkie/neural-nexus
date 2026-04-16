"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Play, 
  Pause, 
  Clock, 
  DollarSign,
  Cpu,
  FileCode,
  Workflow,
  Plus
} from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const stats = [
  {
    name: "Active Pipelines",
    value: "12",
    change: "+2",
    changeType: "increase",
    icon: Workflow,
  },
  {
    name: "Scripts Executed",
    value: "1,847",
    change: "+23%",
    changeType: "increase",
    icon: FileCode,
  },
  {
    name: "API Calls",
    value: "45.2K",
    change: "+12%",
    changeType: "increase",
    icon: Cpu,
  },
  {
    name: "Total Cost",
    value: "$127.43",
    change: "-8%",
    changeType: "decrease",
    icon: DollarSign,
  },
]

const recentPipelines = [
  { id: 1, name: "Content Processor", status: "running", progress: 67, tasks: "2,341 / 3,500" },
  { id: 2, name: "Image Upscaler", status: "completed", progress: 100, tasks: "500 / 500" },
  { id: 3, name: "LLM Batch Runner", status: "paused", progress: 45, tasks: "890 / 2,000" },
  { id: 4, name: "Audio Transcriber", status: "queued", progress: 0, tasks: "0 / 1,200" },
]

const usageData = [
  { date: "Mon", calls: 4200, cost: 18.5 },
  { date: "Tue", calls: 5800, cost: 24.2 },
  { date: "Wed", calls: 4900, cost: 20.1 },
  { date: "Thu", calls: 7200, cost: 31.5 },
  { date: "Fri", calls: 6100, cost: 26.8 },
  { date: "Sat", calls: 3200, cost: 14.2 },
  { date: "Sun", calls: 2800, cost: 12.1 },
]

const recentActivity = [
  { id: 1, action: "Pipeline completed", pipeline: "Image Upscaler", time: "2 min ago" },
  { id: 2, action: "New script added", pipeline: "CSV Merger v2", time: "15 min ago" },
  { id: 3, action: "API key rotated", pipeline: "OpenAI Production", time: "1 hour ago" },
  { id: 4, action: "Pipeline started", pipeline: "Content Processor", time: "2 hours ago" },
  { id: 5, action: "Cost alert triggered", pipeline: "LLM Batch Runner", time: "3 hours ago" },
]

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Dashboard</h1>
          <p className="text-muted-foreground">Monitor your automation workflows and usage.</p>
        </div>
        <Button className="bg-primary text-primary-foreground">
          <Plus className="mr-2 h-4 w-4" />
          New Pipeline
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium ${
                  stat.changeType === "increase" ? "text-emerald-500" : "text-rose-500"
                }`}>
                  {stat.changeType === "increase" ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.name}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Pipelines */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Usage Chart */}
        <Card>
          <CardHeader>
            <CardTitle>API Usage</CardTitle>
            <CardDescription>Your API calls and costs over the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={usageData}>
                <defs>
                  <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="date" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'var(--color-muted-foreground)' }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 12, fill: 'var(--color-muted-foreground)' }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                  labelStyle={{ color: 'var(--color-foreground)' }}
                />
                <Area
                  type="monotone"
                  dataKey="calls"
                  stroke="var(--color-primary)"
                  strokeWidth={2}
                  fill="url(#colorCalls)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Active Pipelines */}
        <Card>
          <CardHeader>
            <CardTitle>Active Pipelines</CardTitle>
            <CardDescription>Currently running automation workflows</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPipelines.map((pipeline) => (
              <div key={pipeline.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{pipeline.name}</span>
                    <Badge
                      variant="outline"
                      className={
                        pipeline.status === "running"
                          ? "border-emerald-500/50 text-emerald-500"
                          : pipeline.status === "completed"
                          ? "border-primary/50 text-primary"
                          : pipeline.status === "paused"
                          ? "border-yellow-500/50 text-yellow-500"
                          : "border-muted-foreground/50 text-muted-foreground"
                      }
                    >
                      {pipeline.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    {pipeline.status === "running" ? (
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Pause className="h-3 w-3" />
                      </Button>
                    ) : pipeline.status === "paused" ? (
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Play className="h-3 w-3" />
                      </Button>
                    ) : null}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={pipeline.progress} className="h-2 flex-1" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {pipeline.tasks}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest automation events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.pipeline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
