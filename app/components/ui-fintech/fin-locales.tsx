"use client"
import { Card, CardContent } from "@/app/components/ui/card"
import { ShoppingCart } from "lucide-react"
import { Switch } from "@/app/components/ui/switch"

export function FinLocales() {
  return (
    <Card className="relative overflow-hidden border-none bg-gradient-to-b from-neutral-900 to-neutral-800">
      <CardContent className="p-6">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="relative z-10 text-white">
          <div className="flex items-center space-x-3 mb-6">
            <ShoppingCart className="h-5 w-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-white">Available Regions</h3>
          </div>

          <div className="space-y-3">
            {locales.map((locale, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div className="flex items-center space-x-3">
                  <img
                    src={`/flags/${locale.code.toLowerCase()}.svg`}
                    alt={locale.country}
                    className="h-5 w-7 rounded"
                  />
                  <div>
                    <p className="text-white font-medium">{locale.country}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span className="px-2 py-0.5 rounded bg-white/10">{locale.currency}</span>
                      <span>Price = {locale.price}</span>
                    </div>
                  </div>
                </div>
                <Switch />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const locales = [
  {
    country: "United States",
    code: "US",
    currency: "USD",
    price: "999 USD",
  },
  {
    country: "United Kingdom",
    code: "GB",
    currency: "GBP",
    price: "799 GBP",
  },
  {
    country: "European Union",
    code: "EU",
    currency: "EUR",
    price: "899 EUR",
  },
  {
    country: "Japan",
    code: "JP",
    currency: "JPY",
    price: "99,999 JPY",
  },
]

