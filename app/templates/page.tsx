"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { FileText, ArrowLeft, Plus, Palette, Layout, Settings, Eye, Copy, Trash2 } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("gallery")

  const templates = [
    {
      id: "modern-tech",
      name: "Modern Tech",
      description: "Clean, modern design perfect for tech companies",
      category: "Technology",
      preview: "/placeholder.svg?height=200&width=300&text=Modern+Tech+Template",
      isDefault: true,
      lastModified: "2024-01-15",
      usageCount: 45,
    },
    {
      id: "corporate-blue",
      name: "Corporate Blue",
      description: "Professional blue theme for enterprise companies",
      category: "Corporate",
      preview: "/placeholder.svg?height=200&width=300&text=Corporate+Blue+Template",
      isDefault: false,
      lastModified: "2024-01-12",
      usageCount: 32,
    },
    {
      id: "startup-minimal",
      name: "Startup Minimal",
      description: "Minimalist design for startups and agencies",
      category: "Startup",
      preview: "/placeholder.svg?height=200&width=300&text=Startup+Minimal+Template",
      isDefault: false,
      lastModified: "2024-01-10",
      usageCount: 28,
    },
    {
      id: "finance-formal",
      name: "Finance Formal",
      description: "Formal template for financial institutions",
      category: "Finance",
      preview: "/placeholder.svg?height=200&width=300&text=Finance+Formal+Template",
      isDefault: false,
      lastModified: "2024-01-08",
      usageCount: 19,
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
            <h1 className="text-3xl font-bold mb-2">Portfolio Templates</h1>
            <p className="text-muted-foreground">Customize and manage your portfolio templates</p>
          </div>
          <Button asChild>
            <Link href="/templates/create">
              <Plus className="w-4 h-4 mr-2" />
              Create Template
            </Link>
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="gallery">Template Gallery</TabsTrigger>
            <TabsTrigger value="customize">Customize</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <Card key={template.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src={template.preview || "/placeholder.svg"}
                        alt={template.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2 flex space-x-1">
                        {template.isDefault && (
                          <Badge variant="secondary" className="text-xs">
                            Default
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs">
                          {template.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{template.name}</h3>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Settings className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Copy className="w-4 h-4 mr-2" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Palette className="w-4 h-4 mr-2" />
                            Customize
                          </DropdownMenuItem>
                          {!template.isDefault && (
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{template.description}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>Used {template.usageCount} times</span>
                      <span>Modified {template.lastModified}</span>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" className="flex-1" onClick={() => setSelectedTemplate(template.id)}>
                        <Palette className="w-4 h-4 mr-2" />
                        Customize
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="customize" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Customization Panel */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Palette className="w-5 h-5" />
                      <span>Brand Customization</span>
                    </CardTitle>
                    <CardDescription>Customize the template with your company branding</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input id="companyName" placeholder="Your Company Name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="logo">Company Logo</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                        <div className="w-16 h-16 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <FileText className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Upload your logo</p>
                        <Input type="file" accept="image/*" className="max-w-xs mx-auto" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="primaryColor">Primary Color</Label>
                        <div className="flex space-x-2">
                          <Input type="color" id="primaryColor" defaultValue="#be123c" className="w-16 h-10" />
                          <Input placeholder="#be123c" className="flex-1" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="secondaryColor">Secondary Color</Label>
                        <div className="flex space-x-2">
                          <Input type="color" id="secondaryColor" defaultValue="#475569" className="w-16 h-10" />
                          <Input placeholder="#475569" className="flex-1" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fontFamily">Font Family</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select font family" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="inter">Inter</SelectItem>
                          <SelectItem value="roboto">Roboto</SelectItem>
                          <SelectItem value="opensans">Open Sans</SelectItem>
                          <SelectItem value="lato">Lato</SelectItem>
                          <SelectItem value="montserrat">Montserrat</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Layout className="w-5 h-5" />
                      <span>Layout Options</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="showLogo">Show Company Logo</Label>
                        <p className="text-sm text-muted-foreground">Display logo in portfolio header</p>
                      </div>
                      <Switch id="showLogo" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="showSkillsChart">Skills Chart</Label>
                        <p className="text-sm text-muted-foreground">Include visual skills proficiency chart</p>
                      </div>
                      <Switch id="showSkillsChart" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="showExperience">Experience Timeline</Label>
                        <p className="text-sm text-muted-foreground">Display work experience timeline</p>
                      </div>
                      <Switch id="showExperience" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="showProjects">Projects Section</Label>
                        <p className="text-sm text-muted-foreground">Include notable projects and achievements</p>
                      </div>
                      <Switch id="showProjects" defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Custom Sections</CardTitle>
                    <CardDescription>Add custom sections specific to your requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="customSection">Section Title</Label>
                      <Input id="customSection" placeholder="e.g., Certifications, Languages" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sectionDescription">Section Description</Label>
                      <Textarea
                        id="sectionDescription"
                        placeholder="Describe what this section should contain..."
                        rows={3}
                      />
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Custom Section
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Preview Panel */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Live Preview</CardTitle>
                    <CardDescription>See how your customizations will look</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="border border-border rounded-lg p-6 bg-card min-h-96">
                      <div className="space-y-4">
                        {/* Mock Portfolio Preview */}
                        <div className="flex items-center space-x-4 pb-4 border-b border-border">
                          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                            <FileText className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">John Doe</h3>
                            <p className="text-muted-foreground">Senior React Developer</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Technical Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {["React", "TypeScript", "Node.js", "AWS"].map((skill, index) => (
                              <Badge key={index} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Experience</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">Senior Developer</span>
                              <span className="text-sm text-muted-foreground">2022-Present</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Full Stack Developer</span>
                              <span className="text-sm text-muted-foreground">2020-2022</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-center pt-4 border-t border-border">
                          <p className="text-sm text-muted-foreground">Generated by Your Company Name</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex space-x-4">
                  <Button className="flex-1">Save Template</Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Save as New
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="max-w-2xl">
              <Card>
                <CardHeader>
                  <CardTitle>Template Settings</CardTitle>
                  <CardDescription>Configure default template behavior and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="defaultTemplate">Default Template</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select default template" />
                      </SelectTrigger>
                      <SelectContent>
                        {templates.map((template) => (
                          <SelectItem key={template.id} value={template.id}>
                            {template.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      This template will be used by default for new portfolios
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="autoApplyBranding">Auto-apply Company Branding</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically apply company colors and logo to new portfolios
                      </p>
                    </div>
                    <Switch id="autoApplyBranding" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="allowCandidateCustomization">Allow Candidate Customization</Label>
                      <p className="text-sm text-muted-foreground">
                        Let candidates make minor customizations to their portfolios
                      </p>
                    </div>
                    <Switch id="allowCandidateCustomization" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="watermark">Include Watermark</Label>
                      <p className="text-sm text-muted-foreground">
                        Add "Generated by SkillForge" watermark to portfolios
                      </p>
                    </div>
                    <Switch id="watermark" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="exportFormats">Default Export Formats</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="pdf" defaultChecked />
                        <Label htmlFor="pdf">PDF</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="docx" defaultChecked />
                        <Label htmlFor="docx">Word Document</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="html" />
                        <Label htmlFor="html">HTML</Label>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full">Save Settings</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
