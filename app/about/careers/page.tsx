import { CareersForm } from "@/components/careers-form"

export const metadata = {
  title: "Careers | Aentic AI",
  description: "Exploring opportunities to contribute to human-centered AI innovation at Aentic AI.",
}

export default function CareersPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                Join Aentic AI
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Exploring opportunities to contribute to human-centered AI innovation.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Shape the Future of AI</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Aentic AI is currently a focused, founder-led initiative. While we don't have formal open positions, we
                are always interested in connecting with exceptional individuals passionate about practical, ethical AI.
                If you believe your skills align with our vision, please share your thoughts below.
              </p>

              <CareersForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
