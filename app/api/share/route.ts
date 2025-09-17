import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { portfolioId, emails, message, settings } = await request.json()

    // Simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Mock share data
    const shareData = {
      shareId: "share_" + Math.random().toString(36).substr(2, 9),
      shareUrl: `https://portfolios.skillgen.com/share/${Math.random().toString(36).substr(2, 9)}`,
      expiresAt: settings.expiration ? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() : null,
      passwordProtected: settings.passwordProtected || false,
      emailsSent: emails?.length || 0,
      analytics: {
        views: 0,
        downloads: 0,
        lastViewed: null,
      },
    }

    return NextResponse.json({
      success: true,
      data: shareData,
      message: `Portfolio shared successfully with ${shareData.emailsSent} recipients`,
    })
  } catch (error) {
    console.error("Share error:", error)
    return NextResponse.json({ success: false, message: "Sharing failed" }, { status: 500 })
  }
}
