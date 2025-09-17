import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, Brain } from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Démonstration SkillForge</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment notre plateforme transforme automatiquement vos CVs en portfolios de compétences
            professionnels
          </p>
        </div>

        {/* Demo Steps */}
        <div className="grid gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Upload className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle>1. Upload de CV</CardTitle>
                  <CardDescription>Téléchargez votre CV en PDF, Word ou image</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-3">Formats supportés:</p>
                <div className="flex gap-2">
                  <Badge variant="secondary">PDF</Badge>
                  <Badge variant="secondary">DOCX</Badge>
                  <Badge variant="secondary">DOC</Badge>
                  <Badge variant="secondary">JPG</Badge>
                  <Badge variant="secondary">PNG</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle>2. Analyse IA</CardTitle>
                  <CardDescription>Notre IA extrait et analyse automatiquement les compétences</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-3">Extraction automatique:</p>
                <ul className="text-sm space-y-1">
                  <li>• Compétences techniques et soft skills</li>
                  <li>• Expérience et projets</li>
                  <li>• Certifications et formations</li>
                  <li>• Langues et niveaux</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle>3. Génération de Portfolio</CardTitle>
                  <CardDescription>Création automatique d'un portfolio professionnel personnalisé</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-3">Personnalisation:</p>
                <ul className="text-sm space-y-1">
                  <li>• Templates avec branding entreprise</li>
                  <li>• Sections configurables</li>
                  <li>• Mise en page professionnelle</li>
                  <li>• Export multi-formats</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Demo Actions */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/upload">
                <Upload className="w-5 h-5 mr-2" />
                Essayer Maintenant
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/register">Créer un Compte</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Démo gratuite • Aucune carte de crédit requise</p>
        </div>
      </div>
    </div>
  )
}
