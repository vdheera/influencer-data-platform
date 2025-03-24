import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StarIcon } from 'lucide-react'

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="heading-lg text-center mb-6">
            Leading brands trust InfluencerIQ to power their influencer marketing strategies.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="InfluencerIQ has transformed how we find and work with influencers. The data insights have helped us increase our campaign ROI by 300% in just six months."
            name="Sarah Chen"
            title="Head of Digital Marketing, Nike"
            category="Brand Partnerships"
            link="/brand-partnerships/"
          />

          <TestimonialCard
            quote="The platform's analytics are incredible. We can now make data-driven decisions about which influencers to work with and track real impact on our bottom line."
            name="Michael Rodriguez"
            title="Marketing Director, Sephora"
            category="Campaign Analytics"
            link="/campaign-analytics/"
          />

          <TestimonialCard
            quote="Finding the right influencers used to take weeks. With InfluencerIQ, we can identify perfect matches for our brand in minutes, with detailed audience alignment data."
            name="Emily Watson"
            title="Influencer Marketing Lead, H&M"
            category="Influencer Discovery"
            link="/influencer-discovery/"
          />
        </div>

        <div className="mt-20 text-center">
          <div className="flex items-center justify-center mb-2">
            <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">4.9 out of 5</h3>
          <Link href="https://www.g2.com/products/influenceriq/reviews" className="text-primary font-medium hover:underline" target="_blank" rel="noopener noreferrer">
            Read G2 reviews
          </Link>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  category: string
  link: string
}

const TestimonialCard = ({ quote, name, title, category, link }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="border-l-4 border-primary pl-4 mb-6">
        <span className="text-sm font-medium">{category}</span>
      </div>

      <blockquote className="text-lg mb-6">
        "{quote}"
      </blockquote>

      <div className="flex justify-between items-end">
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-600">{title}</div>
        </div>

        <Link href={link} className="text-primary text-sm font-medium hover:underline">
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default TestimonialsSection
