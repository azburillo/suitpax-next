"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { EyeIcon, StarIcon, PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Cog6ToothIcon, SnowflakeIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { SiAmericanairlines, SiMarriott, SiBritishairways, SiHilton } from "react-icons/si"

const ActionButton = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center gap-2 p-4 text-gray-400 hover:text-emerald-400 transition-colors"
  >
    <Icon className="w-6 h-6" />
    <span className="text-xs">{label}</span>
  </motion.button>
)

const CreditCard = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="relative w-full max-w-md aspect-[1.586/1] cursor-pointer preserve-3d"
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.8 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Front of card */}
      <motion.div
        className={cn(
          "absolute inset-0 backface-hidden rounded-xl p-6",
          "bg-gradient-to-br from-[#1a1040] to-[#2a1060]",
          "border border-white/10 shadow-xl",
        )}
      >
        <div className="relative h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className="w-12 h-8 bg-white/10 rounded-md backdrop-blur-sm" />
              <div className="w-6 h-6 rounded-full bg-emerald-400/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>
            <StarIcon className="w-6 h-6 text-white/40" />
          </div>

          <div className="space-y-4">
            <p className="text-lg text-white">Suitpax Travel Card</p>
            <p className="font-mono text-white/80">•••• •••• •••• 0001</p>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-white/60">Card Holder</p>
              <p className="text-sm text-white">ERICA SMITH</p>
            </div>
            <Image
              src="https://cdn.simpleicons.org/mastercard/white"
              alt="Mastercard"
              width={48}
              height={32}
              className="opacity-75"
            />
          </div>
        </div>
      </motion.div>

      {/* Back of card */}
      <motion.div
        className={cn(
          "absolute inset-0 backface-hidden rounded-xl p-6 rotate-y-180",
          "bg-gradient-to-br from-[#1a1040] to-[#2a1060]",
          "border border-white/10 shadow-xl",
        )}
      >
        <div className="h-8 bg-black/40 -mx-6 mt-4" />
        <div className="mt-8 space-y-4">
          <div className="bg-white/10 h-8 rounded" />
          <div className="flex justify-end">
            <div className="w-16 h-8 bg-white/20 rounded flex items-center justify-center font-mono text-white">
              346
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function CardControl() {
  return (
    <section className="min-h-screen bg-[#0C0C0C] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Control spend effortlessly at any size</h2>
            <p className="text-xl text-gray-400">
              Manage your travel expenses with our smart corporate cards. Set limits, track spending, and stay in
              control.
            </p>
          </motion.div>

          <Card className="bg-[#1a1040]/50 backdrop-blur-md border-white/10 p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <StarIcon className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg text-white">Travel Card Management</h3>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-400">
                <XMarkIcon className="w-5 h-5" />
              </Button>
            </div>

            <CreditCard />

            <div className="grid grid-cols-4 gap-4 mt-6 border-t border-white/10 pt-6">
              <ActionButton icon={EyeIcon} label="Details" />
              <ActionButton icon={SnowflakeIcon} label="Freeze" />
              <ActionButton icon={Cog6ToothIcon} label="Limits" />
              <ActionButton icon={PencilSquareIcon} label="Nickname" />
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Monthly limit:</span>
                <span className="text-white font-medium">$4,000.00</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Posted</span>
                  <span className="text-white">- $3,215.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Pending</span>
                  <span className="text-white">- $300.42</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Available to spend</span>
                  <span className="text-emerald-400 font-medium">$484.58</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Card type</span>
                  <span className="text-white">Physical Credit</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Merchant categories</span>
                  <div className="flex gap-2">
                    <SiAmericanairlines className="w-5 h-5 text-gray-400" />
                    <SiMarriott className="w-5 h-5 text-gray-400" />
                    <SiBritishairways className="w-5 h-5 text-gray-400" />
                    <SiHilton className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

