"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Wand2, CheckCircle, Loader2, FileText, Palette, Layout } from "lucide-react"

interface PortfolioGeneratorProps {
  candidateData: any
  templateId: string
  customizations: any
  onGenerationComplete?: (portfolioId: string) => void
}

export function PortfolioGenerator({
  candidateData,
  templateId,
  customizations,
  onGenerationComplete,
}: PortfolioGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const generationSteps = [
    {
      name: "Template Processing",
      description: "Loading and configuring selected template",
      icon: Layout,
    },
    {
      name: "Content Analysis",
      description: "Processing candidate skills and experience",
      icon: FileText,
    },
    {
      name: "Layout Optimization",
      description: "Optimizing content layout and structure",
      icon: Wand2,
    },
    {
      name: "Brand Application",
      description: "Applying company branding and colors",
      icon: Palette,
    },
    {
      name: "Final Assembly",
      description: "Generating final portfolio document",
      icon: CheckCircle,
    },
  ]

  const handleGenerate = async () => {
    setIsGenerating(true)
    setProgress(0)
    setCurrentStep(0)

    // Simulate generation process
    for (let i = 0; i < generationSteps.length; i++) {
      setCurrentStep(i)

      for (let j = 0; j <= 100; j += 10) {
        setProgress((i * 100 + j) / generationSteps.length)
        await new Promise((resolve) => setTimeout(resolve, 100))
      }
    }

    // Complete generation
    setTimeout(() => {
      setIsGenerating(false)
      onGenerationComplete?.("portfolio-123")
    }, 500)
  }

  if (isGenerating) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Loader2 className="w-5 h-5 text-primary animate-spin" />
            <span>Generating Portfolio</span>
          </CardTitle>
          <CardDescription>Creating professional portfolio with AI optimization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">{Math.round(progress)}%</div>
            <Progress value={progress} className="w-full" />
          </div>

          <div className="space-y-4">
            {generationSteps.map((step, index) => {
              const StepIcon = step.icon
              return (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {index < currentStep ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : index === currentStep ? (
                      <Loader2 className="w-5 h-5 text-primary animate-spin" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-muted" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{step.name}</p>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Generation</CardTitle>
        <CardDescription>Generate a professional portfolio with the configured settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Candidate</span>
            <Badge variant="secondary">{candidateData?.name || "Selected"}</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Template</span>
            <Badge variant="secondary">{templateId}</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Sections</span>
            <Badge variant="secondary">{Object.values(customizations).filter((v) => v === true).length} enabled</Badge>
          </div>
        </div>

        <Button onClick={handleGenerate} className="w-full">
          <Wand2 className="w-4 h-4 mr-2" />
          Generate Portfolio
        </Button>

        <div className="text-center text-sm text-muted-foreground">Estimated generation time: 2-3 minutes</div>
      </CardContent>
    </Card>
  )
}
