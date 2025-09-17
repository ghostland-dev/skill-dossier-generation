"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Brain, FileText, ArrowLeft, Zap, Target, TrendingUp, CheckCircle, AlertCircle, Search } from "lucide-react"
import Link from "next/link"

export default function AnalysisPage() {
  const [selectedCandidate, setSelectedCandidate] = useState("sarah-chen")
  const [analysisView, setAnalysisView] = useState("overview")

  const candidates = [
    {
      id: "sarah-chen",
      name: "Sarah Chen",
      position: "Senior React Developer",
      analysisDate: "2024-01-15",
      status: "completed",
    },
    {
      id: "marcus-johnson",
      name: "Marcus Johnson",
      position: "DevOps Engineer",
      analysisDate: "2024-01-14",
      status: "completed",
    },
    {
      id: "elena-rodriguez",
      name: "Elena Rodriguez",
      position: "Full Stack Developer",
      analysisDate: "2024-01-13",
      status: "processing",
    },
  ]

  const analysisData = {
    overview: {
      totalSkills: 23,
      experienceYears: 5.2,
      confidenceScore: 92,
      matchScore: 87,
      categories: ["Frontend", "Backend", "DevOps", "Databases", "Testing"],
    },
    skills: [
      {
        name: "React",
        category: "Frontend",
        level: 95,
        confidence: 98,
        mentions: 12,
        context: ["Component development", "State management", "Hooks"],
        yearsExperience: 4.5,
      },
      {
        name: "TypeScript",
        category: "Frontend",
        level: 90,
        confidence: 95,
        mentions: 8,
        context: ["Type definitions", "Interface design", "Generic types"],
        yearsExperience: 3.2,
      },
      {
        name: "Node.js",
        category: "Backend",
        level: 85,
        confidence: 92,
        mentions: 6,
        context: ["API development", "Express.js", "Microservices"],
        yearsExperience: 3.8,
      },
      {
        name: "AWS",
        category: "DevOps",
        level: 75,
        confidence: 88,
        mentions: 4,
        context: ["EC2", "S3", "Lambda", "CloudFormation"],
        yearsExperience: 2.1,
      },
      {
        name: "Docker",
        category: "DevOps",
        level: 70,
        confidence: 85,
        mentions: 3,
        context: ["Containerization", "Docker Compose", "Multi-stage builds"],
        yearsExperience: 1.8,
      },
      {
        name: "PostgreSQL",
        category: "Databases",
        level: 80,
        confidence: 90,
        mentions: 5,
        context: ["Query optimization", "Database design", "Migrations"],
        yearsExperience: 3.5,
      },
    ],
    insights: [
      {
        type: "strength",
        title: "Strong Frontend Expertise",
        description: "Exceptional React and TypeScript skills with extensive practical experience",
        impact: "high",
      },
      {
        type: "opportunity",
        title: "Cloud Architecture",
        description: "Could benefit from deeper AWS architecture and serverless patterns",
        impact: "medium",
      },
      {
        type: "trend",
        title: "Modern Stack Alignment",
        description: "Skills align well with current industry trends and best practices",
        impact: "high",
      },
      {
        type: "gap",
        title: "Testing Frameworks",
        description: "Limited mention of testing tools like Jest, Cypress, or Testing Library",
        impact: "medium",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">SkillForge</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">AI Skill Analysis</h1>
            <p className="text-muted-foreground">Deep insights into candidate skills and competencies</p>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={selectedCandidate} onValueChange={setSelectedCandidate}>
              <SelectTrigger className="w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {candidates.map((candidate) => (
                  <SelectItem key={candidate.id} value={candidate.id}>
                    {candidate.name} - {candidate.position}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Brain className="w-4 h-4 mr-2" />
              Re-analyze
            </Button>
          </div>
        </div>

        <Tabs value={analysisView} onValueChange={setAnalysisView} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="skills">Skills Deep Dive</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Skills Identified</CardTitle>
                  <Brain className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analysisData.overview.totalSkills}</div>
                  <p className="text-xs text-muted-foreground">
                    Across {analysisData.overview.categories.length} categories
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Experience</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analysisData.overview.experienceYears}y</div>
                  <p className="text-xs text-muted-foreground">Average across all skills</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Confidence Score</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analysisData.overview.confidenceScore}%</div>
                  <p className="text-xs text-muted-foreground">AI analysis confidence</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Role Match</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analysisData.overview.matchScore}%</div>
                  <p className="text-xs text-muted-foreground">Target role alignment</p>
                </CardContent>
              </Card>
            </div>

            {/* Skills by Category */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skills by Category</CardTitle>
                  <CardDescription>Distribution of identified technical skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysisData.overview.categories.map((category, index) => {
                      const categorySkills = analysisData.skills.filter((skill) => skill.category === category)
                      const avgLevel =
                        categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length
                      return (
                        <div key={category}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{category}</span>
                            <span className="text-sm text-muted-foreground">
                              {categorySkills.length} skills • {Math.round(avgLevel)}% avg
                            </span>
                          </div>
                          <Progress value={avgLevel} className="h-2" />
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Skills</CardTitle>
                  <CardDescription>Highest proficiency technical skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analysisData.skills
                      .sort((a, b) => b.level - a.level)
                      .slice(0, 6)
                      .map((skill, index) => (
                        <div key={skill.name} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                              <span className="text-xs font-bold text-primary">{index + 1}</span>
                            </div>
                            <div>
                              <p className="font-medium">{skill.name}</p>
                              <p className="text-xs text-muted-foreground">{skill.yearsExperience}y experience</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary">{skill.level}%</Badge>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Detailed Skills Analysis</h2>
                <p className="text-muted-foreground">Comprehensive breakdown of each identified skill</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Search skills..." className="pl-10 w-64" />
                </div>
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {analysisData.overview.categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-6">
              {analysisData.skills.map((skill) => (
                <Card key={skill.name}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold">{skill.name}</h3>
                          <Badge variant="outline">{skill.category}</Badge>
                          <Badge variant="secondary">{skill.yearsExperience}y experience</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          Mentioned {skill.mentions} times across CV with {skill.confidence}% confidence
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{skill.level}%</div>
                        <p className="text-sm text-muted-foreground">Proficiency</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Proficiency Breakdown</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Technical Knowledge</span>
                            <span>{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                          <div className="flex justify-between text-sm">
                            <span>Practical Experience</span>
                            <span>{Math.min(skill.level + 5, 100)}%</span>
                          </div>
                          <Progress value={Math.min(skill.level + 5, 100)} className="h-2" />
                          <div className="flex justify-between text-sm">
                            <span>AI Confidence</span>
                            <span>{skill.confidence}%</span>
                          </div>
                          <Progress value={skill.confidence} className="h-2" />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3">Context & Usage</h4>
                        <div className="space-y-2">
                          {skill.context.map((context, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm">{context}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">AI-Generated Insights</h2>
              <p className="text-muted-foreground">Intelligent analysis and recommendations based on CV content</p>
            </div>

            <div className="grid gap-6">
              {analysisData.insights.map((insight, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {insight.type === "strength" && <CheckCircle className="w-6 h-6 text-green-500" />}
                        {insight.type === "opportunity" && <TrendingUp className="w-6 h-6 text-blue-500" />}
                        {insight.type === "trend" && <Zap className="w-6 h-6 text-purple-500" />}
                        {insight.type === "gap" && <AlertCircle className="w-6 h-6 text-yellow-500" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{insight.title}</h3>
                          <Badge
                            variant={
                              insight.impact === "high"
                                ? "default"
                                : insight.impact === "medium"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {insight.impact} impact
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{insight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>AI-powered suggestions for candidate development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">Leverage Strengths</h4>
                    <p className="text-sm text-green-700">
                      Highlight React and TypeScript expertise in senior frontend roles. Consider mentoring
                      opportunities.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Skill Development</h4>
                    <p className="text-sm text-blue-700">
                      Recommend AWS certification and advanced testing framework training to round out the skill set.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">Role Alignment</h4>
                    <p className="text-sm text-purple-700">
                      Perfect fit for Senior React Developer or Frontend Tech Lead positions in modern tech stacks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Skill Comparison</h2>
              <p className="text-muted-foreground">Compare skills against role requirements and industry benchmarks</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Role Requirements Match</CardTitle>
                  <CardDescription>How well skills align with target position</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { skill: "React", required: 90, candidate: 95, match: "excellent" },
                      { skill: "TypeScript", required: 80, candidate: 90, match: "excellent" },
                      { skill: "Node.js", required: 70, candidate: 85, match: "good" },
                      { skill: "Testing", required: 75, candidate: 45, match: "gap" },
                      { skill: "AWS", required: 60, candidate: 75, match: "good" },
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{item.skill}</span>
                          <Badge
                            variant={
                              item.match === "excellent"
                                ? "default"
                                : item.match === "good"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {item.match}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Required: {item.required}%</span>
                            <span>Candidate: {item.candidate}%</span>
                          </div>
                          <div className="relative">
                            <Progress value={item.required} className="h-2 bg-muted" />
                            <Progress
                              value={item.candidate}
                              className="h-2 absolute top-0 bg-transparent"
                              style={{ width: `${(item.candidate / 100) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Industry Benchmarks</CardTitle>
                  <CardDescription>Comparison with industry standards</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysisData.skills.slice(0, 5).map((skill, index) => {
                      const industryAvg = Math.floor(Math.random() * 20) + 60 // Mock industry average
                      return (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level > industryAvg ? "Above" : "Below"} average
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Industry Avg: {industryAvg}%</span>
                              <span>Candidate: {skill.level}%</span>
                            </div>
                            <div className="relative">
                              <Progress value={industryAvg} className="h-2 bg-muted" />
                              <Progress
                                value={skill.level}
                                className="h-2 absolute top-0 bg-transparent"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
