"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/app/lib/utils"
import { SiNfc } from "react-icons/si"
import { SiMastercard } from "react-icons/si"

const CreditCard = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const cardGradient = "bg-gradient-to-br from-[#f2f2f2] to-[#e0e0e0]"

  return (
    <div className={cn("relative w-full max-w-md mx-auto", "perspective-[1000px]")}>
      <motion.div
        className="relative w-full aspect-[1.586/1] preserve-3d cursor-pointer"
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.23, 1, 0.32, 1],
          scale: {
            duration: 0.2,
          },
        }}
        onClick={() => setIsFlipped(!isFlipped)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <motion.div
            className={cn(
              "w-full h-full rounded-2xl p-6 shadow-xl overflow-hidden border border-gray-200/50",
              cardGradient, // Apply conditional gradient
            )}
          >
            <div className="relative z-10 flex flex-col justify-between h-full text-gray-600">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-7 rounded-md border border-gray-300/60 bg-gradient-to-br from-[#eeeeee] to-[#cccccc] shadow-inner"></div>
                  <SiNfc className="w-4 h-4 text-gray-400" />
                </div>
                <div className="w-10 h-5 flex justify-end items-center">
                  <SiMastercard className="w-8 h-8 text-gray-700" />
                </div>
              </div>

              <div className="my-6">{/* Removed card number */}</div>

              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-gray-400">Company</p>
                  <p className="text-xs font-semibold text-gray-600">BRITISH AIRWAYS</p>
                </div>
                <div className="w-24 h-12 flex items-center justify-center">
                  <Image
                    src="/suitpax-main-logo.svg"
                    alt="Suitpax"
                    width={340}
                    height={70}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <motion.div
            className={cn(
              "w-full h-full rounded-2xl p-4 shadow-xl overflow-hidden border border-gray-700/20",
              cardGradient,
            )}
          >
            <div className="flex flex-col justify-between h-full text-gray-600 text-xs">
              <div className="w-full h-8 bg-gray-200 -mx-4 mt-2"></div>
              <div className="space-y-2">
                <div className="bg-white/20 h-8 rounded"></div>
                <div className="flex justify-end">
                  <div className="text-gray-800 w-12 h-6 rounded flex items-center justify-center font-mono">346</div>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="uppercase tracking-tighter text-gray-500">Card Holder</p>
                  <p className="font-semibold text-gray-700">MR JON SNOW</p>
                  <p className="font-mono text-gray-500">4815 1234 5678 9012</p>
                  <p className="font-mono text-gray-500">EXP 08/2034 CVC 036</p>
                </div>
                <div className="w-12 h-6">
                  <Image src="/suitpax-main-logo.svg" alt="Suitpax" width={48} height={24} className="object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

const Stats = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8 bg-white/5 backdrop-blur-lg rounded-xl p-6 text-emerald-950">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-semibold">Total Savings</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold">$5,146.12</span>
          <span className="text-emerald-400 text-sm">↑ 9.32%</span>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { label: "Travel", amount: 1890, max: 2000, percent: "40%" },
          { label: "Hotels", amount: 3174, max: 4000, percent: "75%" },
          { label: "Suitpax Membership", amount: 838, max: 1000, percent: "85%" },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-sm mb-1">
              <span>{item.label}</span>
              <span>
                ${item.amount}/${item.max}
              </span>
            </div>
            <div className="h-2 bg-emerald-950 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-700"
                initial={{ width: 0 }}
                animate={{ width: item.percent }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function HeroFintech() {
  const financialInsights = [
    { text: "Real-time transaction monitoring", percentage: "99%" },
    { text: "AI-powered investment recommendations", percentage: "+30%" },
    { text: "Personalized budgeting tools", percentage: "25%" },
    { text: "Secure multi-currency wallets", percentage: "100%" },
  ]
  return (
    <section className="w-full py-12 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          viewport={{ once: true }}
          className="w-full mx-auto rounded-xl border border-gray-200 bg-white p-6 sm:p-10 shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div className="inline-block px-3 py-2 rounded-full bg-gray-100 text-gray-800 text-xs mb-4">
                  Smart fintech for seamless travel
                </div>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 text-gray-900 tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Unlock the power of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
                  travel fintech
                </span>
              </motion.h1>

              <motion.p
                className="text-sm lg:text-base text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Unlock the potential of digital finance with our user-friendly platform. Save, invest, and access loans
                effortlessly. Take charge of your financial future today.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-6" asChild>
                  <Link href="/get-started">
                    Get Started
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg px-6"
                  asChild
                >
                  <Link href="/learn-more">Learn More</Link>
                </Button>
              </motion.div>

              <motion.div
                className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {[
                  { label: "Active Users", value: "1M+" },
                  { label: "Transactions", value: "$5B+" },
                  { label: "Countries", value: "20+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-light text-emerald-300 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Card & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <CreditCard />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Stats />
              </motion.div>

              <motion.div
                className="mt-8 p-6 bg-gray-100 rounded-xl relative overflow-hidden"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="relative z-10">
                  <h3 className="text-lg font-medium text-gray-800 mb-6 tracking-tighter">Financial Insights</h3>
                  <motion.ul className="grid grid-cols-2 gap-6">
                    {financialInsights.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex flex-col items-start text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                      >
                        <motion.span
                          className="text-3xl font-bold text-emerald-600 mb-2"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + index * 0.1, duration: 0.3, type: "spring" }}
                        >
                          {item.percentage}
                        </motion.span>
                        <p className="text-sm font-medium tracking-tighter">{item.text}</p>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

