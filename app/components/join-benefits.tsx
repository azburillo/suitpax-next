"use client"

import { InvoiceGlassCard } from "./invoice-glass-card"
import { InvoiceDashboard } from "./invoice-dashboard"

export function JoinBenefits() {
  return (
    <div className="w-full bg-transparent py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <InvoiceGlassCard />
            <InvoiceDashboard />
          </div>
        </div>
      </div>
    </div>
  )
}

