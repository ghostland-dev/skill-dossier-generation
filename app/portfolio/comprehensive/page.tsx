"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  User,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Award,
  Code,
  Database,
  Cloud,
  Monitor,
  Zap,
  Users,
  BookOpen,
  Languages,
  Heart,
  Download,
  Share2,
  Edit3,
} from "lucide-react"

export default function ComprehensivePortfolioPage() {
  const [activeSection, setActiveSection] = useState("overview")

  // Sample data based on the provided CV example
  const candidateData = {
    personalInfo: {
      name: "Ismail Mouyahada",
      title: "Développeur Full-Stack & DevOps Junior",
      phone: "+33 7 84 07 50 61",
      email: "ismail.mouyahada@gmail.com",
      linkedin: "linkedin.com/in/ismail-mouyahada",
      github: "github.com/Ismail-Mouyahada",
      location: "Saint-Étienne-du-Rouvray, France",
      photo: "/professional-developer.png",
    },
    professionalProfile:
      "Développeur full-stack avec quatre années d'expérience technique évoluant vers les pratiques DevOps depuis dix-huit mois. Ma progression professionnelle s'articule autour de l'automatisation des processus de développement et la gestion d'infrastructures cloud.",
    experience: [
      {
        title: "DevOps Junior",
        company: "Access Energies",
        location: "Petit-Couronne, France",
        period: "Septembre 2024 - Février 2025 (5 mois)",
        responsibilities: [
          "Optimisation et maintenance des pipelines de déploiement automatisés existants",
          "Administration d'environnements cloud Azure pour les phases de développement et test",
          "Assistance technique sur la conteneurisation d'applications métier en microservices",
          "Participation à l'implémentation d'infrastructure as code avec Terraform",
        ],
        technologies: [
          "Azure DevOps",
          "Docker",
          "Kubernetes",
          "Terraform",
          "Ansible",
          "Prometheus",
          "Bash",
          "PowerShell",
        ],
        achievements: [
          "Automatisation de trois processus de déploiement manuels réduisant les erreurs de mise en production",
          "Contribution à la migration de deux applications legacy vers une architecture containerisée",
          "Mise en place de dashboards de monitoring basiques avec Prometheus et Grafana",
        ],
      },
      {
        title: "Concepteur et Développeur Informatique",
        company: "Access Energies",
        location: "Petit-Couronne, France",
        period: "Septembre 2023 - Septembre 2024 (1 an)",
        responsibilities: [
          "Conception d'interfaces utilisateur et expérience utilisateur avec Figma",
          "Participation à l'architecture logicielle utilisant UML et modèles conceptuels de données",
          "Développement d'applications full-stack en TypeScript, PHP, Python, C# et Dart",
          "Conception et optimisation de schémas de bases de données relationnelles et NoSQL",
        ],
        technologies: [
          "React",
          "Vue.js",
          "Next.js",
          "Node.js",
          "Symfony",
          "Laravel",
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Redis",
        ],
        achievements: [
          "Développement d'une application de gestion interne React/Node.js avec authentification JWT",
          "Création et validation de six maquettes UI/UX intégrées en environnement production",
          "Optimisation de requêtes SQL complexes améliorant les performances de trente pour cent",
        ],
      },
    ],
    skills: {
      "Développement Full-Stack": {
        level: 95,
        experience: "4 ans",
        subcategories: {
          "Langages de programmation": [
            { name: "JavaScript/TypeScript", level: 95, experience: "4 ans" },
            { name: "PHP", level: 90, experience: "4 ans" },
            { name: "Python", level: 85, experience: "3 ans" },
            { name: "C#", level: 80, experience: "2 ans" },
            { name: "Dart", level: 75, experience: "2 ans" },
          ],
          "Frameworks Frontend": [
            { name: "React", level: 95, experience: "4 ans" },
            { name: "Vue.js", level: 85, experience: "3 ans" },
            { name: "Next.js", level: 90, experience: "3 ans" },
            { name: "Angular", level: 70, experience: "2 ans" },
          ],
          "Frameworks Backend": [
            { name: "Node.js/Express", level: 95, experience: "4 ans" },
            { name: "NestJS", level: 85, experience: "2 ans" },
            { name: "Symfony", level: 90, experience: "3 ans" },
            { name: "Laravel", level: 90, experience: "3 ans" },
            { name: "Django", level: 80, experience: "2 ans" },
          ],
        },
      },
      "Bases de Données": {
        level: 90,
        experience: "4 ans",
        subcategories: {
          Relationnelles: [
            { name: "MySQL", level: 95, experience: "4 ans" },
            { name: "PostgreSQL", level: 90, experience: "3 ans" },
            { name: "SQL Server", level: 80, experience: "2 ans" },
          ],
          "Non-relationnelles": [
            { name: "MongoDB", level: 85, experience: "3 ans" },
            { name: "Redis", level: 80, experience: "2 ans" },
          ],
        },
      },
      "DevOps et Infrastructure": {
        level: 75,
        experience: "1.5 ans",
        subcategories: {
          Conteneurisation: [
            { name: "Docker", level: 85, experience: "1.5 ans" },
            { name: "Kubernetes", level: 70, experience: "1 an" },
          ],
          "Cloud Computing": [
            { name: "Microsoft Azure", level: 80, experience: "1.5 ans" },
            { name: "Amazon AWS", level: 60, experience: "6 mois" },
          ],
          "CI/CD": [
            { name: "GitLab CI/CD", level: 85, experience: "1.5 ans" },
            { name: "Azure DevOps", level: 80, experience: "1 an" },
          ],
        },
      },
    },
    projects: [
      {
        name: "Application mobile suivi énergétique",
        technologies: ["Flutter", "React Native", "Node.js", "Chart.js"],
        description:
          "Interface utilisateur intuitive pour mille utilisateurs actifs avec synchronisation données temps réel",
        achievements: ["Graphiques consommation intégrant Chart.js", "Publication réussie sur stores iOS et Android"],
      },
      {
        name: "API de gestion interne",
        technologies: ["TypeScript", "C#", "PHP", "MySQL", "PostgreSQL", "Redis"],
        description: "Interconnexion trois systèmes métier existants avec authentification JWT sécurisée",
        achievements: ["Documentation Swagger complète", "Performances optimisées avec cache Redis"],
      },
      {
        name: "Dashboard de monitoring",
        technologies: ["React", "GraphQL", "Prometheus", "Grafana"],
        description: "Visualisation temps réel consommations énergétiques avec interface responsive",
        achievements: ["Intégration GraphQL optimisant requêtes frontend", "Notifications push pour alertes critiques"],
      },
    ],
    languages: [
      { name: "Tamazight", level: "Langue maternelle", proficiency: 100 },
      { name: "Arabe", level: "Langue maternelle", proficiency: 100 },
      { name: "Français", level: "Courant (C2)", proficiency: 95 },
      { name: "Anglais", level: "Courant (C2)", proficiency: 95 },
      { name: "Espagnol", level: "Intermédiaire (B1)", proficiency: 70 },
      { name: "Allemand", level: "Intermédiaire (B1)", proficiency: 70 },
    ],
    education: [
      {
        degree: "Master I en architecture logicielle des SI",
        institution: "CESI",
        location: "St-Étienne-du-Rouvray, France",
        period: "06/2024 - 06/2025",
        status: "En cours",
      },
      {
        degree: "Bachelor en conception et développement d'applications",
        institution: "CESI",
        location: "St-Étienne-du-Rouvray, France",
        period: "09/2023 - 09/2024",
        status: "Obtenu",
      },
    ],
    interests: [
      {
        category: "Créativité Technique",
        description: "Dessin et peinture développant sens esthétique appliqué design interfaces utilisateur",
      },
      {
        category: "Apprentissage Linguistique",
        description: "Maîtrise six langues démontrant capacités d'apprentissage et ouverture culturelle",
      },
      {
        category: "Contribution Communautaire",
        description: "Participation active projets open source, partage connaissances",
      },
    ],
    contractPreferences: {
      types: ["CDI", "CDD", "Professionnalisation", "Alternance"],
      workModes: ["Sur site", "Télétravail", "Mode hybride"],
      salaryRange: "35 000 - 40 000 euros annuels",
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center overflow-hidden">
              <User className="w-16 h-16 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{candidateData.personalInfo.name}</h1>
              <p className="text-xl text-muted-foreground mb-4">{candidateData.personalInfo.title}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{candidateData.personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{candidateData.personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span>{candidateData.personalInfo.linkedin}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>{candidateData.personalInfo.github}</span>
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <MapPin className="w-4 h-4" />
                  <span>{candidateData.personalInfo.location}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Edit3 className="w-4 h-4 mr-2" />
                Modifier
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Partager
              </Button>
              <Button size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exporter PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-7">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="experience">Expérience</TabsTrigger>
            <TabsTrigger value="skills">Compétences</TabsTrigger>
            <TabsTrigger value="projects">Projets</TabsTrigger>
            <TabsTrigger value="education">Formation</TabsTrigger>
            <TabsTrigger value="languages">Langues</TabsTrigger>
            <TabsTrigger value="interests">Centres d'intérêt</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profil Professionnel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{candidateData.professionalProfile}</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Compétences Principales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(candidateData.skills).map(([category, data]) => (
                    <div key={category} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{category}</span>
                        <span className="text-sm text-muted-foreground">{data.experience}</span>
                      </div>
                      <Progress value={data.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="w-5 h-5" />
                    Langues
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {candidateData.languages.slice(0, 4).map((lang) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-sm text-muted-foreground">{lang.level}</span>
                      </div>
                      <Progress value={lang.proficiency} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Projets Récents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {candidateData.projects.map((project, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <h4 className="font-semibold mb-2">{project.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            {candidateData.experience.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="text-base">
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Responsabilités techniques :</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Réalisations marquantes :</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            {Object.entries(candidateData.skills).map(([category, data]) => (
              <Card key={category}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center gap-2">
                      {category === "Développement Full-Stack" && <Code className="w-5 h-5" />}
                      {category === "Bases de Données" && <Database className="w-5 h-5" />}
                      {category === "DevOps et Infrastructure" && <Cloud className="w-5 h-5" />}
                      {category}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Progress value={data.level} className="w-20 h-2" />
                      <span className="text-sm font-medium">{data.level}%</span>
                    </div>
                  </div>
                  <CardDescription>Expérience : {data.experience}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {Object.entries(data.subcategories).map(([subcat, skills]) => (
                    <div key={subcat}>
                      <h4 className="font-semibold mb-4">{subcat}</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {skills.map((skill, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-sm text-muted-foreground">{skill.experience}</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            {candidateData.projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    {project.name}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Réalisations :</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            {candidateData.education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        {edu.degree}
                      </CardTitle>
                      <CardDescription>
                        {edu.institution} • {edu.location}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant={edu.status === "En cours" ? "default" : "secondary"}>{edu.status}</Badge>
                      <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="languages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="w-5 h-5" />
                  Compétences Linguistiques
                </CardTitle>
                <CardDescription>
                  Maîtrise de six langues démontrant capacités d'apprentissage et ouverture culturelle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {candidateData.languages.map((lang) => (
                    <div key={lang.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">{lang.name}</span>
                        <Badge variant="outline">{lang.level}</Badge>
                      </div>
                      <Progress value={lang.proficiency} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interests" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {candidateData.interests.map((interest, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      {interest.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{interest.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Préférences Contractuelles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Types de contrat :</h4>
                  <div className="flex flex-wrap gap-2">
                    {candidateData.contractPreferences.types.map((type) => (
                      <Badge key={type} variant="secondary">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Modalités de travail :</h4>
                  <div className="flex flex-wrap gap-2">
                    {candidateData.contractPreferences.workModes.map((mode) => (
                      <Badge key={mode} variant="secondary">
                        {mode}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prétentions salariales :</h4>
                  <Badge variant="outline" className="text-base px-3 py-1">
                    {candidateData.contractPreferences.salaryRange}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
