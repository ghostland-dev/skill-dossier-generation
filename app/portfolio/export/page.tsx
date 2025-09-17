import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Share2, Mail, Link, FileText, ImageIcon, Globe, Users, Calendar } from "lucide-react"

export default function ExportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Export & Share Portfolio</h1>
          <p className="text-slate-600">Export your portfolio in multiple formats or share it with stakeholders</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Export Options */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-rose-600" />
                  Export Formats
                </CardTitle>
                <CardDescription>Choose your preferred export format</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <FileText className="h-6 w-6 text-red-600" />
                    <span>PDF Document</span>
                    <span className="text-xs text-slate-500">Professional format</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <Globe className="h-6 w-6 text-blue-600" />
                    <span>Web Portfolio</span>
                    <span className="text-xs text-slate-500">Interactive online</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <ImageIcon className="h-6 w-6 text-green-600" />
                    <span>Image Gallery</span>
                    <span className="text-xs text-slate-500">PNG/JPG format</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <FileText className="h-6 w-6 text-purple-600" />
                    <span>Word Document</span>
                    <span className="text-xs text-slate-500">Editable format</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="h-5 w-5 text-rose-600" />
                  Sharing Options
                </CardTitle>
                <CardDescription>Control how your portfolio is shared</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Public Link</Label>
                      <p className="text-sm text-slate-500">Anyone with the link can view</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Password Protection</Label>
                      <p className="text-sm text-slate-500">Require password to access</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Expiration Date</Label>
                      <p className="text-sm text-slate-500">Automatically expire access</p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <div className="space-y-2">
                    <Label htmlFor="share-email">Share via Email</Label>
                    <div className="flex gap-2">
                      <Input
                        id="share-email"
                        placeholder="Enter email addresses (comma separated)"
                        className="flex-1"
                      />
                      <Button>
                        <Mail className="h-4 w-4 mr-2" />
                        Send
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="share-message">Custom Message</Label>
                    <Textarea id="share-message" placeholder="Add a personal message (optional)" rows={3} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Export Settings</CardTitle>
                <CardDescription>Customize your export preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Page Size</Label>
                    <Select defaultValue="a4">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a4">A4 (210 × 297 mm)</SelectItem>
                        <SelectItem value="letter">Letter (8.5 × 11 in)</SelectItem>
                        <SelectItem value="legal">Legal (8.5 × 14 in)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Quality</Label>
                    <Select defaultValue="high">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High Quality</SelectItem>
                        <SelectItem value="medium">Medium Quality</SelectItem>
                        <SelectItem value="low">Low Quality (Smaller file)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Include Watermark</Label>
                    <p className="text-sm text-slate-500">Add company branding</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview & Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Preview</CardTitle>
                <CardDescription>John Doe - Senior Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-[3/4] bg-white border-2 border-slate-200 rounded-lg p-4 mb-4">
                  <div className="space-y-3">
                    <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-100 rounded w-full"></div>
                    <div className="h-2 bg-slate-100 rounded w-5/6"></div>
                    <div className="space-y-1 mt-4">
                      <div className="h-2 bg-rose-100 rounded w-1/2"></div>
                      <div className="h-1 bg-slate-100 rounded w-full"></div>
                      <div className="h-1 bg-slate-100 rounded w-4/5"></div>
                    </div>
                    <div className="flex gap-1 mt-3">
                      <div className="h-4 bg-blue-100 rounded px-2 text-xs flex items-center">React</div>
                      <div className="h-4 bg-green-100 rounded px-2 text-xs flex items-center">Node.js</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    <Download className="h-4 w-4 mr-2" />
                    Export Portfolio
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Link className="h-4 w-4 mr-2" />
                    Copy Share Link
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-rose-600" />
                  Recent Shares
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">hiring@techcorp.com</p>
                      <p className="text-xs text-slate-500">2 hours ago</p>
                    </div>
                    <Badge variant="secondary">Viewed</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Public Link</p>
                      <p className="text-xs text-slate-500">1 day ago</p>
                    </div>
                    <Badge variant="outline">Active</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">manager@startup.io</p>
                      <p className="text-xs text-slate-500">3 days ago</p>
                    </div>
                    <Badge variant="secondary">Downloaded</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-rose-600" />
                  Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Total Views</span>
                    <span className="font-semibold">247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Downloads</span>
                    <span className="font-semibold">18</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Shares</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Avg. View Time</span>
                    <span className="font-semibold">2m 34s</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
