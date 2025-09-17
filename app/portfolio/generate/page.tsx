"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, ArrowLeft, Wand2, Settings, Eye, CheckCircle, Loader2, Palette, Layout, User } from "lucide-react"
import Link from "next/link"

export default function GeneratePortfolioPage() {
  const [generationStep, setGenerationStep] = useState<"configure" | "generating" | "complete">("configure")
  const [progress, setProgress] = useState(0)
  const [selectedCandidate, setSelectedCandidate] = useState("sarah-chen")
  const [selectedTemplate, setSelectedTemplate] = useState("modern-tech")
  const [customizations, setCustomizations] = useState({
    companyName: "TechCorp Inc.",
    primaryColor: "#be123c",
    showLogo: true,
    showSkillsChart: true,
    showExperience: true,
    showProjects: true,
    showEducation: true,
    showCertifications: true,
    customSections: [],
    anonymize: false,
    language: "en",
  })

  const candidates = [
    { id: "sarah-chen", name: "Sarah Chen", position: "Senior React Developer", status: "analyzed" },
    { id: "marcus-johnson", name: "Marcus Johnson", position: "DevOps Engineer", status: "analyzed" },
    { id: "elena-rodriguez", name: "Elena Rodriguez", position: "Full Stack Developer", status: "processing" },
  ]

  const templates = [
    { id: "modern-tech", name: "Modern Tech", category: "Technology" },
    { id: "corporate-blue", name: "Corporate Blue", category: "Corporate" },
    { id: "startup-minimal", name: "Startup Minimal", category: "Startup" },
    { id: "finance-formal", name: "Finance Formal", category: "Finance" },
  ]

  const generationSteps = [
    { name: "Template Setup", description: "Applying selected template and customizations" },
    { name: "Content Processing", description: "Processing candidate data and skills analysis" },
    { name: "Layout Generation", description: "Creating optimized layout and sections" },
    { name: "Brand Application", description: "Applying company branding and colors" },
    { name: "Final Assembly", description: "Assembling final portfolio document" },
  ]

  const handleGenerate = async () => {
    setGenerationStep("generating")

    // Simulate generation process
    for (let i = 0; i < generationSteps.length; i++) {
      for (let j = 0; j <= 100; j += 10) {
        setProgress((i * 100 + j) / generationSteps.length)
        await new Promise((resolve) => setTimeout(resolve, 150))
      }
    }

    setTimeout(() => {
      setGenerationStep("complete")
    }, 1000)
  }

  if (generationStep === "generating") {
    return (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="border-b border-border bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">SkillForge</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Generating Portfolio</h1>
              <p className="text-muted-foreground">Creating professional portfolio with AI-powered optimization</p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">{Math.round(progress)}%</div>
                    <Progress value={progress} className="w-full" />
                  </div>

                  <div className="space-y-4">
                    {generationSteps.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          {index < Math.floor(progress / 20) ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : index === Math.floor(progress / 20) ? (
                            <Loader2 className="w-5 h-5 text-primary animate-spin" />
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  if (generationStep === "complete") {
    return (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="border-b border-border bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">SkillForge</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Portfolio Generated Successfully!</h1>
              <p className="text-muted-foreground">Your professional portfolio is ready for review and export</p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">6</div>
                      <div className="text-sm text-muted-foreground">Sections Generated</div>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">23</div>
                      <div className="text-sm text-muted-foreground">Skills Highlighted</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Portfolio Highlights:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Professional summary optimized</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Skills categorized and ranked</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Experience timeline created</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">Company branding applied</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="flex-1" asChild>
                      <Link href="/portfolio/preview">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview Portfolio
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => setGenerationStep("configure")}
                    >
                      <Wand2 className="w-4 h-4 mr-2" />
                      Generate Another
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Generate Portfolio</h1>
          <p className="text-muted-foreground">Configure and generate a professional skill portfolio</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="candidate" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="candidate">Candidate</TabsTrigger>
                <TabsTrigger value="template">Template</TabsTrigger>
                <TabsTrigger value="branding">Branding</TabsTrigger>
                <TabsTrigger value="sections">Sections</TabsTrigger>
              </TabsList>

              <TabsContent value="candidate" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="w-5 h-5" />
                      <span>Select Candidate</span>
                    </CardTitle>
                    <CardDescription>Choose the candidate for portfolio generation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {candidates.map((candidate) => (
                        <div
                          key={candidate.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            selectedCandidate === candidate.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => setSelectedCandidate(candidate.id)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">{candidate.name}</h3>
                              <p className="text-sm text-muted-foreground">{candidate.position}</p>
                            </div>
                            <Badge variant={candidate.status === "analyzed" ? "default" : "secondary"}>
                              {candidate.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="template" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Layout className="w-5 h-5" />
                      <span>Choose Template</span>
                    </CardTitle>
                    <CardDescription>Select the design template for the portfolio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {templates.map((template) => (
                        <div
                          key={template.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                            selectedTemplate === template.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() => setSelectedTemplate(template.id)}
                        >
                          <div className="aspect-[3/4] bg-muted rounded mb-3 flex items-center justify-center">
                            <span className="text-muted-foreground">Preview</span>
                          </div>
                          <h3 className="font-semibold">{template.name}</h3>
                          <Badge variant="outline" className="text-xs mt-1">
                            {template.category}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="branding" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Palette className="w-5 h-5" />
                      <span>Company Branding</span>
                    </CardTitle>
                    <CardDescription>Customize the portfolio with your company branding</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        value={customizations.companyName}
                        onChange={(e) => setCustomizations({ ...customizations, companyName: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="primaryColor">Primary Color</Label>
                      <div className="flex space-x-2">
                        <Input
                          type="color"
                          id="primaryColor"
                          value={customizations.primaryColor}
                          onChange={(e) => setCustomizations({ ...customizations, primaryColor: e.target.value })}
                          className="w-16 h-10"
                        />
                        <Input
                          value={customizations.primaryColor}
                          onChange={(e) => setCustomizations({ ...customizations, primaryColor: e.target.value })}
                          className="flex-1"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="language">Language</Label>
                      <Select
                        value={customizations.language}
                        onValueChange={(value) => setCustomizations({ ...customizations, language: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="it">Italian</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="anonymize">Anonymous Portfolio</Label>
                        <p className="text-sm text-muted-foreground">Hide personal information for client submission</p>
                      </div>
                      <Switch
                        id="anonymize"
                        checked={customizations.anonymize}
                        onCheckedChange={(checked) => setCustomizations({ ...customizations, anonymize: checked })}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sections" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="w-5 h-5" />
                      <span>Portfolio Sections</span>
                    </CardTitle>
                    <CardDescription>Configure which sections to include in the portfolio</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="showSkillsChart">Skills Chart</Label>
                        <p className="text-sm text-muted-foreground">Visual skills proficiency chart</p>
                      </div>
                      <Switch
                        id="showSkillsChart"
                        checked={customizations.showSkillsChart}
                        onCheckedChange={(checked) =>
                          setCustomizations({ ...customizations, showSkillsChart: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="showExperience">Work Experience</Label>
                        <p className="text-sm text-muted-foreground">Detailed work history and achievements</p>
                      </div>
                      <Switch
                        id="showExperience"
                        checked={customizations.showExperience}
                        onCheckedChange={(checked) => setCustomizations({ ...customizations, showExperience: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="showProjects">Projects</Label>
                        <p className="text-sm text-muted-foreground">Notable projects and achievements</p>
                      </div>
                      <Switch
                        id="showProjects"
                        checked={customizations.showProjects}
                        onCheckedChange={(checked) => setCustomizations({ ...customizations, showProjects: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="showEducation">Education</Label>
                        <p className="text-sm text-muted-foreground">Educational background and qualifications</p>
                      </div>
                      <Switch
                        id="showEducation"
                        checked={customizations.showEducation}
                        onCheckedChange={(checked) => setCustomizations({ ...customizations, showEducation: checked })}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="showCertifications">Certifications</Label>
                        <p className="text-sm text-muted-foreground">Professional certifications and credentials</p>
                      </div>
                      <Switch
                        id="showCertifications"
                        checked={customizations.showCertifications}
                        onCheckedChange={(checked) =>
                          setCustomizations({ ...customizations, showCertifications: checked })
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Summary Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generation Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Candidate</Label>
                  <p className="text-sm text-muted-foreground">
                    {candidates.find((c) => c.id === selectedCandidate)?.name}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Template</Label>
                  <p className="text-sm text-muted-foreground">
                    {templates.find((t) => t.id === selectedTemplate)?.name}
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Company</Label>
                  <p className="text-sm text-muted-foreground">{customizations.companyName}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Sections</Label>
                  <p className="text-sm text-muted-foreground">
                    {Object.values(customizations).filter((v) => v === true).length} sections enabled
                  </p>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full" onClick={handleGenerate}>
              <Wand2 className="w-4 h-4 mr-2" />
              Generate Portfolio
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Estimated Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2-3</div>
                  <p className="text-sm text-muted-foreground">minutes</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
