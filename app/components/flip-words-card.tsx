"use client"

import { Card, CardContent } from "@/app/components/ui/card"
import { FlipWords } from "@/app/components/ui/flip-words"
import { motion } from "framer-motion"

export function FlipWordsCard() {
  return (
    <div className="space-y-8">
      <Card className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <CardContent className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h2 className="text-1xl font-semibold tracking-tighter text-gray-900 dark:text-white">
              Revolutionizing{" "}
              <FlipWords
                words={["Travel", "Expenses", "Business", "Technology"]}
                className="text-black dark:text-blue-400"
              />
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Experience the future of travel and expense management with Suitpax.
            </p>
          </motion.div>
        </CardContent>
      </Card>

      <Card className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <CardContent className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <h2 className="text-1xl font-semibold tracking-tighter text-gray-900 dark:text-white">
              Empowering{" "}
              <FlipWords
                words={["Teams", "Travelers", "Managers", "Businesses"]}
                className="text-black dark:text-green-400"
              />
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Streamline your operations and boost productivity with our innovative solutions.
            </p>
          </motion.div>
        </CardContent>
      </Card>

      <Card className="w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <CardContent className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center space-y-4"
          >
            <h2 className="text-1xl font-semibold tracking-tighter text-gray-900 dark:text-white">
              Transforming{" "}
              <FlipWords
                words={["Efficiency", "Experiences", "Workflows", "Industries"]}
                className="text-black dark:text-amber-400"
              />
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Unlock new possibilities and drive growth with our cutting-edge platform.
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  )
}

