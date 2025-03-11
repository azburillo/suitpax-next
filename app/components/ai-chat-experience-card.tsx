"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { cn } from "@/app/lib/utils"
import {
  Plane,
  Calendar,
  CreditCard,
  CheckCircle,
  Globe,
  Clock,
  Hotel,
  Briefcase,
  Shield,
  Headphones,
  Receipt,
  Sparkles,
} from "lucide-react"

type Badge = {
  id: number
  title: string
  description: string
  position: {
    top: string
    left: string
  }
  icon: React.ReactNode
  color: string
}

const floatingBadges: Badge[] = [
  {
    id: 1,
    title: "Smart Flight Recommendations",
    description: "AI-powered flight suggestions based on your preferences",
    position: { top: "18%", left: "15%" },
    icon: <Plane className="h-3 w-3" />,
    color: "from-blue-600 to-blue-400",
  },
  {
    id: 2,
    title: "Optimal Date Selection",
    description: "Automatically find the best dates for better rates",
    position: { top: "12%", left: "65%" },
    icon: <Calendar className="h-3 w-3" />,
    color: "from-emerald-600 to-emerald-400",
  },
  {
    id: 3,
    title: "Secure Payment Processing",
    description: "Bank-level encryption for all transactions",
    position: { top: "75%", left: "20%" },
    icon: <CreditCard className="h-3 w-3" />,
    color: "from-purple-600 to-purple-400",
  },
  {
    id: 4,
    title: "Instant Booking Confirmation",
    description: "Real-time confirmations with guarantee",
    position: { top: "80%", left: "70%" },
    icon: <CheckCircle className="h-3 w-3" />,
    color: "from-green-600 to-green-400",
  },
  {
    id: 5,
    title: "Global Destination Access",
    description: "Over 190 countries and 10,000 destinations",
    position: { top: "30%", left: "8%" },
    icon: <Globe className="h-3 w-3" />,
    color: "from-indigo-600 to-indigo-400",
  },
  {
    id: 6,
    title: "Real-Time Travel Alerts",
    description: "Instant notifications about itinerary changes",
    position: { top: "25%", left: "85%" },
    icon: <Clock className="h-3 w-3" />,
    color: "from-amber-600 to-amber-400",
  },
  {
    id: 7,
    title: "Premium Hotel Bookings",
    description: "Integration with over 500,000 properties",
    position: { top: "45%", left: "90%" },
    icon: <Hotel className="h-3 w-3" />,
    color: "from-rose-600 to-rose-400",
  },
  {
    id: 8,
    title: "Business Travel Tools",
    description: "Specialized features for corporate travelers",
    position: { top: "60%", left: "10%" },
    icon: <Briefcase className="h-3 w-3" />,
    color: "from-cyan-600 to-cyan-400",
  },
  {
    id: 9,
    title: "Comprehensive Travel Insurance",
    description: "Complete coverage for travel contingencies",
    position: { top: "40%", left: "25%" },
    icon: <Shield className="h-3 w-3" />,
    color: "from-teal-600 to-teal-400",
  },
  {
    id: 10,
    title: "24/7 Personalized Support",
    description: "Expert assistance whenever you need it",
    position: { top: "55%", left: "80%" },
    icon: <Headphones className="h-3 w-3" />,
    color: "from-orange-600 to-orange-400",
  },
  {
    id: 11,
    title: "Automated Expense Management",
    description: "Automatic tracking and categorization of expenses",
    position: { top: "65%", left: "45%" },
    icon: <Receipt className="h-3 w-3" />,
    color: "from-pink-600 to-pink-400",
  },
]

export function AiChatExperienceCard() {
  const [activeBadge, setActiveBadge] = useState<number | null>(null)
  const cursorControls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  // Animate cursor to move between badges
  useEffect(() => {
    const animateCursor = async () => {
      if (isHovering) return

      for (let i = 0; i < floatingBadges.length; i++) {
        const badge = floatingBadges[i]

        // Move cursor to badge position
        await cursorControls.start({
          top: badge.position.top,
          left: badge.position.left,
          transition: {
            duration: 1.5,
            ease: "easeInOut",
          },
        })

        // Set active badge
        setActiveBadge(badge.id)

        // Wait before moving to next badge
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }

      // Reset and repeat
      setActiveBadge(null)
      animateCursor()
    }

    animateCursor()

    return () => {
      cursorControls.stop()
    }
  }, [cursorControls, isHovering])

  return (
    <div className="w-full max-w-6xl mx-auto my-12">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-950/30 via-black/40 to-black/90 backdrop-blur-md border border-emerald-950/10 shadow-xl"
        style={{ height: "600px" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 to-transparent pointer-events-none opacity-50" />

        {/* Central Card */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-950/50 to-black/50 backdrop-blur-md rounded-2xl border border-emerald-900/30 shadow-lg flex flex-col items-center justify-center p-6 z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-400 flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-2">SuitPax AI</h3>
            <p className="text-sm text-gray-300 text-center">Intelligent travel planning and management</p>
          </motion.div>
        </div>

        {/* Floating Badges */}
        {floatingBadges.map((badge) => (
          <motion.div
            key={badge.id}
            className={cn(
              "absolute z-10 max-w-[180px]",
              `bg-gradient-to-r ${badge.color} bg-opacity-20 backdrop-blur-md rounded-lg p-2 border border-white/10`,
              "shadow-lg transition-all duration-300",
              activeBadge === badge.id ? "ring-1 ring-white/30" : "",
            )}
            style={{
              top: badge.position.top,
              left: badge.position.left,
            }}
            animate={{
              scale: activeBadge === badge.id ? 1.05 : 1,
              opacity: activeBadge === badge.id ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05, opacity: 1 }}
            onClick={() => setActiveBadge(badge.id)}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <div className="text-white">{badge.icon}</div>
              <h4 className="text-xs font-semibold text-white tracking-tighter">{badge.title}</h4>
            </div>
            <p className="text-[10px] text-gray-200/90 leading-tight">{badge.description}</p>
          </motion.div>
        ))}

        {/* Animated Cursor */}
        <motion.div
          className="absolute z-20 w-6 h-6 rounded-full border-2 border-emerald-400/50 shadow-lg pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.8) 0%, rgba(16,185,129,0.2) 70%)",
            boxShadow: "0 0 15px 5px rgba(16,185,129,0.3)",
          }}
          animate={cursorControls}
          initial={{ top: "45%", left: "45%" }}
        />

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full z-5 pointer-events-none">
          <g stroke="rgba(16,185,129,0.2)" strokeWidth="1">
            {floatingBadges.map((badge) => {
              // Convert percentage to pixels (approximate)
              const fromTop = Number.parseInt(badge.position.top) * 6
              const fromLeft = Number.parseInt(badge.position.left) * 6

              return (
                <line
                  key={badge.id}
                  x1="300"
                  y1="300"
                  x2={fromLeft}
                  y2={fromTop}
                  strokeDasharray="5,5"
                  className={activeBadge === badge.id ? "opacity-50" : "opacity-10"}
                />
              )
            })}
          </g>
        </svg>

        {/* Bottom Text */}
        <div className="absolute bottom-4 left-0 right-0 text-center z-10">
          <p className="text-xs text-gray-300 max-w-md mx-auto px-4">
            Our AI-powered travel assistant revolutionizes how you plan, book, and manage your journeys. Experience the
            future of travel with SuitPax.
          </p>
        </div>
      </div>
    </div>
  )
}

