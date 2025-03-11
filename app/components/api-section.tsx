"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { SiTypescript, SiPython, SiRust } from "react-icons/si"
import { useState } from "react"

const CodeBlock = ({ language }: { language: string }) => {
  const code = {
    typescript: `import { verifyKey } from '@unkey/api'

const { result, error } = await verify({
  apiId: "api_123",
  key: "xyz_123"
})

if ( error ) {
  // handle network error
}

if ( !result.valid ) {
  // reject unauthorized request
}

// handle request`,
    python: `from unkey import verify_key

result = verify_key(
    api_id="api_123",
    key="xyz_123"
)

if result.error:
    # handle network error
    pass

if not result.valid:
    # reject unauthorized request
    pass

# handle request`,
    rust: `use unkey::verify_key;

let result = verify_key(
    api_id: "api_123",
    key: "xyz_123"
).await?;

if !result.valid {
    // reject unauthorized request
}

// handle request`,
  }

  return (
    <pre className="p-4 rounded-lg bg-[#111111] overflow-x-auto">
      <code className="text-sm font-mono">
        {code[language as keyof typeof code].split("\n").map((line, i) => (
          <div key={i} className="table-row">
            <span className="table-cell pr-4 text-gray-600 select-none">{i + 1}</span>
            <span className="table-cell whitespace-pre">
              {line.split(" ").map((part, j) => {
                if (part.match(/^(import|from|const|await|if|use|let)$/)) {
                  return (
                    <span key={j} className="text-purple-400">
                      {part}{" "}
                    </span>
                  )
                }
                if (part.match(/^(verifyKey|verify_key)$/)) {
                  return (
                    <span key={j} className="text-red-400">
                      {part}{" "}
                    </span>
                  )
                }
                if (part.match(/"([^"]*)"/) || part.match(/'([^']*)'/) || part.match(/`([^`]*)`/)) {
                  return (
                    <span key={j} className="text-green-400">
                      {part}{" "}
                    </span>
                  )
                }
                if (part.includes("//") || part.includes("#")) {
                  return (
                    <span key={j} className="text-gray-500">
                      {part}{" "}
                    </span>
                  )
                }
                return <span key={j}>{part} </span>
              })}
            </span>
          </div>
        ))}
      </code>
    </pre>
  )
}

export function APISection() {
  const [activeTab, setActiveTab] = useState("typescript")

  return (
    <section className="w-full bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Any language, any framework,{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                always secure
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Add authentication to your APIs in a few lines of code. We provide SDKs for a range of languages and
              frameworks, and an intuitive REST API with public OpenAPI spec.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-2 text-sm sm:text-base"
                asChild
              >
                <Link href="/get-started">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="text-white border-white/20 hover:bg-white/10 rounded-full px-6 py-2 text-sm sm:text-base"
                asChild
              >
                <Link href="/docs">
                  Visit the docs
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden bg-black border border-gray-800"
          >
            <div className="flex border-b border-gray-800">
              <button
                onClick={() => setActiveTab("typescript")}
                className={`flex items-center gap-2 px-4 py-2 text-sm ${
                  activeTab === "typescript" ? "text-white bg-gray-800" : "text-gray-400 hover:text-white"
                }`}
              >
                <SiTypescript className="h-4 w-4" />
                TypeScript
              </button>
              <button
                onClick={() => setActiveTab("python")}
                className={`flex items-center gap-2 px-4 py-2 text-sm ${
                  activeTab === "python" ? "text-white bg-gray-800" : "text-gray-400 hover:text-white"
                }`}
              >
                <SiPython className="h-4 w-4" />
                Python
              </button>
              <button
                onClick={() => setActiveTab("rust")}
                className={`flex items-center gap-2 px-4 py-2 text-sm ${
                  activeTab === "rust" ? "text-white bg-gray-800" : "text-gray-400 hover:text-white"
                }`}
              >
                <SiRust className="h-4 w-4" />
                Rust
              </button>
            </div>
            <div className="p-4">
              <CodeBlock language={activeTab} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

