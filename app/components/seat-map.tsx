"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import * as Tooltip from "@radix-ui/react-tooltip"
import * as Dialog from "@radix-ui/react-dialog"
import { cn } from "@/app/lib/utils"
import { X } from "lucide-react"

type SeatType = "space-one" | "space-plus" | "space" | "standard"
type SeatStatus = "available" | "unavailable" | "selected"

interface Seat {
  id: string
  type: SeatType
  price: number
  status: SeatStatus
}

const generateSeats = (): Seat[][] => {
  const rows = 11
  const seatsPerRow = 6 // A-F

  return Array.from({ length: rows }, (_, rowIndex) => {
    return Array.from({ length: seatsPerRow }, (_, seatIndex) => {
      const seatLetter = String.fromCharCode(65 + seatIndex)
      const seatId = `${rowIndex + 1}${seatLetter}`

      let type: SeatType = "standard"
      let price = 19

      if (rowIndex === 0) {
        type = "space-one"
        price = 25
      } else if (rowIndex < 4) {
        type = "space-plus"
        price = 21
      } else if (rowIndex < 6) {
        type = "space"
        price = 20
      }

      const unavailableSeats = ["3B", "3E", "5A", "5F", "6E", "10B"]
      const status = unavailableSeats.includes(seatId) ? "unavailable" : "available"

      return { id: seatId, type, price, status }
    })
  })
}

const seatVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.02,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
}

export const SeatMap = () => {
  const [seats, setSeats] = useState(generateSeats())
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === "unavailable") return

    setSeats((prev) =>
      prev.map((row) =>
        row.map((s) => ({
          ...s,
          status:
            s.id === seat.id
              ? s.status === "selected"
                ? "available"
                : "selected"
              : s.status === "selected"
                ? "available"
                : s.status,
        })),
      ),
    )
    setSelectedSeat(seat.status === "selected" ? null : seat.id)
  }

  const handleConfirm = () => {
    setIsDialogOpen(true)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        {/* Route selector */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center">
            <span className="font-medium">San Francisco (SFO) → New York City (NYC)</span>
            <span>1/1</span>
          </div>
        </motion.div>

        {/* Seat categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              type: "space-one",
              label: "Space One",
              price: "$24.93",
              desc: "In the first row, with priority boarding and 20% more space.",
            },
            {
              type: "space-plus",
              label: "Space Plus",
              price: "$18.95 - $21",
              desc: "Between rows 2 and 4, with priority boarding and 10% more space.",
            },
            { type: "space", label: "Space", price: "$20", desc: "20% more room." },
            {
              type: "standard",
              label: "Standard Seat",
              price: "$19",
              desc: "Choose your favorite seat.",
            },
          ].map((category, index) => (
            <motion.div
              key={category.type}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700"
            >
              <div
                className={cn(
                  "w-6 h-6 rounded mt-1",
                  category.type === "space-one" && "bg-emerald-600",
                  category.type === "space-plus" && "bg-emerald-500",
                  category.type === "space" && "bg-teal-500",
                  category.type === "standard" && "bg-teal-400",
                )}
              />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900 dark:text-white">{category.label}</span>
                  <span className="text-sm text-emerald-600 dark:text-emerald-400">{category.price}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{category.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seat map */}
        <div className="relative bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
          <div className="grid grid-cols-6 gap-2">
            {seats.map((row, rowIndex) =>
              row.map((seat, seatIndex) => (
                <Tooltip.Provider key={seat.id}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <motion.button
                        custom={rowIndex * 6 + seatIndex}
                        variants={seatVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => handleSeatClick(seat)}
                        disabled={seat.status === "unavailable"}
                        className={cn(
                          "aspect-square rounded-lg p-2 text-sm font-medium transition-colors shadow-sm",
                          seat.status === "unavailable" && "bg-gray-200 dark:bg-gray-600 cursor-not-allowed",
                          seat.status === "available" &&
                            seat.type === "space-one" &&
                            "bg-emerald-600 text-white hover:bg-emerald-700",
                          seat.status === "available" &&
                            seat.type === "space-plus" &&
                            "bg-emerald-500 text-white hover:bg-emerald-600",
                          seat.status === "available" &&
                            seat.type === "space" &&
                            "bg-teal-500 text-white hover:bg-teal-600",
                          seat.status === "available" &&
                            seat.type === "standard" &&
                            "bg-teal-400 text-white hover:bg-teal-500",
                          seat.status === "selected" &&
                            "ring-2 ring-offset-2 ring-emerald-500 bg-emerald-600 text-white",
                        )}
                      >
                        {seat.id}
                      </motion.button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="bg-white dark:bg-gray-800 text-sm px-3 py-2 rounded-lg shadow-lg"
                        sideOffset={5}
                      >
                        Seat {seat.id}: ${seat.price}
                        <Tooltip.Arrow className="fill-white dark:fill-gray-800" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              )),
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium"
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleConfirm}
            disabled={!selectedSeat}
            className={cn(
              "px-6 py-2 rounded-full font-medium transition-colors shadow-md",
              selectedSeat
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700"
                : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed",
            )}
          >
            Confirm Selection
          </motion.button>
        </div>
      </motion.div>

      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-md">
            <Dialog.Title className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Confirm Your Seat
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 dark:text-gray-300 mb-6">
              You have selected seat {selectedSeat}. Would you like to proceed with this selection?
            </Dialog.Description>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              >
                Confirm
              </button>
            </div>
            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

