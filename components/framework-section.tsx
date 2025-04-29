import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Palette, Code, BarChart } from "lucide-react"

export function FrameworkSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              Business Implementation Framework
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our structured approach to turning ideas into successful AI implementations, designed for clarity and
              effectiveness at every stage. The Nyxx architectural framework provides the foundation for our Smart
              Digital Self (SDS) platform, enabling modular and scalable AI solutions.
            </p>
          </div>
          <div className="w-full max-w-4xl mx-auto">
            <Tabs defaultValue="analyze" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="analyze">Analyze</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="implement">Implement</TabsTrigger>
                <TabsTrigger value="optimize">Optimize</TabsTrigger>
              </TabsList>
              <TabsContent value="analyze">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5" />
                      Analyze
                    </CardTitle>
                    <CardDescription>
                      We begin by identifying specific pain points and opportunities where AI can deliver meaningful
                      value.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Our approach combines psychological insights with business requirements to ensure solutions that
                      address real challenges, not just technical possibilities.
                    </p>
                    <div className="grid gap-2">
                      <h4 className="font-medium">Key Elements:</h4>
                      <ul className="grid gap-1 list-disc pl-5">
                        <li>Comprehensive needs assessment</li>
                        <li>Pain point identification and prioritization</li>
                        <li>Opportunity mapping</li>
                        <li>Psychological impact analysis</li>
                        <li>Technical feasibility evaluation</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="design">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5" />
                      Design
                    </CardTitle>
                    <CardDescription>
                      Our human-centered design approach creates intuitive AI applications that align with natural
                      thought processes and behaviors.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      By understanding how people think and work, we develop solutions that feel natural and require
                      minimal adaptation.
                    </p>
                    <div className="grid gap-2">
                      <h4 className="font-medium">Key Elements:</h4>
                      <ul className="grid gap-1 list-disc pl-5">
                        <li>Psychology-informed user experience</li>
                        <li>Cognitive workflow mapping</li>
                        <li>Intuitive interface design</li>
                        <li>Ethical considerations integration</li>
                        <li>Bias mitigation strategies</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="implement">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Implement
                    </CardTitle>
                    <CardDescription>
                      Using efficient development methodologies, we bring applications to life with a focus on solving
                      problems rather than introducing technical complexity.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Our modular approach allows for rapid deployment and seamless integration with existing systems.
                    </p>
                    <div className="grid gap-2">
                      <h4 className="font-medium">Key Elements:</h4>
                      <ul className="grid gap-1 list-disc pl-5">
                        <li>Modular development architecture</li>
                        <li>Scalable infrastructure design</li>
                        <li>Integration with existing workflows</li>
                        <li>Continuous testing and validation</li>
                        <li>Knowledge transfer and documentation</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="optimize">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5" />
                      Optimize
                    </CardTitle>
                    <CardDescription>
                      Through continuous testing and refinement based on real user feedback, we ensure our applications
                      evolve to deliver ever-increasing value.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Our commitment to ongoing improvement means your AI solution grows more effective over time.</p>
                    <div className="grid gap-2">
                      <h4 className="font-medium">Key Elements:</h4>
                      <ul className="grid gap-1 list-disc pl-5">
                        <li>Performance monitoring systems</li>
                        <li>User feedback collection</li>
                        <li>Iterative improvement cycles</li>
                        <li>Adaptation to changing requirements</li>
                        <li>ROI measurement and reporting</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
