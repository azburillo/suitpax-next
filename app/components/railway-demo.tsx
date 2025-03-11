"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiKubernetes, SiDocker, SiNginx, SiMongodb } from "react-icons/si"

const ServerCard = ({
  region,
  cpuCount,
  deployMethod,
  className,
}: {
  region: string
  cpuCount: number
  deployMethod: string
  className?: string
}) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`relative group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500" />
    <div className="relative bg-gray-900/90 border border-gray-800 rounded-lg p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-23-06-22-21-724_com.android.chrome.jpg-2ZZONRfkYVRiEOVoThB6HmetYzL8PM.jpeg"
            alt="Python logo"
            width={24}
            height={24}
            className="rounded"
          />
        </div>
        <span className="text-gray-300 text-sm font-medium">backend [{region}]</span>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-emerald-500/20 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
        </div>
        <span className="text-gray-500 text-xs">{deployMethod}</span>
      </div>
      <div className="grid grid-cols-5 gap-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-1">
            {[...Array(3)].map((_, j) => (
              <div
                key={j}
                className="h-8 bg-emerald-950/50 border border-emerald-900/30 rounded-sm flex items-center justify-center"
              >
                <div className="w-4 h-1 bg-emerald-800/50 rounded-full" />
              </div>
            ))}
          </div>
        ))}
        <div className="bg-purple-900/20 border border-purple-700/20 rounded-sm p-2 flex items-center justify-center">
          <div className="text-center">
            <div className="text-purple-400 text-lg font-bold">{cpuCount}x</div>
            <div className="text-purple-500 text-xs">CPU</div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

export function RailwayDemo() {
  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.05),transparent_50%)]" />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-gray-300 mb-6 leading-relaxed">
              Railway dynamically scales servers, storage, and networking to meet application demands.{" "}
              <Link href="/learn-more" className="text-white hover:text-gray-100 inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </h2>

            <div className="flex items-center justify-center gap-6 text-gray-400">
              <span className="text-lg">Replaces</span>
              <div className="flex items-center gap-4">
                <SiKubernetes className="w-8 h-8" />
                <SiDocker className="w-8 h-8" />
                <SiNginx className="w-8 h-8" />
                <SiMongodb className="w-8 h-8" />
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <ServerCard region="US-West" cpuCount={64} deployMethod="Just deployed via GitHub" className="max-w-sm" />

            <div className="absolute left-1/2 top-1/2 w-px h-32 bg-gradient-to-b from-emerald-500/20 to-transparent" />

            <ServerCard
              region="EU"
              cpuCount={16}
              deployMethod="Just deployed via CLI"
              className="max-w-sm ml-auto mt-32"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

