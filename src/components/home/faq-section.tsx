import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const FaqSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="heading-md text-center mb-12">Frequently asked questions</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <FaqItem
              question="How is InfluencerIQ different from other influencer marketing platforms?"
              answer="InfluencerIQ provides the most comprehensive data analytics across all major social media platforms. We offer real-time performance tracking, detailed audience demographics, and AI-powered matching that helps you find the perfect influencers for your brand. Our platform also includes advanced ROI tracking and campaign performance analytics that other platforms don't offer."
              value="item-1"
            />

            <FaqItem
              question="What social media platforms do you cover?"
              answer="We cover all major social media platforms including Instagram, TikTok, YouTube, Twitter, and LinkedIn. Our platform provides detailed analytics and insights for each platform, with real-time data updates and cross-platform performance comparisons."
              value="item-2"
            />

            <FaqItem
              question="What kind of data and metrics do you provide?"
              answer="Our platform provides comprehensive metrics including engagement rates, audience demographics, content performance, reach, impressions, and ROI tracking. We also offer unique insights like audience sentiment analysis, brand alignment scores, and predictive performance metrics."
              value="item-3"
            />

            <FaqItem
              question="Can I use InfluencerIQ to manage my influencer relationships and campaigns?"
              answer="Absolutely! Beyond data and analytics, InfluencerIQ includes tools for influencer outreach, campaign management, contract handling, and performance tracking. You can manage your entire influencer marketing workflow within our platform."
              value="item-4"
            />

            <FaqItem
              question="How does pricing work?"
              answer="InfluencerIQ offers flexible pricing based on your needs and campaign scale. We have plans for businesses of all sizes, from startups to enterprise brands. Visit our pricing page for details or contact us for a custom quote tailored to your specific requirements."
              value="item-5"
            />
          </Accordion>
        </div>
      </div>
    </section>
  )
}

interface FaqItemProps {
  question: string
  answer: string
  value: string
}

const FaqItem = ({ question, answer, value }: FaqItemProps) => {
  return (
    <AccordionItem value={value} className="border border-gray-200 rounded-lg overflow-hidden">
      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
        <span className="text-left font-medium">{question}</span>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
        {answer}
      </AccordionContent>
    </AccordionItem>
  )
}

export default FaqSection
