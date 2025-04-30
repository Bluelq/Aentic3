"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export function Header() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              {theme === "dark" ? (
                <Image src="/logo-dark.png" alt="Aentic Logo (Dark)" width={40} height={40} />
              ) : (
                <Image src="/logo.png" alt="Aentic Logo" width={40} height={40} />
              )}
            </div>
            <span className="font-futurezen text-xl font-bold text-black dark:text-white">Aentic</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex justify-end">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer",
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {[
                      {
                        title: "AI Consulting",
                        href: "/services/ai-consulting",
                        description: "Expert guidance for your AI strategy",
                      },
                      {
                        title: "Automation Solutions",
                        href: "/services/automation",
                        description: "Streamline operations with intelligent automation",
                      },
                      {
                        title: "Predictive Analytics",
                        href: "/services/predictive-analytics",
                        description: "Data-driven forecasting for better decisions",
                      },
                      {
                        title: "Personalized Experiences",
                        href: "/services/personalized-experiences",
                        description: "Tailored user interactions that adapt and engage",
                      },
                      {
                        title: "Natural Language Processing",
                        href: "/services/nlp",
                        description: "Enabling machines to understand human language",
                      },
                      {
                        title: "Computer Vision",
                        href: "/services/computer-vision",
                        description: "Visual perception systems for machines",
                      },
                    ].map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Insights</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {[
                      {
                        title: "Blog",
                        href: "/blog",
                        description: "Insights and updates from our team",
                      },
                      {
                        title: "Documentation",
                        href: "/insights/documentation",
                        description: "Technical guides and resources",
                      },
                    ].map((item) => (
                      <ListItem key={item.title} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Link href="/contact" className="hidden md:inline-flex cta-button py-2 px-4">
            Explore
          </Link>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-black dark:text-white">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-black dark:text-white opacity-70">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
