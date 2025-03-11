"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@heroicons/react/24/outline" // Replaced Lucide ArrowRight
import { Bars3Icon } from "@heroicons/react/24/outline" // Placeholder for Menu, consider Kebab menu from shadcn/ui
import { SiGithub, SiGoogle, SiSlack } from "react-icons/si"
import { BsThreeDots } from "react-icons/bs"

export function AuthGenAI() {
  return (
    <section className="min-h-screen bg-[#111111] text-white overflow-hidden">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Auth0 Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="font-medium">Auth0 by Okta</span>
          </div>
          <Button variant="ghost" size="icon" className="text-white">
            <Bars3Icon className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Auth for{" "}
              <span className="bg-gradient-to-r from-[#4F6EF7] to-[#F77E7E] bg-clip-text text-transparent">GenAI</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              Enjoy securing your GenAI apps with the developer experience Auth0 is known for.
            </p>
            <Button
              className="text-white border border-white/20 bg-transparent hover:bg-white/10 text-lg py-6 px-8 rounded-xl"
              asChild
            >
              <Link href="/explore">
                Explore Auth for GenAI
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Integration Icons */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { Icon: SiGithub, label: "GitHub" },
              { Icon: SiGoogle, label: "Google" },
              { Icon: SiSlack, label: "Slack" },
              { Icon: BsThreeDots, label: "More" },
            ].map(({ Icon, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center"
              >
                <Icon className="w-6 h-6" />
              </motion.div>
            ))}
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-video max-w-3xl mx-auto"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <div className="w-64 h-96 bg-gray-900 rounded-2xl p-4 border border-gray-800">
                <div className="w-12 h-12 bg-blue-600 rounded-full mb-4" />
                <div className="w-full h-2 bg-blue-600/50 rounded-full" />
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-96 h-48 bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full" />
                  <span className="text-xl bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent font-bold">
                    GenAI
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full" />
                  <div className="flex-1 h-8 bg-gray-800 rounded-full px-4 flex items-center">Start typing...</div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <div className="w-32 h-64 border-2 border-gray-700 rounded-lg">
                <div className="h-full flex flex-col justify-around items-center py-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 border-2 border-gray-700 rounded" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Customer Logos */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-24">
            <div className="grid grid-cols-4 gap-8 mb-8 opacity-70">
              {["Generali", "Electrolux", "American National", "News Corp"].map((company) => (
                <div key={company} className="h-12 flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=48&width=120`}
                    alt={company}
                    width={120}
                    height={48}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
            <Link href="/stories" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
              <span className="border-b border-current">Read Customer Stories</span>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </main>
    </section>
  )
}

