"use client"
import { motion } from "framer-motion"
import { StaysHero } from "@/app/components/stays/stays-hero"
import { StaysFeatures } from "@/app/components/stays/stays-features"
import { StaysBooking } from "@/app/components/stays/stays-booking"
import { StaysGallery } from "@/app/components/stays/stays-gallery"
import { StaysTestimonials } from "@/app/components/stays/stays-testimonials"
import { StaysCTA } from "@/app/components/stays/stays-cta"

export default function StaysPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <StaysHero />
        <StaysFeatures />
        <StaysBooking />
        <StaysGallery />
        <StaysTestimonials />
        <StaysCTA />
      </motion.div>
    </div>
  )
}

