"use client"

import { useState } from "react"
import { SparklesCore } from "@/app/components/ui/sparkles"
import { Check } from "lucide-react"
import { Card } from "@/app/components/ui/card"
import { AnimatedCursor } from "@/app/components/ui/animated-cursor"

export const InvoiceGlassCard = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Define cursor positions for different sections of the invoice with more detailed points
  const cursorPositions = [
    // Invoice header section
    { top: "10%", left: "15%" }, // Company name
    { top: "15%", left: "15%" }, // Address line 1
    { top: "18%", left: "15%" }, // Address line 2

    // PO Number section
    { top: "10%", left: "85%" }, // PO Number label
    { top: "12%", left: "85%" }, // PO Number value
    { top: "16%", left: "85%" }, // Order date label
    { top: "18%", left: "85%" }, // Order date value

    // Service details section
    { top: "30%", left: "20%" }, // Service label
    { top: "30%", left: "80%" }, // Amount label
    { top: "35%", left: "30%" }, // Business Travel Package
    { top: "35%", left: "80%" }, // €4,999.99

    // Pricing breakdown section
    { top: "50%", left: "20%" }, // Subtotal label
    { top: "50%", left: "80%" }, // Subtotal amount
    { top: "55%", left: "20%" }, // Tax label
    { top: "55%", left: "80%" }, // Tax amount
    { top: "62%", left: "20%" }, // Total label
    { top: "62%", left: "80%" }, // Total amount

    // Tax info section
    { top: "75%", left: "25%" }, // Tax rate info
    { top: "80%", left: "25%" }, // Tax calculation info
  ]

  // Map sections to cursor positions
  const sectionMap = [
    "company",
    "address1",
    "address2",
    "po-label",
    "po-value",
    "date-label",
    "date-value",
    "service-label",
    "amount-label",
    "service-value",
    "amount-value",
    "subtotal-label",
    "subtotal-value",
    "tax-label",
    "tax-value",
    "total-label",
    "total-value",
    "tax-rate",
    "tax-calculation",
  ]

  // Helper function to determine which main section is active based on the current position
  const getMainSection = (positionIndex: number) => {
    if (positionIndex < 3) return "header"
    if (positionIndex < 7) return "po"
    if (positionIndex < 12) return "service"
    if (positionIndex < 14) return "subtotal"
    if (positionIndex < 16) return "tax"
    if (positionIndex < 18) return "total"
    return "taxinfo"
  }

  return (
    <Card className="relative w-full overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black shadow-xl">
      <div className="absolute inset-0 opacity-30">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.4}
          maxSize={1.0}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#10b981"
        />
      </div>

      <div className="relative p-6">
        <div
          className={`flex flex-col sm:flex-row justify-between mb-6 gap-4 ${activeSection === "header" ? "opacity-100" : "opacity-90"} transition-opacity duration-300`}
        >
          <div>
            <h2
              className={`text-sm font-medium ${activeSection === "header" && (activeSection === "company" || activeSection === "header") ? "text-emerald-400" : "text-gray-400"} transition-colors duration-300`}
            >
              INVOICE
            </h2>
            <h3
              className={`text-lg font-bold mt-1 ${activeSection === "company" ? "text-emerald-400" : "text-white"} transition-colors duration-300`}
            >
              Suitpax Travel
            </h3>
            <div className="text-xs text-gray-500 mt-2">
              <p className={activeSection === "address1" ? "text-emerald-400" : ""}>123 Business Avenue</p>
              <p className={activeSection === "address2" ? "text-emerald-400" : ""}>London, UK W1 8XX</p>
            </div>
          </div>
          <div
            className={`text-right ${activeSection === "po" ? "opacity-100" : "opacity-90"} transition-opacity duration-300`}
          >
            <p
              className={`text-xs ${activeSection === "po-label" ? "text-emerald-400" : "text-gray-500"} transition-colors duration-300`}
            >
              PO NUMBER
            </p>
            <p
              className={`text-sm font-medium ${activeSection === "po-value" ? "text-emerald-400" : "text-white"} transition-colors duration-300`}
            >
              SP-554852
            </p>
            <p
              className={`text-xs mt-2 ${activeSection === "date-label" ? "text-emerald-400" : "text-gray-500"} transition-colors duration-300`}
            >
              ORDER DATE
            </p>
            <p
              className={`text-sm font-medium ${activeSection === "date-value" ? "text-emerald-400" : "text-white"} transition-colors duration-300`}
            >
              01/12/2024
            </p>
          </div>
        </div>

        <div
          className={`bg-gray-800/50 rounded-lg p-3 mb-4 ${activeSection === "service" ? "ring-1 ring-emerald-500/30" : ""} transition-all duration-300`}
        >
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span className={activeSection === "service-label" ? "text-emerald-400" : ""}>Service</span>
            <span className={activeSection === "amount-label" ? "text-emerald-400" : ""}>Amount</span>
          </div>
          <div className="flex justify-between text-sm font-medium text-white">
            <span className={activeSection === "service-value" ? "text-emerald-400" : ""}>Business Travel Package</span>
            <span className={activeSection === "amount-value" ? "text-emerald-400" : ""}>€4,999.99</span>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div
            className={`flex justify-between text-gray-400 text-xs ${activeSection === "subtotal" ? "text-emerald-400" : ""} transition-colors duration-300`}
          >
            <span className={activeSection === "subtotal-label" ? "text-emerald-400" : ""}>Subtotal</span>
            <span className={activeSection === "subtotal-value" ? "text-emerald-400" : ""}>€4,999.99</span>
          </div>
          <div
            className={`flex justify-between text-gray-400 text-xs ${activeSection === "tax" ? "text-emerald-400" : ""} transition-colors duration-300`}
          >
            <span className={activeSection === "tax-label" ? "text-emerald-400" : ""}>Tax (21%)</span>
            <span className={activeSection === "tax-value" ? "text-emerald-400" : ""}>€1,050.00</span>
          </div>
          <div
            className={`flex justify-between font-semibold pt-2 border-t border-gray-800 mt-2 ${activeSection === "total" ? "text-emerald-400" : "text-white"} transition-colors duration-300`}
          >
            <span className={activeSection === "total-label" ? "text-emerald-400" : ""}>Total</span>
            <span className={activeSection === "total-value" ? "text-emerald-400" : ""}>€6,049.99</span>
          </div>
        </div>

        <div
          className={`mt-4 bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20 ${activeSection === "taxinfo" ? "bg-emerald-500/20" : ""} transition-all duration-300`}
        >
          <div
            className={`flex items-center gap-2 text-xs mb-1 ${activeSection === "tax-rate" ? "text-emerald-300" : "text-emerald-400"} transition-colors duration-300`}
          >
            <Check className="text-emerald-500" size={14} />
            <span>Tax rate 21% applied</span>
          </div>
          <div
            className={`flex items-center gap-2 text-xs ${activeSection === "tax-calculation" ? "text-emerald-300" : "text-emerald-400"} transition-colors duration-300`}
          >
            <Check className="text-emerald-500" size={14} />
            <span>€1,050.00 tax calculated</span>
          </div>
        </div>
      </div>

      {/* Animated cursor */}
      <AnimatedCursor
        positions={cursorPositions}
        color="silver"
        size={5}
        duration={0.8}
        delay={1.5}
        onPositionChange={(index) => {
          // Set the detailed section for specific highlighting
          const detailedSection = sectionMap[index]

          // Set the main section for overall component highlighting
          const mainSection = getMainSection(index)

          // Update both section states
          setActiveSection(mainSection)
        }}
      />
    </Card>
  )
}

