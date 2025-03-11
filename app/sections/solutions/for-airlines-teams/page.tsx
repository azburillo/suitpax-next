"use client"

import { motion } from "framer-motion"
import { ChartBarIcon, ClockIcon, UserGroupIcon, CogIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const features = [
  {
    name: "Performance Analytics",
    description: "Gain deep insights into your airline's performance with our advanced analytics tools.",
    icon: ChartBarIcon,
  },
  {
    name: "Real-time Operations",
    description: "Manage and monitor your operations in real-time for improved efficiency and decision-making.",
    icon: ClockIcon,
  },
  {
    name: "Crew Management",
    description: "Optimize crew scheduling and management with our intelligent workforce solutions.",
    icon: UserGroupIcon,
  },
  {
    name: "System Integration",
    description: "Seamlessly integrate Suitpax with your existing airline systems and processes.",
    icon: CogIcon,
  },
]

export default function AirlinesTeamsPage() {
  return (
    <div className="bg-gradient-to-b from-emerald-950 via-teal-950 to-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Solutions for Airlines Teams
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Elevate your airline operations with Suitpax's comprehensive solutions. Our platform is designed to
            streamline processes, enhance efficiency, and improve the overall performance of your airline.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flow-root rounded-lg bg-gray-900 bg-opacity-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-teal-500 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Airline operations dashboard"
              width={800}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 to-transparent opacity-75"></div>
            <div className="absolute inset-0 flex items-center justify-start p-8">
              <div className="max-w-md">
                <h2 className="text-2xl font-bold text-white mb-4">Optimized Airline Management</h2>
                <p className="text-gray-200">
                  With Suitpax, take control of your airline operations with powerful tools designed to enhance
                  efficiency, reduce costs, and improve customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

