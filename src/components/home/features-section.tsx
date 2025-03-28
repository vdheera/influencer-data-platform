import React from 'react'
import Image from 'next/image'
import Divider from '@/components/ui/divider'
import { FileDown, MessageSquare, SlidersHorizontal, HeartHandshake, LucideIcon } from 'lucide-react'

const FeatureItem = ({ icon: Icon, title, description }: { icon: LucideIcon, title: string, description: string }) => (
  <div className="flex items-start space-x-4 group">
    <div className="shrink-0">
      <div className="rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 p-2.5 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors duration-300">
        <Icon className="h-5 w-5 text-purple-900" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-purple-950 mb-1">{title}</h3>
      <p className="text-purple-900 leading-relaxed text-sm">{description}</p>
    </div>
  </div>
)

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <Divider />
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-pink-50/50 rounded-3xl" />
          <div className="relative px-8 py-12 md:p-12">
            <div className="text-center mb-12">
              <h2 className="heading-md mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-pink-600">
                Powerful Features at Your Fingertips
              </h2>
              <p className="text-purple-900">
                Everything you need to work with influencer data effectively
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureItem
                icon={SlidersHorizontal}
                title="Unique Datapoints"
                description="Access brand deals history, content performance trends, audience sentiment analysis, and cross-platform reach metrics."
              />

              <FeatureItem
                icon={MessageSquare}
                title="Natural Language Search"
                description="Find creators using plain English queries - search by content performance, audience traits, or brand collaborations."
              />

              <FeatureItem
                icon={HeartHandshake}
                title="Dedicated Support"
                description="Need specific datapoints? Our team is ready to help source the data you're looking for."
              />

              <FeatureItem
                icon={FileDown}
                title="Export & Integrate"
                description="Download your data in CSV format for seamless integration with your existing tools and workflows."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
