import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative py-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
        <div className="relative text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Integrate AI Into Your Workflow and Watch the Hours (and Dollars) Add Up
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            We help small and mid-sized businesses integrate AI into their <em>existing</em> processes—saving time, cutting costs, and increasing productivity without hiring or adding complexity.
          </p>
          <Button size="lg" className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            🗓 Book a Free 30-Minute Strategy Call
          </Button>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            You Don&apos;t Need a Full Tech Team to Use AI Effectively
          </h2>
          <div className="space-y-6 text-lg">
            <p className="text-muted-foreground">
              Most AI tools promise the world—but they leave you with more questions than results.
            </p>
            <p className="text-muted-foreground">
              You&apos;re not looking for more software.
            </p>
            <p className="font-semibold text-xl">
              You&apos;re looking for <span className="text-blue-600">smarter workflows</span>.
            </p>
            <p className="text-muted-foreground">
              That&apos;s where we come in.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5" />
        <div className="relative max-w-3xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            We Help You Automate the Busywork and Reclaim Your Team&apos;s Time
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in integrating <span className="font-semibold text-purple-600">practical AI tools</span> into your existing stack—think CRMs, spreadsheets, email, forms, docs, and more.
          </p>
          <div className="space-y-6 bg-white/50 dark:bg-black/50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-600">The result?</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 p-4 bg-white/50 dark:bg-black/50 rounded-xl shadow-sm">
                <span className="text-3xl">⏱</span>
                <span className="text-lg">Hours of time back each week</span>
              </li>
              <li className="flex items-center gap-4 p-4 bg-white/50 dark:bg-black/50 rounded-xl shadow-sm">
                <span className="text-3xl">💸</span>
                <span className="text-lg">Thousands saved in overhead and inefficiencies</span>
              </li>
              <li className="flex items-center gap-4 p-4 bg-white/50 dark:bg-black/50 rounded-xl shadow-sm">
                <span className="text-3xl">🧘</span>
                <span className="text-lg">A team that&apos;s focused on high-value work, not tedious tasks</span>
              </li>
            </ul>
          </div>
          <p className="text-lg text-muted-foreground">
            Whether it&apos;s using AI to summarize client notes, automate reporting, generate proposals, or route customer requests, we make it all run quietly in the background.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-background to-muted/50">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              How We Work
            </h2>
            <h3 className="text-2xl font-semibold text-muted-foreground">
              Our 3-Step AI Workflow Integration Process
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 bg-white/50 dark:bg-black/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-blue-600">1. Audit Your Workflows</h4>
              <p className="text-muted-foreground">
                We learn how your business runs day-to-day, then pinpoint which parts can be streamlined with AI tools.
              </p>
            </div>
            <div className="space-y-4 p-6 bg-white/50 dark:bg-black/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-purple-600">2. Plug In the Right Tools</h4>
              <p className="text-muted-foreground">
                We connect AI tools (like ChatGPT, Zapier, Notion AI, and others) directly into the tools you already use.
              </p>
            </div>
            <div className="space-y-4 p-6 bg-white/50 dark:bg-black/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-pink-600">3. Train Your Team + Support Ongoing</h4>
              <p className="text-muted-foreground">
                We train your team to confidently use what we build, and we&apos;re here as your AI partner as needs evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-3xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            What We&apos;ve Helped Businesses Do
          </h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {[
              "Automate proposal and document generation",
              "Use AI to summarize meetings and emails instantly",
              "Auto-respond to client inquiries using AI chat",
              "Tag, sort, and analyze customer feedback at scale",
              "Build workflows that run tasks while you sleep"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 p-4 bg-white/50 dark:bg-black/50 rounded-xl shadow-sm">
                <span className="text-green-500 text-xl">✅</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 bg-white/50 dark:bg-black/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-600">
                <span>🎯</span> Focused on Real ROI
              </h3>
              <p className="text-muted-foreground">
                We don&apos;t chase shiny tools—we find what works and saves you real time and money.
              </p>
            </div>
            <div className="space-y-4 p-6 bg-white/50 dark:bg-black/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-purple-600">
                <span>🔌</span> Integrated, Not Replaced
              </h3>
              <p className="text-muted-foreground">
                We don&apos;t overhaul your systems. We connect AI to the tools your team already knows.
              </p>
            </div>
            <div className="space-y-4 p-6 bg-white/50 dark:bg-black/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-pink-600">
                <span>👥</span> Designed for Humans
              </h3>
              <p className="text-muted-foreground">
                No tech jargon. No extra software. Just clean, efficient solutions your team will actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />
        <div className="relative max-w-3xl mx-auto space-y-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Get a Free Custom AI Integration Plan
          </h2>
          <p className="text-xl text-muted-foreground">
            Book a 30-minute strategy session and walk away with:
          </p>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center justify-center gap-2">
              <span className="text-blue-600">•</span>
              <span>A personalized AI audit of your business</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-purple-600">•</span>
              <span>2–3 ready-to-use workflow improvements</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-pink-600">•</span>
              <span>A clear plan to start saving time immediately</span>
            </li>
          </ul>
          <Button size="lg" className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Book Your Free Strategy Call
          </Button>
        </div>
      </section>
    </main>
  )
}
