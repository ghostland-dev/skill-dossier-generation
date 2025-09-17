"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { FileText, ArrowLeft, Save, Eye, Palette, Layout, ImageIcon } from "lucide-react"
import Link from "next/link"

export default function CreateTemplatePage() {
  const [templateName, setTemplateName] = useState("")
  const [templateDescription, setTemplateDescription] = useState("")
  const [selectedLayout, setSelectedLayout] = useState("modern")

  const layoutOptions = [
    {
      id: "modern",
      name: "Modern",
      description: "Clean, contemporary design with emphasis on skills",
      preview: "/placeholder.svg?height=150&width=200&text=Modern+Layout",
    },
    {
      id: "classic",
      name: "Classic",
      description: "Traditional CV layout with professional styling",
      preview: "/placeholder.svg?height=150&width=200&text=Classic+Layout",
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold design with visual elements and charts",
      preview: "/placeholder.svg?height=150&width=200&text=Creative+Layout",
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Simple, clean design focusing on content",
      preview: "/placeholder.svg?height=150&width=200&text=Minimal+Layout",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/templates"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Templates</span>
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
          <h1 className="text-3xl font-bold mb-2">Create New Template</h1>
          <p className="text-muted-foreground">Design a custom portfolio template for your organization</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Template Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Template Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="templateName">Template Name</Label>
                  <Input
                    id="templateName"
                    value={templateName}
                    onChange={(e) => setTemplateName(e.target.value)}
                    placeholder="e.g., Tech Company Modern"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="templateDescription">Description</Label>
                  <Textarea
                    id="templateDescription"
                    value={templateDescription}
                    onChange={(e) => setTemplateDescription(e.target.value)}
                    placeholder="Describe the template's purpose and style..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Layout Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Layout className="w-5 h-5" />
                  <span>Layout Style</span>
                </CardTitle>
                <CardDescription>Choose the base layout for your template</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {layoutOptions.map((layout) => (
                    <div
                      key={layout.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedLayout === layout.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedLayout(layout.id)}
                    >
                      <ImageIcon
                        src={layout.preview || "/placeholder.svg"}
                        alt={layout.name}
                        className="w-full h-24 object-cover rounded mb-3"
                      />
                      <h4 className="font-medium mb-1">{layout.name}</h4>
                      <p className="text-sm text-muted-foreground">{layout.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Design Customization */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="w-5 h-5" />
                  <span>Design Elements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="primaryColor">Primary Color</Label>
                    <div className="flex space-x-2">
                      <Input type="color" id="primaryColor" defaultValue="#be123c" className="w-16 h-10" />
                      <Input placeholder="#be123c" className="flex-1" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accentColor">Accent Color</Label>
                    <div className="flex space-x-2">
                      <Input type="color" id="accentColor" defaultValue="#ec4899" className="w-16 h-10" />
                      <Input placeholder="#ec4899" className="flex-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fontFamily">Typography</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select font family" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inter">Inter - Modern & Clean</SelectItem>
                      <SelectItem value="roboto">Roboto - Professional</SelectItem>
                      <SelectItem value="opensans">Open Sans - Friendly</SelectItem>
                      <SelectItem value="lato">Lato - Corporate</SelectItem>
                      <SelectItem value="montserrat">Montserrat - Bold</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label>Section Visibility</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="showPhoto">Profile Photo</Label>
                      <Switch id="showPhoto" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="showSummary">Professional Summary</Label>
                      <Switch id="showSummary" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="showSkills">Skills Section</Label>
                      <Switch id="showSkills" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="showExperience">Work Experience</Label>
                      <Switch id="showExperience" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="showEducation">Education</Label>
                      <Switch id="showEducation" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="showProjects">Projects</Label>
                      <Switch id="showProjects" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Options */}
            <Card>
              <CardHeader>
                <CardTitle>Advanced Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="skillsChart">Skills Proficiency Chart</Label>
                    <p className="text-sm text-muted-foreground">Include visual skill level indicators</p>
                  </div>
                  <Switch id="skillsChart" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="timeline">Experience Timeline</Label>
                    <p className="text-sm text-muted-foreground">Show work history as a timeline</p>
                  </div>
                  <Switch id="timeline" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="qrCode">QR Code</Label>
                    <p className="text-sm text-muted-foreground">Include QR code for digital portfolio</p>
                  </div>
                  <Switch id="qrCode" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customCSS">Custom CSS</Label>
                  <Textarea
                    id="customCSS"
                    placeholder="/* Add custom CSS styles here */"
                    rows={4}
                    className="font-mono text-sm"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>Live Preview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border border-border rounded-lg p-4 bg-card min-h-96">
                  <div className="space-y-4">
                    {/* Mock Portfolio Preview */}
                    <div className="flex items-center space-x-3 pb-3 border-b border-border">
                      <div className="w-10 h-10 bg-muted rounded-full"></div>
                      <div>
                        <h3 className="font-semibold">Jane Smith</h3>
                        <p className="text-sm text-muted-foreground">Software Engineer</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 text-sm">Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {["React", "Python", "AWS"].map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 text-sm">Experience</h4>
                      <div className="space-y-2">
                        <div>
                          <p className="font-medium text-sm">Senior Developer</p>
                          <p className="text-xs text-muted-foreground">2022-Present</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Full Stack Developer</p>
                          <p className="text-xs text-muted-foreground">2020-2022</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-3 border-t border-border">
                      <p className="text-xs text-muted-foreground">{templateName || "Template Preview"}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <Button className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Template
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <Eye className="w-4 h-4 mr-2" />
                Full Preview
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Template Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Sections</span>
                  <span>6 active</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Colors</span>
                  <span>2 defined</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Layout</span>
                  <span className="capitalize">{selectedLayout}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
