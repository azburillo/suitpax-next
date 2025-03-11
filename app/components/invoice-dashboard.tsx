"use client"

import { useState } from "react"
import { FileText, AlertTriangle, CreditCard, CheckCircle } from "lucide-react"
import { Card } from "@/app/components/ui/card"
import { AnimatedCursor } from "@/app/components/ui/animated-cursor"

export const InvoiceDashboard = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeInvoice, setActiveInvoice] = useState<number | null>(null)
  const [activeElement, setActiveElement] = useState<string | null>(null)

  const invoices = [
    {
      company: "Sky Hotels",
      id: "inv5400",
      amount: 899.99,
      currency: "EUR",
      dateIssued: "29/01/2024",
      status: "warning",
    },
    {
      company: "AirFlex",
      id: "inv5401",
      amount: 1200.0,
      currency: "EUR",
      dateIssued: "28/01/2024",
      status: "normal",
    },
    {
      company: "Global Transfer",
      id: "inv5402",
      amount: 450.0,
      currency: "USD",
      dateIssued: "27/01/2024",
      status: "normal",
    },
  ]

  // Define cursor positions for different sections with more detailed points
  const cursorPositions = [
    // Card payments section
    { top: "12%", left: "15%" }, // Card Payments title
    { top: "18%", left: "20%" }, // Active Cards count

    // Expenses section
    { top: "12%", left: "75%" }, // Expenses title
    { top: "18%", left: "75%" }, // Monthly expense amount

    // Invoice header
    { top: "32%", left: "15%" }, // Invoice Inbox title

    // Invoice 1 - Sky Hotels
    { top: "42%", left: "20%" }, // Company name
    { top: "42%", left: "30%" }, // Invoice ID
    { top: "42%", left: "75%" }, // Amount
    { top: "42%", left: "85%" }, // Date

    // Invoice 2 - AirFlex
    { top: "52%", left: "20%" }, // Company name
    { top: "52%", left: "30%" }, // Invoice ID
    { top: "52%", left: "75%" }, // Amount
    { top: "52%", left: "85%" }, // Date

    // Invoice 3 - Global Transfer
    { top: "62%", left: "20%" }, // Company name
    { top: "62%", left: "30%" }, // Invoice ID
    { top: "62%", left: "75%" }, // Amount
    { top: "62%", left: "85%" }, // Date

    // Footer items
    { top: "85%", left: "15%" }, // PCI compliance
    { top: "85%", left: "85%" }, // ISO certification
  ]

  // Map detailed elements to cursor positions
  const elementMap = [
    "cards-title",
    "cards-count",
    "expenses-title",
    "expenses-amount",
    "invoices-title",
    "invoice1-company",
    "invoice1-id",
    "invoice1-amount",
    "invoice1-date",
    "invoice2-company",
    "invoice2-id",
    "invoice2-amount",
    "invoice2-date",
    "invoice3-company",
    "invoice3-id",
    "invoice3-amount",
    "invoice3-date",
    "pci",
    "iso",
  ]

  // Helper function to determine which main section is active based on the current position
  const getMainSection = (positionIndex: number) => {
    if (positionIndex < 2) return "cards"
    if (positionIndex < 4) return "expenses"
    if (positionIndex < 5) return "invoices"
    if (positionIndex < 9) return "invoice1"
    if (positionIndex < 13) return "invoice2"
    if (positionIndex < 17) return "invoice3"
    if (positionIndex === 17) return "pci"
    return "iso"
  }

  // Helper function to determine which invoice is active based on the current position
  const getActiveInvoice = (positionIndex: number) => {
    if (positionIndex >= 5 && positionIndex < 9) return 0
    if (positionIndex >= 9 && positionIndex < 13) return 1
    if (positionIndex >= 13 && positionIndex < 17) return 2
    return null
  }

  return (
    <Card className="relative w-full overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black shadow-xl">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div
            className={`flex-1 bg-gray-800/50 p-3 rounded-lg ${activeSection === "cards" ? "ring-1 ring-emerald-500/30" : ""} transition-all duration-300`}
          >
            <h3
              className={`text-sm font-medium mb-1 ${activeElement === "cards-title" ? "text-emerald-400" : "text-white"} transition-colors duration-300`}
            >
              Card Payments
            </h3>
            <div
              className={`flex items-center gap-2 ${activeElement === "cards-count" ? "text-emerald-400" : ""} transition-colors duration-300`}
            >
              <CreditCard className="text-emerald-500" size={14} />
              <span className="text-xs text-gray-400">Active Cards: 3</span>
            </div>
          </div>
          <div
            className={`flex-1 bg-gray-800/50 p-3 rounded-lg ${activeSection === "expenses" ? "ring-1 ring-emerald-500/30" : ""} transition-all duration-300`}
          >
            <h3
              className={`text-sm font-medium mb-1 ${activeElement === "expenses-title" ? "text-emerald-400" : "text-white"} transition-colors duration-300`}
            >
              Expenses
            </h3>
            <span
              className={`text-xs ${activeElement === "expenses-amount" ? "text-emerald-400" : "text-gray-400"} transition-colors duration-300`}
            >
              €2,549.99 this month
            </span>
          </div>
        </div>

        <div
          className={`bg-gray-800/50 rounded-lg p-4 ${activeSection === "invoices" || activeSection?.includes("invoice") ? "ring-1 ring-emerald-500/30" : ""} transition-all duration-300`}
        >
          <h3
            className={`text-sm font-medium mb-3 ${activeElement === "invoices-title" ? "text-emerald-400" : "text-white"} transition-colors duration-300`}
          >
            Invoice Inbox
          </h3>
          <div className="space-y-2">
            {invoices.map((invoice, index) => (
              <div
                key={invoice.id}
                className={`flex items-center justify-between p-2 hover:bg-gray-800 rounded-lg transition-colors ${activeInvoice === index ? "bg-gray-800/80" : ""}`}
              >
                <div className="flex items-center gap-2">
                  {invoice.status === "warning" ? (
                    <AlertTriangle
                      className={`${activeElement === `invoice${index + 1}-company` ? "text-emerald-400" : "text-amber-500"} transition-colors duration-300`}
                      size={16}
                    />
                  ) : (
                    <FileText
                      className={`${activeElement === `invoice${index + 1}-company` ? "text-emerald-400" : "text-gray-400"} transition-colors duration-300`}
                      size={16}
                    />
                  )}
                  <div>
                    <p
                      className={`text-xs font-medium ${activeElement === `invoice${index + 1}-company` ? "text-emerald-400" : "text-white"} transition-colors duration-300`}
                    >
                      {invoice.company}
                    </p>
                    <p
                      className={`text-[10px] ${activeElement === `invoice${index + 1}-id` ? "text-emerald-400" : "text-gray-500"} transition-colors duration-300`}
                    >
                      {invoice.id}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-xs font-medium ${activeElement === `invoice${index + 1}-amount` ? "text-emerald-400" : "text-white"} transition-colors duration-300`}
                  >
                    {invoice.amount} {invoice.currency}
                  </p>
                  <p
                    className={`text-[10px] ${activeElement === `invoice${index + 1}-date` ? "text-emerald-400" : "text-gray-500"} transition-colors duration-300`}
                  >
                    {invoice.dateIssued}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div
            className={`flex items-center gap-1.5 ${activeSection === "pci" ? "text-emerald-400" : ""} transition-colors duration-300`}
          >
            <CheckCircle className="text-emerald-500" size={14} />
            <span className="text-xs text-gray-300">PCI DSS Compliant</span>
          </div>
          <div className={activeSection === "iso" ? "scale-110" : "scale-100"}>
            <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full text-[10px] font-medium transition-transform duration-300">
              ISO 27001 Certified
            </span>
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
          // Set the detailed element for specific highlighting
          const element = elementMap[index]
          setActiveElement(element)

          // Set the main section for overall component highlighting
          const mainSection = getMainSection(index)
          setActiveSection(mainSection)

          // Set active invoice if applicable
          const invoiceIndex = getActiveInvoice(index)
          setActiveInvoice(invoiceIndex)
        }}
      />
    </Card>
  )
}

