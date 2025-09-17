import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, UserPlus, Search, Filter, MoreHorizontal, Shield, Mail, Calendar } from "lucide-react"

export default function UsersManagementPage() {
  const users = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.johnson@techcorp.com",
      role: "HR Manager",
      department: "Human Resources",
      status: "active",
      lastLogin: "2024-01-15T09:30:00Z",
      portfoliosManaged: 45,
      avatar: "/professional-woman-diverse.png",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "m.chen@techcorp.com",
      role: "Technical Recruiter",
      department: "Talent Acquisition",
      status: "active",
      lastLogin: "2024-01-15T08:15:00Z",
      portfoliosManaged: 32,
      avatar: "/professional-man.png",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      email: "emily.r@techcorp.com",
      role: "Engineering Manager",
      department: "Engineering",
      status: "active",
      lastLogin: "2024-01-14T16:45:00Z",
      portfoliosManaged: 18,
      avatar: "/professional-woman-manager.png",
    },
    {
      id: "4",
      name: "David Kim",
      email: "david.kim@freelance.com",
      role: "Candidate",
      department: "External",
      status: "pending",
      lastLogin: "2024-01-13T14:20:00Z",
      portfoliosManaged: 1,
      avatar: "/professional-developer.png",
    },
  ]

  const getRoleColor = (role: string) => {
    const colors = {
      "HR Manager": "bg-purple-100 text-purple-800",
      "Technical Recruiter": "bg-blue-100 text-blue-800",
      "Engineering Manager": "bg-green-100 text-green-800",
      Candidate: "bg-orange-100 text-orange-800",
      Admin: "bg-red-100 text-red-800",
    }
    return colors[role as keyof typeof colors] || "bg-slate-100 text-slate-800"
  }

  const getStatusColor = (status: string) => {
    const colors = {
      active: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      inactive: "bg-slate-100 text-slate-800",
      suspended: "bg-red-100 text-red-800",
    }
    return colors[status as keyof typeof colors] || "bg-slate-100 text-slate-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">User Management</h1>
          <p className="text-slate-600">Manage users, roles, and permissions across your organization</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Users</p>
                  <p className="text-2xl font-bold text-slate-900">247</p>
                </div>
                <Users className="h-8 w-8 text-rose-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Active Users</p>
                  <p className="text-2xl font-bold text-slate-900">198</p>
                </div>
                <Shield className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Pending Invites</p>
                  <p className="text-2xl font-bold text-slate-900">12</p>
                </div>
                <Mail className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">This Month</p>
                  <p className="text-2xl font-bold text-slate-900">+23</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Users</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
              </div>
              <Button className="bg-rose-600 hover:bg-rose-700">
                <UserPlus className="h-4 w-4 mr-2" />
                Invite User
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search users..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="hr">HR Manager</SelectItem>
                  <SelectItem value="recruiter">Technical Recruiter</SelectItem>
                  <SelectItem value="manager">Engineering Manager</SelectItem>
                  <SelectItem value="candidate">Candidate</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="active">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg bg-white">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-slate-900">{user.name}</h3>
                      <p className="text-sm text-slate-500">{user.email}</p>
                      <p className="text-xs text-slate-400">{user.department}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                      <p className="text-xs text-slate-500 mt-1">{user.portfoliosManaged} portfolios managed</p>
                    </div>

                    <div className="text-right">
                      <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                      <p className="text-xs text-slate-500 mt-1">
                        Last login: {new Date(user.lastLogin).toLocaleDateString()}
                      </p>
                    </div>

                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
