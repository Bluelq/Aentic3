import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react"

export default function PersonalizedExperiencesPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI for Personalized Experiences</h1>
          <p className="text-xl text-gray-600 mb-12">
            Creating applications that adapt to individual user needs and preferences, driving engagement and
            satisfaction ethically.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">The Personalization Puzzle?</h2>
            <p className="text-gray-600 mb-8">
              Delivering truly personalized experiences is powerful, but fraught with challenges. Businesses often
              grapple with data privacy, maintaining customer trust, and implementing effective strategies without being
              intrusive. Key pain points include:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Data Privacy & Trust</h3>
                </div>
                <p className="text-gray-600">
                  Navigating regulations like GDPR and earning customer trust with data usage is critical yet difficult.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Data Quality Issues</h3>
                </div>
                <p className="text-gray-600">
                  Poor or incomplete data leads to irrelevant personalization, potentially damaging customer loyalty.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Balancing Personalization & Privacy</h3>
                </div>
                <p className="text-gray-600">
                  Finding the line between helpful personalization and experiences perceived as "creepy" or invasive.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Implementation Costs & Complexity</h3>
                </div>
                <p className="text-gray-600">
                  Integrating and managing AI personalization tools can be costly and technically challenging.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Segmentation Challenges</h3>
                </div>
                <p className="text-gray-600">
                  Defining meaningful user segments and tailoring experiences effectively across diverse groups.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Scaling Personalization</h3>
                </div>
                <p className="text-gray-600">
                  Delivering truly individual experiences consistently across all customer touchpoints at scale.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Aentic's Consultation-First Approach</h2>
            <p className="text-gray-600 mb-8">
              Our <strong>fixed-cost Personalized Experiences Consultation</strong> guides you in developing ethical and
              effective strategies. We help you build customer trust while delivering valuable, relevant interactions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Ethical Strategy Development</h3>
                  <p className="text-gray-600">
                    We help design personalization approaches that prioritize user privacy and transparency.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Data Practice Review</h3>
                  <p className="text-gray-600">
                    We assess your data handling processes to ensure compliance and build a foundation of trust.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Value-Driven Design</h3>
                  <p className="text-gray-600">
                    We focus on creating personalized experiences that genuinely enhance the user journey, avoiding
                    intrusive tactics.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Implementation Planning</h3>
                  <p className="text-gray-600">
                    We outline a clear, cost-effective roadmap for implementing personalization tools and strategies.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">
                    Our fixed-cost model ensures you know the consultation scope and cost upfront, mitigating financial
                    risk.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Begin with our consultation to enhance customer loyalty through meaningful personalization, navigate
                privacy regulations confidently, and build a scalable strategy that respects your users, all with
                predictable costs.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="bg-[#0e1631] hover:bg-[#0e1631]/90 text-white py-2 px-6">
                <Link href="/services/ai-consulting">Learn More About Our Consultation Model</Link>
              </Button>
            </div>
          </section>

          <section className="text-center mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Connect with Your Customers?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Develop an ethical and effective AI personalization strategy. Get expert guidance with a fixed-cost
              consultation.
            </p>
            <Button asChild className="bg-[#0e1631] hover:bg-[#0e1631]/90 text-white py-3 px-8 text-lg">
              <Link href="/contact">
                Get Your Personalization Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  )
}
