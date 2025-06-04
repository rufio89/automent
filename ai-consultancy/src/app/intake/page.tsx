import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function IntakeForm() {
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

        <form className="space-y-12">
          {/* General Business Overview */}
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span>🔍</span> General Business Overview
              </h2>
              <p className="text-muted-foreground">
                Let's understand your current business processes and tools
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>What are your top 3 time-consuming workflows right now?</Label>
                <textarea 
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                  placeholder="List your top 3 time-consuming workflows..."
                />
              </div>
              <div className="space-y-2">
                <Label>What tools/software do you use daily?</Label>
                <textarea 
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                  placeholder="List your daily tools (CRM, email, spreadsheets, task managers, etc.)..."
                />
              </div>
              <div className="space-y-2">
                <Label>Are there any manual processes your team repeats daily or weekly?</Label>
                <textarea 
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                  placeholder="Describe any repetitive manual processes..."
                />
              </div>
              <div className="space-y-2">
                <Label>Do you currently use any AI tools? If so, which ones and how?</Label>
                <textarea 
                  className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                  placeholder="List any AI tools you're currently using..."
                />
              </div>
            </div>
          </Card>

          {/* Data Input & Information Gathering */}
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span>📥</span> Data Input & Information Gathering
              </h2>
              <p className="text-muted-foreground">
                Let's identify opportunities for data automation
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Do you manually copy/paste or transfer data between systems (e.g., email to CRM)?",
                "Do team members spend time summarizing client calls or meetings?",
                "Is survey or form data currently reviewed manually?",
                "Are you using spreadsheets for processes that could be automated?"
              ].map((question, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Checkbox id={`data-${index}`} />
                  <Label htmlFor={`data-${index}`} className="font-normal">
                    {question}
                  </Label>
                </div>
              ))}
            </div>
          </Card>

          {/* Internal Knowledge & Communication */}
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span>🧠</span> Internal Knowledge & Communication
              </h2>
              <p className="text-muted-foreground">
                Let's assess your knowledge management and communication processes
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Is it easy for your team to find past answers or documentation?",
                "Do you have a central knowledge base or internal wiki?",
                "Could common questions be answered automatically (via chatbot or AI assistant)?",
                "Are internal reports generated manually?"
              ].map((question, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Checkbox id={`knowledge-${index}`} />
                  <Label htmlFor={`knowledge-${index}`} className="font-normal">
                    {question}
                  </Label>
                </div>
              ))}
            </div>
          </Card>

          {/* Sales & Client Interaction */}
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span>🛠</span> Sales & Client Interaction
              </h2>
              <p className="text-muted-foreground">
                Let's evaluate your client-facing processes
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Are you generating proposals, SOWs, or quotes by hand?",
                "Do you follow up with leads manually?",
                "Could an AI chatbot help with inbound inquiries on your website?",
                "Are client onboarding steps handled through email or paper forms?"
              ].map((question, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Checkbox id={`sales-${index}`} />
                  <Label htmlFor={`sales-${index}`} className="font-normal">
                    {question}
                  </Label>
                </div>
              ))}
            </div>
          </Card>

          {/* Content Creation & Marketing */}
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span>📝</span> Content Creation & Marketing
              </h2>
              <p className="text-muted-foreground">
                Let's look at your content creation and marketing processes
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Is your team writing content (blogs, social, emails) from scratch?",
                "Are customer emails or support tickets written manually?",
                "Do you repurpose content for different platforms?",
                "Could AI help with scheduling or publishing?"
              ].map((question, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Checkbox id={`content-${index}`} />
                  <Label htmlFor={`content-${index}`} className="font-normal">
                    {question}
                  </Label>
                </div>
              ))}
            </div>
          </Card>

          {/* Operations & Reporting */}
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <span>📈</span> Operations & Reporting
              </h2>
              <p className="text-muted-foreground">
                Let's examine your operational processes and reporting
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Do you compile recurring reports manually (e.g., sales reports, KPIs)?",
                "Are there systems that don't \"talk to each other\" but should?",
                "Are invoices, receipts, or contracts created manually?",
                "Do you lack visibility into where bottlenecks or inefficiencies exist?"
              ].map((question, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Checkbox id={`ops-${index}`} />
                  <Label htmlFor={`ops-${index}`} className="font-normal">
                    {question}
                  </Label>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Submit Assessment
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
} 