"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/app/components/ui/card"
import { Check, AlertTriangle, RefreshCw } from "lucide-react"

interface SubscriptionProps {
  amount: string
  plan: string
  interval?: string
  status: "complete" | "threat" | "active"
  paymentMethod: "gpay" | "mastercard" | "ideal" | "applepay"
}

export function SubscriptionCard({ amount, plan, interval, status, paymentMethod }: SubscriptionProps) {
  const getStatusIcon = () => {
    switch (status) {
      case "complete":
        return <Check className="h-4 w-4 text-green-500" />
      case "threat":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "active":
        return <RefreshCw className="h-4 w-4 text-blue-500" />
    }
  }

  const getStatusText = () => {
    switch (status) {
      case "complete":
        return "Complete"
      case "threat":
        return "Threat"
      case "active":
        return "Active sub"
    }
  }

  const getPaymentIcon = () => {
    const className = "h-8 w-8 object-contain"
    switch (paymentMethod) {
      case "gpay":
        return <img src="/gpay-icon.png" alt="Google Pay" className={className} />
      case "mastercard":
        return <img src="/mastercard-icon.png" alt="Mastercard" className={className} />
      case "ideal":
        return <img src="/ideal-icon.png" alt="iDEAL" className={className} />
      case "applepay":
        return <img src="/applepay-icon.png" alt="Apple Pay" className={className} />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden backdrop-blur-lg bg-white/10 border-0 h-full">
        <CardContent className="p-6 flex flex-col justify-between h-full">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-2xl font-bold tracking-tighter text-white">{amount}</p>
              <p className="text-sm text-zinc-400">
                {plan}
                {interval && `, ${interval}`}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5">
                {getStatusIcon()}
                <span className="text-sm text-white">{getStatusText()}</span>
              </div>
              {getPaymentIcon()}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-zinc-400">Next payment</span>
              <span className="text-sm text-white">June 1, 2023</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-zinc-400">Payment method</span>
              <span className="text-sm text-white">{paymentMethod}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

