import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Shield, FileText, TrendingUp, Activity, AlertTriangle, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const stats = [
    { label: "Total Users", value: "247", icon: Users, color: "text-blue-600" },
    { label: "Active Portfolios", value: "1,234", icon: FileText, color: "text-green-600" },
    { label: "Processing Queue", value: "18", icon: Clock, color: "text-yellow-600" },
    { label: "System Health", value: "99.9%", icon: Activity, color: "text-rose-600" },
  ]

  const recentActivity = [
    {
      id: "1",
      type: "user_created",
      message: "New user Sarah Johnson joined as HR Manager",
      timestamp: "2 minutes ago",
      status: "success",
    },
    {
      id: "2",
      type: "portfolio_generated",
      message: "Portfolio generated for John Doe (Senior Developer)",
      timestamp: "5 minutes ago",
      status: "success",
    },
    {
      id: "3",
      type: "template_updated",
      message: "TechCorp template updated by Michael Chen",
      timestamp: "12 minutes ago",
      status: "info",
    },
    {
      id: "4",
      type: "system_alert",
      message: "High processing queue detected",
      timestamp: "1 hour ago",
      status: "warning",
    },
  ]

  const systemAlerts = [
    {
      id: "1",
      type: "warning",
      message: "Processing queue is above normal capacity",
      action: "Scale processing resources",
    },
    {
      id: "2",
      type: "info",
      message: "Monthly backup completed successfully",
      action: "View backup report",
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user_created":
        return <Users className="h-4 w-4" />
      case "portfolio_generated":
        return <FileText className="h-4 w-4" />
      case "template_updated":
        return <Shield className="h-4 w-4" />
      case "system_alert":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "text-green-600"
      case "warning":
        return "text-yellow-600"
      case "error":
        return "text-red-600"
      default:
        return "text-blue-600"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
          <p className="text-slate-600">Monitor system performance and manage platform operations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/admin/users">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </Button>
              </Link>
              <Link href="/admin/roles">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Shield className="h-4 w-4 mr-2" />
                  Configure Roles
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <FileText className="h-4 w-4 mr-2" />
                System Reports
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <TrendingUp className="h-4 w-4 mr-2" />
                Analytics Dashboard
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest system events and user actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className={`mt-1 ${getStatusColor(activity.status)}`}>{getActivityIcon(activity.type)}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">{activity.message}</p>
                      <p className="text-xs text-slate-500">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
              <CardDescription>Important notifications and warnings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className="p-3 border rounded-lg">
                    <div className="flex items-start gap-2 mb-2">
                      {alert.type === "warning" ? (
                        <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                      )}
                      <p className="text-sm font-medium text-slate-900">{alert.message}</p>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs bg-transparent">
                      {alert.action}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>System performance over the last 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">98.7%</p>
                <p className="text-sm text-slate-600">Uptime</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">1.2s</p>
                <p className="text-sm text-slate-600">Avg Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-rose-600">156</p>
                <p className="text-sm text-slate-600">Portfolios Generated</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
