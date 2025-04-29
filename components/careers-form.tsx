"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { sendCareersForm } from "@/app/actions/careers-actions"
import { CheckCircle2, Loader2 } from "lucide-react"

const geographyQuestions = [
  {
    id: "q1",
    question: "What is the longest river in the world?",
    options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River", "I don't know"],
  },
  {
    id: "q2",
    question: "Which desert is the largest hot desert in the world?",
    options: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Arabian Desert", "I don't know"],
  },
  {
    id: "q3",
    question: "Mount Everest, the world's highest peak, is located in which mountain range?",
    options: ["Andes", "Rockies", "Alps", "Himalayas", "I don't know"],
  },
  {
    id: "q4",
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "South Korea", "Japan", "Vietnam", "I don't know"],
  },
  {
    id: "q5",
    question: "The Great Barrier Reef is located off the coast of which country?",
    options: ["Brazil", "Australia", "Mexico", "South Africa", "I don't know"],
  },
  {
    id: "q6",
    question: "Which strait separates the continents of Asia and North America?",
    options: ["Strait of Gibraltar", "Strait of Malacca", "Bering Strait", "Strait of Hormuz", "I don't know"],
  },
  {
    id: "q7",
    question: "What is the capital city of Canada?",
    options: ["Toronto", "Vancouver", "Montreal", "Ottawa", "I don't know"],
  },
  {
    id: "q8",
    question: "Which continent is the least populated?",
    options: ["South America", "Australia", "Antarctica", "Africa", "I don't know"],
  },
  {
    id: "q9",
    question: "Lake Baikal, the world's deepest freshwater lake, is located in which country?",
    options: ["Canada", "United States", "Russia", "China", "I don't know"],
  },
  {
    id: "q10",
    question: "The ancient city of Machu Picchu is located in which modern-day country?",
    options: ["Colombia", "Peru", "Chile", "Ecuador", "I don't know"],
  },
]

export function CareersForm() {
  const [formData, setFormData] = useState<Record<string, string>>({
    q11: "",
    motivation: "",
    resume: "",
  })
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleOptionChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Check if all questions are answered
    const allQuestionsAnswered = geographyQuestions.every((q) => answers[q.id])

    if (!allQuestionsAnswered || !formData.q11 || !formData.motivation) {
      setError("Please answer all questions and provide your motivation.")
      setIsSubmitting(false)
      return
    }

    try {
      // Combine all answers into one object
      const allFormData = {
        ...answers,
        q11: formData.q11,
        motivation: formData.motivation,
        resume: formData.resume,
      }

      await sendCareersForm(allFormData)
      setIsSubmitted(true)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("There was an error submitting your application. Please try again.")
      }
      console.error("Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">Thank You!</h3>
          <p className="text-black dark:text-white mb-6">
            Your application has been submitted successfully. We'll review your information and get back to you if
            there's a potential fit.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-black dark:text-white">General Knowledge Questionnaire</h3>

            {geographyQuestions.map((q, index) => (
              <div key={q.id} className="space-y-3 pb-4 border-b border-gray-200 dark:border-gray-700">
                <p className="font-medium text-black dark:text-white">
                  {index + 1}. {q.question}
                </p>
                <RadioGroup value={answers[q.id] || ""} onValueChange={(value) => handleOptionChange(q.id, value)}>
                  {q.options.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`${q.id}-${option}`} />
                      <Label htmlFor={`${q.id}-${option}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}

            <div className="space-y-3 pb-4 border-b border-gray-200 dark:border-gray-700">
              <p className="font-medium text-black dark:text-white">
                11. How many of the previous 10 geography questions did you have to look up the answer for?
              </p>
              <RadioGroup value={formData.q11} onValueChange={(value) => handleInputChange("q11", value)}>
                {["0", "1-2", "3-4", "5-7", "8-10"].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`q11-${option}`} />
                    <Label htmlFor={`q11-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label htmlFor="motivation" className="text-base font-medium">
                12. Why are you requesting an opportunity to join or collaborate with Aentic AI?
              </Label>
              <Textarea
                id="motivation"
                placeholder="Share your motivation, relevant experience, and how you envision contributing..."
                value={formData.motivation}
                onChange={(e) => handleInputChange("motivation", e.target.value)}
                className="min-h-[150px] bg-gray-50 dark:bg-gray-900"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-black dark:text-white">Submit Your Resume</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Please paste the text content of your resume below. (Note: File uploads are not supported via this form.
                Alternatively, mention in your message above that you can email it.)
              </p>
              <Textarea
                id="resume"
                placeholder="Paste your resume text here..."
                value={formData.resume}
                onChange={(e) => handleInputChange("resume", e.target.value)}
                className="min-h-[200px] bg-gray-50 dark:bg-gray-900"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
