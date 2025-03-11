"use client"

import { cn } from "@/app/lib/utils"
import type React from "react"

export const Sparkles = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("relative inline-block w-full sm:w-auto bg-white/10 backdrop-blur-md", className)} {...props}>
      {children}
    </div>
  )
}

