"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChevronLeft, ChevronRight, Check, HelpCircle, ChevronDown, ChevronUp } from "lucide-react"

type UseCaseData = {
  name: string
  currentTimeSpent: number
  teamSize: number
  monthlyVolume: number
  priority: number
  potentialValue: number
  volumeDescription: string
  selected: boolean
}

export default function CalculatorPage() {
  const [useCases, setUseCases] = useState<UseCaseData[]>([
    {
      name: "Customer Support Automation",
      currentTimeSpent: 0,
      teamSize: 1,
      monthlyVolume: 0,
      priority: 1,
      potentialValue: 0,
      volumeDescription: "Number of support tickets/queries handled per month",
      selected: false
    },
    {
      name: "Sales Email Sequencing",
      currentTimeSpent: 0,
      teamSize: 1,
      monthlyVolume: 0,
      priority: 1,
      potentialValue: 0,
      volumeDescription: "Number of sales emails sent per month",
      selected: false
    },
    {
      name: "Meeting Notes & Action Items",
      currentTimeSpent: 0,
      teamSize: 1,
      monthlyVolume: 0,
      priority: 1,
      potentialValue: 0,
      volumeDescription: "Number of meetings that need notes/action items per month",
      selected: false
    },
    {
      name: "Proposal & Contract Drafting",
      currentTimeSpent: 0,
      teamSize: 1,
      monthlyVolume: 0,
      priority: 1,
      potentialValue: 0,
      volumeDescription: "Number of proposals/contracts created per month",
      selected: false
    },
    {
      name: "Knowledge Base / FAQ Assistant",
      currentTimeSpent: 0,
      teamSize: 1,
      monthlyVolume: 0,
      priority: 1,
      potentialValue: 0,
      volumeDescription: "Number of knowledge base articles or FAQ entries maintained",
      selected: false
    },
    {
      name: "Inventory & Demand Forecasting",
      currentTimeSpent: 0,
      teamSize: 1,
      monthlyVolume: 0,
      priority: 1,
      potentialValue: 0,
      volumeDescription: "Number of inventory items or SKUs tracked",
      selected: false
    },
    {
      name: "Content Creation",
      currentTimeSpent: 0,
      teamSize: 1,
      monthlyVolume: 0,
      priority: 1,
      potentialValue: 0,
      volumeDescription: "Number of blog posts or social media content pieces created per month",
      selected: false
    },
    {
      name: "HR & Hiring Assistant",
      currentTimeSpent: 0,
      teamSize: 1,
      monthlyVolume: 0,
      priority: 1,
      potentialValue: 0,
      volumeDescription: "Number of job applications or HR documents processed per month",
      selected: false
    },
    {
      name: "Customer Feedback Analysis",
      currentTimeSpent: 0,
      teamSize: 1,
      monthlyVolume: 0,
      priority: 1,
      potentialValue: 0,
      volumeDescription: "Number of customer feedback entries analyzed per month",
      selected: false
    },
    {
      name: "Workflow Automation",
      currentTimeSpent: 0,
      teamSize: 1,
      monthlyVolume: 0,
      priority: 1,
      potentialValue: 0,
      volumeDescription: "Number of workflow tasks automated per month",
      selected: false
    }
  ])

  const [currentStep, setCurrentStep] = useState(-1) // -1 for selection phase
  const [showExplanation, setShowExplanation] = useState(false)
  const [calculationParams, setCalculationParams] = useState({
    hourlyRate: 50,
    priorityMultiplier: 0.2
  })

  const calculateValue = (useCase: UseCaseData) => {
    const timeValue = useCase.currentTimeSpent * calculationParams.hourlyRate
    const priorityMultiplier = (useCase.priority - 1) * calculationParams.priorityMultiplier

    return timeValue * (1 + priorityMultiplier)
  }

  const handleInputChange = (index: number, field: keyof UseCaseData, value: string) => {
    const numValue = value === '' ? 0 : Number(value)
    updateUseCase(index, field, numValue)
  }

  const handleHourlyRateChange = (value: string) => {
    const numValue = value === '' ? 0 : Number(value)
    setCalculationParams({
      ...calculationParams,
      hourlyRate: numValue
    })
  }

  const updateUseCase = (index: number, field: keyof UseCaseData, value: number) => {
    const newUseCases = [...useCases]
    newUseCases[index] = {
      ...newUseCases[index],
      [field]: value,
      potentialValue: calculateValue({ ...newUseCases[index], [field]: value })
    }
    setUseCases(newUseCases)
  }

  const toggleUseCase = (index: number) => {
    const newUseCases = [...useCases]
    newUseCases[index].selected = !newUseCases[index].selected
    setUseCases(newUseCases)
  }

  const selectedUseCases = useCases.filter(uc => uc.selected)
  const chartData = selectedUseCases
    .map(useCase => ({
      name: useCase.name.split(' ').join('\n'),
      value: calculateValue(useCase)
    }))
    .sort((a, b) => b.value - a.value)

  const handleNext = () => {
    if (currentStep === -1) {
      if (selectedUseCases.length > 0) {
        setCurrentStep(0)
      }
    } else if (currentStep < selectedUseCases.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setCurrentStep(selectedUseCases.length)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      setCurrentStep(-1)
    }
  }

  const progress = currentStep === -1 ? 0 : ((currentStep + 1) / selectedUseCases.length) * 100

  const renderContent = () => {
    if (currentStep === -1) {
      return (
        // Selection Phase
        <div className="grid gap-4">
          <p className="text-muted-foreground text-center mb-4">
            Select the automation use cases you&apos;d like to evaluate. You can choose multiple options.
          </p>
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className={`p-4 cursor-pointer transition-all hover:border-primary ${useCase.selected ? 'border-primary bg-primary/5' : ''}`}
              onClick={() => toggleUseCase(index)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{useCase.name}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.volumeDescription}</p>
                </div>
                {useCase.selected && (
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )
    } else if (currentStep < selectedUseCases.length) {
      return (
        // Input Form Phase
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">{selectedUseCases[currentStep].name}</h3>
          <div className="grid gap-4">
            <div>
              <Label>Current Time Spent (hours/month)</Label>
              <Input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={selectedUseCases[currentStep].currentTimeSpent || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  handleInputChange(useCases.findIndex(uc => uc.name === selectedUseCases[currentStep].name), "currentTimeSpent", e.target.value)}
              />
            </div>
            <div>
              <Label>Team Size</Label>
              <Input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={selectedUseCases[currentStep].teamSize || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  handleInputChange(useCases.findIndex(uc => uc.name === selectedUseCases[currentStep].name), "teamSize", e.target.value)}
              />
            </div>
            <div>
              <Label>Monthly Volume</Label>
              <Input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={selectedUseCases[currentStep].monthlyVolume || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  handleInputChange(useCases.findIndex(uc => uc.name === selectedUseCases[currentStep].name), "monthlyVolume", e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-1">{selectedUseCases[currentStep].volumeDescription}</p>
            </div>
            <div>
              <Label>Priority (1-5)</Label>
              <Select
                value={selectedUseCases[currentStep].priority.toString()}
                onValueChange={(value: string) => 
                  updateUseCase(useCases.findIndex(uc => uc.name === selectedUseCases[currentStep].name), "priority", Number(value))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>
      )
    } else {
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Potential Value Analysis</h3>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => setShowExplanation(!showExplanation)}
            >
              <HelpCircle className="h-4 w-4" />
              How to Read This Graph
              {showExplanation ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>

          {showExplanation && (
            <div className="bg-muted/50 p-4 rounded-lg space-y-4">
              <p className="text-sm text-muted-foreground">
                The bar chart below shows the potential value of automating each process. The taller the bar, the higher the potential value. 
                Values are calculated based on your inputs and represent the estimated monthly value in dollars.
              </p>
              
              <div>
                <h4 className="font-semibold mb-2">How Values Are Calculated</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label>Hourly Rate ($)</Label>
                    <Input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={calculationParams.hourlyRate || ''}
                      onChange={(e) => handleHourlyRateChange(e.target.value)}
                      min="0"
                      step="1"
                    />
                  </div>
                  <div>
                    <Label>Priority Multiplier (%)</Label>
                    <Input
                      type="number"
                      value={calculationParams.priorityMultiplier * 100}
                      onChange={(e) => setCalculationParams({
                        ...calculationParams,
                        priorityMultiplier: Number(e.target.value) / 100
                      })}
                      min="0"
                      max="100"
                      step="1"
                    />
                  </div>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Time Value: ${calculationParams.hourlyRate} per hour × Current Time Spent</li>
                  <li>• Priority Multiplier: {calculationParams.priorityMultiplier * 100}% increase per priority level (1-5)</li>
                </ul>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Final Value = Time Value × (1 + Priority Multiplier)
                </p>
              </div>
            </div>
          )}

          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  height={120}
                  interval={0}
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Potential Value']}
                  labelFormatter={(label) => label.split('\n').join(' ')}
                />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">AI Automation Value Calculator</h1>
      
      <div className="space-y-6 w-full overflow-hidden">
        {/* Progress Bar */}
        <div className="relative w-full bg-muted rounded-full h-2.5 overflow-hidden">
          <div 
            className="absolute top-0 left-0 bg-primary h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Step Counter */}
        <div className="text-sm text-muted-foreground text-center">
          {currentStep === -1 ? 'Select Use Cases' : 
           currentStep < selectedUseCases.length ? `Step ${currentStep + 1} of ${selectedUseCases.length}` :
           'Results'}
        </div>

        {renderContent()}

        {/* Navigation Buttons */}
        {currentStep < selectedUseCases.length && (
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === -1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              {currentStep === -1 ? 'Back' : 'Previous'}
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentStep === -1 && selectedUseCases.length === 0}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              {currentStep === -1 ? 'Continue' : currentStep === selectedUseCases.length - 1 ? 'View Results' : 'Next'}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
} 