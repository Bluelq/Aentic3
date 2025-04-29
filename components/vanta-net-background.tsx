"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

export function VantaNetBackground() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const [scriptsLoaded, setScriptsLoaded] = useState(false)

  useEffect(() => {
    if (!scriptsLoaded || !vantaRef.current) return

    if (!vantaEffect) {
      // @ts-ignore - Vanta is loaded via script tags
      const effect = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0e1631,
        backgroundColor: 0xffffff,
        points: 10,
        maxDistance: 25.0,
        spacing: 18.0, // Increased by ~20% from default
        showDots: false,
      })

      setVantaEffect(effect)
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect, scriptsLoaded])

  const handleScriptsLoad = () => {
    setScriptsLoaded(true)
  }

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" onLoad={handleScriptsLoad} />
      <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js" />
      <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" aria-hidden="true" />
    </>
  )
}
