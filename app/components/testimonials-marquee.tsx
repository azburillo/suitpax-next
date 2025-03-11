"use client"
import { Marquee } from "@/app/components/ui/marquee"
import { Card, CardContent } from "@/app/components/ui/card"
import { StarIcon } from "@heroicons/react/24/solid"

const testimonials = [
  {
    name: "Gustavo C.",
    role: "Community Manager",
    content:
      "We needed an integrated community solution for our e-commerce product and chose Suitpax after thorough research. Using SSO, API, and widgets, we seamlessly connected our user base and integrated the community into our customer journey.",
    rating: 5,
  },
  {
    name: "Laverne C.",
    role: "Communications Specialist",
    content:
      "Powerful widgets and integration options made it incredibly easy to set up our travel management system. The support team was exceptional in helping us customize the solution to our needs.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    role: "Travel Coordinator",
    content:
      "The platform's flexibility and robust feature set have transformed how we handle corporate travel. The integration capabilities are outstanding.",
    rating: 5,
  },
]

export function TestimonialsMarquee() {
  return (
    <div className="py-12 bg-white">
      <Marquee className="py-8" pauseOnHover>
        {testimonials.map((testimonial, idx) => (
          <Card key={idx} className="mx-4 w-[400px] bg-gray-50 shadow-sm border-gray-100">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <div className="flex">
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-emerald-500" />
                    ))}
                </div>
              </div>
              <div className="relative">
                <span className="absolute -left-2 -top-2 text-4xl text-emerald-500/80">"</span>
                <p className="pt-4 text-gray-700 text-sm leading-relaxed">{testimonial.content}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </Marquee>
    </div>
  )
}

