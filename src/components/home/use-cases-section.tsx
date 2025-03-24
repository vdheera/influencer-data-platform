import React from 'react'
import Image from 'next/image'
import Divider from '@/components/ui/divider'
import { Building2, Users, LineChart, Sparkles, LucideIcon } from 'lucide-react'

const UseCaseCard = ({ icon: Icon, title, description }: { icon: LucideIcon, title: string, description: string }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-purple-200 bg-white p-8 hover:border-purple-300 transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10">
      <div className="mb-6 inline-block rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 p-3">
        <Icon className="h-6 w-6 text-purple-900" />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-purple-950">{title}</h3>
      <p className="text-purple-900 leading-relaxed">{description}</p>
    </div>
  </div>
)

const UseCasesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <Divider />
        
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-pink-600">
            Power Your Business with Influencer Data
          </h2>
          <p className="text-lg text-purple-900">
            Comprehensive datasets enabling data-driven decisions across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UseCaseCard
            icon={Building2}
            title="Brand Marketing"
            description="Access detailed creator profiles to identify perfect brand ambassadors. Analyze engagement rates, audience demographics, and content performance to optimize campaigns."
          />

          <UseCaseCard
            icon={Users}
            title="Talent Agencies"
            description="Track emerging creators with our comprehensive growth metrics. Get insights into audience engagement, content performance, and demographic reach across platforms."
          />

          <UseCaseCard
            icon={LineChart}
            title="Consumer Research"
            description="Analyze creator content and audience data to understand market trends. Get insights into consumer preferences, engagement patterns, and demographic distributions."
          />

          <UseCaseCard
            icon={Sparkles}
            title="AI/ML Applications"
            description="Train recommendation systems and analysis tools with our structured creator data. Access clean, formatted datasets covering millions of creators and their metrics."
          />
        </div>
      </div>
    </section>
  )
}

export default UseCasesSection
