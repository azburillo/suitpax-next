import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/app/components/ui/button"

export default function ModernSlaveryStatement() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/legal">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Legal
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Modern Slavery Statement</h1>
          <p className="text-gray-600 mb-8">Last updated: February 2024</p>

          <div className="prose prose-emerald max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              This statement is made pursuant to Section 54 of the Modern Slavery Act 2015 and sets out the steps that
              Suitpax has taken and is continuing to take to ensure that modern slavery or human trafficking is not
              taking place within our business or supply chain.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Business</h2>
            <p>
              Suitpax is a leading provider of AI-powered travel management software solutions. We operate globally,
              helping businesses and travelers streamline their travel experiences through innovative technology. Our
              commitment to ethical business practices extends throughout our operations and supply chain.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Policies</h2>
            <p>
              We have zero tolerance for any form of modern slavery or human trafficking. Our policies reflect our
              commitment to:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Acting ethically and with integrity in all our business relationships</li>
              <li>
                Implementing and enforcing effective systems and controls to ensure slavery and human trafficking is not
                taking place anywhere in our supply chains
              </li>
              <li>Ensuring transparency in our approach to tackling modern slavery throughout our supply chains</li>
              <li>Protecting whistleblowers who raise concerns about modern slavery practices</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Due Diligence Processes</h2>
            <p>We have implemented the following processes to ensure our high standards are being met:</p>
            <ul className="list-disc pl-6 mt-4">
              <li>Rigorous supplier vetting procedures</li>
              <li>Regular audits of our supply chain</li>
              <li>Staff training on identifying and reporting modern slavery concerns</li>
              <li>Clear reporting mechanisms for raising concerns</li>
              <li>Regular review and updating of our policies and procedures</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Risk Assessment</h2>
            <p>
              We regularly assess the risk of modern slavery occurring in our supply chain. Our primary operations are
              in the technology sector, which generally presents a lower risk of modern slavery. However, we remain
              vigilant across all areas of our business, including:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Technology service providers</li>
              <li>Office supplies and equipment</li>
              <li>Professional services</li>
              <li>Travel and hospitality partners</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Training and Awareness</h2>
            <p>
              We provide training to our staff to ensure a high level of understanding of the risks of modern slavery
              and human trafficking in our supply chains and our business. This includes:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Induction training for new employees</li>
              <li>Regular updates and refresher courses for existing staff</li>
              <li>Specific training for staff involved in procurement and supplier management</li>
              <li>Access to resources and guidelines for identifying potential issues</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Our Effectiveness in Combating Slavery and Human Trafficking
            </h2>
            <p>
              We measure our effectiveness in ensuring that slavery and human trafficking is not taking place in our
              business or supply chains by:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Regular supplier assessments and audits</li>
              <li>Staff feedback and reporting mechanisms</li>
              <li>Level of communication and personal contact with our supply chain</li>
              <li>Annual review of our policies and procedures</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Future Steps</h2>
            <p>
              We are committed to continually improving our practices to combat slavery and human trafficking. Our
              future steps include:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Expanding our supplier audit program</li>
              <li>Enhancing our training materials and delivery methods</li>
              <li>Strengthening our due diligence processes</li>
              <li>Increasing collaboration with industry partners on best practices</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Approval</h2>
            <p>
              This statement has been approved by the Board of Directors of Suitpax and will be reviewed and updated
              annually.
            </p>

            <div className="mt-12 p-6 bg-emerald-50 rounded-lg border border-emerald-100">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p>For questions about this statement or to report concerns about modern slavery:</p>
              <ul className="mt-4">
                <li>Email: compliance@suitpax.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Innovation Drive, Suite 100, San Francisco, CA 94105</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

