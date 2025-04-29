"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { sendContactEmail } from "@/app/actions/contact-actions"
import { CheckCircle2, Loader2 } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    interest: "",
    message: "",
    subscribe: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Validate required fields
      if (!formData.name || !formData.company || !formData.email || !formData.interest) {
        throw new Error("Please fill in all required fields")
      }

      // Basic email validation
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        throw new Error("Please enter a valid email address")
      }

      await sendContactEmail(formData)
      setIsSubmitted(true)
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        interest: "",
        message: "",
        subscribe: false,
      })
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("There was an error submitting your inquiry. Please try again.")
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
            Your inquiry has been submitted successfully. We'll get back to you shortly.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80"
          >
            Submit Another Inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-gray-50 dark:bg-gray-900"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              placeholder="Your company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
              className="bg-gray-50 dark:bg-gray-900"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-gray-50 dark:bg-gray-900"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="interest">Area of Interest</Label>
            <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
              <SelectTrigger id="interest" className="bg-gray-50 dark:bg-gray-900">
                <SelectValue placeholder="Select an area..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ai-consulting">AI Consulting</SelectItem>
                <SelectItem value="app-development">Custom App Development</SelectItem>
                <SelectItem value="workflow-automation">Workflow Automation</SelectItem>
                <SelectItem value="predictive-analytics">Predictive Analytics</SelectItem>
                <SelectItem value="personalized-experiences">Personalized Experiences</SelectItem>
                <SelectItem value="nlp">Natural Language Processing</SelectItem>
                <SelectItem value="computer-vision">Computer Vision</SelectItem>
                <SelectItem value="general">General Inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us more about your needs or project idea..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-[120px] bg-gray-50 dark:bg-gray-900"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="subscribe"
              checked={formData.subscribe}
              onCheckedChange={(checked) => setFormData({ ...formData, subscribe: checked as boolean })}
            />
            <Label htmlFor="subscribe" className="text-sm">
              Yes, I'd like to receive updates on new applications, early access opportunities, and insights from Aentic
              AI.
            </Label>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" className="w-full cta-button" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
              </>
            ) : (
              "Submit Inquiry"
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
