import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  FileText,
  Upload,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Brain,
  Languages,
  Award,
  Settings,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
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
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/dashboard" className="text-foreground font-medium">
                Dashboard
              </Link>
              <Link href="/candidates" className="text-muted-foreground hover:text-foreground transition-colors">
                Candidats
              </Link>
              <Link href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
                Templates
              </Link>
              <Link href="/analysis" className="text-muted-foreground hover:text-foreground transition-colors">
                Analyse IA
              </Link>
              <Link href="/portfolio/export" className="text-muted-foreground hover:text-foreground transition-colors">
                Export
              </Link>
              <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
                <Settings className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/upload">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload CV
                </Link>
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Bienvenue ! Voici un aperçu de votre activité de recrutement.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Portfolios Totaux</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">247</div>
              <p className="text-xs text-muted-foreground">+12% par rapport au mois dernier</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Candidats Actifs</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">+5% par rapport au mois dernier</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Temps de Traitement</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.3m</div>
              <p className="text-xs text-muted-foreground">Moyenne par portfolio</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux de Réussite</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.5%</div>
              <p className="text-xs text-muted-foreground">Génération de portfolio</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Portfolios Récents</CardTitle>
                <CardDescription>Derniers dossiers de compétences générés</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Ismail Mouyahada",
                      role: "Développeur Full-Stack & DevOps",
                      status: "completed",
                      time: "2 heures",
                      skills: ["React", "TypeScript", "Docker", "Azure", "Python", "PHP"],
                      languages: 6,
                      projects: 3,
                    },
                    {
                      name: "Sarah Chen",
                      role: "Senior React Developer",
                      status: "completed",
                      time: "4 heures",
                      skills: ["React", "TypeScript", "Node.js"],
                      languages: 3,
                      projects: 2,
                    },
                    {
                      name: "Marcus Johnson",
                      role: "DevOps Engineer",
                      status: "processing",
                      time: "6 heures",
                      skills: ["AWS", "Docker", "Kubernetes"],
                      languages: 2,
                      projects: 4,
                    },
                    {
                      name: "Elena Rodriguez",
                      role: "Full Stack Developer",
                      status: "completed",
                      time: "6 heures",
                      skills: ["Vue.js", "Python", "PostgreSQL"],
                      languages: 3,
                      projects: 2,
                    },
                    {
                      name: "David Kim",
                      role: "Mobile Developer",
                      status: "review",
                      time: "1 jour",
                      skills: ["React Native", "Swift", "Kotlin"],
                      languages: 2,
                      projects: 1,
                    },
                  ].map((portfolio, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>
                            {portfolio.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{portfolio.name}</p>
                          <p className="text-sm text-muted-foreground">{portfolio.role}</p>
                          <div className="flex gap-1 mt-1">
                            {portfolio.skills.slice(0, 3).map((skill, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {portfolio.skills.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{portfolio.skills.length - 3}
                              </Badge>
                            )}
                          </div>
                          <div className="flex gap-2 mt-1 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Languages className="w-3 h-3" />
                              {portfolio.languages} langues
                            </span>
                            <span className="flex items-center gap-1">
                              <Award className="w-3 h-3" />
                              {portfolio.projects} projets
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          {portfolio.status === "completed" && <CheckCircle className="w-4 h-4 text-green-500" />}
                          {portfolio.status === "processing" && <Clock className="w-4 h-4 text-yellow-500" />}
                          {portfolio.status === "review" && <AlertCircle className="w-4 h-4 text-blue-500" />}
                          <Badge
                            variant={
                              portfolio.status === "completed"
                                ? "default"
                                : portfolio.status === "processing"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {portfolio.status === "completed" ? "Terminé" : "En cours"}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Il y a {portfolio.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" asChild>
                  <Link href="/upload">
                    <Upload className="w-4 h-4 mr-2" />
                    Télécharger un CV
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/templates">
                    <Plus className="w-4 h-4 mr-2" />
                    Créer un Template
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/candidates">
                    <Users className="w-4 h-4 mr-2" />
                    Voir Tous les Candidats
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/analysis">
                    <Brain className="w-4 h-4 mr-2" />
                    Analyse IA Avancée
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/portfolio/comprehensive">
                    <FileText className="w-4 h-4 mr-2" />
                    Portfolio Exemple
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Statut de Traitement</CardTitle>
                <CardDescription>Performance actuelle du système</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Analyse IA</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Génération de Template</span>
                    <span>87%</span>
                  </div>
                  <Progress value={87} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>File d'Export</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
