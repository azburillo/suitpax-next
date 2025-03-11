"use client"

import React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TripBookingCard } from "./trips/trip-booking-card"
import { TripItineraryCard } from "./trips/trip-itinerary-card"
import { VipLoungeCard } from "./trips/vip-lounge-card"
import { StaysCard } from "./trips/stays-card"
import { RideCard } from "./trips/ride-card"
import { TechIntegrationCard } from "./trips/tech-integration-card"
import { LoyaltyProgramCard } from "./trips/loyalty-program-card"
import { TravelAnalyticsCard } from "./trips/travel-analytics-card"
import { CreditCard } from "./trips/credit-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { IntegrationsHubCard } from "./trips/integrations-hub-card"
import { IncidentManagerCard } from "./trips/incident-manager-card"

const cards = [
  { component: CreditCard, label: "Cards" },
  { component: TripBookingCard, label: "Flights" },
  { component: StaysCard, label: "Hotels" },
  { component: RideCard, label: "Cars" },
  { component: VipLoungeCard, label: "Lounges" },
  { component: TripItineraryCard, label: "Itinerary" },
  { component: TechIntegrationCard, label: "Tech" },
  { component: IntegrationsHubCard, label: "Integrations" },
  { component: IncidentManagerCard, label: "Monitor" },
  { component: LoyaltyProgramCard, label: "Rewards" },
  { component: TravelAnalyticsCard, label: "Analytics" },
]

export const JoinTrips = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setActiveIndex((current) => (current + 1) % cards.length)
    }, 12000) // Aumentado de 7000 a 12000 ms
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setActiveIndex((current) => (current + newDirection + cards.length) % cards.length)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden min-h-[600px] w-full">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute w-full"
              >
                {React.createElement(cards[activeIndex].component)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Smaller with blur */}
          <div className="absolute z-10 w-full flex justify-between top-1/2 transform -translate-y-1/2 px-4 md:px-0">
            <button
              className="md:ml-[-40px] p-1.5 rounded-full bg-gray-800/40 backdrop-blur-md hover:bg-gray-800/60 transition-colors"
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>
            <button
              className="md:mr-[-40px] p-1.5 rounded-full bg-gray-800/40 backdrop-blur-md hover:bg-gray-800/60 transition-colors"
              onClick={() => paginate(1)}
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* Indicators - Mejorados con colores más oscuros */}
          <div className="flex justify-center mt-8 gap-3 flex-wrap">
            {cards.map((card, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
                className="group flex flex-col items-center gap-2"
                aria-label={`View ${card.label}`}
                aria-current={activeIndex === index ? "true" : "false"}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-8 bg-gray-800" : "bg-gray-600/50 group-hover:bg-gray-700/70"
                  }`}
                />
                <span
                  className={`text-xs ${
                    activeIndex === index ? "text-gray-800 font-medium" : "text-gray-600 group-hover:text-gray-700"
                  }`}
                >
                  {card.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

