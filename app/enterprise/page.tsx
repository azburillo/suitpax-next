"use client"

import { motion } from "framer-motion"
import { DashVIPLounge } from "@/app/components/ui/dashboard-preview/dash-vip-lounge"
import { ArrowRight } from "lucide-react"

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <div className="relative isolate">
        {/* Background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-purple-500/10"
          aria-hidden="true"
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="text-center">
            <motion.div
              className="mx-auto max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                    Enterprise
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium text-gray-300">
                    <span>Just shipped v1.0</span>
                  </span>
                </a>
              </div>
              <h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl">
                Travel management software for next-gen startups
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Empower your startup with our cutting-edge travel management platform. Streamline bookings, optimize
                spending, and enhance the travel experience for your dynamic team.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-emerald-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 transition-colors"
                >
                  Contact sales
                </a>
                <a
                  href="#"
                  className="text-sm font-medium leading-6 text-gray-300 flex items-center hover:text-white transition-colors"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Mobile Dashboard Preview */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full max-w-[375px] aspect-[9/16] bg-zinc-800 rounded-[3rem] p-4 shadow-xl overflow-hidden">
              <div className="w-full h-full overflow-hidden rounded-[2.5rem]">
                <DashVIPLounge />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

