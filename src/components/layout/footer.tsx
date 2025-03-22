import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-equals-blue text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.svg"
                alt="Equals"
                width={120}
                height={28}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm">The connected spreadsheet.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold mb-4">Use cases</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/subscription-analytics" className="text-gray-400 hover:text-white text-sm">
                  Subscription Analytics
                </Link>
              </li>
              <li>
                <Link href="/crm-analytics" className="text-gray-400 hover:text-white text-sm">
                  CRM Analytics
                </Link>
              </li>
              <li>
                <Link href="/business-intelligence" className="text-gray-400 hover:text-white text-sm">
                  Business Intelligence
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold mb-4">Guides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/guides/arr" className="text-gray-400 hover:text-white text-sm">
                  The Ultimate Guide to ARR
                </Link>
              </li>
              <li>
                <Link href="/guides/saas-metrics" className="text-gray-400 hover:text-white text-sm">
                  The Guide to SaaS Metrics
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/customers" className="text-gray-400 hover:text-white text-sm">
                  Customers
                </Link>
              </li>
              <li>
                <a
                  href="https://docs.equals.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Help docs
                </a>
              </li>
              <li>
                <Link href="/launches" className="text-gray-400 hover:text-white text-sm">
                  Launches
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://jobs.ashbyhq.com/equals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/equalshq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/heyequals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} Equals Technologies, Inc.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/policies/privacy-policy.pdf" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/policies/equals-online-terms-and-conditions-GP-april-11-22.pdf" className="text-gray-400 hover:text-white text-sm">
              Terms & Conditions
            </Link>
            <a
              href="https://status.equals.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm"
            >
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
