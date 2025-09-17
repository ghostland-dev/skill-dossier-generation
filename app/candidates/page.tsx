import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Search, Filter, Download, Eye, MoreHorizontal, ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function CandidatesPage() {
  const candidates = [
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah.chen@email.com",
      position: "Senior React Developer",
      experience: "5.2 years",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      status: "active",
      uploadDate: "2024-01-15",
      portfolioStatus: "completed",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      email: "marcus.j@email.com",
      position: "DevOps Engineer",
      experience: "7.1 years",
      skills: ["AWS", "Docker", "Kubernetes", "Python"],
      status: "active",
      uploadDate: "2024-01-14",
      portfolioStatus: "processing",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      email: "elena.r@email.com",
      position: "Full Stack Developer",
      experience: "4.8 years",
      skills: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      status: "active",
      uploadDate: "2024-01-13",
      portfolioStatus: "completed",
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@email.com",
      position: "Mobile Developer",
      experience: "6.3 years",
      skills: ["React Native", "Swift", "Kotlin", "Firebase"],
      status: "archived",
      uploadDate: "2024-01-12",
      portfolioStatus: "completed",
    },
    {
      id: 5,
      name: "Lisa Wang",
      email: "lisa.wang@email.com",
      position: "Data Scientist",
      experience: "3.9 years",
      skills: ["Python", "TensorFlow", "SQL", "R"],
      status: "active",
      uploadDate: "2024-01-11",
      portfolioStatus: "review",
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
            <h1 className="text-3xl font-bold mb-2">Candidates</h1>
            <p className="text-muted-foreground">Manage and review candidate portfolios</p>
          </div>
          <Button asChild>
            <Link href="/upload">
              <Plus className="w-4 h-4 mr-2" />
              Add Candidate
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Search candidates..." className="pl-10" />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Portfolio Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="review">Under Review</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="junior">Junior (0-2 years)</SelectItem>
                  <SelectItem value="mid">Mid-level (2-5 years)</SelectItem>
                  <SelectItem value="senior">Senior (5+ years)</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Candidates List */}
        <div className="space-y-4">
          {candidates.map((candidate) => (
            <Card key={candidate.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={`/generic-placeholder-icon.png?height=48&width=48`} />
                      <AvatarFallback>
                        {candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="font-semibold text-lg">{candidate.name}</h3>
                        <Badge
                          variant={
                            candidate.portfolioStatus === "completed"
                              ? "default"
                              : candidate.portfolioStatus === "processing"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {candidate.portfolioStatus}
                        </Badge>
                        {candidate.status === "archived" && <Badge variant="outline">Archived</Badge>}
                      </div>
                      <p className="text-muted-foreground mb-2">{candidate.position}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <span>{candidate.experience} experience</span>
                        <span>•</span>
                        <span>{candidate.email}</span>
                        <span>•</span>
                        <span>Uploaded {candidate.uploadDate}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        <DropdownMenuItem>Regenerate Portfolio</DropdownMenuItem>
                        <DropdownMenuItem>Share Portfolio</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Archive Candidate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
