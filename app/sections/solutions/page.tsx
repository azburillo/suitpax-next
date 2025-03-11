"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

const solutions = [
  {
    name: "For Travelers",
    description: "Seamless travel experiences tailored to individual needs.",
    href: "/sections/solutions/for-travelers",
  },
  {
    name: "For Financial Teams",
    description: "Efficient tools for travel expense management and budgeting.",
    href: "/sections/solutions/for-financial-teams",
  },
  {
    name: "For Startups",
    description: "Scalable travel solutions for growing businesses.",
    href: "/app/sections/solutions/for-startups",
  },
  {
    name: "For Airlines Teams",
    description: "Comprehensive airline operations management platform.",
    href: "/sections/solutions/for-airlines-teams",
  },
]

export default function SolutionsPage() {
  return (
    <div className="bg-gradient-to-b from-emerald-950 via-teal-950 to-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Suitpax Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Discover our range of tailored solutions designed to meet the unique needs of travelers, financial teams,
            startups, and airline operations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={solution.href} className="block group">
                <div className="rounded-lg bg-gray-900 bg-opacity-50 p-6 hover:bg-opacity-70 transition-all duration-200">
                  <h3 className="text-lg font-medium text-white group-hover:text-teal-400 transition-colors duration-200">
                    {solution.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-400">{solution.description}</p>
                  <div className="mt-4 flex items-center text-teal-500">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

