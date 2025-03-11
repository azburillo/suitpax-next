import type { Metadata } from "next"
import WhySuitpaxPage from "./why-suitpax-client"

export const metadata: Metadata = {
  title: "Why Suitpax | The Intelligent Travel Management Platform",
  description:
    "Discover why Suitpax is the leading choice for modern travel management. AI-powered solutions that transform how businesses and travelers operate.",
  openGraph: {
    title: "Why Suitpax | The Intelligent Travel Management Platform",
    description:
      "Discover why Suitpax is the leading choice for modern travel management. AI-powered solutions that transform how businesses and travelers operate.",
    images: [
      {
        url: "https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/suitpax-art-tech/openart-image_swyVZVu__1738399619340_raw-twjfvulAdbkFblGcNFbPQsMkPGSEto.webp",
        width: 1200,
        height: 630,
        alt: "Why Suitpax",
      },
    ],
  },
}

export default function Page() {
  return <WhySuitpaxPage />
}

