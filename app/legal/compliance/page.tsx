import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, FileCheck, Users, Server, BadgeIcon as Certificate } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs"

export const metadata: Metadata = {
  title: "Security & Compliance | Suitpax",
  description: "Learn about Suitpax's commitment to security, data protection, and compliance standards.",
}

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="gap-2 border-gray-200 text-gray-700 hover:bg-gray-50">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Security & Compliance</h1>
          <Tabs defaultValue="/legal/compliance" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-5 bg-gray-100">
              <TabsTrigger value="/legal/terms" className="data-[state=active]:bg-white" href="/legal/terms">
                Terms
              </TabsTrigger>
              <TabsTrigger value="/legal/privacy" className="data-[state=active]:bg-white" href="/legal/privacy">
                Privacy
              </TabsTrigger>
              <TabsTrigger value="/legal/cookies" className="data-[state=active]:bg-white" href="/legal/cookies">
                Cookies
              </TabsTrigger>
              <TabsTrigger value="/legal/compliance" className="data-[state=active]:bg-white" href="/legal/compliance">
                Compliance
              </TabsTrigger>
              <TabsTrigger value="/legal/ai-policy" className="data-[state=active]:bg-white" href="/legal/ai-policy">
                AI Policy
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <p className="text-lg md:text-xl text-gray-600 mb-12 text-center font-medium">Last updated: February 4, 2025</p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-10">
            <h2 className="text-2xl font-semibold text-black mb-6">Our Commitment to Security</h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 font-medium">
              At Suitpax, security is not just a feature—it's the foundation of everything we build. We employ
              industry-leading technologies and practices to protect your data against unauthorized access, disclosure,
              use, and loss.
            </p>
            <p className="text-gray-700 text-sm mb-0">
              Our comprehensive security program is designed to meet the highest standards in the industry, ensuring
              that your travel data remains safe and secure at all times.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-start">
                <Shield className="w-8 h-8 text-emerald-500 flex-shrink-0 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold text-black mb-4">Security Overview</h2>
                  <p className="text-gray-700 text-sm md:text-base mb-6">
                    Suitpax employs industry-leading technologies and practices to protect your data against
                    unauthorized access, disclosure, use, and loss. Our comprehensive security program includes:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <Shield className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-black text-sm mb-1">Advanced Security</h3>
                        <p className="text-xs text-gray-600">
                          Enterprise-grade security measures including encryption at rest and in transit
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <Lock className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-black text-sm mb-1">Access Control</h3>
                        <p className="text-xs text-gray-600">Strict access controls and authentication mechanisms</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <FileCheck className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-black text-sm mb-1">Regular Audits</h3>
                        <p className="text-xs text-gray-600">
                          Continuous security monitoring and regular security audits
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <Users className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-black text-sm mb-1">Team Training</h3>
                        <p className="text-xs text-gray-600">Regular security training for all team members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-start">
                <Server className="w-8 h-8 text-emerald-500 flex-shrink-0 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold text-black mb-4">Infrastructure Security</h2>
                  <p className="text-gray-700 text-sm md:text-base mb-6">
                    Our infrastructure is hosted on secure cloud platforms with SOC 2 Type II certification. We
                    implement:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                      <span className="text-gray-700 text-sm">24/7 infrastructure monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                      <span className="text-gray-700 text-sm">Automated security updates</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                      <span className="text-gray-700 text-sm">Regular vulnerability assessments</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                      <span className="text-gray-700 text-sm">Disaster recovery procedures</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-start">
                <Certificate className="w-8 h-8 text-emerald-500 flex-shrink-0 mr-4" />
                <div>
                  <h2 className="text-xl font-semibold text-black mb-4">Compliance Certifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-black mb-2 text-sm">ISO 27001</h3>
                      <p className="text-xs text-gray-700">
                        Suitpax is certified against ISO 27001, demonstrating our commitment to information security
                        management.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-black mb-2 text-sm">GDPR Compliance</h3>
                      <p className="text-xs text-gray-700">
                        We maintain strict compliance with the General Data Protection Regulation for all European
                        users.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-black mb-2 text-sm">PCI DSS</h3>
                      <p className="text-xs text-gray-700">
                        Our payment processing adheres to the Payment Card Industry Data Security Standard.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-black mb-2 text-sm">SOC 2 Type II</h3>
                      <p className="text-xs text-gray-700">
                        We maintain SOC 2 Type II certification, verifying our controls for security, availability, and
                        confidentiality.
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    To request a copy of our certifications, please contact our security team at{" "}
                    <a href="mailto:security@suitpax.com" className="text-blue-600 hover:underline">
                      security@suitpax.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Data Protection Measures</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold text-xs">
                    1
                  </div>
                  <div>
                    <span className="text-gray-700 text-sm font-medium">Encryption</span>
                    <p className="text-xs text-gray-600 mt-1">
                      All sensitive data is encrypted both in transit and at rest using industry-standard encryption
                      protocols.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold text-xs">
                    2
                  </div>
                  <div>
                    <span className="text-gray-700 text-sm font-medium">Access Controls</span>
                    <p className="text-xs text-gray-600 mt-1">
                      Strict role-based access controls ensure that only authorized personnel can access sensitive
                      information.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold text-xs">
                    3
                  </div>
                  <div>
                    <span className="text-gray-700 text-sm font-medium">Regular Backups</span>
                    <p className="text-xs text-gray-600 mt-1">
                      Automated backup systems ensure data can be recovered in the event of an incident.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Security Practices</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold text-xs">
                    ✓
                  </div>
                  <div>
                    <span className="text-gray-700 text-sm font-medium">Penetration Testing</span>
                    <p className="text-xs text-gray-600 mt-1">
                      Regular penetration tests by independent security firms to identify and address vulnerabilities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold text-xs">
                    ✓
                  </div>
                  <div>
                    <span className="text-gray-700 text-sm font-medium">Security Training</span>
                    <p className="text-xs text-gray-600 mt-1">
                      Comprehensive security awareness training for all employees.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0 font-semibold text-xs">
                    ✓
                  </div>
                  <div>
                    <span className="text-gray-700 text-sm font-medium">Incident Response</span>
                    <p className="text-xs text-gray-600 mt-1">
                      Documented incident response procedures to quickly address security events.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-blue-50 rounded-xl shadow-sm border border-blue-100 p-8">
            <h3 className="text-xl font-semibold text-black mb-4">Contact Information</h3>
            <p className="text-gray-700 text-base mb-4">
              For security-related inquiries or to report security concerns, please contact our security team:
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-gray-700 text-sm">
                <span className="font-medium">Email:</span> security@suitpax.com
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-medium">For urgent matters:</span> +1 (555) 123-4567
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">Security Portal</Button>
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                Report Security Issue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

