"use client"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { CardDemo } from "./card-demo"

export function KeyBenefits() {
  return (
    <section className="w-full py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-xl border border-white/10 bg-white/5 dark:bg-gray-800/5 p-6 sm:p-10 shadow-xl backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI-Powered Automation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }}
              className="flex flex-col items-start space-y-3"
            >
              <div className="bg-emerald-100 text-emerald-700 w-fit rounded-full px-3 py-1 text-xs font-medium">
                AI-Powered Automation
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                Streamline Operations with AI
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our AI-driven solutions automate tasks, optimize resources, and enhance decision-making, freeing up your
                team to focus on strategic initiatives.
              </p>
              <Button
                variant="outline"
                className="text-emerald-600 border-emerald-600 hover:bg-emerald-600 hover:text-white"
              >
                Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Global Network & Coverage */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } }}
              className="flex flex-col items-start space-y-3"
            >
              <div className="bg-blue-100 text-blue-700 w-fit rounded-full px-3 py-1 text-xs font-medium">
                Global Network & Coverage
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                Expand Your Reach with Confidence
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Connect with a vast network of airlines, hotels, and travel providers worldwide, ensuring seamless
                travel experiences for your customers.
              </p>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                Explore Network <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <CardDemo />
        </motion.div>
      </div>
    </section>
  )
}

