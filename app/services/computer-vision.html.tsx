import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react"

export default function ComputerVisionPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI for Computer Vision</h1>
          <p className="text-xl text-gray-600 mb-12">
            Building applications that interpret, analyze, and understand visual information from the world around us.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Navigating the World of Visual AI?</h2>
            <p className="text-gray-600 mb-8">
              Computer vision enables machines to "see," but implementing reliable solutions involves overcoming
              significant real-world challenges related to image quality, object variability, and data requirements.
              Common pain points include:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Variable Lighting & Conditions</h3>
                </div>
                <p className="text-gray-600">
                  Changes in lighting, shadows, and weather can drastically alter object appearance for AI.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Perspective & Scale Variability</h3>
                </div>
                <p className="text-gray-600">
                  Objects appear differently depending on distance, angle, and size, complicating recognition.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Occlusion & Visibility</h3>
                </div>
                <p className="text-gray-600">
                  Partially hidden or blocked objects are difficult for AI systems to identify and track accurately.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Data Annotation Burden</h3>
                </div>
                <p className="text-gray-600">
                  Training requires large amounts of meticulously labeled visual data, which is time-consuming to
                  create.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Contextual Understanding</h3>
                </div>
                <p className="text-gray-600">
                  Systems often identify objects but struggle to interpret the overall scene or relationships between
                  objects.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold">Reliability & Edge Cases</h3>
                </div>
                <p className="text-gray-600">
                  Ensuring robust performance across diverse, unexpected real-world scenarios (corner cases) is crucial.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Aentic's Consultation-First Approach</h2>
            <p className="text-gray-600 mb-8">
              Our <strong>fixed-cost Computer Vision Consultation</strong> helps you address these complexities. We
              evaluate your specific needs, identify technical hurdles, and design practical, robust solutions tailored
              for real-world performance.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Feasibility Study</h3>
                  <p className="text-gray-600">
                    We assess the viability of computer vision for your specific application and environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Challenge Identification</h3>
                  <p className="text-gray-600">
                    We pinpoint potential issues related to lighting, occlusion, scale, and data specific to your use
                    case.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Data Strategy</h3>
                  <p className="text-gray-600">
                    We help define requirements for data collection and annotation, exploring efficient methods.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Robust Design Principles</h3>
                  <p className="text-gray-600">
                    We focus on designing systems resilient to real-world variability and potential edge cases.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Implementation Roadmap</h3>
                  <p className="text-gray-600">
                    We provide a clear plan outlining technical requirements, potential hardware needs, and development
                    steps.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#0e1631] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">
                    Our fixed-cost model ensures you understand the consultation investment upfront.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                Start with our consultation to gain a clear path for implementing effective computer vision, understand
                technical requirements and costs, mitigate risks, and ensure your system is built for reliable,
                real-world success.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Button asChild className="bg-[#0e1631] hover:bg-[#0e1631]/90 text-white py-2 px-6">
                <Link href="/services/ai-consulting">Learn More About Our Consultation Model</Link>
              </Button>
            </div>
          </section>

          <section className="text-center mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Give Your Systems Sight?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Plan your reliable computer vision project with confidence. Get expert guidance through our fixed-cost
              consultation.
            </p>
            <Button asChild className="bg-[#0e1631] hover:bg-[#0e1631]/90 text-white py-3 px-8 text-lg">
              <Link href="/contact">
                Get Your Computer Vision Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  )
}
