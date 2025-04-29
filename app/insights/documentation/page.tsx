import Link from "next/link"
import { ArrowRight, FileText, Book, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            Technical Guides and Resources
          </h1>
          <p className="text-xl text-black dark:text-white mb-12">
            Understanding the fundamentals and applications of AI.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <Book className="h-8 w-8 text-black dark:text-white mr-4" />
                <h2 className="text-2xl font-bold text-black dark:text-white">Understanding AI - A Beginner's Guide</h2>
              </div>
              <p className="text-black dark:text-white mb-6">
                Dive into the world of Artificial Intelligence. This comprehensive guide explains the core concepts of
                AI, how different types of AI work, common ways AI is used today, and explores potential future
                applications. Perfect for anyone new to the field seeking a clear and detailed understanding.
              </p>
              <Button asChild className="cta-button">
                <a href="/documents/ai-fundamentals-ebook.pdf" download="AI-Fundamentals-Ebook.pdf">
                  Download Ebook <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="bg-white dark:bg-black p-6 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <BookOpen className="h-8 w-8 text-black dark:text-white mr-4" />
                <h2 className="text-2xl font-bold text-black dark:text-white">Glossary of AI Terms</h2>
              </div>
              <p className="text-black dark:text-white mb-6">
                Navigate the jargon of AI with this helpful glossary defining key terms and concepts. From algorithms to
                neural networks, machine learning to natural language processing, this resource helps demystify the
                technical terminology of artificial intelligence.
              </p>
              <Button asChild className="bg-gray-200 hover:bg-gray-300 text-black" disabled>
                <Link href="#">
                  View Glossary (Coming Soon) <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">Additional Resources</h2>
            <div className="grid gap-4">
              <div className="bg-white dark:bg-black p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-black dark:text-white mr-3" />
                  <h3 className="text-lg font-medium text-black dark:text-white">
                    Implementation Best Practices (Coming Soon)
                  </h3>
                </div>
              </div>
              <div className="bg-white dark:bg-black p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-black dark:text-white mr-3" />
                  <h3 className="text-lg font-medium text-black dark:text-white">
                    Case Studies & Success Stories (Coming Soon)
                  </h3>
                </div>
              </div>
              <div className="bg-white dark:bg-black p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-black dark:text-white mr-3" />
                  <h3 className="text-lg font-medium text-black dark:text-white">
                    Technical Whitepapers (Coming Soon)
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
