import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs"

export const metadata = {
  title: "Suitpax - Modern Slavery Statement",
  description: "Modern Slavery Statement for Suitpax",
}

export default function ModernSlavery() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Modern Slavery Statement</h1>
          <Tabs defaultValue="/legal/modern-slavery" className="w-full max-w-md">
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
              <TabsTrigger
                value="/legal/modern-slavery"
                className="data-[state=active]:bg-white"
                href="/legal/modern-slavery"
              >
                Slavery
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <p className="text-lg md:text-xl text-gray-600 mb-12 text-center font-medium">Last updated: February 2024</p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-10">
            <h2 className="text-2xl font-semibold text-black mb-6">Our Commitment</h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 font-medium">
              This statement is made pursuant to Section 54 of the Modern Slavery Act 2015 and sets out the steps that
              Suitpax has taken and is continuing to take to ensure that modern slavery or human trafficking is not
              taking place within our business or supply chain.
            </p>
            <p className="text-gray-700 text-sm mb-0">
              We have zero tolerance for any form of modern slavery or human trafficking in our organization or supply
              chain.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {[
              {
                title: "1. Our Business",
                content:
                  "Suitpax is a leading provider of AI-powered travel management software solutions. We operate globally, helping businesses and travelers streamline their travel experiences through innovative technology. Our commitment to ethical business practices extends throughout our operations and supply chain.",
              },
              {
                title: "2. Our Policies",
                content:
                  "We have zero tolerance for any form of modern slavery or human trafficking. Our policies reflect our commitment to acting ethically and with integrity in all our business relationships.",
                details: [
                  "Acting ethically and with integrity in all our business relationships",
                  "Implementing and enforcing effective systems and controls to ensure slavery and human trafficking is not taking place anywhere in our supply chains",
                  "Ensuring transparency in our approach to tackling modern slavery throughout our supply chains",
                  "Protecting whistleblowers who raise concerns about modern slavery practices",
                ],
              },
              {
                title: "3. Due Diligence Processes",
                content: "We have implemented the following processes to ensure our high standards are being met:",
                details: [
                  "Rigorous supplier vetting procedures",
                  "Regular audits of our supply chain",
                  "Staff training on identifying and reporting modern slavery concerns",
                  "Clear reporting mechanisms for raising concerns",
                  "Regular review and updating of our policies and procedures",
                ],
              },
              {
                title: "4. Risk Assessment",
                content:
                  "We regularly assess the risk of modern slavery occurring in our supply chain. Our primary operations are in the technology sector, which generally presents a lower risk of modern slavery. However, we remain vigilant across all areas of our business.",
                details: [
                  "Technology service providers",
                  "Office supplies and equipment",
                  "Professional services",
                  "Travel and hospitality partners",
                ],
              },
              {
                title: "5. Training and Awareness",
                content:
                  "We provide training to our staff to ensure a high level of understanding of the risks of modern slavery and human trafficking in our supply chains and our business.",
                details: [
                  "Induction training for new employees",
                  "Regular updates and refresher courses for existing staff",
                  "Specific training for staff involved in procurement and supplier management",
                  "Access to resources and guidelines for identifying potential issues",
                ],
              },
              {
                title: "6. Effectiveness Measurement",
                content:
                  "We measure our effectiveness in ensuring that slavery and human trafficking is not taking place in our business or supply chains by:",
                details: [
                  "Regular supplier assessments and audits",
                  "Staff feedback and reporting mechanisms",
                  "Level of communication and personal contact with our supply chain",
                  "Annual review of our policies and procedures",
                ],
              },
              {
                title: "7. Future Steps",
                content:
                  "We are committed to continually improving our practices to combat slavery and human trafficking. Our future steps include:",
                details: [
                  "Expanding our supplier audit program",
                  "Enhancing our training materials and delivery methods",
                  "Strengthening our due diligence processes",
                  "Increasing collaboration with industry partners on best practices",
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 transition-all hover:shadow-md"
              >
                <h2 className="mb-4 text-xl font-semibold text-black">{section.title}</h2>
                <p className="text-gray-700 text-sm md:text-base mb-4">{section.content}</p>
                {section.details && (
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                    {section.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Our Supply Chain</h3>
              <p className="text-gray-700 text-sm mb-4">
                Our supply chain includes various service providers and partners:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Software development and IT services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Cloud infrastructure providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Office facilities and equipment suppliers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Travel and accommodation services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Professional services (legal, accounting, etc.)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-black mb-4">Governance and Oversight</h3>
              <p className="text-gray-700 text-sm mb-4">
                Our approach to preventing modern slavery is overseen at the highest levels:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Board-level oversight of modern slavery prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Dedicated compliance team for monitoring and enforcement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Regular reporting to executive leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Integration with our broader ESG initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Annual review and approval of this statement</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-emerald-50 rounded-xl shadow-sm border border-emerald-100 p-8">
            <h3 className="text-xl font-semibold text-black mb-4">Contact Information</h3>
            <p className="text-gray-700 text-base mb-4">
              For questions about this statement or to report concerns about modern slavery:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Report a Concern</Button>
              <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                Contact Compliance Team
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              <p>Email: compliance@suitpax.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Innovation Drive, Suite 100, San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

