"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, Target, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react"

interface SkillAnalyzerProps {
  cvText: string
  targetRole?: string
  onAnalysisComplete?: (results: AnalysisResults) => void
}

interface AnalysisResults {
  skills: Array<{
    name: string
    category: string
    level: number
    confidence: number
    mentions: number
    context: string[]
    yearsExperience: number
  }>
  insights: Array<{
    type: "strength" | "opportunity" | "gap" | "trend"
    title: string
    description: string
    impact: "high" | "medium" | "low"
  }>
  summary: {
    totalSkills: number
    experienceYears: number
    confidenceScore: number
    matchScore: number
  }
}

export function SkillAnalyzer({ cvText, targetRole, onAnalysisComplete }: SkillAnalyzerProps) {
  const [analysisStep, setAnalysisStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [results, setResults] = useState<AnalysisResults | null>(null)

  const analysisSteps = [
    { name: "Text Processing", description: "Extracting and cleaning CV content" },
    { name: "Skill Detection", description: "Identifying technical skills and technologies" },
    { name: "Context Analysis", description: "Understanding skill usage and proficiency" },
    { name: "Experience Calculation", description: "Estimating years of experience per skill" },
    { name: "Insight Generation", description: "Creating AI-powered recommendations" },
  ]

  useEffect(() => {
    if (cvText) {
      runAnalysis()
    }
  }, [cvText])

  const runAnalysis = async () => {
    // Simulate AI analysis process
    for (let i = 0; i < analysisSteps.length; i++) {
      setAnalysisStep(i)

      // Simulate processing time for each step
      for (let j = 0; j <= 100; j += 10) {
        setProgress((i * 100 + j) / analysisSteps.length)
        await new Promise((resolve) => setTimeout(resolve, 100))
      }
    }

    // Generate mock results (in real implementation, this would call AI service)
    const mockResults: AnalysisResults = {
      skills: [
        {
          name: "React",
          category: "Frontend",
          level: 95,
          confidence: 98,
          mentions: 12,
          context: ["Component development", "State management", "Hooks", "Performance optimization"],
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
          title: "Strong Frontend Foundation",
          description: "Exceptional React and TypeScript skills indicate strong modern frontend capabilities",
          impact: "high",
        },
        {
          type: "opportunity",
          title: "Cloud Architecture Growth",
          description: "AWS skills present but could benefit from deeper cloud architecture knowledge",
          impact: "medium",
        },
        {
          type: "gap",
          title: "Testing Coverage",
          description: "Limited evidence of testing frameworks and methodologies",
          impact: "medium",
        },
        {
          type: "trend",
          title: "Modern Stack Alignment",
          description: "Skills align well with current industry trends and best practices",
          impact: "high",
        },
      ],
      summary: {
        totalSkills: 23,
        experienceYears: 5.2,
        confidenceScore: 92,
        matchScore: targetRole ? 87 : 0,
      },
    }

    setResults(mockResults)
    onAnalysisComplete?.(mockResults)
  }

  if (!results) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-primary animate-pulse" />
            <span>AI Analysis in Progress</span>
          </CardTitle>
          <CardDescription>Analyzing CV content with advanced machine learning algorithms</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">{Math.round(progress)}%</div>
            <Progress value={progress} className="w-full" />
          </div>

          <div className="space-y-3">
            {analysisSteps.map((step, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  {index < analysisStep ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : index === analysisStep ? (
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-muted" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{step.name}</p>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Analysis Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{results.summary.totalSkills}</div>
            <p className="text-sm text-muted-foreground">Skills Identified</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{results.summary.experienceYears}y</div>
            <p className="text-sm text-muted-foreground">Avg Experience</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">{results.summary.confidenceScore}%</div>
            <p className="text-sm text-muted-foreground">AI Confidence</p>
          </CardContent>
        </Card>
        {targetRole && (
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{results.summary.matchScore}%</div>
              <p className="text-sm text-muted-foreground">Role Match</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Top Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5" />
            <span>Top Skills Detected</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {results.skills.slice(0, 6).map((skill, index) => (
              <div key={skill.name} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {skill.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {skill.yearsExperience}y • {skill.mentions} mentions
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{skill.level}%</div>
                  <div className="text-xs text-muted-foreground">{skill.confidence}% conf.</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>AI Insights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {results.insights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border border-border rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  {insight.type === "strength" && <CheckCircle className="w-4 h-4 text-green-500" />}
                  {insight.type === "opportunity" && <TrendingUp className="w-4 h-4 text-blue-500" />}
                  {insight.type === "gap" && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                  {insight.type === "trend" && <Zap className="w-4 h-4 text-purple-500" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium">{insight.title}</h4>
                    <Badge
                      variant={
                        insight.impact === "high" ? "default" : insight.impact === "medium" ? "secondary" : "outline"
                      }
                      className="text-xs"
                    >
                      {insight.impact}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
