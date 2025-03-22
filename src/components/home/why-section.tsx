import React from 'react'
import { Button } from '@/components/ui/button'

const WhySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">
            We get it. You already have a spreadsheet.<br />
            But we built Equals anyway, because:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ReasonCard
            title="We were sick of spending hours importing CSVs."
            color="border-cyan-400"
          />

          <ReasonCard
            title="We wanted our teams to always have the latest numbers."
            color="border-teal-400"
          />

          <ReasonCard
            title="We hated rebuilding everything in BI tools."
            color="border-emerald-400"
          />

          <ReasonCard
            title="We found data stacks expensive and confusing."
            color="border-blue-400"
          />

          <ReasonCard
            title="We wished reporting on ARR and SaaS metrics was 10x easier."
            color="border-purple-400"
          />

          <ReasonCard
            title="And every new tool was trying to replace spreadsheets, rather than improve them."
            color="border-orange-400"
          />
        </div>

        <div className="text-center mt-16">
          <p className="text-lg font-medium mb-8">So we built something better. Let us show you.</p>
          <Button className="btn-primary px-8 py-6 text-base">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

interface ReasonCardProps {
  title: string
  color: string
}

const ReasonCard = ({ title, color }: ReasonCardProps) => {
  return (
    <div className={`p-6 bg-gray-50 rounded-lg border-l-4 ${color} hover:shadow-md transition-shadow`}>
      <p className="font-medium">{title}</p>
    </div>
  )
}

export default WhySection
