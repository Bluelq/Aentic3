import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Shield, Target, Zap, ArrowRight } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">
              Why Our Fixed-Cost Consultation?
            </h2>
            <p className="mx-auto max-w-[700px] text-black dark:text-white md:text-xl">
              Navigate the complexities of AI implementation with confidence. Our transparent, fixed-cost consultation
              model eliminates budget uncertainty and ensures a clear roadmap before full development begins.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-5xl mx-auto pt-8">
            <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 flex flex-col items-center">
                <Check className="h-10 w-10 mb-4 text-[#0e1631] dark:text-white" />
                <CardTitle className="text-xl text-center text-black dark:text-white">Transparency</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-black dark:text-white">Understand the scope, deliverables, and cost upfront.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 flex flex-col items-center">
                <Shield className="h-10 w-10 mb-4 text-[#0e1631] dark:text-white" />
                <CardTitle className="text-xl text-center text-black dark:text-white">Risk Mitigation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-black dark:text-white">Identify challenges and feasibility early on.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 flex flex-col items-center">
                <Target className="h-10 w-10 mb-4 text-[#0e1631] dark:text-white" />
                <CardTitle className="text-xl text-center text-black dark:text-white">Clarity</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-black dark:text-white">Gain an actionable plan tailored to your specific needs.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2 flex flex-col items-center">
                <Zap className="h-10 w-10 mb-4 text-[#0e1631] dark:text-white" />
                <CardTitle className="text-xl text-center text-black dark:text-white">No Surprises</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-black dark:text-white">Fixed pricing means no escalating costs or scope creep.</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <Link href="/contact" className="cta-button py-3 px-8 inline-flex items-center">
              Get your Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
