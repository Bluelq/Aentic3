import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function WelcomeBlogPost() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/insights/blog"
            className="inline-flex items-center text-black dark:text-white mb-8 hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
          </Link>

          <article>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
                Welcome to Aentic AI: Creating Your Vision with Human-Centered AI
              </h1>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Posted on April 29, 2025 by Aentic AI</div>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We are thrilled to announce the launch of Aentic AI! Founded on a unique blend of psychological insight,
                extensive business experience, and cutting-edge AI expertise, Aentic AI is dedicated to transforming
                complex ideas into intelligent, intuitive, and accessible applications.
              </p>

              <p>
                In today's rapidly evolving technological landscape, implementing AI can seem daunting. Businesses often
                face challenges like high costs, lack of in-house expertise, uncertainty about where to apply AI
                effectively, and concerns regarding data privacy and ethical implementation. Aentic AI was created to
                address these pain points directly.
              </p>

              <p>
                Our core philosophy is human-centered AI. We believe technology should serve people, making processes
                simpler, insights clearer, and experiences more meaningful. Led by a founder with decades of experience
                across diverse business fields and a deep understanding of psychology, we approach AI development
                differently. We focus on practical solutions tailored to specific industry needs, ensuring that the
                technology aligns with human cognitive processes and delivers tangible value.
              </p>

              <p>
                A key part of our offering is our transparent, fixed-cost consultation model. We start by understanding
                your unique challenges and goals through an initial assessment. This allows us to define clear project
                scopes and provide upfront, by-the-hour cost estimates that never exceed the agreed-upon budget. This
                approach removes financial uncertainty and fosters a collaborative partnership focused on achieving your
                vision.
              </p>

              <p>
                Whether you are looking to streamline operations through workflow automation, gain strategic insights
                with predictive analytics, create engaging personalized experiences, leverage natural language
                processing, or utilize computer vision, Aentic AI is here to guide you.
              </p>

              <p>
                Explore our website to learn more about our story, our structured framework, and our service offerings.
                We invite you to connect with us to discuss how Aentic AI can help bring your vision to life.
              </p>

              <p>
                Stay tuned to this blog for more insights, updates, and discussions on the future of practical,
                human-centered AI.
              </p>

              <blockquote>
                <p>
                  <strong>Aentic AI</strong>
                  <br />
                  Our psychology-informed approach creates AI applications that are not just technologically advanced,
                  but intuitive and accessible...
                </p>
              </blockquote>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
