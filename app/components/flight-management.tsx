"use client"

import { motion } from "framer-motion"
import { CalendarDaysIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Armchair, MessageSquare } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const ActionButton = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
  >
    <Icon className="w-5 h-5 text-gray-600" />
    <span className="text-gray-800 font-medium">{label}</span>
  </motion.button>
)

const FlightCard = () => (
  <Card className="w-full bg-white p-6 shadow-lg">
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Image
          src="https://cdn.simpleicons.org/aireuropa/005EB8"
          alt="Air Europa"
          width={32}
          height={32}
          className="rounded"
        />
        <span className="font-medium text-gray-800">Air Europa</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">MAD</div>
          <div className="text-xl text-gray-600">15:30</div>
        </div>

        <div className="flex-1 px-4 text-center">
          <div className="relative">
            <div className="border-t-2 border-dashed border-gray-300 w-full absolute top-1/2 -translate-y-1/2" />
            <div className="w-5 h-5 bg-emerald-600 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90"></div>
          </div>
          <div className="text-sm text-gray-500 mt-2">8 h 15 m</div>
        </div>

        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">JFK</div>
          <div className="text-xl text-gray-600">17:45</div>
        </div>
      </div>
    </div>
  </Card>
)

export function FlightManagement() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-emerald-950 rounded-full mx-auto mb-8 flex items-center justify-center"
          >
            <MessageSquare className="w-8 h-8 text-emerald-50" /> {/*Corrected import and usage*/}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Take control of your journey</h2>
            <p className="text-xl text-gray-600 mb-12">
              With just one click, your team can book, modify, or cancel reservations on their own.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
          >
            <ActionButton icon={ArrowRightIcon} label="Change flight" />
            <ActionButton icon={XMarkIcon} label="Cancel flight" />
            <ActionButton icon={Armchair} label="Select seat" />
            <ActionButton icon={CalendarDaysIcon} label="Add to calendar" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">My trip</h3>
            <FlightCard />
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-16 h-16 bg-emerald-950 rounded-full mx-auto flex items-center justify-center"
        >
          <MessageSquare className="w-8 h-8 text-emerald-50" />
        </motion.div>
      </div>
    </section>
  )
}

