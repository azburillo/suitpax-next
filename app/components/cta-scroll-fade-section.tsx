"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface Props {
  children: React.ReactNode
  className?: string
}

export function CTAScrollFadeSection({ children, className = "" }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio
            const opacity = Math.min(ratio * 1.5, 1) // Slower transition

            // Improved color transition from gray-100 to black
            const startColor = { r: 243, g: 244, b: 246 } // gray-100
            const endColor = { r: 0, g: 0, b: 0 } // black

            const r = Math.round(startColor.r + (endColor.r - startColor.r) * opacity)
            const g = Math.round(startColor.g + (endColor.g - startColor.g) * opacity)
            const b = Math.round(startColor.b + (endColor.b - startColor.b) * opacity)

            const color = `rgb(${r}, ${g}, ${b})`

            // Apply smoother color transition to each letter with a slight delay based on position
            const textElements = entry.target.querySelectorAll("p, h2")
            textElements.forEach((element) => {
              const text = element.textContent || ""
              element.innerHTML = text
                .split("")
                .map(
                  (char, index) =>
                    `<span style="color: ${color}; transition: color 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.008}s;">${char}</span>`,
                )
                .join("")
            })
          }
        })
      },
      {
        threshold: new Array(101).fill(0).map((_, i) => i / 100), // Create thresholds for smoother transition
        rootMargin: "-5% 0px -5% 0px",
      },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={sectionRef} className={`transition-colors duration-700 ease-in-out ${className}`}>
      {children}
    </div>
  )
}

