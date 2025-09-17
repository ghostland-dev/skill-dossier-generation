"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle, Clock, AlertCircle } from "lucide-react"

interface ExportJob {
  id: string
  format: string
  status: "pending" | "processing" | "completed" | "failed"
  progress: number
  createdAt: string
  downloadUrl?: string
  error?: string
}

export function ExportManager() {
  const [exports, setExports] = useState<ExportJob[]>([
    {
      id: "1",
      format: "PDF",
      status: "completed",
      progress: 100,
      createdAt: "2024-01-15T10:30:00Z",
      downloadUrl: "/api/download/portfolio.pdf",
    },
    {
      id: "2",
      format: "Web Portfolio",
      status: "processing",
      progress: 65,
      createdAt: "2024-01-15T10:25:00Z",
    },
    {
      id: "3",
      format: "Images",
      status: "pending",
      progress: 0,
      createdAt: "2024-01-15T10:20:00Z",
    },
  ])

  const getStatusIcon = (status: ExportJob["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "processing":
        return <Clock className="h-4 w-4 text-blue-600" />
      case "failed":
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-slate-400" />
    }
  }

  const getStatusBadge = (status: ExportJob["status"]) => {
    const variants = {
      completed: "default",
      processing: "secondary",
      pending: "outline",
      failed: "destructive",
    } as const

    return <Badge variant={variants[status]}>{status.charAt(0).toUpperCase() + status.slice(1)}</Badge>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="h-5 w-5 text-rose-600" />
          Export History
        </CardTitle>
        <CardDescription>Track your portfolio exports and downloads</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {exports.map((exportJob) => (
            <div key={exportJob.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                {getStatusIcon(exportJob.status)}
                <div>
                  <p className="font-medium">{exportJob.format}</p>
                  <p className="text-sm text-slate-500">{new Date(exportJob.createdAt).toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {exportJob.status === "processing" && (
                  <div className="w-24">
                    <Progress value={exportJob.progress} className="h-2" />
                  </div>
                )}

                {getStatusBadge(exportJob.status)}

                {exportJob.status === "completed" && exportJob.downloadUrl && (
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
