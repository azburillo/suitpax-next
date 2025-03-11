import type React from "react"
export function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

