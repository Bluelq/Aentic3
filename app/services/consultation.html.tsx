import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function ConsultationPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Fixed-Cost AI Consultation Model</h1>
          <p className="text-xl text-gray-600 mb-12">Clarity, Transparency, and Predictability for Your AI Journey.</p>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Demystifying AI Implementation</h2>
            <p className="text-gray-600 mb-6">
              Embarking on an AI project can feel like stepping into the unknown, often accompanied by concerns about
              escalating costs, unclear timelines, and uncertain outcomes. At Aentic AI, we believe in a different
              approach. Our unique <strong>fixed-cost, by-the-hour consultation model</strong> is designed to provide
              maximum clarity and minimize risk, ensuring you have a solid, actionable plan before committing to
              full-scale development.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How It Works: A Phased Approach</h2>
            <p className="text-gray-600 mb-8">
              Our consultation follows a structured process, typically aligning with our core framework, but tailored to
              your specific needs:
            </p>

            <div className="space-y-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0e1631] mb-4">Phase 1: Analyze & Discover</h3>
                <p className="text-gray-600 mb-4">
                  We start by deeply understanding your business goals, challenges, and existing workflows. We identify
                  specific pain points where AI could provide value and assess the technical feasibility.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                    <span>Initial Needs Assessment Workshop</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                    <span>Pain Point & Opportunity Mapping</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                    <span>Data Readiness Evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                    <span>Technical Feasibility Study</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0e1631] mb-4">Phase 2: Design & Strategize</h3>
                <p className="text-gray-600 mb-4">
                  Based on the analysis, we collaboratively design a high-level solution concept. We focus on a
                  human-centered approach, considering user experience, potential biases, and integration requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                    <span>Solution Concept Design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                    <span>User Experience Considerations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                    <span>Ethical AI & Bias Review</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                    <span>High-Level Architecture Plan</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0e1631] mb-4">Phase 3: Plan & Recommend</h3>
                <p className="text-gray-600 mb-4">
                  The final phase delivers a comprehensive roadmap. This includes detailed recommendations, estimated
                  timelines for potential implementation, and a clear outline of next steps.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                    <span>Detailed Implementation Roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                    <span>Technology Stack Recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                    <span>Resource & Skill Requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                    <span>Prioritized Action Plan</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Our Fixed-Cost Model?</h2>
            <p className="text-gray-600 mb-6">
              This model directly addresses the common anxieties associated with AI projects:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0e1631] mb-2">Budget Certainty</h3>
                <p className="text-gray-600">
                  You purchase a block of consultation hours upfront at a fixed rate. We work within those hours,
                  providing regular updates on usage. There are no surprise fees or escalating costs for the
                  consultation phase.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0e1631] mb-2">Transparency</h3>
                <p className="text-gray-600">
                  You know exactly what deliverables to expect from the consultation and how your investment is being
                  utilized.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0e1631] mb-2">Risk Mitigation</h3>
                <p className="text-gray-600">
                  Identify potential challenges, assess feasibility, and refine your strategy <em>before</em> making
                  significant development investments.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0e1631] mb-2">Actionable Roadmap</h3>
                <p className="text-gray-600">
                  Receive a clear, practical plan tailored to your business, empowering you to make informed decisions
                  about next steps.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0e1631] mb-2">Flexibility</h3>
                <p className="text-gray-600">
                  The roadmap provides a foundation. You can choose to proceed with Aentic for implementation or use the
                  plan with another partner – you own the strategy.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Consultation Deliverables</h2>
            <p className="text-gray-600 mb-6">
              Upon completion of the fixed-cost consultation, you will typically receive:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                <span>
                  A detailed <strong>Needs Analysis Report</strong> outlining identified pain points and opportunities.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                <span>
                  A <strong>Solution Concept Document</strong> describing the proposed AI approach.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                <span>
                  A <strong>Feasibility Assessment</strong> covering technical and data requirements.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#0e1631] mr-2 mt-0.5" />
                <span>
                  A comprehensive <strong>Implementation Roadmap</strong> with prioritized steps, technology
                  recommendations, and estimated timelines/effort for potential next phases.
                </span>
              </li>
            </ul>
          </section>

          <section className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready for a Clear Path to AI Success?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Invest in clarity and confidence. Start your AI journey with our transparent, fixed-cost consultation.
            </p>
            <Button asChild className="bg-[#0e1631] hover:bg-[#0e1631]/90 text-white py-3 px-8 text-lg">
              <Link href="/contact">
                Book Your Fixed-Cost AI Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  )
}
