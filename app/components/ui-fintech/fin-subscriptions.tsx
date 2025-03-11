"use client"
import { Card, CardContent } from "@/app/components/ui/card"
import { Check, AlertTriangle, RefreshCw } from "lucide-react"

export function FinSubscriptions() {
  return (
    <Card className="relative overflow-hidden border-none bg-gradient-to-b from-neutral-900 to-neutral-800">
      <CardContent className="p-6">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="relative z-10 space-y-4">
          {subscriptionItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-white">${item.price}</span>
                  <span className="text-gray-400">{item.type}</span>
                </div>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>

              <div className="flex items-center space-x-3">
                <StatusBadge status={item.status} />
                <PaymentIcon type={item.payment} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

const subscriptionItems = [
  {
    price: "999",
    type: "Business",
    description: "Unlimited travel, lifetime",
    status: "complete",
    payment: "google",
  },
  {
    price: "499",
    type: "Premium",
    description: "Premium benefits, annual",
    status: "threat",
    payment: "mastercard",
  },
  {
    price: "199",
    type: "Standard",
    description: "Basic features, monthly",
    status: "active",
    payment: "apple",
  },
]

function StatusBadge({ status }: { status: string }) {
  const styles = {
    complete: "bg-green-500/20 text-green-400",
    threat: "bg-red-500/20 text-red-400",
    active: "bg-blue-500/20 text-blue-400",
  }

  const icons = {
    complete: <Check className="h-4 w-4" />,
    threat: <AlertTriangle className="h-4 w-4" />,
    active: <RefreshCw className="h-4 w-4" />,
  }

  return (
    <div className={`px-3 py-1 rounded-full flex items-center space-x-1 ${styles[status]}`}>
      {icons[status]}
      <span className="text-sm capitalize">{status}</span>
    </div>
  )
}

function PaymentIcon({ type }: { type: string }) {
  return (
    <div className="h-8 w-12 rounded bg-white/10 flex items-center justify-center">
      <img src={`/payment-${type}.svg`} alt={type} className="h-5" />
    </div>
  )
}

