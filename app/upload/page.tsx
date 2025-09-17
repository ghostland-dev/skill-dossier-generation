"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, CheckCircle, ArrowLeft, Brain, FileCheck } from "lucide-react"
import Link from "next/link"
import EnhancedCVProcessor from "@/components/enhanced-cv-processor"

export default function UploadPage() {
  const [uploadStep, setUploadStep] = useState<"upload" | "processing" | "complete">("upload")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [candidateInfo, setCandidateInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    experience: "",
    notes: "",
  })

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return
    setUploadStep("processing")

    // Simulate processing time
    setTimeout(() => {
      setUploadStep("complete")
    }, 15000) // 15 seconds to show the enhanced processor
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
        {uploadStep === "upload" && (
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Upload CV</h1>
              <p className="text-muted-foreground">
                Upload a candidate's CV to automatically generate a comprehensive professional skill portfolio
              </p>
            </div>

            <div className="space-y-8">
              {/* File Upload */}
              <Card>
                <CardHeader>
                  <CardTitle>CV Document</CardTitle>
                  <CardDescription>Upload PDF or Word document. Maximum file size: 10MB</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-lg font-medium">Drop your CV here or click to browse</p>
                      <p className="text-sm text-muted-foreground">Supports PDF, DOC, DOCX files</p>
                    </div>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileSelect}
                      className="mt-4 max-w-xs mx-auto"
                    />
                    {selectedFile && (
                      <div className="mt-4 p-3 bg-muted rounded-lg flex items-center justify-center space-x-2">
                        <FileCheck className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium">{selectedFile.name}</span>
                        <Badge variant="secondary">{(selectedFile.size / 1024 / 1024).toFixed(1)} MB</Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Candidate Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Candidate Information</CardTitle>
                  <CardDescription>Additional details to enhance the portfolio generation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={candidateInfo.firstName}
                        onChange={(e) => setCandidateInfo({ ...candidateInfo, firstName: e.target.value })}
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={candidateInfo.lastName}
                        onChange={(e) => setCandidateInfo({ ...candidateInfo, lastName: e.target.value })}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={candidateInfo.email}
                      onChange={(e) => setCandidateInfo({ ...candidateInfo, email: e.target.value })}
                      placeholder="john.doe@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Target Position</Label>
                    <Input
                      id="position"
                      value={candidateInfo.position}
                      onChange={(e) => setCandidateInfo({ ...candidateInfo, position: e.target.value })}
                      placeholder="Senior React Developer"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select onValueChange={(value) => setCandidateInfo({ ...candidateInfo, experience: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="junior">Junior (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid-level (2-5 years)</SelectItem>
                        <SelectItem value="senior">Senior (5-8 years)</SelectItem>
                        <SelectItem value="lead">Lead (8+ years)</SelectItem>
                        <SelectItem value="principal">Principal/Architect (10+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      value={candidateInfo.notes}
                      onChange={(e) => setCandidateInfo({ ...candidateInfo, notes: e.target.value })}
                      placeholder="Any specific requirements or notes about this candidate..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4">
                <Button variant="outline" asChild>
                  <Link href="/dashboard">Cancel</Link>
                </Button>
                <Button onClick={handleUpload} disabled={!selectedFile}>
                  <Brain className="w-4 h-4 mr-2" />
                  Generate Comprehensive Portfolio
                </Button>
              </div>
            </div>
          </div>
        )}

        {uploadStep === "processing" && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Analyse IA Avancée en Cours</h1>
              <p className="text-muted-foreground">
                Notre IA analyse en profondeur le CV pour extraire toutes les compétences et informations
              </p>
            </div>

            <EnhancedCVProcessor />
          </div>
        )}

        {uploadStep === "complete" && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Portfolio Complet Généré!</h1>
              <p className="text-muted-foreground">
                Le dossier de compétences complet a été créé avec succès et est prêt pour révision
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">45</div>
                      <div className="text-sm text-muted-foreground">Compétences Identifiées</div>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">4</div>
                      <div className="text-sm text-muted-foreground">Années d'Expérience</div>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">6</div>
                      <div className="text-sm text-muted-foreground">Langues Détectées</div>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">3</div>
                      <div className="text-sm text-muted-foreground">Projets Analysés</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Compétences Principales Détectées:</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "JavaScript/TypeScript",
                        "React",
                        "Vue.js",
                        "Node.js",
                        "PHP",
                        "Python",
                        "Docker",
                        "Kubernetes",
                        "Azure",
                        "MySQL",
                        "PostgreSQL",
                        "MongoDB",
                        "GitLab CI/CD",
                        "Terraform",
                        "Ansible",
                        "Prometheus",
                        "Grafana",
                      ].map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button className="flex-1" asChild>
                      <Link href="/portfolio/comprehensive">
                        <FileText className="w-4 h-4 mr-2" />
                        Voir le Portfolio Complet
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent" asChild>
                      <Link href="/upload">
                        <Upload className="w-4 h-4 mr-2" />
                        Télécharger un Autre CV
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
