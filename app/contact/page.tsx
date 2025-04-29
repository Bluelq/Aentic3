import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            Ready to Discuss Your AI Vision?
          </h1>
          <p className="text-xl text-black dark:text-white mb-12">
            Let's explore how Aentic AI can transform your ideas into intelligent solutions.
          </p>

          <div className="bg-white dark:bg-black p-8 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Start the Conversation</h2>
            <p className="text-black dark:text-white mb-8">
              Fill out the form below to tell us about your project, challenges, or questions. We'll review your inquiry
              and get back to you shortly to discuss the next steps with our transparent, fixed-cost consultation
              approach.
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
