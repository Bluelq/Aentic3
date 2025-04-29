"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface Phase {
  id: number
  title: string
  description: string
  elements: string[]
}

export function PhasedApproach() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)

  const phases: Phase[] = [
    {
      id: 1,
      title: "Phase 1: Analyze & Discover",
      description:
        "We start by deeply understanding your business goals, challenges, and existing workflows. We identify specific pain points where AI could provide value and assess the technical feasibility.",
      elements: [
        "Initial Needs Assessment Workshop",
        "Pain Point & Opportunity Mapping",
        "Data Readiness Evaluation",
        "Technical Feasibility Study",
      ],
    },
    {
      id: 2,
      title: "Phase 2: Design & Strategize",
      description:
        "Based on the analysis, we collaboratively design a high-level solution concept. We focus on a human-centered approach, considering user experience, potential biases, and integration requirements.",
      elements: [
        "Solution Concept Design",
        "User Experience Considerations",
        "Ethical AI & Bias Review",
        "High-Level Architecture Plan",
      ],
    },
    {
      id: 3,
      title: "Phase 3: Plan & Recommend",
      description:
        "The final phase delivers a comprehensive roadmap. This includes detailed recommendations, estimated timelines for potential implementation, and a clear outline of next steps.",
      elements: [
        "Detailed Implementation Roadmap",
        "Technology Stack Recommendations",
        "Resource & Skill Requirements",
        "Prioritized Action Plan",
      ],
    },
  ]

  // Start animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true)
    }, 3000) // Set animation as complete after all cards have appeared

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-black dark:text-white">
        How It Works: A Phased Approach
      </h2>
      <p className="text-black dark:text-white mb-12 text-center max-w-3xl mx-auto">
        Our consultation follows a structured process, typically aligning with our core framework, but tailored to your
        specific needs:
      </p>

      <div className="relative max-w-6xl mx-auto">
        {/* Phase cards in horizontal sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector lines (only visible on desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 z-0">
            <motion.div
              className="h-0.5 bg-black dark:bg-white"
              style={{ width: "calc(100% - 4rem)" }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.5 }}
              transition={{ delay: 3.0, duration: 0.8 }}
            />
          </div>

          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 1.5, // Increased delay between slides (from 0.5 to 1.5 seconds)
                ease: "easeOut",
              }}
              className="bg-white dark:bg-black rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 h-full flex flex-col relative z-10"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-lg">
                  {phase.id}
                </div>
                <h3 className="text-lg font-bold text-black dark:text-white ml-3">{phase.title.split(":")[1]}</h3>
              </div>

              <p className="text-black dark:text-white mb-4 flex-grow">{phase.description}</p>

              <ul className="space-y-2">
                {phase.elements.map((element, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 1.5 + 0.2 + idx * 0.1, // Updated to match new card delay
                    }}
                  >
                    <CheckCircle className="h-5 w-5 text-black dark:text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-black dark:text-white">{element}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
