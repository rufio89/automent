"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

type AIReadinessTier = "Ready" | "Emerging" | "Not Yet"

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  businessGoals: string
  workflows: string
  tools: string
  dataStorage: string
  communication: string
  teamFlexibility: string
  pastAutomation: string
}

export default function IntakeForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    businessGoals: "",
    workflows: "",
    tools: "",
    dataStorage: "",
    communication: "",
    teamFlexibility: "",
    pastAutomation: ""
  })

  const [readinessTier, setReadinessTier] = useState<AIReadinessTier | null>(null)

  const assessReadiness = (data: FormData): AIReadinessTier => {
    let score = 0
    const maxScore = 7

    // Business Goals - Looking for clear goals and challenges
    const goalKeywords = {
      objectives: ["goal", "objective", "target", "aim", "mission", "vision", "strategy", "initiative"],
      challenges: ["challenge", "problem", "issue", "pain point", "bottleneck", "obstacle", "barrier", "difficulty"],
      metrics: ["revenue", "growth", "efficiency", "productivity", "cost", "profit", "scale", "expansion"],
      timeframes: ["quarter", "year", "annual", "monthly", "timeline", "deadline", "milestone"],
      priorities: ["priority", "focus", "key", "critical", "essential", "important", "main"]
    }

    let goalScore = 0
    const text = data.businessGoals.toLowerCase()
    
    // Check for minimum length and structure
    if (data.businessGoals.length > 100) {
      goalScore += 0.5
    }

    // Check for presence of different aspects
    if (goalKeywords.objectives.some(word => text.includes(word))) {
      goalScore += 0.5
    }
    if (goalKeywords.challenges.some(word => text.includes(word))) {
      goalScore += 0.5
    }
    if (goalKeywords.metrics.some(word => text.includes(word))) {
      goalScore += 0.5
    }
    if (goalKeywords.timeframes.some(word => text.includes(word))) {
      goalScore += 0.5
    }
    if (goalKeywords.priorities.some(word => text.includes(word))) {
      goalScore += 0.5
    }

    // Add to total score if the response shows clear business goals
    if (goalScore >= 2) {
      score += 1
    }

    // Workflows - Looking for specific, repetitive processes
    if (data.workflows.length > 100 && data.workflows.includes("repetitive")) {
      score += 1
    }

    // Tools - Looking for modern, digital tools
    const modernTools = ["crm", "slack", "notion", "asana", "jira", "microsoft", "google", "zoom"]
    if (modernTools.some(tool => data.tools.toLowerCase().includes(tool))) {
      score += 1
    }

    // Data Storage - Looking for structured data management
    const dataTools = ["crm", "database", "spreadsheet", "erp", "api"]
    if (dataTools.some(tool => data.dataStorage.toLowerCase().includes(tool))) {
      score += 1
    }

    // Communication - Looking for digital collaboration
    const commTools = ["slack", "teams", "zoom", "meet", "discord"]
    if (commTools.some(tool => data.communication.toLowerCase().includes(tool))) {
      score += 1
    }

    // Team Flexibility - Looking for openness to change
    const positiveTerms = ["flexible", "open", "willing", "adaptable", "ready"]
    if (positiveTerms.some(term => data.teamFlexibility.toLowerCase().includes(term))) {
      score += 1
    }

    // Past Automation - Looking for previous automation experience
    const automationTools = ["zapier", "chatgpt", "automation", "bot", "ai"]
    if (automationTools.some(tool => data.pastAutomation.toLowerCase().includes(tool))) {
      score += 1
    }

    // Calculate tier based on score
    const percentage = (score / maxScore) * 100
    if (percentage >= 70) return "Ready"
    if (percentage >= 40) return "Emerging"
    return "Not Yet"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const tier = assessReadiness(formData)
      setReadinessTier(tier)

      // Store form submission in Supabase
      const { data, error } = await supabase
        .from('intake_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            business_goals: formData.businessGoals,
            workflows: formData.workflows,
            tools: formData.tools,
            data_storage: formData.dataStorage,
            communication: formData.communication,
            team_flexibility: formData.teamFlexibility,
            past_automation: formData.pastAutomation,
            readiness_tier: tier,
            submitted_at: new Date().toISOString()
          }
        ])
        .select()

      if (error) {
        console.error('Supabase error:', error)
        throw new Error(`Database error: ${error.message}`)
      }

      if (!data) {
        throw new Error('No data returned from submission')
      }

      router.push(`/intake/results?tier=${tier}`)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert(`Error submitting form: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            AI Integration Assessment
          </h1>
          <p className="text-xl text-muted-foreground">
            Help us understand your current workflows and identify opportunities for AI integration
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Contact Information */}
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span>👋</span> Contact Information
              </h2>
              <p className="text-muted-foreground">
                Let&apos;s get in touch to discuss your results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full p-3 rounded-md border border-input bg-background"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full p-3 rounded-md border border-input bg-background"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <input
                  id="company"
                  type="text"
                  required
                  className="w-full p-3 rounded-md border border-input bg-background"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full p-3 rounded-md border border-input bg-background"
                  placeholder="(555) 555-5555"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
            </div>
          </Card>

          {/* Strategic Assessment */}
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span>🎯</span> Strategic Assessment
              </h2>
              <p className="text-muted-foreground">
                Let&apos;s understand your business goals, current processes, and readiness for AI/automation
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>What are the top 2–3 business goals you&apos;re focused on this year, and what&apos;s standing in the way of achieving them?</Label>
                <textarea 
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                  placeholder="Share your key business goals and challenges..."
                  value={formData.businessGoals}
                  onChange={(e) => handleInputChange("businessGoals", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Which daily workflows or processes feel the most repetitive, manual, or prone to delays?</Label>
                <textarea 
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                  placeholder="Describe your most time-consuming and manual processes..."
                  value={formData.workflows}
                  onChange={(e) => handleInputChange("workflows", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>What tools/software do you use daily?</Label>
                <textarea 
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                  placeholder="List your daily tools (CRM, email, spreadsheets, task managers, etc.)..."
                  value={formData.tools}
                  onChange={(e) => handleInputChange("tools", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Do you currently track or store operational data in a structured way (e.g., spreadsheets, CRMs, internal tools)?</Label>
                <textarea 
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                  placeholder="Describe your current data management systems and practices..."
                  value={formData.dataStorage}
                  onChange={(e) => handleInputChange("dataStorage", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>What are your team&apos;s main communication channels and collaboration tools?</Label>
                <textarea 
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                  placeholder="Describe how your team communicates and collaborates..."
                  value={formData.communication}
                  onChange={(e) => handleInputChange("communication", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>How flexible is your team when it comes to adopting new tools or changing workflows?</Label>
                <textarea 
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                  placeholder="Share your team&apos;s adaptability and change management approach..."
                  value={formData.teamFlexibility}
                  onChange={(e) => handleInputChange("teamFlexibility", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Have you experimented with any automation or AI tools before (e.g., Zapier, ChatGPT, workflow bots)? If so, what worked — or didn&apos;t?</Label>
                <textarea 
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                  placeholder="Describe your past experiences with automation and AI tools..."
                  value={formData.pastAutomation}
                  onChange={(e) => handleInputChange("pastAutomation", e.target.value)}
                />
              </div>
            </div>
          </Card>

          {readinessTier && (
            <Card className="p-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold">AI Readiness Assessment</h3>
                <div className={`text-3xl font-bold ${
                  readinessTier === "Ready" ? "text-green-600" :
                  readinessTier === "Emerging" ? "text-yellow-600" :
                  "text-red-600"
                }`}>
                  Tier {readinessTier === "Ready" ? "1" : readinessTier === "Emerging" ? "2" : "3"}: {readinessTier}
                </div>
                <p className="text-muted-foreground">
                  {readinessTier === "Ready" ? 
                    "Your organization is well-positioned for AI integration. You have clear goals, structured data, and a team ready for change." :
                   readinessTier === "Emerging" ?
                    "Your organization shows potential for AI integration but may need some foundational work in data management or team readiness." :
                    "Your organization may need to focus on building foundational elements before implementing AI solutions."
                  }
                </p>
              </div>
            </Card>
          )}

          <div className="flex justify-center">
            <Button 
              type="submit"
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
} 