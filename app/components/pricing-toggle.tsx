"use client"

import { Switch } from "@/components/ui/switch"
import type { PricingToggleProps } from "@/types/pricing"
import { useState, useEffect, useCallback } from "react"
import confetti from "canvas-confetti"

export function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  const [showConfetti, setShowConfetti] = useState(false)

  const fireConfetti = useCallback(() => {
    // Customize confetti options here
    confetti({
      particleCount: 200, // Increased particle count
      spread: 120, // Wider spread
      startVelocity: 60, // Faster initial velocity
      colors: ["#93c572", "#22c55e", "#16a34a"], // Pistachio color palette
      shapes: ["square", "circle"], // Use both square and circle shapes
      gravity: 0.6, // Adjust gravity for slower falling confetti
      scalar: 1.2, // Slightly larger confetti
    })
  }, [])

  useEffect(() => {
    if (showConfetti) {
      fireConfetti()
      setTimeout(() => setShowConfetti(false), 2000)
    }
  }, [showConfetti, fireConfetti])

  const handleToggle = () => {
    if (!isAnnual) {
      // Only show confetti when switching to annual plan
      setShowConfetti(true)
    }
    onToggle()
  }

  return (
    <div className="flex items-center justify-center gap-3 mb-8 bg-gray-50/50 backdrop-blur-sm rounded-full p-2 max-w-fit mx-auto">
      <span className={`text-sm ${isAnnual ? "text-gray-500" : "text-gray-900 font-medium"}`}>Monthly</span>
      <Switch
        checked={isAnnual}
        onCheckedChange={handleToggle}
        className="data-[state=checked]:bg-emerald-600 w-[42px] h-[24px]"
      />
      <span className={`text-sm ${isAnnual ? "text-gray-900 font-medium" : "text-gray-500"}`}>
        Annual <span className="text-lime-600">(Save 30%)</span>
      </span>
    </div>
  )
}

