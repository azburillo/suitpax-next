"use client"

import { motion } from "framer-motion"
import { Eye, Snowflake, Sliders, Edit2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

const WavePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 50 C 100 30, 200 70, 300 50 C 400 30, 500 70, 600 50 V200 H0"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
    >
      <animate
        attributeName="d"
        dur="5s"
        repeatCount="indefinite"
        values="
          M0 50 C 100 30, 200 70, 300 50 C 400 30, 500 70, 600 50 V200 H0;
          M0 50 C 100 70, 200 30, 300 50 C 400 70, 500 30, 600 50 V200 H0;
          M0 50 C 100 30, 200 70, 300 50 C 400 30, 500 70, 600 50 V200 H0
        "
      />
    </path>
  </svg>
)

const CreditCard = ({ isActive = true }: { isActive?: boolean }) => (
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    className="relative w-full aspect-[1.586/1] max-w-md mx-auto"
  >
    <div
      className={cn(
        "absolute inset-0 rounded-2xl p-6 text-white overflow-hidden",
        "bg-gradient-to-br from-emerald-900 to-emerald-950",
      )}
    >
      <WavePattern />
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <Image src="/suitpax-cloud-logo.svg" alt="Suitpax" width={32} height={32} className="invert" />
            </div>
            {isActive && <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
          </div>
          <Star className="w-5 h-5 text-white/50" />
        </div>
        <div>
          <p className="text-lg font-medium mb-1">Erica&apos;s Travel Card</p>
          <p className="font-mono text-sm opacity-75">•••• •••• •••• 0001</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-xs opacity-75">Card Holder</p>
            <p className="text-sm">ERICA SMITH</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 relative">
              <Image
                src="https://cdn.simpleicons.org/mastercard/white"
                alt="Mastercard"
                width={32}
                height={32}
                className="opacity-75"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

const ActionButton = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <Button
    variant="ghost"
    className="flex-1 flex flex-col items-center gap-2 h-auto py-3 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
  >
    <Icon className="w-5 h-5" />
    <span className="text-xs">{label}</span>
  </Button>
)

export function CardManagement() {
  //const [showCookieNotice, setShowCookieNotice] = useState(true)

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-6">Control spend effortlessly at any size</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Manage your travel expenses with our smart corporate cards. Set limits, track spending, and stay in
              control of your business travel finances.
            </p>
          </motion.div>

          <div className="relative">
            <Card className="bg-white p-6 shadow-xl">
              <CreditCard />

              <div className="grid grid-cols-4 gap-4 mt-6 mb-8">
                <ActionButton icon={Eye} label="Details" />
                <ActionButton icon={Snowflake} label="Freeze" />
                <ActionButton icon={Sliders} label="Limits" />
                <ActionButton icon={Edit2} label="Nickname" />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly limit:</span>
                  <span className="font-medium">$4,000.00</span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Posted</span>
                    <span className="text-gray-700">- $3,215.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Pending</span>
                    <span className="text-gray-700">- $300.42</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Available to spend</span>
                    <span className="text-emerald-600 font-medium">$484.58</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Card type</span>
                    <span className="text-gray-700">Physical Credit</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Merchant lock</span>
                    <span className="text-gray-700">Travel & Airlines</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

