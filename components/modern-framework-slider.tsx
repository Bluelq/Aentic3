"use client"

import { useState, useEffect, useRef, type TouchEvent } from "react"
import { cn } from "@/lib/utils"

interface FrameworkStage {
  number: string
  title: string
  description: string[]
  elements: string[]
}

export function ModernFrameworkSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const stages: FrameworkStage[] = [
    {
      number: "01.",
      title: "Analyze",
      description: [
        "We begin by identifying specific pain points and opportunities where AI can deliver meaningful value.",
        "Our approach combines psychological insights with business requirements to ensure solutions that address real challenges, not just technical possibilities.",
      ],
      elements: [
        "Comprehensive needs assessment",
        "Pain point identification and prioritization",
        "Opportunity mapping",
        "Psychological impact analysis",
        "Technical feasibility evaluation",
      ],
    },
    {
      number: "02.",
      title: "Design",
      description: [
        "Our human-centered design approach creates intuitive AI applications that align with natural thought processes and behaviors.",
        "By understanding how people think and work, we develop solutions that feel natural and require minimal adaptation.",
      ],
      elements: [
        "Psychology-informed user experience",
        "Cognitive workflow mapping",
        "Intuitive interface design",
        "Ethical considerations integration",
        "Bias mitigation strategies",
      ],
    },
    {
      number: "03.",
      title: "Implement",
      description: [
        "Using efficient development methodologies, we bring applications to life with a focus on solving problems rather than introducing technical complexity.",
        "Our modular approach allows for rapid deployment and seamless integration with existing systems.",
      ],
      elements: [
        "Modular development architecture",
        "Scalable infrastructure design",
        "Integration with existing workflows",
        "Continuous testing and validation",
        "Knowledge transfer and documentation",
      ],
    },
    {
      number: "04.",
      title: "Optimize",
      description: [
        "Through continuous testing and refinement based on real user feedback, we ensure our applications evolve to deliver ever-increasing value.",
        "Our commitment to ongoing improvement means your AI solution grows more effective over time.",
      ],
      elements: [
        "Performance monitoring systems",
        "User feedback collection",
        "Iterative improvement cycles",
        "Adaptation to changing requirements",
        "ROI measurement and reporting",
      ],
    },
  ]

  const goToSlide = (index: number) => {
    if (index < 0) index = stages.length - 1
    if (index >= stages.length) index = 0

    setCurrentIndex(index)

    if (sliderRef.current) {
      const slideWidth = 100 / stages.length
      sliderRef.current.style.transform = `translateX(-${index * slideWidth}%)`
    }
  }

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const diff = touchStartX.current - touchEndX.current
    const threshold = 50 // minimum distance to be considered a swipe

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left, go to next slide
        goToSlide(currentIndex + 1)
      } else {
        // Swipe right, go to previous slide
        goToSlide(currentIndex - 1)
      }
    }

    // Reset values
    touchStartX.current = null
    touchEndX.current = null
  }

  // Auto-advance every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide(currentIndex + 1)
    }, 8000)

    return () => clearInterval(interval)
  }, [currentIndex])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToSlide(currentIndex - 1)
      } else if (e.key === "ArrowRight") {
        goToSlide(currentIndex + 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentIndex])

  return (
    <section className="py-20 bg-[#121025] text-white">
      <div className="container px-4 md:px-6">
        <div className="header text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Our Framework</h2>
        </div>

        <div
          className="relative overflow-hidden mt-16"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${stages.length * 100}%` }}
          >
            {stages.map((stage, index) => (
              <div key={index} className="px-5" style={{ width: `${100 / stages.length}%` }}>
                <div className="flex flex-col bg-[rgba(30,25,50,0.8)] border-2 border-[#ff2a6d] rounded-lg overflow-hidden relative h-[400px] md:h-[400px] shadow-[0_0_20px_rgba(255,42,109,0.3)]">
                  <div className="text-[2.5rem] font-bold absolute top-5 left-5 text-[#ff2a6d]">{stage.number}</div>
                  <h3 className="text-[1.8rem] uppercase ml-20 mt-6 text-[#ff2a6d]">{stage.title}</h3>
                  <div className="p-8 mt-6 overflow-y-auto">
                    {stage.description.map((paragraph, i) => (
                      <p key={i} className="mb-5 text-[1.1rem]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="px-8 pb-8">
                    <h4 className="mb-4 text-[#ff2a6d]">Key Elements:</h4>
                    <ul className="list-none">
                      {stage.elements.map((element, i) => (
                        <li
                          key={i}
                          className="mb-2.5 pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-2 before:bg-[#ff2a6d]"
                        >
                          {element}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2.5">
            {stages.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === currentIndex ? "bg-[#ff2a6d] transform scale-125" : "bg-white/30",
                )}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
