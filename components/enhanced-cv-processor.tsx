"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Upload,
  FileText,
  Brain,
  CheckCircle,
  AlertCircle,
  Code,
  Languages,
  Award,
  User,
  Briefcase,
} from "lucide-react"

interface ProcessingStep {
  id: string
  name: string
  description: string
  status: "pending" | "processing" | "completed" | "error"
  progress: number
  details?: string[]
}

export default function EnhancedCVProcessor() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingSteps, setProcessingSteps] = useState<ProcessingStep[]>([
    {
      id: "upload",
      name: "Téléchargement du CV",
      description: "Analyse du format et extraction du contenu",
      status: "pending",
      progress: 0,
    },
    {
      id: "text-extraction",
      name: "Extraction textuelle",
      description: "Conversion en texte structuré",
      status: "pending",
      progress: 0,
    },
    {
      id: "personal-info",
      name: "Informations personnelles",
      description: "Extraction des coordonnées et profil",
      status: "pending",
      progress: 0,
      details: [],
    },
    {
      id: "experience",
      name: "Analyse de l'expérience",
      description: "Extraction des postes et responsabilités",
      status: "pending",
      progress: 0,
      details: [],
    },
    {
      id: "skills-analysis",
      name: "Analyse des compétences",
      description: "Catégorisation et évaluation des compétences techniques",
      status: "pending",
      progress: 0,
      details: [],
    },
    {
      id: "projects",
      name: "Projets et réalisations",
      description: "Identification des projets significatifs",
      status: "pending",
      progress: 0,
      details: [],
    },
    {
      id: "languages",
      name: "Compétences linguistiques",
      description: "Évaluation des niveaux de langues",
      status: "pending",
      progress: 0,
      details: [],
    },
    {
      id: "education",
      name: "Formation et certifications",
      description: "Extraction du parcours académique",
      status: "pending",
      progress: 0,
      details: [],
    },
    {
      id: "soft-skills",
      name: "Compétences transversales",
      description: "Analyse des soft skills et centres d'intérêt",
      status: "pending",
      progress: 0,
      details: [],
    },
    {
      id: "validation",
      name: "Validation et optimisation",
      description: "Vérification de la cohérence des données",
      status: "pending",
      progress: 0,
    },
  ])

  const [extractedData, setExtractedData] = useState<any>(null)

  const simulateProcessing = async () => {
    setIsProcessing(true)

    const stepDetails = {
      "personal-info": [
        "Nom et prénom identifiés",
        "Coordonnées extraites (téléphone, email)",
        "Profils sociaux détectés (LinkedIn, GitHub)",
        "Localisation géographique",
      ],
      experience: [
        "3 postes professionnels identifiés",
        "15 responsabilités techniques extraites",
        "25 technologies mentionnées",
        "8 réalisations quantifiées",
      ],
      "skills-analysis": [
        "45 compétences techniques détectées",
        "8 catégories de compétences identifiées",
        "Niveaux d'expertise estimés",
        "Années d'expérience calculées",
      ],
      projects: [
        "3 projets majeurs identifiés",
        "Technologies utilisées par projet",
        "Réalisations et impacts mesurés",
        "Contexte et envergure évalués",
      ],
      languages: [
        "6 langues identifiées",
        "Niveaux CECR estimés",
        "Contexte d'utilisation analysé",
        "Certifications détectées",
      ],
      education: [
        "4 diplômes et formations identifiés",
        "Institutions et localisations",
        "Périodes et statuts",
        "Spécialisations techniques",
      ],
      "soft-skills": [
        "Centres d'intérêt professionnels",
        "Compétences transversales",
        "Préférences contractuelles",
        "Valeurs et motivations",
      ],
    }

    for (let i = 0; i < processingSteps.length; i++) {
      const step = processingSteps[i]

      // Start processing step
      setProcessingSteps((prev) =>
        prev.map((s) => (s.id === step.id ? { ...s, status: "processing", progress: 0 } : s)),
      )

      // Simulate progress
      for (let progress = 0; progress <= 100; progress += 20) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        setProcessingSteps((prev) => prev.map((s) => (s.id === step.id ? { ...s, progress } : s)))
      }

      // Complete step
      setProcessingSteps((prev) =>
        prev.map((s) =>
          s.id === step.id
            ? {
                ...s,
                status: "completed",
                progress: 100,
                details: stepDetails[step.id as keyof typeof stepDetails] || [],
              }
            : s,
        ),
      )

      await new Promise((resolve) => setTimeout(resolve, 200))
    }

    // Set extracted data
    setExtractedData({
      personalInfo: {
        name: "Ismail Mouyahada",
        title: "Développeur Full-Stack & DevOps Junior",
        confidence: 98,
      },
      experience: {
        positions: 3,
        totalYears: 4,
        confidence: 95,
      },
      skills: {
        technical: 45,
        categories: 8,
        confidence: 92,
      },
      projects: {
        identified: 3,
        confidence: 88,
      },
      languages: {
        count: 6,
        confidence: 90,
      },
      education: {
        degrees: 4,
        confidence: 96,
      },
    })

    setIsProcessing(false)
  }

  const getStepIcon = (step: ProcessingStep) => {
    switch (step.id) {
      case "upload":
        return <Upload className="w-4 h-4" />
      case "text-extraction":
        return <FileText className="w-4 h-4" />
      case "personal-info":
        return <User className="w-4 h-4" />
      case "experience":
        return <Briefcase className="w-4 h-4" />
      case "skills-analysis":
        return <Code className="w-4 h-4" />
      case "projects":
        return <Award className="w-4 h-4" />
      case "languages":
        return <Languages className="w-4 h-4" />
      case "education":
        return <FileText className="w-4 h-4" />
      case "soft-skills":
        return <Brain className="w-4 h-4" />
      case "validation":
        return <CheckCircle className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getStatusIcon = (status: ProcessingStep["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "processing":
        return <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      case "error":
        return <AlertCircle className="w-4 h-4 text-red-500" />
      default:
        return <div className="w-4 h-4 border-2 border-muted rounded-full" />
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5" />
            Processeur IA Avancé de CV
          </CardTitle>
          <CardDescription>
            Analyse complète et extraction intelligente de toutes les informations du CV
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button onClick={simulateProcessing} disabled={isProcessing} className="w-full">
              {isProcessing ? "Traitement en cours..." : "Démarrer l'analyse complète"}
            </Button>

            {(isProcessing || extractedData) && (
              <Tabs defaultValue="progress" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="progress">Progression</TabsTrigger>
                  <TabsTrigger value="results">Résultats</TabsTrigger>
                </TabsList>

                <TabsContent value="progress" className="space-y-4">
                  {processingSteps.map((step) => (
                    <div key={step.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getStepIcon(step)}
                          <span className="font-medium">{step.name}</span>
                          {getStatusIcon(step.status)}
                        </div>
                        <span className="text-sm text-muted-foreground">{step.progress}%</span>
                      </div>
                      <Progress value={step.progress} className="h-2" />
                      <p className="text-sm text-muted-foreground">{step.description}</p>

                      {step.details && step.details.length > 0 && (
                        <div className="ml-6 space-y-1">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span className="text-muted-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="results" className="space-y-4">
                  {extractedData && (
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Informations Personnelles
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex justify-between">
                            <span>Nom identifié</span>
                            <Badge variant="secondary">{extractedData.personalInfo.name}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Titre professionnel</span>
                            <Badge variant="outline">Détecté</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Confiance</span>
                            <Badge variant="default">{extractedData.personalInfo.confidence}%</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            Expérience Professionnelle
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex justify-between">
                            <span>Postes identifiés</span>
                            <Badge variant="secondary">{extractedData.experience.positions}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Années d'expérience</span>
                            <Badge variant="secondary">{extractedData.experience.totalYears} ans</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Confiance</span>
                            <Badge variant="default">{extractedData.experience.confidence}%</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base flex items-center gap-2">
                            <Code className="w-4 h-4" />
                            Compétences Techniques
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex justify-between">
                            <span>Compétences détectées</span>
                            <Badge variant="secondary">{extractedData.skills.technical}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Catégories</span>
                            <Badge variant="secondary">{extractedData.skills.categories}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Confiance</span>
                            <Badge variant="default">{extractedData.skills.confidence}%</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base flex items-center gap-2">
                            <Languages className="w-4 h-4" />
                            Langues & Formation
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex justify-between">
                            <span>Langues identifiées</span>
                            <Badge variant="secondary">{extractedData.languages.count}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Diplômes</span>
                            <Badge variant="secondary">{extractedData.education.degrees}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Projets</span>
                            <Badge variant="secondary">{extractedData.projects.identified}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
