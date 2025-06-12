"use client"

import { Card } from "@/components/ui/card"
import { useEffect } from "react"

export default function BookPage() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Book Your Free Strategy Call
          </h1>
          <p className="text-xl text-muted-foreground">
            Schedule a 30-minute consultation to discuss your AI automation needs
          </p>
        </div>

        <Card className="p-8">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/info-automent/30min"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </Card>
      </div>
    </main>
  )
} 