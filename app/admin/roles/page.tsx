import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Shield, Users, Settings, Plus, Edit } from "lucide-react"

export default function RolesManagementPage() {
  const roles = [
    {
      id: "1",
      name: "HR Manager",
      description: "Full access to candidate management and portfolio generation",
      userCount: 8,
      permissions: {
        viewAllCandidates: true,
        manageCandidates: true,
        generatePortfolios: true,
        manageTemplates: true,
        viewAnalytics: true,
        manageUsers: false,
        systemSettings: false,
      },
    },
    {
      id: "2",
      name: "Technical Recruiter",
      description: "Access to candidate portfolios and basic management features",
      userCount: 15,
      permissions: {
        viewAllCandidates: true,
        manageCandidates: true,
        generatePortfolios: true,
        manageTemplates: false,
        viewAnalytics: true,
        manageUsers: false,
        systemSettings: false,
      },
    },
    {
      id: "3",
      name: "Engineering Manager",
      description: "View portfolios and provide technical feedback",
      userCount: 12,
      permissions: {
        viewAllCandidates: false,
        manageCandidates: false,
        generatePortfolios: false,
        manageTemplates: false,
        viewAnalytics: true,
        manageUsers: false,
        systemSettings: false,
      },
    },
    {
      id: "4",
      name: "Candidate",
      description: "Limited access to own portfolio and basic features",
      userCount: 156,
      permissions: {
        viewAllCandidates: false,
        manageCandidates: false,
        generatePortfolios: false,
        manageTemplates: false,
        viewAnalytics: false,
        manageUsers: false,
        systemSettings: false,
      },
    },
  ]

  const permissionLabels = {
    viewAllCandidates: "View All Candidates",
    manageCandidates: "Manage Candidates",
    generatePortfolios: "Generate Portfolios",
    manageTemplates: "Manage Templates",
    viewAnalytics: "View Analytics",
    manageUsers: "Manage Users",
    systemSettings: "System Settings",
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Role Management</h1>
          <p className="text-slate-600">Define roles and permissions for different user types</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-rose-600" />
            <span className="font-medium">4 Roles Configured</span>
          </div>
          <Button className="bg-rose-600 hover:bg-rose-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Role
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {roles.map((role) => (
            <Card key={role.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {role.name}
                      <Badge variant="secondary" className="ml-2">
                        <Users className="h-3 w-3 mr-1" />
                        {role.userCount}
                      </Badge>
                    </CardTitle>
                    <CardDescription>{role.description}</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Permissions
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(role.permissions).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <Label htmlFor={`${role.id}-${key}`} className="text-sm">
                            {permissionLabels[key as keyof typeof permissionLabels]}
                          </Label>
                          <Switch
                            id={`${role.id}-${key}`}
                            checked={value}
                            disabled={role.name === "Candidate"} // Prevent editing candidate permissions
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Permission Matrix</CardTitle>
            <CardDescription>Overview of all roles and their permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Permission</th>
                    {roles.map((role) => (
                      <th key={role.id} className="text-center p-3 font-medium">
                        {role.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(permissionLabels).map(([key, label]) => (
                    <tr key={key} className="border-b">
                      <td className="p-3 font-medium text-slate-700">{label}</td>
                      {roles.map((role) => (
                        <td key={role.id} className="text-center p-3">
                          {role.permissions[key as keyof typeof role.permissions] ? (
                            <Badge className="bg-green-100 text-green-800">✓</Badge>
                          ) : (
                            <Badge variant="outline" className="text-slate-400">
                              ✗
                            </Badge>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
