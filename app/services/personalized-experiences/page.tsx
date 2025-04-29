import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Database, Users, Puzzle, Scale, Layers } from "lucide-react"

export default function PersonalizedExperiencesPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            AI for Personalized Experiences
          </h1>
          <p className="text-xl text-black dark:text-white mb-12">
            Creating applications that adapt to individual user needs and preferences, driving engagement and
            satisfaction ethically.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
              The Personalization Puzzle?
            </h2>
            <p className="text-black dark:text-white mb-8">
              Delivering truly personalized experiences is powerful, but fraught with challenges. Businesses often
              grapple with data privacy, maintaining customer trust, and implementing effective strategies without being
              intrusive. Key pain points include:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Shield className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Data Privacy & Trust</h3>
                </div>
                <p className="text-black dark:text-white">
                  Navigating regulations like GDPR and earning customer trust with data usage is critical yet difficult.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Database className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Data Quality Issues</h3>
                </div>
                <p className="text-black dark:text-white">
                  Poor or incomplete data leads to irrelevant personalization, potentially damaging customer loyalty.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Users className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Balancing Personalization & Privacy</h3>
                </div>
                <p className="text-black dark:text-white">
                  Finding the line between helpful personalization and experiences perceived as "creepy" or invasive.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Puzzle className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Implementation Costs & Complexity</h3>
                </div>
                <p className="text-black dark:text-white">
                  Integrating and managing AI personalization tools can be costly and technically challenging.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Scale className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Segmentation Challenges</h3>
                </div>
                <p className="text-black dark:text-white">
                  Defining meaningful user segments and tailoring experiences effectively across diverse groups.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Layers className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Scaling Personalization</h3>
                </div>
                <p className="text-black dark:text-white">
                  Delivering truly individual experiences consistently across all customer touchpoints at scale.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
              Aentic's Consultation-First Approach
            </h2>
            <p className="text-black dark:text-white mb-8">
              Our <strong>fixed-cost Personalized Experiences Consultation</strong> guides you in developing ethical and
              effective strategies. We help you build customer trust while delivering valuable, relevant interactions.
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Ethical Strategy Development</h3>
                  <p className="text-black dark:text-white">
                    We help design personalization approaches that prioritize user privacy and transparency.
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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Data Practice Review</h3>
                  <p className="text-black dark:text-white">
                    We assess your data handling processes to ensure compliance and build a foundation of trust.
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
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                    <line x1="16" x2="2" y1="8" y2="22" />
                    <line x1="17.5" x2="9" y1="15" y2="15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Value-Driven Design</h3>
                  <p className="text-black dark:text-white">
                    We focus on creating personalized experiences that genuinely enhance the user journey, avoiding
                    intrusive tactics.
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
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Implementation Planning</h3>
                  <p className="text-black dark:text-white">
                    We outline a clear, cost-effective roadmap for implementing personalization tools and strategies.
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
                    Our fixed-cost model ensures you know the consultation scope and cost upfront, mitigating financial
                    risk.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white dark:bg-black rounded-lg border border-gray-100 dark:border-gray-800">
              <p className="text-black dark:text-white">
                Begin with our consultation to enhance customer loyalty through meaningful personalization, navigate
                privacy regulations confidently, and build a scalable strategy that respects your users, all with
                predictable costs.
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
              Ready to Connect with Your Customers?
            </h2>
            <p className="text-xl text-black dark:text-white mb-8">
              Develop an ethical and effective AI personalization strategy. Get expert guidance with a fixed-cost
              consultation.
            </p>
            <Button asChild className="cta-button py-3 px-8 text-lg">
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
