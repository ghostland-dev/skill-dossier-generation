"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { FileText, Upload, Users, Brain, Settings, BarChart3, FileImage, Menu, X } from "lucide-react"
import { useState } from "react"

const navigationItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "Upload CV",
    href: "/upload",
    icon: Upload,
  },
  {
    title: "Candidats",
    href: "/candidates",
    icon: Users,
  },
  {
    title: "Templates",
    href: "/templates",
    icon: FileImage,
  },
  {
    title: "Analyse IA",
    href: "/analysis",
    icon: Brain,
  },
  {
    title: "Portfolio",
    href: "/portfolio/comprehensive",
    icon: FileText,
  },
  {
    title: "Export",
    href: "/portfolio/export",
    icon: FileText,
  },
  {
    title: "Administration",
    href: "/admin",
    icon: Settings,
  },
]

export default function NavigationMenu() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const hideNavigation = ["/login", "/register", "/forgot-password", "/"].includes(pathname)

  if (hideNavigation) {
    return null
  }

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">SkillForge</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-foreground px-3 py-2 rounded-md",
                    isActive ? "text-foreground bg-muted" : "text-muted-foreground",
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              )
            })}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild className="hidden sm:flex bg-transparent">
              <Link href="/upload">
                <Upload className="w-4 h-4 mr-2" />
                Upload CV
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/")

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
