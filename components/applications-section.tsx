import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Workflow, LineChart, Users, MessageSquare, Camera } from "lucide-react"

export function ApplicationsSection() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              Showcasing Our AI Application Development
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We specialize in developing custom AI applications that address specific business challenges and enhance
              user experiences. Our consultation-first approach ensures clarity and mitigates risk.
            </p>
          </div>
          <div className="w-full max-w-5xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-6">
              <Card>
                <CardHeader className="pb-2">
                  <Workflow className="h-12 w-12 mb-2 text-primary" />
                  <CardTitle>Workflow Automation</CardTitle>
                  <CardDescription>Streamlining repetitive tasks and optimizing operational efficiency</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <LineChart className="h-12 w-12 mb-2 text-primary" />
                  <CardTitle>Predictive Analytics</CardTitle>
                  <CardDescription>Utilizing data to forecast trends and inform strategic decisions</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Users className="h-12 w-12 mb-2 text-primary" />
                  <CardTitle>Personalized Experiences</CardTitle>
                  <CardDescription>
                    Creating applications that adapt to individual user needs and preferences
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <MessageSquare className="h-12 w-12 mb-2 text-primary" />
                  <CardTitle>Natural Language Processing</CardTitle>
                  <CardDescription>
                    Developing solutions that understand and interact using human language
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Camera className="h-12 w-12 mb-2 text-primary" />
                  <CardTitle>Computer Vision</CardTitle>
                  <CardDescription>Building applications that interpret and analyze visual information</CardDescription>
                </CardHeader>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader className="pb-2">
                  <CardTitle>Ready to explore AI solutions?</CardTitle>
                  <CardDescription>Let's discuss how we can help your business</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild className="w-full bg-[#0e1631] hover:bg-[#0e1631]/90 text-white">
                    <Link href="/contact">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
