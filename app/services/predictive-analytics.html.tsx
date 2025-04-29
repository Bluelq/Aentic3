import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react"

export default function PredictiveAnalyticsPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI for Workflow Automation</h1>
          <p className="text-xl text-gray-600 mb-12">
            Streamlining repetitive tasks and optimizing operational efficiency to free your team for high-value
            activities.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Facing Workflow Challenges?</h2>
            <p className="text-gray-600 mb-8">
              Implementing AI automation can seem daunting. Many businesses struggle with integrating new technologies,
              managing employee concerns, and ensuring a clear return on investment. Common pain points include:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Employee Resistance & Fear</h3>
                </div>
                <p className="text-gray-600">
                  Concerns about job displacement and the need for new skills can hinder adoption.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Complex Integration</h3>
                </div>
                <p className="text-gray-600">
                  Legacy systems often create technical compatibility issues, making integration difficult and costly.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Data & Security Concerns</h3>
                </div>
                <p className="text-gray-600">
                  Poor data infrastructure, privacy issues, and cybersecurity risks are significant barriers.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Scalability Issues</h3>
                </div>
                <p className="text-gray-600">
                  Initial solutions may fail to scale effectively or adapt to changing business needs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Unclear ROI & Costs</h3>
                </div>
                <p className="text-gray-600">
                  Difficulty in predicting costs and measuring the true impact of automation projects.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Lack of Support</h3>
                </div>
                <p className="text-gray-600">
                  Insufficient executive buy-in or organizational resistance can stall progress.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Aentic's Consultation-First Approach</h2>
            <p className="text-gray-600 mb-8">
              Our <strong>fixed-cost Workflow Automation Consultation</strong> is designed to address these challenges
              head-on. We provide a structured analysis to identify high-impact automation opportunities while
              prioritizing your team's needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Needs Assessment</h3>
                  <p className="text-gray-600">
                    We dive deep into your current workflows to understand bottlenecks and opportunities.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Pain Point Identification</h3>
                  <p className="text-gray-600">
                    We pinpoint specific areas where AI automation can deliver the most value.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Human-Centered Design</h3>
                  <p className="text-gray-600">
                    We design solutions that empower your employees, automating tedious tasks to free up their time for
                    more strategic work.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Integration Roadmap</h3>
                  <p className="text-gray-600">
                    We assess technical feasibility and outline a clear plan for integrating AI with your existing
                    systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">
                    Our fixed-cost model eliminates budget uncertainty, providing a clear scope and deliverables
                    upfront.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                By starting with consultation, you gain a clear, actionable roadmap, mitigate implementation risks,
                foster employee adoption, and ensure measurable improvements without budget surprises.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="bg-[#0e1631] hover:bg-[#0e1631]/90 text-white py-2 px-6">
                <Link href="/services/ai-consulting">Learn More About Our Consultation Model</Link>
              </Button>
            </div>
          </section>

          <section className="text-center mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Optimize Your Workflows?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's identify how AI can streamline your operations. Get a clear plan and predictable cost.
            </p>
            <Button asChild className="bg-[#0e1631] hover:bg-[#0e1631]/90 text-white py-3 px-8 text-lg">
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
