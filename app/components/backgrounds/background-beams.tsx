"use client"

import React from "react"
import { cn } from "@/app/lib/utils"

export const BackgroundBeams = React.memo(({ className }: { className?: string }) => {
  return (
    <div className={cn("fixed inset-0 z-0", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-black to-black/60 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  )
})

BackgroundBeams.displayName = "BackgroundBeams"

