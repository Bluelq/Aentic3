import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">Our Story</h1>
          <p className="text-xl text-black dark:text-white mb-12">The Vision Behind Aentic.</p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
              A Unique Blend of Psychology, Business Acumen, and AI Innovation
            </h2>

            <p>
              Aentic AI was founded on the principle that technology, particularly artificial intelligence, should be
              intuitive, accessible, and fundamentally human-centered. It represents the culmination of a unique journey
              spearheaded by a single founder with a deep-rooted background in psychology and decades of diverse
              experience spanning numerous business sectors.
            </p>

            <p>
              This isn't a large, impersonal corporation. Aentic AI operates with the agility and focus of a dedicated
              expert, leveraging cutting-edge AI tools and methodologies to translate complex challenges into practical,
              intelligent solutions. The approach combines an understanding of human behavior and cognitive processes
              with extensive real-world business knowledge, ensuring that the AI applications developed are not just
              technologically advanced, but also genuinely useful and seamlessly integrated into how people actually
              work and think.
            </p>

            <p>
              By blending psychological insights with strategic business understanding and the power of modern AI,
              Aentic AI offers a distinct perspective. The focus is on demystifying AI, providing transparent,
              fixed-cost consultations to define clear paths forward, and ultimately building solutions that empower
              businesses and their people. It's about creating AI with purpose, driven by a singular vision to make
              intelligent technology work effectively and ethically for everyone.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Download Our Ebook</h3>
              <p className="text-black dark:text-white mb-4">
                Learn more about our approach to AI and how we're transforming businesses.
              </p>
              <Button asChild className="cta-button">
                <Link href="#">
                  <Download className="mr-2 h-4 w-4" /> Download Ebook
                </Link>
              </Button>
            </div>

            <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">AI Glossary</h3>
              <p className="text-black dark:text-white mb-4">
                Navigate the jargon of AI with our helpful glossary defining key terms and concepts.
              </p>
              <Button asChild className="bg-gray-200 hover:bg-gray-300 text-black" disabled>
                <Link href="#">
                  View Glossary (Coming Soon) <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
