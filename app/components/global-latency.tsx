"use client"

import { motion } from "framer-motion"
import { GlobeAltIcon } from "@heroicons/react/24/outline"
import { Card } from "@/components/ui/card"
import { useEffect, useRef } from "react"

const serverLocations = [
  { x: 20, y: 30 }, // North America
  { x: 45, y: 25 }, // Europe
  { x: 70, y: 35 }, // Asia
  { x: 55, y: 60 }, // Africa
  { x: 30, y: 70 }, // South America
  { x: 80, y: 70 }, // Australia
]

const GlowingDot = ({ x, y }: { x: number; y: number }) => (
  <motion.div
    className="absolute w-2 h-2"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    }}
  >
    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
    <motion.div
      className="absolute inset-0 bg-emerald-400 rounded-full"
      animate={{
        scale: [1, 3],
        opacity: [0.3, 0],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeOut",
      }}
    />
  </motion.div>
)

const WorldMap = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Draw world map
    ctx.fillStyle = "#1a1a1a"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Simple world map outline
    ctx.strokeStyle = "#333"
    ctx.lineWidth = 1
    ctx.beginPath()
    // Simplified world map path
    ctx.moveTo(0, canvas.height * 0.4)
    ctx.lineTo(canvas.width, canvas.height * 0.4)
    ctx.stroke()
  }, [])

  return (
    <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "#111" }} />
      {serverLocations.map((location, index) => (
        <GlowingDot key={index} x={location.x} y={location.y} />
      ))}
    </div>
  )
}

export function GlobalLatency() {
  return (
    <section className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-4">
              Monitor your API key usage through our dashboard, or build your own on top of our API.
            </h2>
          </div>

          <Card className="bg-black border border-gray-800 rounded-[2rem] overflow-hidden">
            <div className="p-6">
              <WorldMap />

              <div className="mt-6 flex items-center gap-2">
                <span className="text-gray-400">Latency</span>
                <div className="flex items-center gap-2">
                  <span className="text-white">7</span>
                  <span className="text-gray-400">ms</span>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <GlobeAltIcon className="w-6 h-6 text-gray-400" />
                  <h3 className="text-xl font-medium">Global low latency</h3>
                </div>
                <p className="text-gray-400 text-lg">
                  Unkey is fast globally, regardless of which cloud providers you're using or where your users are
                  located.
                </p>
              </div>

              <div className="mt-8 p-4 bg-gray-900/50 rounded-xl flex items-center gap-3">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-400" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-white font-medium">User</span>
                  <span className="text-gray-400 ml-2">verified key and logged usage</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

