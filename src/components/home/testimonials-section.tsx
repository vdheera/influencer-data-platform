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
            We built Equals for ourselves. Turns out we weren't the only ones who needed it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Equals is where I do all of my analysis. It gives me back at least an hour or two every week. You'll never get my hands off of this product."
            name="Nicolas Malianni"
            title="Head of Accounting, Notion"
            category="Business Intelligence"
            link="/business-intelligence/"
          />

          <TestimonialCard
            quote="We evaluated Equals against a bunch of vendors but nobody was as accurate in ARR reporting. That and the ease of dashboards made it a no-brainer."
            name="Rohit Divate"
            title="Head of Finance & Ops, Sprig"
            category="Subscription Analytics"
            link="/subscription-analytics/"
          />

          <TestimonialCard
            quote="Within a week, we had a pipeline performance dashboard up and running. Building something similar ourselves would have taken 3+ months."
            name="Joe Ryan"
            title="VP of Revenue Strategy, LaunchDarkly"
            category="CRM Analytics"
            link="/crm-analytics/"
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
          <Link href="https://www.g2.com/products/equals/reviews" className="text-primary font-medium hover:underline" target="_blank" rel="noopener noreferrer">
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
