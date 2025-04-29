import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sun, Maximize, EyeOff, FileText, Layers, AlertTriangle } from "lucide-react"

export default function ComputerVisionPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">AI for Computer Vision</h1>
          <p className="text-xl text-black dark:text-white mb-12">
            Building applications that interpret, analyze, and understand visual information from the world around us.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
              Navigating the World of Visual AI?
            </h2>
            <p className="text-black dark:text-white mb-8">
              Computer vision enables machines to "see," but implementing reliable solutions involves overcoming
              significant real-world challenges related to image quality, object variability, and data requirements.
              Common pain points include:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Sun className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Variable Lighting & Conditions</h3>
                </div>
                <p className="text-black dark:text-white">
                  Changes in lighting, shadows, and weather can drastically alter object appearance for AI.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Maximize className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Perspective & Scale Variability</h3>
                </div>
                <p className="text-black dark:text-white">
                  Objects appear differently depending on distance, angle, and size, complicating recognition.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <EyeOff className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Occlusion & Visibility</h3>
                </div>
                <p className="text-black dark:text-white">
                  Partially hidden or blocked objects are difficult for AI systems to identify and track accurately.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <FileText className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Data Annotation Burden</h3>
                </div>
                <p className="text-black dark:text-white">
                  Training requires large amounts of meticulously labeled visual data, which is time-consuming to
                  create.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <Layers className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Contextual Understanding</h3>
                </div>
                <p className="text-black dark:text-white">
                  Systems often identify objects but struggle to interpret the overall scene or relationships between
                  objects.
                </p>
              </div>

              <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-start mb-3">
                  <AlertTriangle className="h-6 w-6 text-black dark:text-white mr-2" />
                  <h3 className="text-xl font-bold text-black dark:text-white">Reliability & Edge Cases</h3>
                </div>
                <p className="text-black dark:text-white">
                  Ensuring robust performance across diverse, unexpected real-world scenarios (corner cases) is crucial.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
              Aentic's Consultation-First Approach
            </h2>
            <p className="text-black dark:text-white mb-8">
              Our <strong>fixed-cost Computer Vision Consultation</strong> helps you address these complexities. We
              evaluate your specific needs, identify technical hurdles, and design practical, robust solutions tailored
              for real-world performance.
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
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Feasibility Study</h3>
                  <p className="text-black dark:text-white">
                    We assess the viability of computer vision for your specific application and environment.
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
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Challenge Identification</h3>
                  <p className="text-black dark:text-white">
                    We pinpoint potential issues related to lighting, occlusion, scale, and data specific to your use
                    case.
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Data Strategy</h3>
                  <p className="text-black dark:text-white">
                    We help define requirements for data collection and annotation, exploring efficient methods.
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
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Robust Design Principles</h3>
                  <p className="text-black dark:text-white">
                    We focus on designing systems resilient to real-world variability and potential edge cases.
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
                    We provide a clear plan outlining technical requirements, potential hardware needs, and development
                    steps.
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
                    Our fixed-cost model ensures you understand the consultation investment upfront.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white dark:bg-black rounded-lg border border-gray-100 dark:border-gray-800">
              <p className="text-black dark:text-white">
                Start with our consultation to gain a clear path for implementing effective computer vision, understand
                technical requirements and costs, mitigate risks, and ensure your system is built for reliable,
                real-world success.
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
              Ready to Give Your Systems Sight?
            </h2>
            <p className="text-xl text-black dark:text-white mb-8">
              Plan your reliable computer vision project with confidence. Get expert guidance through our fixed-cost
              consultation.
            </p>
            <Button asChild className="cta-button py-3 px-8 text-lg">
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
