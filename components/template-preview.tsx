"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

interface TemplatePreviewProps {
  template: {
    id: string
    name: string
    primaryColor?: string
    accentColor?: string
    fontFamily?: string
    showPhoto?: boolean
    showSkills?: boolean
    showExperience?: boolean
    showProjects?: boolean
    layout?: string
  }
  candidateData?: {
    name: string
    title: string
    email: string
    skills: Array<{ name: string; level: number }>
    experience: Array<{ title: string; company: string; period: string }>
    projects: Array<{ name: string; description: string }>
  }
}

export function TemplatePreview({ template, candidateData }: TemplatePreviewProps) {
  const defaultCandidate = {
    name: "John Doe",
    title: "Senior Software Engineer",
    email: "john.doe@email.com",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "AWS", level: 75 },
    ],
    experience: [
      { title: "Senior Software Engineer", company: "Tech Corp", period: "2022-Present" },
      { title: "Full Stack Developer", company: "StartupXYZ", period: "2020-2022" },
      { title: "Frontend Developer", company: "WebAgency", period: "2018-2020" },
    ],
    projects: [
      { name: "E-commerce Platform", description: "Built scalable e-commerce solution with React and Node.js" },
      { name: "Mobile App", description: "Developed cross-platform mobile app using React Native" },
    ],
  }

  const candidate = candidateData || defaultCandidate

  const styles = {
    primaryColor: template.primaryColor || "#be123c",
    accentColor: template.accentColor || "#ec4899",
    fontFamily: template.fontFamily || "Inter",
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-8" style={{ fontFamily: styles.fontFamily }}>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center space-x-4 pb-6 border-b border-border">
            {template.showPhoto && (
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64" />
                <AvatarFallback>
                  {candidate.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            )}
            <div className="flex-1">
              <h1 className="text-2xl font-bold" style={{ color: styles.primaryColor }}>
                {candidate.name}
              </h1>
              <p className="text-lg text-muted-foreground">{candidate.title}</p>
              <p className="text-sm text-muted-foreground">{candidate.email}</p>
            </div>
          </div>

          {/* Skills Section */}
          {template.showSkills && (
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: styles.primaryColor }}>
                Technical Skills
              </h2>
              <div className="space-y-3">
                {candidate.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Section */}
          {template.showExperience && (
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: styles.primaryColor }}>
                Work Experience
              </h2>
              <div className="space-y-4">
                {candidate.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 pl-4" style={{ borderColor: styles.accentColor }}>
                    <h3 className="font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {template.showProjects && (
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: styles.primaryColor }}>
                Notable Projects
              </h2>
              <div className="space-y-3">
                {candidate.projects.map((project, index) => (
                  <div key={index}>
                    <h3 className="font-medium">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="text-center pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">Generated by {template.name} • SkillForge</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
