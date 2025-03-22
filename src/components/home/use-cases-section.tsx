import React from 'react'
import Link from 'next/link'

const UseCasesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-6">Explore what's possible with Equals.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <UseCaseCard
            title="Business Intelligence"
            description="Analyze data from your own warehouse, in a spreadsheet."
            link="/business-intelligence/"
            color="bg-gradient-to-r from-cyan-500 to-teal-400"
          />

          <UseCaseCard
            title="Subscription Analytics"
            description="Get CFO-grade clarity into your ARR and SaaS metrics."
            link="/subscription-analytics/"
            color="bg-gradient-to-r from-teal-400 to-emerald-500"
          />

          <UseCaseCard
            title="CRM Analytics"
            description="Visualize your pipeline, leads, and sales performance in real time."
            link="/crm-analytics/"
            color="bg-gradient-to-r from-orange-400 to-amber-500"
          />
        </div>
      </div>
    </section>
  )
}

interface UseCaseCardProps {
  title: string
  description: string
  link: string
  color: string
}

const UseCaseCard = ({ title, description, link, color }: UseCaseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="text-primary font-medium hover:underline flex items-center">
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default UseCasesSection
