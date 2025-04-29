"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Youtube, Github } from "lucide-react"
import { useTheme } from "next-themes"

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6 py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-3">
              <div className="relative h-8 w-8">
                {theme === "dark" ? (
                  <Image src="/logo-dark.png" alt="Aentic Logo (Dark)" width={32} height={32} />
                ) : (
                  <Image src="/logo.png" alt="Aentic Logo" width={32} height={32} />
                )}
              </div>
              <span className="font-futurezen text-lg font-bold">Aentic</span>
            </Link>
            <p className="text-black dark:text-white text-sm mb-3 max-w-md">
              A psychology-informed approach to creating AI applications that are intuitive and accessible.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-base mb-2 text-black dark:text-white">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about" className="text-black dark:text-white hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about/our-story" className="text-black dark:text-white hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="text-black dark:text-white hover:underline">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about/careers" className="text-black dark:text-white hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-black dark:text-white hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-base mb-2 text-black dark:text-white">Services</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/services/ai-consulting" className="text-black dark:text-white hover:underline">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/automation" className="text-black dark:text-white hover:underline">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/services/predictive-analytics" className="text-black dark:text-white hover:underline">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/services/personalized-experiences" className="text-black dark:text-white hover:underline">
                  Personalization
                </Link>
              </li>
              <li>
                <Link href="/services/nlp" className="text-black dark:text-white hover:underline">
                  NLP
                </Link>
              </li>
              <li>
                <Link href="/services/computer-vision" className="text-black dark:text-white hover:underline">
                  Computer Vision
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-base mb-2 text-black dark:text-white">Connect</h3>
            <ul className="space-y-1 text-sm">
              <li className="text-black dark:text-white">
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:info@aentic.ai" className="hover:underline">
                  info@aentic.ai
                </a>
              </li>
              <li className="text-black dark:text-white">
                <span className="font-medium">Phone:</span> +1 (844) 651-8233
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black dark:text-white text-xs">© 2025 Aentic. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="/privacy" className="text-black dark:text-white hover:underline text-xs">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-black dark:text-white hover:underline text-xs">
              Cookie Policy
            </Link>
            <Link href="/terms" className="text-black dark:text-white hover:underline text-xs">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
