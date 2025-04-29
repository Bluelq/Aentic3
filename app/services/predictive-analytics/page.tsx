import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Database, ShieldAlert, Scale, Calculator, Building2 } from "lucide-react"

export default function PredictiveAnalyticsPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            AI for Predictive Analytics
          </h1>
          <p className="text-xl text-black dark:text-white mb-12">
            Leveraging data to forecast trends, identify opportunities, and make informed strategic decisions that drive
            business growth.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
              Navigating Predictive Analytics Challenges?
            </h2>
            <p className="text-black dark:text-white mb-8">
              Implementing predictive analytics can seem overwhelming. Many organizations struggle with data quality,
              selecting appropriate models, and translating insights into actionable strategies. Common pain points
              include:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Database className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Data Quality & Accessibility</h3>
                </div>
                <p className="text-black dark:text-white">
                  Fragmented, inconsistent, or incomplete data makes accurate predictions difficult or impossible.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <BarChart3 className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Model Selection & Complexity</h3>
                </div>
                <p className="text-black dark:text-white">
                  Choosing the right algorithms and approaches for specific business problems requires specialized
                  expertise.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <ShieldAlert className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Privacy & Compliance Concerns</h3>
                </div>
                <p className="text-black dark:text-white">
                  Navigating regulations like GDPR and ensuring ethical use of data while maintaining predictive power.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Scale className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Interpretability & Trust</h3>
                </div>
                <p className="text-black dark:text-white">
                  Creating models that stakeholders can understand and trust for critical business decisions.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Calculator className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">ROI Measurement</h3>
                </div>
                <p className="text-black dark:text-white">
                  Quantifying the business impact of predictive models and justifying investment in analytics
                  capabilities.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Building2 className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Organizational Adoption</h3>
                </div>
                <p className="text-black dark:text-white">
                  Creating a data-driven culture where predictive insights actually inform decision-making processes.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
              Aentic's Consultation-First Approach
            </h2>
            <p className="text-black dark:text-white mb-8">
              Our <strong>fixed-cost Predictive Analytics Consultation</strong> is designed to address these challenges
              head-on. We provide a structured analysis to identify high-impact prediction opportunities while ensuring
              practical implementation.
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
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Data Assessment</h3>
                  <p className="text-black dark:text-white">
                    We evaluate your existing data assets, identify gaps, and recommend strategies for data enrichment.
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
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Use Case Prioritization</h3>
                  <p className="text-black dark:text-white">
                    We identify the highest-value prediction opportunities that align with your strategic objectives.
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
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Model Selection Strategy</h3>
                  <p className="text-black dark:text-white">
                    We recommend appropriate modeling approaches that balance accuracy with interpretability for your
                    specific needs.
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
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Implementation Roadmap</h3>
                  <p className="text-black dark:text-white">
                    We create a clear plan for developing, deploying, and integrating predictive models into your
                    business processes.
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
                By starting with consultation, you gain a clear, actionable roadmap for predictive analytics, identify
                the highest-value opportunities, and ensure your analytics investments deliver measurable business
                impact.
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
              Ready to Harness the Power of Prediction?
            </h2>
            <p className="text-xl text-black dark:text-white mb-8">
              Let's identify how predictive analytics can transform your decision-making. Get a clear plan and
              predictable cost.
            </p>
            <Button asChild className="cta-button py-3 px-8 text-lg">
              <Link href="/contact">
                Get Your Predictive Analytics Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  )
}
