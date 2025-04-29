import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AIFundamentalsEbookPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-center mb-8">AI Fundamentals Ebook</h1>

      <div className="mb-8 flex justify-center">
        <Button asChild size="lg" className="cta-button">
          <a href="/documents/ai-fundamentals-ebook.pdf" download="AI-Fundamentals-Ebook.pdf">
            Download PDF Version <Download className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          This ebook provides a comprehensive introduction to the fundamentals of Artificial Intelligence (AI). It
          covers key concepts, algorithms, and applications of AI in various domains.
        </p>

        <h2>Table of Contents</h2>
        <ol>
          <li>Introduction to AI</li>
          <li>Machine Learning Basics</li>
          <li>Deep Learning</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision</li>
          <li>AI Ethics and Societal Impact</li>
        </ol>

        <p>
          Each chapter includes detailed explanations, examples, and practical exercises to help you grasp the core
          principles of AI. Whether you are a student, researcher, or industry professional, this ebook will serve as a
          valuable resource for understanding and applying AI technologies.
        </p>

        <h3>Download the ebook now and start your AI journey!</h3>
      </div>
    </div>
  )
}
