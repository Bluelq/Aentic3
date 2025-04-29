import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { PhasedApproach } from "@/components/phased-approach"

export default function AIConsultingPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            Fixed-Cost AI Consultation Model
          </h1>
          <p className="text-xl text-black dark:text-white mb-12">
            Clarity, Transparency, and Predictability for Your AI Journey.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
              Demystifying AI Implementation
            </h2>
            <p className="text-black dark:text-white mb-6">
              Embarking on an AI project can feel like stepping into the unknown, often accompanied by concerns about
              escalating costs, unclear timelines, and uncertain outcomes. At Aentic AI, we believe in a different
              approach. Our unique <strong>fixed-cost, by-the-hour consultation model</strong> is designed to provide
              maximum clarity and minimize risk, ensuring you have a solid, actionable plan before committing to
              full-scale development.
            </p>
          </section>

          <section className="mb-16">
            <PhasedApproach />
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
              Why Choose Our Fixed-Cost Model?
            </h2>
            <p className="text-black dark:text-white mb-6">
              This model directly addresses the common anxieties associated with AI projects:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Budget Certainty</h3>
                <p className="text-black dark:text-white">
                  You purchase a block of consultation hours upfront at a fixed rate. We work within those hours,
                  providing regular updates on usage. There are no surprise fees or escalating costs for the
                  consultation phase.
                </p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Transparency</h3>
                <p className="text-black dark:text-white">
                  You know exactly what deliverables to expect from the consultation and how your investment is being
                  utilized.
                </p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Risk Mitigation</h3>
                <p className="text-black dark:text-white">
                  Identify potential challenges, assess feasibility, and refine your strategy <em>before</em> making
                  significant development investments.
                </p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Actionable Roadmap</h3>
                <p className="text-black dark:text-white">
                  Receive a clear, practical plan tailored to your business, empowering you to make informed decisions
                  about next steps.
                </p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">Flexibility</h3>
                <p className="text-black dark:text-white">
                  The roadmap provides a foundation. You can choose to proceed with Aentic for implementation or use the
                  plan with another partner – you own the strategy.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
              Consultation Deliverables
            </h2>
            <p className="text-black dark:text-white mb-8">
              Upon completion of the fixed-cost consultation, you will typically receive:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md border-l-4 border-l-black dark:border-l-white border-t border-r border-b border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-black/10 dark:bg-white/10 p-3 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Needs Analysis Report</h3>
                    <p className="text-black dark:text-white">
                      A detailed document outlining identified pain points and opportunities for AI implementation in
                      your business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md border-l-4 border-l-black dark:border-l-white border-t border-r border-b border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-black/10 dark:bg-white/10 p-3 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Solution Concept Document</h3>
                    <p className="text-black dark:text-white">
                      A comprehensive description of the proposed AI approach tailored to your specific business needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md border-l-4 border-l-black dark:border-l-white border-t border-r border-b border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-black/10 dark:bg-white/10 p-3 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Feasibility Assessment</h3>
                    <p className="text-black dark:text-white">
                      A thorough evaluation covering technical requirements, data needs, and potential implementation
                      challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md border-l-4 border-l-black dark:border-l-white border-t border-r border-b border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="bg-black/10 dark:bg-white/10 p-3 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Implementation Roadmap</h3>
                    <p className="text-black dark:text-white">
                      A comprehensive plan with prioritized steps, technology recommendations, and estimated timelines
                      for potential next phases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white">
              Ready for a Clear Path to AI Success?
            </h2>
            <p className="text-xl text-black dark:text-white mb-8">
              Invest in clarity and confidence. Start your AI journey with our transparent, fixed-cost consultation.
            </p>
            <Link href="/contact" className="cta-button py-3 px-8 inline-flex items-center text-lg">
              Book your Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
