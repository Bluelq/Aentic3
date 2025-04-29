import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Puzzle, Shield, Scale, Calculator, Building2 } from "lucide-react"

export default function AutomationPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">AI for Workflow Automation</h1>
          <p className="text-xl text-black dark:text-white mb-12">
            Streamlining repetitive tasks and optimizing operational efficiency to free your team for high-value
            activities.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
              Facing Workflow Challenges?
            </h2>
            <p className="text-black dark:text-white mb-8">
              Implementing AI automation can seem daunting. Many businesses struggle with integrating new technologies,
              managing employee concerns, and ensuring a clear return on investment. Common pain points include:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Users className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Employee Resistance & Fear</h3>
                </div>
                <p className="text-black dark:text-white">
                  Concerns about job displacement and the need for new skills can hinder adoption.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Puzzle className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Complex Integration</h3>
                </div>
                <p className="text-black dark:text-white">
                  Legacy systems often create technical compatibility issues, making integration difficult and costly.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Shield className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Data & Security Concerns</h3>
                </div>
                <p className="text-black dark:text-white">
                  Poor data infrastructure, privacy issues, and cybersecurity risks are significant barriers.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Scale className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Scalability Issues</h3>
                </div>
                <p className="text-black dark:text-white">
                  Initial solutions may fail to scale effectively or adapt to changing business needs.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Calculator className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Unclear ROI & Costs</h3>
                </div>
                <p className="text-black dark:text-white">
                  Difficulty in predicting costs and measuring the true impact of automation projects.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Building2 className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Lack of Support</h3>
                </div>
                <p className="text-black dark:text-white">
                  Insufficient executive buy-in or organizational resistance can stall progress.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
              Aentic's Consultation-First Approach
            </h2>
            <p className="text-black dark:text-white mb-8">
              Our <strong>fixed-cost Workflow Automation Consultation</strong> is designed to address these challenges
              head-on. We provide a structured analysis to identify high-impact automation opportunities while
              prioritizing your team's needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-6 w-6 text-black dark:text-white mr-3 mt-0.5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Needs Assessment</h3>
                  <p className="text-black dark:text-white">
                    We dive deep into your current workflows to understand bottlenecks and opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 text-black dark:text-white mr-3 mt-0.5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Pain Point Identification</h3>
                  <p className="text-black dark:text-white">
                    We pinpoint specific areas where AI automation can deliver the most value.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 text-black dark:text-white mr-3 mt-0.5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Human-Centered Design</h3>
                  <p className="text-black dark:text-white">
                    We design solutions that empower your employees, automating tedious tasks to free up their time for
                    more strategic work.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 text-black dark:text-white mr-3 mt-0.5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Integration Roadmap</h3>
                  <p className="text-black dark:text-white">
                    We assess technical feasibility and outline a clear plan for integrating AI with your existing
                    systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 text-black dark:text-white mr-3 mt-0.5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Transparent Pricing</h3>
                  <p className="text-black dark:text-white">
                    Our fixed-cost model eliminates budget uncertainty, providing a clear scope and deliverables
                    upfront.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white dark:bg-black rounded-lg border border-gray-100 dark:border-gray-800">
              <p className="text-black dark:text-white">
                By starting with consultation, you gain a clear, actionable roadmap, mitigate implementation risks,
                foster employee adoption, and ensure measurable improvements without budget surprises.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="cta-button py-2 px-6">
                <Link href="/services/ai-consulting">Learn More About Our Consultation Model</Link>
              </Button>
            </div>
          </section>

          <section className="text-center mb-12 bg-white dark:bg-black p-8 rounded-lg border border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
              Ready to Optimize Your Workflows?
            </h2>
            <p className="text-xl text-black dark:text-white mb-8">
              Let's identify how AI can streamline your operations. Get a clear plan and predictable cost.
            </p>
            <Button asChild className="cta-button py-3 px-8 text-lg">
              <Link href="/contact">
                Get Your Workflow Automation Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  )
}
