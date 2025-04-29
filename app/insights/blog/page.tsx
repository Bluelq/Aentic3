import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">Aentic AI Blog</h1>
          <p className="text-xl text-black dark:text-white mb-12">
            Insights, updates, and discussions on the future of practical, human-centered AI.
          </p>

          <div className="grid gap-8">
            <article className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">April 29, 2025 • Aentic AI</div>
              <h2 className="text-2xl font-bold mb-3 text-black dark:text-white">
                <Link href="/insights/blog/welcome-to-aentic-ai" className="hover:underline">
                  Welcome to Aentic AI: Creating Your Vision with Human-Centered AI
                </Link>
              </h2>
              <p className="text-black dark:text-white mb-4">
                We are thrilled to announce the launch of Aentic AI! Founded on a unique blend of psychological insight,
                extensive business experience, and cutting-edge AI expertise, Aentic AI is dedicated to transforming
                complex ideas into intelligent, intuitive, and accessible applications.
              </p>
              <Link
                href="/insights/blog/welcome-to-aentic-ai"
                className="inline-flex items-center text-black dark:text-white font-medium hover:underline"
              >
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </article>

            {/* Placeholder for future blog posts */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-4">
              <p className="text-center text-gray-500 dark:text-gray-400">More articles coming soon!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
