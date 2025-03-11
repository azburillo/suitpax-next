"use client"
import { Card, CardContent } from "@/app/components/ui/card"
import { Plane } from "lucide-react"

export function FinInvoice() {
  return (
    <Card className="relative overflow-hidden border-none bg-gradient-to-b from-neutral-900 to-neutral-800">
      <CardContent className="p-6">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="relative z-10 text-white">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Plane className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Suitpax Travel</h3>
                <p className="text-sm text-gray-400">via authorized partner</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-white">Invoice</h2>
              <p className="text-sm text-gray-400">SPX-1138</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Invoice to</h4>
                <div className="text-white">
                  <p className="font-medium">John Smith</p>
                  <p>123 Travel Street</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="text-right">
                <div className="space-y-1">
                  <div className="flex justify-between text-gray-400">
                    <span>Invoice date</span>
                    <span className="text-white">June 28, 2024</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Due date</span>
                    <span className="text-white">July 12, 2024</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Booking ref</span>
                    <span className="text-white">BK-2024-0568</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 text-sm">
                    <th className="text-left pb-4">Service</th>
                    <th className="text-center pb-4">Passengers</th>
                    <th className="text-center pb-4">VAT</th>
                    <th className="text-right pb-4">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr>
                    <td className="py-2">First Class Flight</td>
                    <td className="text-center">2</td>
                    <td className="text-center">20%</td>
                    <td className="text-right">$3,800</td>
                  </tr>
                  <tr>
                    <td className="py-2">Airport Lounge Access</td>
                    <td className="text-center">2</td>
                    <td className="text-center">20%</td>
                    <td className="text-right">$200</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <div className="space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white">$4,000</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>VAT (20%)</span>
                  <span className="text-white">$800</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Discount</span>
                  <span className="text-white">-$300</span>
                </div>
                <div className="flex justify-between text-xl font-semibold pt-2">
                  <span className="text-gray-400">Total</span>
                  <span className="text-white">$4,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

