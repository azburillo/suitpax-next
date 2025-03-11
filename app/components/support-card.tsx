"use client"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls: string[]
}

const AvatarCircles = ({ numPeople, className, avatarUrls }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <Image
          key={index}
          className="h-12 w-12 rounded-full border-2 border-white dark:border-gray-300"
          src={url || "/placeholder.svg"}
          width={40}
          height={40}
          alt={`Avatar ${index + 2}`}
        />
      ))}
      {numPeople > avatarUrls.length && (
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-emerald-950 text-center text-xs font-medium text-white hover:bg-gray-200 dark:border-gray-100 dark:bg-white dark:text-black">
          +{numPeople - avatarUrls.length}
        </div>
      )}
    </div>
  )
}

export default function SupportCard() {
  const avatarUrls = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1732741355821-oo8gWX3NiQpzX0SN7BZqAEShDkTKaO.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1733173245502-OXIsY6wMcdic4XaM1MCrVbL04NTKH5.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/copilot_image_1733258306688-al7HRFAgfd7AqkjrG0Kk6YZLprfWl5.jpeg",
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      className="mt-12"
    >
      <Card className="relative p-8 w-full max-w-lg h-[150px] mx-auto flex flex-col md:flex-row items-center gap-6 bg-gray-300/40 backdrop-blur-md border border-white/20">
        <motion.div
          initial={{ opacity: 0, scale: 2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AvatarCircles avatarUrls={avatarUrls} numPeople={5} />
        </motion.div>
        <div className="text-center md:text-left">
          <motion.h3
            className="text-xl font-medium text-emerald-950"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Need help?
          </motion.h3>
          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Contact our 24/7 support team at{" "}
            <a href="mailto:hello@suitpax.com" className="text-emerald-900">
              center@suitpax.com
            </a>{" "}
            or check our{" "}
            <Link href="/contact" className="text-emerald-900">
              contact form
            </Link>
            .
          </motion.p>
          <motion.p
            className="text-sm text-gray-400 mt-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            For sales inquiries, reach out to{" "}
            <a href="mailto:sales@suitpax.com" className="text-emerald-950">
              sales@suitpax.com
            </a>
            .
          </motion.p>
        </div>
      </Card>
    </motion.div>
  )
}

