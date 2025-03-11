"use client"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface LegalNavSelectorProps {
  currentPage: string
}

const legalPages = [
  { name: "Terms of Service", path: "/legal/terms" },
  { name: "Privacy Policy", path: "/legal/privacy" },
  { name: "Cookie Policy", path: "/legal/cookies" },
  { name: "Compliance", path: "/legal/compliance" },
  { name: "Acceptable Use", path: "/legal/acceptable-use" },
  { name: "Modern Slavery", path: "/legal/modern-slavery" },
  { name: "Modern Slavery Statement", path: "/legal/modern-slavery-statement" },
]

export function LegalNavSelector({ currentPage }: LegalNavSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handlePageChange = (path: string) => {
    setIsOpen(false)
    router.push(path)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-emerald-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {currentPage}
          <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {legalPages.map((page) => (
              <button
                key={page.path}
                onClick={() => handlePageChange(page.path)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {page.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

