"use client"

import { motion } from "framer-motion"
import { LightBulbIcon, HashtagIcon, UserGroupIcon, CogIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const features = [
  {
    name: "Innovative Travel Solutions",
    description: "Access cutting-edge travel technologies tailored for growing businesses.",
    icon: LightBulbIcon,
  },
  {
    name: "Scalable Platform",
    description: "Our platform grows with your startup, adapting to your changing needs.",
    icon: HashtagIcon,
  },
  {
    name: "Team Collaboration",
    description: "Enhance team coordination with our collaborative travel planning tools.",
    icon: UserGroupIcon,
  },
  {
    name: "Customizable Integration",
    description: "Easily integrate Suitpax with your existing startup tools and workflows.",
    icon: CogIcon,
  },
]

export default function StartupsPage() {
  return (
    <div className="bg-gradient-to-b from-emerald-950 via-teal-950 to-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Solutions for Startups
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Fuel your startup's growth with Suitpax's agile travel management solutions. Designed to scale with your
            business and optimize your team's travel experiences.
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
              alt="Startup team using Suitpax"
              width={800}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 to-transparent opacity-75"></div>
            <div className="absolute inset-0 flex items-center justify-start p-8">
              <div className="max-w-md">
                <h2 className="text-2xl font-bold text-white mb-4">Empowering Startup Growth</h2>
                <p className="text-gray-200">
                  Suitpax provides the tools and flexibility your startup needs to manage travel efficiently, allowing
                  you to focus on what matters most - growing your business.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

