"use client"

import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { AnimatedCounter } from "./ui/animated-counter"

function CountingNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const incrementTime = (duration * 1000) / end
      const counter = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(counter)
      }, incrementTime)

      return () => clearInterval(counter)
    }
  }, [value, duration, isInView])

  return <span ref={ref}>{count}</span>
}

export function UltraStats() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h3 className="text-sm font-medium tracking-tighter text-muted-foreground">Our Achievements</h3>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powering innovation worldwide
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-8">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <AnimatedCounter value={10} suffix="K+" />
              </span>
              <span className="text-sm tracking-tighter text-muted-foreground">Active Users</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <span className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <AnimatedCounter value={500} suffix="+" />
              </span>
              <span className="text-sm tracking-tighter text-muted-foreground">Enterprise Clients</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <span className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <AnimatedCounter value={99.9} suffix="%" />
              </span>
              <span className="text-sm tracking-tighter text-muted-foreground">Uptime</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <span className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">24/7</span>
              <span className="text-sm tracking-tighter text-muted-foreground">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

