import React from "react"
import { Compare } from "@/app/components/ui/compare"

export function CompareDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[350px] w-[300px] md:h-[600px] md:w-[600px]"
        slideMode="hover"
      />
    </div>
  )
}

