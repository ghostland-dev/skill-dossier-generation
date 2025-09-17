"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Zap, CheckCircle } from "lucide-react"

interface ProcessingStep {
  id: string
  title: string
  description: string
  status: "pending" | "processing" | "completed"
  progress: number
}

interface CVProcessorProps {
  fileName: string
  onComplete?: (results: any) => void
}

export function CVProcessor({ fileName, onComplete }: CVProcessorProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [steps, setSteps] = useState<ProcessingStep[]>([
    {
      id: "extract",
      title: "Text Extraction",
      description: "Extracting text content from CV document",
      status: "processing",
      progress: 0,
    },
    {
      id: "analyze",
      title: "Skill Analysis",
      description: "Identifying technical skills and competencies",
      status: "pending",
      progress: 0,
    },
    {
      id: "categorize",
      title: "Categorization",
      description: "Organizing skills by technology and experience level",
      status: "pending",
      progress: 0,
    },
    {
      id: "generate",
      title: "Portfolio Generation",
      description: "Creating structured portfolio document",
      status: "pending",
      progress: 0,
    },
  ])

  const processingResults = {
    skillsFound: 23,
    experienceYears: 5.2,
    categories: ["Frontend", "Backend", "DevOps", "Databases"],
    topSkills: ["React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL"],
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-primary" />
            <span>AI Processing</span>
          </CardTitle>
          <CardDescription>Analyzing {fileName} with advanced AI algorithms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {step.status === "completed" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : step.status === "processing" ? (
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-muted" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium">{step.title}</h4>
                    <span className="text-sm text-muted-foreground">
                      {step.status === "completed" ? "100%" : `${step.progress}%`}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                  <Progress value={step.status === "completed" ? 100 : step.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-primary" />
            <span>Processing Results</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">{processingResults.skillsFound}</div>
              <div className="text-sm text-muted-foreground">Skills Identified</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">{processingResults.experienceYears}</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Skill Categories</h4>
              <div className="flex flex-wrap gap-2">
                {processingResults.categories.map((category, index) => (
                  <Badge key={index} variant="outline">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Top Skills</h4>
              <div className="flex flex-wrap gap-2">
                {processingResults.topSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
