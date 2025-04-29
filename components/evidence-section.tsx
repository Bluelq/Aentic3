import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"

export function EvidenceSection() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              Industry Insights & Research
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our approach to AI development is informed by the latest research, industry trends, and real-world
              evidence. We believe in making data-driven decisions that lead to measurable outcomes for our clients.
            </p>
          </div>
          <div className="w-full max-w-5xl mx-auto">
            <Tabs defaultValue="challenges" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="challenges">AI Implementation Challenges</TabsTrigger>
                <TabsTrigger value="human">The Human Factor in AI</TabsTrigger>
                <TabsTrigger value="impact">Business Impact</TabsTrigger>
              </TabsList>
              <TabsContent value="challenges" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart className="h-5 w-5" />
                        Key Statistics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Enterprises prioritizing AI</span>
                          <span className="font-medium">76%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "76%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Enterprises with AI in production</span>
                          <span className="font-medium">31%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "31%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Citing lack of AI expertise</span>
                          <span className="font-medium">56%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "56%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Citing data quality issues</span>
                          <span className="font-medium">42%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "42%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Citing integration challenges</span>
                          <span className="font-medium">38%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "38%" }}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Data Quality Challenges</CardTitle>
                      <CardDescription>
                        Poor quality data costs businesses an average of $15 million annually (Source: Gartner)
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center h-48">
                          <PieChart className="h-32 w-32 text-primary" />
                        </div>
                        <p className="text-center text-sm">
                          Only 3% of companies' data meets basic quality standards for AI implementation (Source:
                          Harvard Business Review)
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="human" className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Human-Centered Design Impact</CardTitle>
                      <CardDescription>
                        AI systems designed with human psychological principles show 65% higher user adoption rates
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center h-48">
                          <LineChart className="h-32 w-32 text-primary" />
                        </div>
                        <p className="text-center text-sm">
                          Companies that implement AI with a focus on augmenting rather than replacing human workers see
                          5x greater ROI (Source: Harvard Business School)
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Cognitive Diversity</CardTitle>
                      <CardDescription>
                        92% of executives believe that cognitive diversity in AI development teams leads to better
                        outcomes
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Executives valuing cognitive diversity</span>
                          <span className="font-medium">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                      </div>
                      <div className="pt-4">
                        <blockquote className="border-l-4 border-primary pl-4 italic text-sm">
                          "The most successful AI implementations combine technical expertise with deep domain knowledge
                          and psychological understanding."
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="impact" className="pt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-4xl font-bold text-center">40%</CardTitle>
                      <CardDescription className="text-center">
                        Average increase in productivity with AI-powered automation
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-sm">
                        Organizations using AI-powered automation report significant productivity gains across various
                        departments and functions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-4xl font-bold text-center">25%</CardTitle>
                      <CardDescription className="text-center">
                        Increase in customer satisfaction scores with AI for customer service
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-sm">
                        Businesses implementing AI for customer service see measurable improvements in customer
                        satisfaction and loyalty metrics.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-4xl font-bold text-center">50%</CardTitle>
                      <CardDescription className="text-center">
                        Higher profit margins for companies with advanced AI adoption
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-sm">
                        Companies with advanced AI adoption report significantly higher profit margins than industry
                        peers without comprehensive AI strategies.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Financial Services Case Study</CardTitle>
                      <CardDescription>
                        A mid-sized financial services company implemented our SDS platform
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Reduction in query resolution time</span>
                          <span className="font-medium">47%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "47%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Increase in customer satisfaction</span>
                          <span className="font-medium">32%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "32%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Annual cost savings</span>
                          <span className="font-medium">$1.2M</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Healthcare Provider Case Study</CardTitle>
                      <CardDescription>
                        A regional healthcare network utilized our custom AI application development services
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Reduction in administrative workload</span>
                          <span className="font-medium">28%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "28%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Faster access to critical patient information</span>
                          <span className="font-medium">53%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "53%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Decrease in readmission rates</span>
                          <span className="font-medium">19%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "19%" }}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
