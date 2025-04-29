"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Palette, Code, BarChart, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface FrameworkStage {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  content: string
  elements: string[]
}

export function FrameworkSlider() {
  const [activeStage, setActiveStage] = useState(0)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const stages: FrameworkStage[] = [
    {
      id: "analyze",
      title: "Analyze",
      icon: <Search className="h-8 w-8" />,
      description:
        "We begin by identifying specific pain points and opportunities where AI can deliver meaningful value.",
      content:
        "Our approach combines psychological insights with business requirements to ensure solutions that address real challenges, not just technical possibilities.",
      elements: [
        "Comprehensive needs assessment",
        "Pain point identification and prioritization",
        "Opportunity mapping",
        "Psychological impact analysis",
        "Technical feasibility evaluation",
      ],
    },
    {
      id: "design",
      title: "Design",
      icon: <Palette className="h-8 w-8" />,
      description:
        "Our human-centered design approach creates intuitive AI applications that align with natural thought processes and behaviors.",
      content:
        "By understanding how people think and work, we develop solutions that feel natural and require minimal adaptation.",
      elements: [
        "Psychology-informed user experience",
        "Cognitive workflow mapping",
        "Intuitive interface design",
        "Ethical considerations integration",
        "Bias mitigation strategies",
      ],
    },
    {
      id: "implement",
      title: "Implement",
      icon: <Code className="h-8 w-8" />,
      description:
        "Using efficient development methodologies, we bring applications to life with a focus on solving problems rather than introducing technical complexity.",
      content: "Our modular approach allows for rapid deployment and seamless integration with existing systems.",
      elements: [
        "Modular development architecture",
        "Scalable infrastructure design",
        "Integration with existing workflows",
        "Continuous testing and validation",
        "Knowledge transfer and documentation",
      ],
    },
    {
      id: "optimize",
      title: "Optimize",
      icon: <BarChart className="h-8 w-8" />,
      description:
        "Through continuous testing and refinement based on real user feedback, we ensure our applications evolve to deliver ever-increasing value.",
      content: "Our commitment to ongoing improvement means your AI solution grows more effective over time.",
      elements: [
        "Performance monitoring systems",
        "User feedback collection",
        "Iterative improvement cycles",
        "Adaptation to changing requirements",
        "ROI measurement and reporting",
      ],
    },
  ]

  const nextStage = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("right")
    setActiveStage((prev) => (prev === stages.length - 1 ? 0 : prev + 1))
  }

  const prevStage = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection("left")
    setActiveStage((prev) => (prev === 0 ? stages.length - 1 : prev - 1))
  }

  const goToStage = (index: number) => {
    if (isAnimating || index === activeStage) return
    setIsAnimating(true)
    setDirection(index > activeStage ? "right" : "left")
    setActiveStage(index)
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
        setDirection(null)
      }, 500) // Match this with the CSS transition duration
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  // Auto-advance every 8 seconds if not interacting
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextStage()
      }
    }, 8000)
    return () => clearInterval(interval)
  }, [isAnimating])

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
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
        </div>

        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
          {/* Stage Navigation Buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 z-10 -translate-y-1/2 px-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-background/80 backdrop-blur-sm rounded-full"
              onClick={prevStage}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous stage</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-background/80 backdrop-blur-sm rounded-full"
              onClick={nextStage}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next stage</span>
            </Button>
          </div>

          {/* Sliding Cards */}
          <div className="relative h-[500px] md:h-[450px]">
            {stages.map((stage, index) => (
              <Card
                key={stage.id}
                className={cn(
                  "absolute top-0 left-0 w-full transition-all duration-500 ease-in-out",
                  index === activeStage
                    ? "opacity-100 translate-x-0 z-10"
                    : direction === "right" && index === (activeStage - 1 + stages.length) % stages.length
                      ? "opacity-0 -translate-x-full z-0"
                      : direction === "left" && index === (activeStage + 1) % stages.length
                        ? "opacity-0 translate-x-full z-0"
                        : "opacity-0 translate-x-full z-0",
                )}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">{stage.icon}</div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl text-center">{stage.title}</CardTitle>
                  <CardDescription className="text-center text-base">{stage.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-center">{stage.content}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-center">Key Elements:</h4>
                    <ul className="grid gap-1 list-disc pl-5 max-w-md mx-auto">
                      {stage.elements.map((element, i) => (
                        <li key={i}>{element}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stage Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {stages.map((stage, index) => (
              <button
                key={stage.id}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === activeStage ? "bg-primary scale-125" : "bg-primary/30",
                )}
                onClick={() => goToStage(index)}
                aria-label={`Go to ${stage.title} stage`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
