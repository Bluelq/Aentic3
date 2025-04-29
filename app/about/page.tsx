import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">About Aentic</h1>
          <p className="text-xl text-black dark:text-white mb-12">
            Psychology-informed AI solutions that are intuitive, accessible, and human-centered.
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">Our Approach</h2>
            <p>
              Aentic was founded on the principle that technology, particularly artificial intelligence, should be
              intuitive, accessible, and fundamentally human-centered. We combine a deep understanding of psychology
              with cutting-edge AI expertise to create solutions that truly work for people.
            </p>
            <p>
              What sets us apart is our unique blend of psychological insights, business acumen, and technical
              innovation. We don't just build AI systems; we create experiences that align with how people actually
              think and work, ensuring seamless integration into your business processes.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12 text-black dark:text-white">Our Services</h2>
            <p>
              We offer a comprehensive range of AI services, from strategic consulting to full implementation of custom
              AI solutions. Our expertise spans multiple domains including:
            </p>
            <ul>
              <li>AI Consulting and Strategy</li>
              <li>Process Automation</li>
              <li>Predictive Analytics</li>
              <li>Personalized User Experiences</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
            </ul>
            <p>
              Each service is delivered with our signature approach: transparent pricing, clear communication, and a
              focus on practical, measurable outcomes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Our Story</h3>
              <p className="text-black dark:text-white mb-4">
                Learn about the vision behind Aentic and our journey to making AI more human-centered.
              </p>
              <Button asChild className="cta-button">
                <Link href="/about/our-story">
                  Read Our Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Our Team</h3>
              <p className="text-black dark:text-white mb-4">
                Meet the founder and discover the technology stack that powers our AI solutions.
              </p>
              <Button asChild className="cta-button">
                <Link href="/about/team">
                  Meet the Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800 mb-12">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Join Our Team</h3>
            <p className="text-black dark:text-white mb-4">
              Interested in contributing to the future of human-centered AI? Explore opportunities to join Aentic.
            </p>
            <Button asChild className="cta-button">
              <Link href="/about/careers">
                View Opportunities <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">Ready to Get Started?</h2>
            <p className="text-lg text-black dark:text-white mb-8">
              Let's discuss how Aentic can help transform your business with intelligent, human-centered AI solutions.
            </p>
            <Button asChild size="lg" className="cta-button">
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
