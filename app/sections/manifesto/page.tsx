import type { Metadata } from "next"
import ManifestoClientPage from "./ManifestoClientPage"

export const metadata: Metadata = {
  title: "Suitpax - Manifesto",
  description: "The future of corporate travel management is here.",
}

export default function ManifestoPage() {
  return <ManifestoClientPage />
}

