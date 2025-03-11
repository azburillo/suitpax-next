import Image from "next/image"

interface DashMockupProps {
  imageSrc?: string
  altText?: string
}

export function DashMockup({
  imageSrc = "https://api.microlink.io/?url=https%3A%2F%2Fsuitpax.com%2Fenterprise&screenshot=true&embed=screenshot.url",
  altText = "Suitpax Dash Preview",
}: DashMockupProps) {
  return (
    <div className="relative mt-4">
      <div className="mx-auto w-full max-w-5xl px-7 lg:px-8">
        <div className="mt-16 flow-root sm:mt-20">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
                      
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={altText}
              width={1920}
              height={1080}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

