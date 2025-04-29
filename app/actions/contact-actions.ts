"use server"

import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  company: string
  email: string
  interest: string
  message: string
  subscribe: boolean
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Create a transporter using the SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Format the interest field to be more readable
    const formattedInterest = formatInterest(formData.interest)

    // Create the email content
    const mailOptions = {
      from: `"Aentic Website" <${process.env.SMTP_USER}>`,
      to: "kobo@aentic.ai",
      subject: `New Contact Form Submission: ${formattedInterest}`,
      text: `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Interest: ${formattedInterest}
Message: ${formData.message || "No message provided"}
Subscribe to updates: ${formData.subscribe ? "Yes" : "No"}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0e1631;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${formData.name}</p>
  <p><strong>Company:</strong> ${formData.company}</p>
  <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
  <p><strong>Interest:</strong> ${formattedInterest}</p>
  <p><strong>Message:</strong> ${formData.message ? formData.message.replace(/\n/g, "<br>") : "No message provided"}</p>
  <p><strong>Subscribe to updates:</strong> ${formData.subscribe ? "Yes" : "No"}</p>
  <hr style="border: 1px solid #eee; margin: 20px 0;">
  <p style="color: #666; font-size: 12px;">This email was sent from the Aentic website contact form.</p>
</div>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}

// Helper function to format the interest value
function formatInterest(interest: string): string {
  const interestMap: Record<string, string> = {
    "ai-consulting": "AI Consulting",
    "app-development": "Custom App Development",
    "workflow-automation": "Workflow Automation",
    "predictive-analytics": "Predictive Analytics",
    "personalized-experiences": "Personalized Experiences",
    nlp: "Natural Language Processing",
    "computer-vision": "Computer Vision",
    general: "General Inquiry",
  }

  return interestMap[interest] || interest
}
