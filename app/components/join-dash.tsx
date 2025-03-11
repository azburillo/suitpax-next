"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { DashboardPreviewSectionFlights } from "./ui-dash-demo/dashboard-preview-section-flights"
import { DashboardPreviewSectionHotels } from "./ui-dash-demo/dashboard-preview-section-hotels"
import { DashboardPreviewSectionExpenses } from "./ui-dash-demo/dashboard-preview-section-expenses"
import { DashboardPreviewSectionAnalytics } from "./ui-dash-demo/dashboard-preview-section-analytics"
import { DashboardPreviewSectionCars } from "./ui-dash-demo/dashboard-preview-section-cars"
import { DashboardPreviewSectionCorporate } from "./ui-dash-demo/dashboard-preview-section-corporate"
import { DashboardPreviewSectionVIPLounge } from "./ui-dash-demo/dashboard-preview-section-vip-lounge"
import { DashboardPreviewSectionPayroll } from "./ui-dash-demo/dashboard-preview-section-payroll"
import { DashboardPreviewSectionBooking } from "./ui-dash-demo/dashboard-preview-section-booking"
import { JoinDashHeader } from "./join-dash-header"

const dashboards = [
  { component: DashboardPreviewSectionFlights, label: "Flights", description: "Manage flight operations efficiently" },
  { component: DashboardPreviewSectionBooking, label: "Booking", description: "Real-time flight booking system" },
  {
    component: DashboardPreviewSectionHotels,
    label: "Hotels",
    description: "Streamline hotel bookings and management",
  },
  { component: DashboardPreviewSectionCars, label: "Car Rental", description: "Optimize car rental services" },
  { component: DashboardPreviewSectionExpenses, label: "Expenses", description: "Track and manage travel expenses" },
  { component: DashboardPreviewSectionAnalytics, label: "Analytics", description: "Gain insights from travel data" },
  {
    component: DashboardPreviewSectionCorporate,
    label: "Corporate Travel",
    description: "Manage corporate travel programs",
  },
  { component: DashboardPreviewSectionVIPLounge, label: "VIP Lounge", description: "Enhance VIP travel experiences" },
  {
    component: DashboardPreviewSectionPayroll,
    label: "Payroll",
    description: "Handle travel-related payroll efficiently",
  },
]

export function JoinDash() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const CurrentDashboard = dashboards[currentIndex].component

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <div className="w-full">
      <JoinDashHeader />
      <div className="max-w-6xl mx-auto px-4">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
            }}
            className="w-full h-[550px]"
          >
            <CurrentDashboard />
          </motion.div>
        </AnimatePresence>

        {/* Button Selectors - Modernos y Redondeados */}
        <div className="flex flex-wrap justify-center mt-6 gap-3">
          {dashboards.map((dashboard, index) => (
            <Button
              key={index}
              onClick={() => goToSlide(index)}
              variant={index === currentIndex ? "default" : "outline"}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out ${
                index === currentIndex
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg hover:from-emerald-600 hover:to-teal-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gray-300"
              }`}
            >
              {dashboard.label}
            </Button>
          ))}
        </div>

        {/* Dashboard Description */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">{dashboards[currentIndex].description}</p>
        </div>
      </div>
    </div>
  )
}

