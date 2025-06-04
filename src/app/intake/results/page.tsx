import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type AIReadinessTier = "Ready" | "Emerging" | "Not Yet"

interface ResultsPageProps {
  searchParams: {
    tier?: AIReadinessTier
  }
}

export default function ResultsPage({ searchParams }: ResultsPageProps) {
  const tier = searchParams.tier as AIReadinessTier

  if (!tier) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            No Assessment Results Found
          </h1>
          <p className="text-xl text-muted-foreground">
            Please complete the AI Integration Assessment first
          </p>
          <Link href="/intake">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Take Assessment
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  const getTierColor = (tier: AIReadinessTier) => {
    switch (tier) {
      case "Ready":
        return "text-green-600"
      case "Emerging":
        return "text-yellow-600"
      case "Not Yet":
        return "text-red-600"
    }
  }

  const getTierNumber = (tier: AIReadinessTier) => {
    switch (tier) {
      case "Ready":
        return "1"
      case "Emerging":
        return "2"
      case "Not Yet":
        return "3"
    }
  }

  const getTierDescription = (tier: AIReadinessTier) => {
    switch (tier) {
      case "Ready":
        return "Your organization is well-positioned for AI integration. You have clear goals, structured data, and a team ready for change."
      case "Emerging":
        return "Your organization shows potential for AI integration but may need some foundational work in data management or team readiness."
      case "Not Yet":
        return "Your organization may need to focus on building foundational elements before implementing AI solutions."
    }
  }

  const getRecommendations = (tier: AIReadinessTier) => {
    switch (tier) {
      case "Ready":
        return [
          "Begin implementing AI solutions for your most critical workflows",
          "Consider advanced automation and AI integration projects",
          "Explore AI-powered analytics and decision support tools"
        ]
      case "Emerging":
        return [
          "Focus on digitizing and structuring your data",
          "Implement basic automation tools to build team comfort",
          "Develop a clear AI adoption strategy"
        ]
      case "Not Yet":
        return [
          "Start with basic digital transformation initiatives",
          "Build a foundation of structured data management",
          "Focus on team training and change management"
        ]
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

        <Card className="p-8 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Your AI Readiness Tier</h2>
            <div className={`text-4xl font-bold ${getTierColor(tier)}`}>
              Tier {getTierNumber(tier)}: {tier}
            </div>
            <p className="text-muted-foreground text-lg">
              {getTierDescription(tier)}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Recommended Next Steps</h3>
            <ul className="space-y-2">
              {getRecommendations(tier).map((recommendation, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center pt-4">
            <Link href="/intake">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Retake Assessment
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </main>
  )
} 