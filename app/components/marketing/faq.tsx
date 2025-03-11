"use client"

import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion"
import { Card } from "@/app/components/ui/card"
import { motion } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Card className="w-full max-w-3xl mx-auto mt-8 p-6 bg-white/80 backdrop-blur-xl border border-gray-200">
        <h2 className="text-base font-semibold text-center mb-4 text-emerald-950 tracking-tighter">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
              <AccordionTrigger className="text-left text-xs text-emerald-950 transition-colors py-2">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs text-gray-600 pb-2">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </motion.div>
  )
}

export default FAQ

