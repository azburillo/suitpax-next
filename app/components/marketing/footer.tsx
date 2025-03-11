import Link from "next/link"
import Image from "next/image"
import { FaLinkedin, FaGithub, FaInstagram, FaProductHunt, FaExternalLinkAlt } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { SiG2 } from "react-icons/si"
import { Card } from "@/app/components/ui/card"
import { Newsletter } from "@/app/components/newsletter"
import { FaHeadset, FaGlobe, FaQuestionCircle } from "react-icons/fa"

const footerLinks = {
  Platform: [
    { name: "Travel Software", href: "/platform/travel-software" },
    { name: "Flight Booking", href: "/platform/flight-booking" },
    { name: "Expense Management", href: "/platform/expense-management" },
    { name: "Airport VIP Lounge", href: "/platform/airport-vip-lounge" },
    { name: "Corporate Software", href: "/platform/corporate-software" },
    { name: "AI Agents", href: "/ai-agents" },
    { name: "Integrations", href: "/integrations" },
    { name: "Pricing", href: "/pricing" },
  ],
  Resources: [
    { name: "Documentation", href: "/docs" },
    { name: "API", href: "/api" },
    { name: "Academy", href: "/resources/academy" },
    { name: "Blog", href: "/blog" },
    { name: "System Status", href: "https://status.suitpax.com", external: true },
    { name: "Developer Hub", href: "https://suitpax.gitbook.io/docs", external: true },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Partners", href: "/partners" },
    { name: "Manifesto", href: "/manifesto" },
    { name: "Careers", href: "/careers" },
    { name: "Changelog", href: "/changelog" },
    { name: "Press", href: "/press" },
    { name: "Dealroom", href: "https://app.dealroom.co/companies/suitpax", external: true },
    { name: "Subprocessors", href: "/company/subprocessors", external: true },
    { name: "Training", href: "/company/training" },
  ],
  Legal: [
    { name: "Privacy", href: "/legal/privacy" },
    { name: "Terms", href: "/legal/terms" },
    { name: "Cookies", href: "/legal/cookies" },
    { name: "Compliance", href: "/legal/compliance" },
    { name: "AI Policy", href: "/legal/ai-policy" },
    { name: "Modern Slavery Statement", href: "/legal/modern-slavery-statement" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-200 text-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col">
              <Image
                src="https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/logos/suitpax-emerald-logo-fpzOH9luGpDDRIky1nse11mXHjn01V.webp"
                alt="Suitpax"
                width={170}
                height={35}
                className="h-7 w-auto"
              />
            </div>
            <iframe
              src="https://status.suitpax.com/badge?theme=light"
              width="240"
              height="30"
              frameBorder="4"
              scrolling="no"
              style={{ colorScheme: "normal" }}
              title="Suitpax System Status"
              aria-label="Suitpax System Status"
            />
          </div>
        </div>

        {/* Unified vertical footer links for all screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="text-sm">
              <h3 className="font-semibold mb-3 text-md">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-black transition-colors flex items-center gap-2"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.name}
                      {link.name === "System Status" && (
                        <span className="inline-block w-2 h-2 bg-emerald-800 rounded-full animate-pulse" />
                      )}
                      {link.external && <FaExternalLinkAlt className="text-xs text-gray-500" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section moved above the card */}
        <div className="mb-8">
          <Newsletter />
        </div>

        {/* Enhanced Info Section */}
        <Card className="rounded-lg border border-gray-300 shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="font-semibold text-sm mb-4 flex items-center">
                <FaQuestionCircle size={14} className="mr-2 text-emerald-950" /> Why Suitpax?
              </h3>
              <p className="text-sm text-left text-gray-600">
                Subscribe to our newsletter to receive the latest updates, travel insights, and exclusive offers
                directly to your inbox.
              </p>

              {/* Trust badges moved from legal section */}
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="https://slashdot.org/software/p/Suitpax/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/logos/users-love-us-x856RRy2ExjYWv9AbdLbw4REjjkBrK.svg"
                    alt="Slashdot"
                    width={80}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                <Link
                  href="https://sourceforge.net/software/product/Suitpax/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/logos/users-love-us-new-black%20%281%29-m0YOgxMfAubYvkTIjWwxz4Hu1ZKUjD.svg"
                    alt="SourceForge"
                    width={80}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                <Link href="https://www.g2.com/products/suitpax/reviews" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://ny10xbvnsvd5lllr.public.blob.vercel-storage.com/logos/customers-love-us-black%20%281%29-lsXxmtptboc2g5yUh5iNOiyhfAH64F.svg"
                    alt="Customers Love Us Logo G2"
                    width={80}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-xs mb-4 flex items-center">
                    <FaHeadset size={12} className="mr-2 text-emerald-950" /> Support
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>24/7 Customer Support</li>
                    <li>AI Travel Agent</li>
                    <li>Booking Help</li>
                    <li>Technical Support</li>
                  </ul>
                </div>

                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-xs mb-4 flex items-center">
                    <FaGlobe size={12} className="mr-2 text-emerald-950" /> Global Presence
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>Americas</li>
                    <li>Europe</li>
                    <li>Asia Pacific</li>
                    <li>Middle East & Africa</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="pt-7">
          <Card className="p-4 bg-gray-300 text-emerald-950 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
              <div className="text-xs mb-4 sm:mb-0">
                <p>©{new Date().getFullYear()} Suitpax. All rights reserved.</p>
                <p className="text-gray-600">
                  "Suitpax" and logo are registered trademarks of the company. Suitpax trademarks and brands are
                  registered with WIPO and EUIPO.
                </p>
              </div>
              <div className="flex space-x-6">
                <Link href="https://instagram.com/suitpax" className="hover:text-black transition-colors">
                  <FaInstagram size={16} aria-label="Suitpax on Instagram" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://x.com/suitpax" className="hover:text-black transition-colors">
                  <FaXTwitter size={16} aria-label="Suitpax on X (Twitter)" />
                  <span className="sr-only">X (Twitter)</span>
                </Link>
                <Link href="https://linkedin.com/company/suitpax" className="hover:text-black transition-colors">
                  <FaLinkedin size={16} aria-label="Suitpax on LinkedIn" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="https://github.com/suitpax" className="hover:text-black transition-colors">
                  <FaGithub size={16} aria-label="Suitpax on GitHub" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.producthunt.com/products/suitpax-2"
                  className="hover:text-black transition-colors"
                >
                  <FaProductHunt size={16} aria-label="Suitpax on Product Hunt" />
                  <span className="sr-only">Product Hunt</span>
                </Link>
                <Link href="https://www.g2.com/products/suitpax/reviews" className="hover:text-black transition-colors">
                  <SiG2 size={16} aria-label="Suitpax on G2" />
                  <span className="sr-only">G2</span>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </footer>
  )
}

