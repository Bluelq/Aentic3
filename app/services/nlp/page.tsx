import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Database, Globe, AlertTriangle, Server, Clock } from "lucide-react"

export default function NLPPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            AI for Natural Language Processing
          </h1>
          <p className="text-xl text-black dark:text-white mb-12">
            Developing solutions that understand, interpret, and interact using human language, from chatbots to content
            analysis.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
              Unlocking the Power of Language Data?
            </h2>
            <p className="text-black dark:text-white mb-8">
              Leveraging Natural Language Processing offers immense potential, but it comes with unique complexities.
              Businesses often struggle with the nuances of language, data limitations, and ensuring ethical
              application. Common NLP pain points include:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <MessageSquare className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Ambiguity & Context</h3>
                </div>
                <p className="text-black dark:text-white">
                  NLP models struggle with multiple meanings, idioms, slang, and understanding context accurately.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Database className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Data Quality & Availability</h3>
                </div>
                <p className="text-black dark:text-white">
                  Effective NLP requires large, high-quality, annotated datasets, which are often scarce or costly to
                  create.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Globe className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Multilingual Challenges</h3>
                </div>
                <p className="text-black dark:text-white">
                  Handling the diversity in syntax and semantics across different languages is complex.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Ethical Concerns & Bias</h3>
                </div>
                <p className="text-black dark:text-white">
                  Models can learn and amplify biases from training data, leading to unfair or unintended outcomes.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Server className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Resource Requirements</h3>
                </div>
                <p className="text-black dark:text-white">
                  Advanced NLP models demand significant computational power and specialized expertise.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Clock className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Real-Time Processing</h3>
                </div>
                <p className="text-black dark:text-white">
                  Achieving low latency and high accuracy simultaneously for interactive applications is difficult.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
              Aentic's Consultation-First Approach
            </h2>
            <p className="text-black dark:text-white mb-8">
              Our <strong>fixed-cost Natural Language Processing Consultation</strong> helps you navigate these
              complexities. We identify high-value NLP applications, assess data feasibility, and design practical
              solutions tailored to your needs.
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Use Case Identification</h3>
                  <p className="text-black dark:text-white">
                    We help pinpoint practical NLP applications that align with your business goals.
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
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Data Feasibility Assessment</h3>
                  <p className="text-black dark:text-white">
                    We evaluate your existing language data and explore strategies for data acquisition or augmentation.
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
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Contextual Design</h3>
                  <p className="text-black dark:text-white">
                    We focus on designing solutions that better handle ambiguity and understand the specific context of
                    your domain.
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
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Ethical Implementation Strategy</h3>
                  <p className="text-black dark:text-white">
                    We help you consider and mitigate potential biases and ethical concerns from the outset.
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
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" x2="16" y1="21" y2="21" />
                    <line x1="12" x2="12" y1="17" y2="21" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Resource Planning</h3>
                  <p className="text-black dark:text-white">
                    We provide insights into the computational and expertise requirements for your desired NLP solution.
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
                    Our fixed-cost model provides clarity on the consultation scope and investment required.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white dark:bg-black rounded-lg border border-gray-100 dark:border-gray-800">
              <p className="text-black dark:text-white">
                Start with our consultation to harness the power of language AI, automate tasks, gain insights from text
                data, and improve interactions—with a clear understanding of costs and requirements before full
                development.
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
              Ready to Leverage Language AI?
            </h2>
            <p className="text-xl text-black dark:text-white mb-8">
              Explore practical NLP opportunities for your business. Get expert guidance with a fixed-cost consultation.
            </p>
            <Button asChild className="cta-button py-3 px-8 text-lg">
              <Link href="/contact">
                Get Your NLP Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  )
}
