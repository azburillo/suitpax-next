"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { AnalyticsDashboard } from "@/app/components/ui-management/analytics-dashboard"
import { SubscriptionCard } from "@/app/components/ui-management/subscription-card"
import { IntegrationFlow } from "@/app/components/ui-management/integration-flow"
import { ThemeCustomizer } from "@/app/components/ui-management/theme-customizer"
import { CommunityDashboard } from "@/app/components/ui-management/community-dashboard"

const components = [
  {
    component: AnalyticsDashboard,
    title: "Analytics Dashboard",
    description: "Track key metrics and performance indicators",
  },
  {
    component: SubscriptionCard,
    title: "Subscription Management",
    description: "Manage and optimize your subscription plans",
  },
  { component: IntegrationFlow, title: "Integration Flow", description: "Seamlessly connect with your favorite tools" },
  { component: ThemeCustomizer, title: "Theme Customization", description: "Personalize your dashboard appearance" },
  {
    component: CommunityDashboard,
    title: "Community Engagement",
    description: "Foster user interactions and discussions",
  },
]

export function JoinManagement() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length)
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-tighter">Comprehensive Management Suite</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900 to-black p-6 md:p-8"
      >
        {/* Ambient background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tighter text-white mb-2">
              {components[currentIndex].title}
            </h3>
            <p className="text-sm md:text-base font-light text-zinc-400">{components[currentIndex].description}</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              {(() => {
                const CurrentComponent = components[currentIndex].component
                return <CurrentComponent />
              })()}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 space-x-3">
            {components.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white scale-125" : "bg-zinc-600 hover:bg-zinc-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  )
}

