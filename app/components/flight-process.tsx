"use client"

import * as Tabs from "@radix-ui/react-tabs"
import { motion } from "framer-motion"
import { SeatMap } from "./seat-map"
import { JourneyVisualization } from "./journey-visualization"

export const FlightProcess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <Tabs.Root defaultValue="journey" className="w-full">
            <Tabs.List className="flex space-x-2 border-b border-gray-200 dark:border-gray-700 mb-8">
              <Tabs.Trigger
                value="journey"
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 data-[state=active]:text-emerald-600 dark:data-[state=active]:text-emerald-400 data-[state=active]:border-b-2 data-[state=active]:border-emerald-600 dark:data-[state=active]:border-emerald-400 transition-colors"
              >
                Your Journey
              </Tabs.Trigger>
              <Tabs.Trigger
                value="seat"
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 data-[state=active]:text-emerald-600 dark:data-[state=active]:text-emerald-400 data-[state=active]:border-b-2 data-[state=active]:border-emerald-600 dark:data-[state=active]:border-emerald-400 transition-colors"
              >
                Select Seat
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="journey" className="focus:outline-none">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Your Journey Experience
                </h2>
                <JourneyVisualization />
              </motion.div>
            </Tabs.Content>

            <Tabs.Content value="seat" className="focus:outline-none">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Choose Your Perfect Seat
                </h2>
                <SeatMap />
              </motion.div>
            </Tabs.Content>
          </Tabs.Root>
        </motion.div>
      </div>
    </div>
  )
}

