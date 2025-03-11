"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/app/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const gradientAnimation = {
  "0%": { backgroundPosition: "0% 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0% 50%" },
}

const styles = {
  ".animate-gradient": {
    backgroundSize: "200% 200%",
    animation: "gradient 1s linear infinite",
    "@keyframes gradient": gradientAnimation,
  },
}

const features = [
  {
    route: "MAD-JFK",
    flightNumber: "AA2100",
    departureTime: "14:55",
    arrivalTime: "20:05",
    status: "On time",
    gate: "A12",
    terminal: "T4",
    airline: "American Airlines",
    logo: "https://cdn.simpleicons.org/americanairlines/0078D2",
    progress: 75,
    statusColor: "emerald",
  },
  {
    route: "BCN-LHR",
    flightNumber: "IB6253",
    departureTime: "14:15",
    arrivalTime: "16:30",
    status: "Delayed",
    gate: "B8",
    terminal: "T1",
    airline: "Iberia",
    logo: "https://cdn.simpleicons.org/iberia/FF0D25",
    progress: 45,
    statusColor: "yellow",
  },
  {
    route: "AMS-MAD",
    flightNumber: "LH4402",
    departureTime: "11:45",
    arrivalTime: "14:00",
    status: "Boarding",
    gate: "C3",
    terminal: "T2",
    airline: "Lufthansa",
    logo: "https://cdn.simpleicons.org/lufthansa/05164D",
    progress: 15,
    statusColor: "blue",
  },
  {
    route: "DXB-SIN",
    flightNumber: "EK404",
    departureTime: "13:20",
    arrivalTime: "17:45",
    status: "Scheduled",
    gate: "D4",
    terminal: "T3",
    airline: "Emirates",
    logo: "https://cdn.simpleicons.org/emirates/D71921",
    progress: 25,
    statusColor: "emerald",
  },
]

const FlightCard = ({ feature, isActive }) => (
  <motion.div
    className={cn(
      "bg-[#93c572]/10 backdrop-blur-sm rounded-xl shadow-md overflow-hidden transition-all duration-200 border border-[#93c572]/20 hover:border-[#93c572]/40",
      isActive ? "scale-100 opacity-100" : "scale-95 opacity-80",
    )}
    style={{ maxWidth: "100%" }}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.95 }}
    transition={{ duration: 0.3 }}
  >
    <div className="p-2.5">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 relative">
            <Image
              src={feature.logo || "/placeholder.svg"}
              alt={feature.airline}
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-sm font-normal text-[#93c572] tracking-tight">{feature.route}</h3>
            <p className="text-[11px] text-[#93c572]/80 font-mono">{feature.flightNumber}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-[#93c572] font-mono tracking-tight">{`${feature.departureTime} - ${feature.arrivalTime}`}</p>
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                "size-1.5 rounded-full",
                feature.statusColor === "emerald" && "bg-[#93c572]",
                feature.statusColor === "yellow" && "bg-yellow-400",
                feature.statusColor === "blue" && "bg-blue-400",
              )}
            />
            <p
              className={cn(
                "text-[10px] uppercase tracking-wide font-medium",
                feature.statusColor === "emerald" && "text-[#93c572]",
                feature.statusColor === "yellow" && "text-yellow-400",
                feature.statusColor === "blue" && "text-blue-400",
              )}
            >
              {feature.status}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex justify-between text-[10px] text-[#93c572]/80 font-mono">
          <span>{`GATE ${feature.gate}`}</span>
          <span>{`TERM ${feature.terminal}`}</span>
          <span className="text-gray-600">•</span>
          <span className="text-emerald-500/70">{`${feature.progress}%`}</span>
        </div>

        <div className="relative h-1 bg-gray-800/50 rounded-full overflow-hidden">
          <motion.div
            className={cn(
              "absolute h-full rounded-full",
              feature.statusColor === "emerald" && "bg-[#93c572]/50",
              feature.statusColor === "yellow" && "bg-yellow-400/50",
              feature.statusColor === "blue" && "bg-blue-400/50",
            )}
            initial={{ width: 0 }}
            animate={{ width: `${feature.progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
    <div className="h-[1px] w-full bg-gradient-to-r from-[#93c572]/20 via-gray -500/20 to-green-600/20 animate-gradient" />
  </motion.div>
)

export function AIFlights() {
  const [activeFeature, setActiveFeature] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((current) => (current + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-emerald-950 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-[#93c572]">
          <div className="p-6 sm:p-10">
            <h2 className="text-lg sm:text-3xl font-light text-emerald-200 mb-6 text-center">
              Try the AirFlow powered by Flyn AI
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <AnimatePresence mode="wait">
                {features.map((feature, index) => (
                  <FlightCard key={feature.route} feature={feature} isActive={index === activeFeature} />
                ))}
              </AnimatePresence>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-light text-emerald-200 mb-4">Build your next journey with our technology</h3>
              <Button
                variant="outline"
                className="bg-transparent border-[#93c572] text-[#93c572] hover:bg-[#93c572]/20"
              >
                v.01 Beta
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

