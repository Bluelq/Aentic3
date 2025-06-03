import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { GeometricBackground } from "@/components/geometric-background"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aentic AI - Transforming Ideas into Intelligent Applications",
  description:
    "Specialized AI solutions that solve real-world challenges with a human-centered approach and minimal technical barriers.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <GeometricBackground />
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
