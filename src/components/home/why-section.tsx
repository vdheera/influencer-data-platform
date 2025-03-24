import React from 'react'
import { Button } from '@/components/ui/button'

const WhySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-6">
            We get it. Influencer marketing is challenging.<br />
            We built InfluencerIQ because:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ReasonCard
            title="Finding the right influencers was taking too much manual research."
            color="border-cyan-400"
          />

          <ReasonCard
            title="Tracking performance across multiple platforms was a nightmare."
            color="border-teal-400"
          />

          <ReasonCard
            title="Measuring true ROI and campaign impact was nearly impossible."
            color="border-emerald-400"
          />

          <ReasonCard
            title="Influencer data was scattered across different tools and platforms."
            color="border-blue-400"
          />

          <ReasonCard
            title="We needed better insights into audience demographics and engagement."
            color="border-purple-400"
          />

          <ReasonCard
            title="Existing tools weren't providing the depth of data needed for strategic decisions."
            color="border-orange-400"
          />
        </div>

        <div className="text-center mt-16">
          <p className="text-lg font-medium mb-8">So we built something better. Let us show you how.</p>
          <Button className="btn-primary px-8 py-6 text-base">
            Start Free Trial
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
