"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  FileText,
  ArrowLeft,
  Download,
  Share,
  Edit,
  Eye,
  Palette,
  Settings,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function PortfolioPreviewPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("modern-tech")
  const [editMode, setEditMode] = useState(false)
  const [portfolioData, setPortfolioData] = useState({
    personalInfo: {
      name: "Sarah Chen",
      title: "Senior React Developer",
      email: "sarah.chen@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      summary:
        "Experienced React developer with 5+ years building scalable web applications. Passionate about modern frontend technologies and user experience design.",
    },
    skills: [
      { name: "React", level: 95, category: "Frontend", years: 4.5 },
      { name: "TypeScript", level: 90, category: "Frontend", years: 3.2 },
      { name: "Node.js", level: 85, category: "Backend", years: 3.8 },
      { name: "AWS", level: 75, category: "DevOps", years: 2.1 },
      { name: "PostgreSQL", level: 80, category: "Database", years: 3.5 },
      { name: "Docker", level: 70, category: "DevOps", years: 1.8 },
    ],
    experience: [
      {
        title: "Senior React Developer",
        company: "TechCorp Inc.",
        period: "2022 - Present",
        location: "San Francisco, CA",
        description:
          "Lead frontend development for enterprise SaaS platform serving 10k+ users. Built reusable component library and improved performance by 40%.",
        achievements: [
          "Reduced bundle size by 35% through code splitting",
          "Mentored 3 junior developers",
          "Implemented automated testing pipeline",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "StartupXYZ",
        period: "2020 - 2022",
        location: "San Francisco, CA",
        description:
          "Developed full-stack web applications using React, Node.js, and PostgreSQL. Collaborated with design team to implement pixel-perfect UIs.",
        achievements: [
          "Built MVP that acquired first 1000 users",
          "Integrated payment processing with Stripe",
          "Optimized database queries for 50% faster load times",
        ],
      },
      {
        title: "Frontend Developer",
        company: "WebAgency Pro",
        period: "2018 - 2020",
        location: "San Francisco, CA",
        description:
          "Created responsive websites and web applications for various clients. Specialized in React and modern CSS frameworks.",
        achievements: [
          "Delivered 15+ client projects on time",
          "Improved client satisfaction scores by 25%",
          "Established frontend development best practices",
        ],
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University of California, Berkeley",
        period: "2014 - 2018",
        gpa: "3.8/4.0",
      },
    ],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Full-stack e-commerce solution built with React, Node.js, and PostgreSQL",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
        link: "https://github.com/sarahchen/ecommerce",
      },
      {
        name: "Task Management App",
        description: "Real-time collaborative task management application with WebSocket integration",
        technologies: ["React", "Socket.io", "MongoDB", "Express"],
        link: "https://github.com/sarahchen/taskapp",
      },
    ],
    certifications: [
      {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        date: "2023",
        credentialId: "AWS-DEV-2023-001",
      },
    ],
  })

  const templates = [
    { id: "modern-tech", name: "Modern Tech", preview: "/placeholder.svg?height=300&width=200&text=Modern" },
    { id: "corporate-blue", name: "Corporate Blue", preview: "/placeholder.svg?height=300&width=200&text=Corporate" },
    { id: "creative-design", name: "Creative Design", preview: "/placeholder.svg?height=300&width=200&text=Creative" },
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
            <h1 className="text-3xl font-bold mb-2">Portfolio Preview</h1>
            <p className="text-muted-foreground">Review and customize the generated portfolio</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => setEditMode(!editMode)}>
              <Edit className="w-4 h-4 mr-2" />
              {editMode ? "View Mode" : "Edit Mode"}
            </Button>
            <Button variant="outline">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Controls */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="w-5 h-5" />
                  <span>Template</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map((template) => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Sections</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="showSummary">Professional Summary</Label>
                  <Switch id="showSummary" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="showSkills">Technical Skills</Label>
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="showCertifications">Certifications</Label>
                  <Switch id="showCertifications" defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Export Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="w-4 h-4 mr-2" />
                  PDF Document
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="w-4 h-4 mr-2" />
                  Word Document
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Eye className="w-4 h-4 mr-2" />
                  HTML Preview
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Preview */}
          <div className="lg:col-span-3">
            <Card className="min-h-screen">
              <CardContent className="p-8">
                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Header Section */}
                  <div className="flex items-start space-x-6 pb-8 border-b border-border">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" />
                      <AvatarFallback className="text-2xl">
                        {portfolioData.personalInfo.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      {editMode ? (
                        <div className="space-y-4">
                          <Input
                            value={portfolioData.personalInfo.name}
                            onChange={(e) =>
                              setPortfolioData({
                                ...portfolioData,
                                personalInfo: { ...portfolioData.personalInfo, name: e.target.value },
                              })
                            }
                            className="text-3xl font-bold border-none p-0 h-auto"
                          />
                          <Input
                            value={portfolioData.personalInfo.title}
                            onChange={(e) =>
                              setPortfolioData({
                                ...portfolioData,
                                personalInfo: { ...portfolioData.personalInfo, title: e.target.value },
                              })
                            }
                            className="text-xl text-muted-foreground border-none p-0 h-auto"
                          />
                        </div>
                      ) : (
                        <>
                          <h1 className="text-3xl font-bold text-primary mb-2">{portfolioData.personalInfo.name}</h1>
                          <h2 className="text-xl text-muted-foreground mb-4">{portfolioData.personalInfo.title}</h2>
                        </>
                      )}

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Mail className="w-4 h-4" />
                          <span>{portfolioData.personalInfo.email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="w-4 h-4" />
                          <span>{portfolioData.personalInfo.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{portfolioData.personalInfo.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <section>
                    <h3 className="text-xl font-semibold text-primary mb-4">Professional Summary</h3>
                    {editMode ? (
                      <Textarea
                        value={portfolioData.personalInfo.summary}
                        onChange={(e) =>
                          setPortfolioData({
                            ...portfolioData,
                            personalInfo: { ...portfolioData.personalInfo, summary: e.target.value },
                          })
                        }
                        rows={3}
                      />
                    ) : (
                      <p className="text-muted-foreground leading-relaxed">{portfolioData.personalInfo.summary}</p>
                    )}
                  </section>

                  {/* Technical Skills */}
                  <section>
                    <h3 className="text-xl font-semibold text-primary mb-6">Technical Skills</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {portfolioData.skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs">
                                {skill.category}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{skill.years}y</span>
                            </div>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Proficiency</span>
                            <span>{skill.level}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Work Experience */}
                  <section>
                    <h3 className="text-xl font-semibold text-primary mb-6">Work Experience</h3>
                    <div className="space-y-8">
                      {portfolioData.experience.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-primary/20">
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                          <div className="space-y-3">
                            <div>
                              <h4 className="text-lg font-semibold">{exp.title}</h4>
                              <div className="flex items-center space-x-4 text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Briefcase className="w-4 h-4" />
                                  <span>{exp.company}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{exp.period}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-muted-foreground">{exp.description}</p>
                            <div>
                              <h5 className="font-medium mb-2">Key Achievements:</h5>
                              <ul className="space-y-1">
                                {exp.achievements.map((achievement, achIndex) => (
                                  <li
                                    key={achIndex}
                                    className="flex items-start space-x-2 text-sm text-muted-foreground"
                                  >
                                    <Star className="w-3 h-3 mt-1 text-primary flex-shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Education */}
                  <section>
                    <h3 className="text-xl font-semibold text-primary mb-6">Education</h3>
                    <div className="space-y-4">
                      {portfolioData.education.map((edu, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{edu.degree}</h4>
                            <p className="text-muted-foreground">{edu.school}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{edu.period}</span>
                              <span>GPA: {edu.gpa}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Projects */}
                  <section>
                    <h3 className="text-xl font-semibold text-primary mb-6">Notable Projects</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {portfolioData.projects.map((project, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Code className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold mb-2">{project.name}</h4>
                                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                                <div className="flex flex-wrap gap-1 mb-3">
                                  {project.technologies.map((tech, techIndex) => (
                                    <Badge key={techIndex} variant="secondary" className="text-xs">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                                {project.link && (
                                  <a
                                    href={project.link}
                                    className="text-xs text-primary hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    View Project →
                                  </a>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>

                  {/* Certifications */}
                  <section>
                    <h3 className="text-xl font-semibold text-primary mb-6">Certifications</h3>
                    <div className="space-y-4">
                      {portfolioData.certifications.map((cert, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Award className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{cert.name}</h4>
                            <p className="text-muted-foreground">{cert.issuer}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>Issued: {cert.date}</span>
                              <span>ID: {cert.credentialId}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Footer */}
                  <div className="text-center pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Generated by SkillForge • Professional Portfolio Platform
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
