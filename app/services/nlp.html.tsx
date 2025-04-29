import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react"

export default function NLPPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI for Natural Language Processing (NLP)</h1>
          <p className="text-xl text-gray-600 mb-12">
            Developing solutions that understand, interpret, and interact using human language, from chatbots to content
            analysis.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Unlocking the Power of Language Data?</h2>
            <p className="text-gray-600 mb-8">
              Leveraging Natural Language Processing offers immense potential, but it comes with unique complexities.
              Businesses often struggle with the nuances of language, data limitations, and ensuring ethical
              application. Common NLP pain points include:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Ambiguity & Context</h3>
                </div>
                <p className="text-gray-600">
                  NLP models struggle with multiple meanings, idioms, slang, and understanding context accurately.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Data Quality & Availability</h3>
                </div>
                <p className="text-gray-600">
                  Effective NLP requires large, high-quality, annotated datasets, which are often scarce or costly to
                  create.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Multilingual Challenges</h3>
                </div>
                <p className="text-gray-600">
                  Handling the diversity in syntax and semantics across different languages is complex.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Ethical Concerns & Bias</h3>
                </div>
                <p className="text-gray-600">
                  Models can learn and amplify biases from training data, leading to unfair or unintended outcomes.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Resource Requirements</h3>
                </div>
                <p className="text-gray-600">
                  Advanced NLP models demand significant computational power and specialized expertise.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Real-Time Processing</h3>
                </div>
                <p className="text-gray-600">
                  Achieving low latency and high accuracy simultaneously for interactive applications is difficult.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Aentic's Consultation-First Approach</h2>
            <p className="text-gray-600 mb-8">
              Our <strong>fixed-cost Natural Language Processing Consultation</strong> helps you navigate these
              complexities. We identify high-value NLP applications, assess data feasibility, and design practical
              solutions tailored to your needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Use Case Identification</h3>
                  <p className="text-gray-600">
                    We help pinpoint practical NLP applications that align with your business goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Data Feasibility Assessment</h3>
                  <p className="text-gray-600">
                    We evaluate your existing language data and explore strategies for data acquisition or augmentation.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Contextual Design</h3>
                  <p className="text-gray-600">
                    We focus on designing solutions that better handle ambiguity and understand the specific context of
                    your domain.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Ethical Implementation Strategy</h3>
                  <p className="text-gray-600">
                    We help you consider and mitigate potential biases and ethical concerns from the outset.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Resource Planning</h3>
                  <p className="text-gray-600">
                    We provide insights into the computational and expertise requirements for your desired NLP solution.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">
                    Our fixed-cost model provides clarity on the consultation scope and investment required.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Start with our consultation to harness the power of language AI, automate tasks, gain insights from text
                data, and improve interactions—with a clear understanding of costs and requirements before full
                development.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="bg-[#0e1631] hover:bg-[#0e1631]/90 text-white py-2 px-6">
                <Link href="/services/ai-consulting">Learn More About Our Consultation Model</Link>
              </Button>
            </div>
          </section>

          <section className="text-center mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Leverage Language AI?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore practical NLP opportunities for your business. Get expert guidance with a fixed-cost consultation.
            </p>
            <Button asChild className="bg-[#0e1631] hover:bg-[#0e1631]/90 text-white py-3 px-8 text-lg">
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
