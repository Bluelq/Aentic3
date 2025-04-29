"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  connections: Point[]
  flashTimer: number
  isFlashing: boolean
  size: number
  originalSize: number
}

export function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointsRef = useRef<Point[]>([])
  const animationRef = useRef<number>(0)
  const mouseRef = useRef<{ x: number; y: number } | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Define the gradient colors to match CTA gradient - keep these the same in both themes
    const startColor = "#0f1a3a" // Blue
    const endColor = "#1a0b33" // Purple

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initPoints()
    }

    const initPoints = () => {
      const points: Point[] = []
      const numPoints = Math.floor((canvas.width * canvas.height) / 15000) // Adjust density based on screen size

      // Create points
      for (let i = 0; i < numPoints; i++) {
        const size = Math.random() * 1 + 1 // Random size between 1-2
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
          flashTimer: 0,
          isFlashing: false,
          size: size,
          originalSize: size,
        })
      }

      pointsRef.current = points
    }

    const connectPoints = () => {
      const points = pointsRef.current
      const connectionDistance = Math.min(canvas.width, canvas.height) * 0.15

      // Reset connections
      points.forEach((point) => {
        point.connections = []
      })

      // Find connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            points[i].connections.push(points[j])
            points[j].connections.push(points[i])
          }
        }
      }
    }

    // Randomly trigger flashes
    const triggerRandomFlashes = () => {
      if (Math.random() < 0.01) {
        // Adjust probability for flash frequency
        const randomIndex = Math.floor(Math.random() * pointsRef.current.length)
        const point = pointsRef.current[randomIndex]
        point.isFlashing = true
        point.flashTimer = 30 // Duration of flash in frames
      }
    }

    // Create a gradient between two points using CTA colors
    const createGradient = (x1: number, y1: number, x2: number, y2: number) => {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
      gradient.addColorStop(0, startColor)
      gradient.addColorStop(1, endColor)
      return gradient
    }

    const drawScene = () => {
      if (!canvas || !ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update points
      pointsRef.current.forEach((point) => {
        // Move points
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1

        // Reset point size to original
        point.size = point.originalSize

        // Enhanced mouse interaction
        if (mouseRef.current) {
          const dx = mouseRef.current.x - point.x
          const dy = mouseRef.current.y - point.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 200 // Increased interaction radius

          if (distance < maxDistance) {
            // Calculate force based on distance (stronger when closer)
            const force = (maxDistance - distance) / maxDistance

            // Repel points from mouse with increased effect
            point.vx -= (dx / distance) * force * 0.05
            point.vy -= (dy / distance) * force * 0.05

            // Increase point size when near mouse
            point.size = point.originalSize * (1 + force * 2)

            // Trigger flashing for points very close to mouse
            if (distance < 50 && Math.random() < 0.1) {
              point.isFlashing = true
              point.flashTimer = 20
            }
          }
        }

        // Update flash timer
        if (point.isFlashing) {
          point.flashTimer--
          if (point.flashTimer <= 0) {
            point.isFlashing = false
          }
        }
      })

      // Trigger random flashes
      triggerRandomFlashes()

      // Connect points
      connectPoints()

      // Draw connections
      pointsRef.current.forEach((point) => {
        point.connections.forEach((connectedPoint) => {
          // Determine if this connection should be colored
          const shouldColor = point.isFlashing || connectedPoint.isFlashing

          // Calculate distance to mouse for line thickness
          let lineThickness = 0.5
          if (mouseRef.current) {
            const midX = (point.x + connectedPoint.x) / 2
            const midY = (point.y + connectedPoint.y) / 2
            const dx = mouseRef.current.x - midX
            const dy = mouseRef.current.y - midY
            const distance = Math.sqrt(dx * dx + dy * dy)
            const maxDistance = 150

            if (distance < maxDistance) {
              const influence = (maxDistance - distance) / maxDistance
              lineThickness = 0.5 + influence * 2 // Thicker lines near mouse
            }
          }

          if (shouldColor) {
            // Use gradient for flashing connections with thinner lines
            ctx.strokeStyle = createGradient(point.x, point.y, connectedPoint.x, connectedPoint.y)
            ctx.globalAlpha = 0.6
            ctx.lineWidth = lineThickness * 1.5 // Reduced from 3 to 1.5 to make flashing lines thinner
          } else {
            // Use black in light mode, white in dark mode
            const isDarkMode = document.documentElement.classList.contains("dark")
            ctx.strokeStyle = isDarkMode ? "#FFFFFF" : "#000000"
            ctx.globalAlpha = 0.15
            ctx.lineWidth = lineThickness
          }

          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(connectedPoint.x, connectedPoint.y)
          ctx.stroke()
        })
      })

      // Draw points
      pointsRef.current.forEach((point) => {
        if (point.isFlashing) {
          // Create a gradient for flashing points using CTA colors
          const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 8)
          gradient.addColorStop(0, startColor)
          gradient.addColorStop(1, endColor)
          ctx.fillStyle = gradient
          ctx.globalAlpha = 0.8 * (point.flashTimer / 30)
          ctx.beginPath()
          ctx.arc(point.x, point.y, point.size * 2, 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Use black in light mode, white in dark mode
          const isDarkMode = document.documentElement.classList.contains("dark")
          ctx.fillStyle = isDarkMode ? "#FFFFFF" : "#000000"
          ctx.globalAlpha = 0.3
          ctx.beginPath()
          ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Continue animation
      animationRef.current = requestAnimationFrame(drawScene)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = null
    }

    // Initialize
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    // Start animation
    animationRef.current = requestAnimationFrame(drawScene)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationRef.current)
    }
  }, [theme]) // Add theme as a dependency to re-render when theme changes

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" aria-hidden="true" />
}
