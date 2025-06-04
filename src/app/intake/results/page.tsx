"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ResultsContent() {
  const searchParams = useSearchParams()
  const tier = searchParams.get("tier") || ""

  const getTierMessage = (tier: string) => {
    switch (tier) {
      case "Ready":
        return "Your organization is well-positioned for AI integration. You have clear goals, structured data, and a team ready for change."
      case "Emerging":
        return "Your organization shows potential for AI integration but may need some foundational work in data management or team readiness."
      case "Not Yet":
        return "Your organization may need to focus on building foundational elements before implementing AI solutions."
      default:
        return "Unable to determine readiness tier."
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            AI Readiness Assessment Results
          </h1>
        </div>

        <Card className="p-8">
          <div className="text-center space-y-6">
            <div className={`text-4xl font-bold ${
              tier === "Ready" ? "text-green-600" :
              tier === "Emerging" ? "text-yellow-600" :
              "text-red-600"
            }`}>
              Tier {tier === "Ready" ? "1" : tier === "Emerging" ? "2" : "3"}: {tier}
            </div>
            <p className="text-xl text-muted-foreground">
              {getTierMessage(tier)}
            </p>
            <div className="pt-6">
              <Link href="/">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Return Home
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-muted-foreground">Loading results...</div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  )
}
