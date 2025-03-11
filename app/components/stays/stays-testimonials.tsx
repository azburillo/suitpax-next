"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    content: "The most luxurious stay I've ever experienced. Absolutely phenomenal!",
    author: "Emma Thompson",
    role: "Travel Blogger",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    content: "Impeccable service and stunning accommodations. Will definitely return!",
    author: "Michael Chen",
    role: "Business Executive",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    content: "A perfect blend of comfort and elegance. Highly recommended!",
    author: "Sophie Martin",
    role: "Lifestyle Influencer",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
]

export function StaysTestimonials() {
  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <p className="text-gray-600 mb-4">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

