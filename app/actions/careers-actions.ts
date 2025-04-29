"use server"

import nodemailer from "nodemailer"

export async function sendCareersForm(formData: Record<string, string>) {
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

    // Format the questions and answers for the email
    const geographyQuestions = [
      "What is the longest river in the world?",
      "Which desert is the largest hot desert in the world?",
      "Mount Everest, the world's highest peak, is located in which mountain range?",
      "Which country is known as the Land of the Rising Sun?",
      "The Great Barrier Reef is located off the coast of which country?",
      "Which strait separates the continents of Asia and North America?",
      "What is the capital city of Canada?",
      "Which continent is the least populated?",
      "Lake Baikal, the world's deepest freshwater lake, is located in which country?",
      "The ancient city of Machu Picchu is located in which modern-day country?",
    ]

    // Create the email content
    let textContent = "New Career Application Submission\n\n"
    let htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
        <h2 style="color: #0e1631;">New Career Application Submission</h2>
        <h3 style="margin-top: 20px;">General Knowledge Questionnaire</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Question</th>
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Answer</th>
          </tr>
    `

    // Add the geography questions and answers
    for (let i = 0; i < geographyQuestions.length; i++) {
      const questionId = `q${i + 1}`
      const answer = formData[questionId] || "Not answered"

      textContent += `${i + 1}. ${geographyQuestions[i]}\nAnswer: ${answer}\n\n`

      htmlContent += `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">${i + 1}. ${geographyQuestions[i]}</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${answer}</td>
        </tr>
      `
    }

    // Add question 11
    textContent += `11. How many of the previous 10 geography questions did you have to look up the answer for?\nAnswer: ${formData.q11 || "Not answered"}\n\n`

    htmlContent += `
      <tr>
        <td style="padding: 10px; border: 1px solid #ddd;">11. How many of the previous 10 geography questions did you have to look up the answer for?</td>
        <td style="padding: 10px; border: 1px solid #ddd;">${formData.q11 || "Not answered"}</td>
      </tr>
    </table>
    `

    // Add motivation
    textContent += `12. Why are you requesting an opportunity to join or collaborate with Aentic AI?\n${formData.motivation || "Not provided"}\n\n`

    htmlContent += `
      <h3 style="margin-top: 20px;">Motivation</h3>
      <div style="padding: 10px; background-color: #f9f9f9; border: 1px solid #ddd; margin-bottom: 20px;">
        <p>${(formData.motivation || "Not provided").replace(/\n/g, "<br>")}</p>
      </div>
    `

    // Add resume
    textContent += `Resume:\n${formData.resume || "Not provided"}`

    htmlContent += `
      <h3 style="margin-top: 20px;">Resume</h3>
      <div style="padding: 10px; background-color: #f9f9f9; border: 1px solid #ddd;">
        <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${formData.resume || "Not provided"}</pre>
      </div>
      <hr style="border: 1px solid #eee; margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">This email was sent from the Aentic website careers form.</p>
    </div>
    `

    // Send the email
    await transporter.sendMail({
      from: `"Aentic Careers" <${process.env.SMTP_USER}>`,
      to: "kobo@aentic.ai",
      subject: "New Career Application Submission",
      text: textContent,
      html: htmlContent,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send application")
  }
}
