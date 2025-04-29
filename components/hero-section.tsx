"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [showWords, setShowWords] = useState(false)
  const lineControls = useAnimation()

  const fullText = "Transforming Ideas into Intelligent Applications. Aentic brings your vision into reality."
  const typingSpeed = 50 // milliseconds per character
  const totalTypingTime = fullText.length * typingSpeed // total time to type the full text
  const lineAnimationDuration = (totalTypingTime / 1000) * 1.15 // Slowed down by 15%

  useEffect(() => {
    // Start the line animation immediately with 15% slower speed
    lineControls.start({
      width: "100%",
      transition: { duration: lineAnimationDuration, ease: "easeInOut" },
    })

    // Start the typewriter effect
    let currentIndex = 0
    const textInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(textInterval)
        setIsTypingComplete(true)

        // Add pause before showing the words
        setTimeout(() => {
          setShowWords(true)
        }, 800) // 800ms pause
      }
    }, typingSpeed)

    return () => clearInterval(textInterval)
  }, [lineControls, totalTypingTime, lineAnimationDuration])

  return (
    <section className="py-24 md:py-36 relative overflow-hidden bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start text-left max-w-3xl">
          <div className="space-y-6 relative">
            {/* Title on a single line with adjusted styling - pure black/white */}
            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-black dark:text-white whitespace-nowrap overflow-hidden text-ellipsis"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Creating Your Vision with AI
            </motion.h1>

            {/* Animated underline below the title */}
            <motion.div className="h-[3px] bg-black dark:bg-white" initial={{ width: 0 }} animate={lineControls} />

            {/* Combined text with typewriter effect */}
            <div className="relative">
              <p className="text-black dark:text-white text-lg md:text-xl">{typedText}</p>
            </div>
          </div>

          <div className="max-w-[800px] space-y-6 md:space-y-8 mt-8">
            <div className="relative">
              {/* Words that fade in */}
              <div className="mt-6 flex flex-wrap gap-x-4">
                {[
                  { text: "Simple", delay: 0 },
                  { text: "Transparent", delay: 0.3 },
                  { text: "Aentic", delay: 1.6 },
                ].map((item, index) => (
                  <motion.span
                    key={item.text}
                    className="text-black dark:text-white text-xl md:text-2xl font-bold"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{
                      opacity: showWords ? 1 : 0,
                      scale: showWords ? 1 : 0.95,
                      y: showWords ? 0 : 10,
                    }}
                    transition={{
                      delay: showWords ? item.delay : 0,
                      duration: 0.6,
                    }}
                  >
                    {item.text}
                    {index < 2 ? "," : "."}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{
                opacity: showWords ? 1 : 0,
              }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <Link href="/contact" className="cta-button py-3 px-6 inline-flex items-center w-fit">
                Get your Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
