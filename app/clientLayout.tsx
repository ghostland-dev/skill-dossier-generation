"use client"

import type React from "react"

import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import "./globals.css"
// <CHANGE> Added navigation menu import
import NavigationMenu from "@/components/navigation-menu"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {/* <CHANGE> Added conditional navigation - only show on authenticated pages */}
        <Suspense fallback={<div>Loading...</div>}>
          <NavigationWrapper>{children}</NavigationWrapper>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

// <CHANGE> Added navigation wrapper component to conditionally show navigation
function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const isAuthenticated = searchParams.get("auth") === "true"

  return (
    <>
      {isAuthenticated && <NavigationMenu />}
      <main className="min-h-screen bg-background">{children}</main>
    </>
  )
}
