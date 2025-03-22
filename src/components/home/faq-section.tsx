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
              question="How is Equals different from Excel or Google Sheets?"
              answer="Equals is a connected spreadsheet—it links directly to Stripe, Salesforce, SQL databases, and more. Your data and formulas update automatically in real time, eliminating CSV exports and copy-paste headaches. You get the simplicity of a spreadsheet with the power of live data at your fingertips."
              value="item-1"
            />

            <FaqItem
              question="Does Equals have all the spreadsheet features I expect? How is performance?"
              answer="Yes. Equals is a full-featured, connected spreadsheet with pivot tables, charts, over 100 formulas, real-time collaboration, AI assist for SQL and formulas, and much more. We've built a fast engine under the hood, so you'll find Equals performs as well—or better—than Google Sheets, even with large data sets."
              value="item-2"
            />

            <FaqItem
              question="What data sources can Equals connect to?"
              answer="Equals connects directly to Stripe, Salesforce, HubSpot, SQL databases (including Snowflake, BigQuery, Redshift, Postgres, and MySQL), and more. You can also use our Import Scripts feature to connect to any API with a few lines of JavaScript or Python."
              value="item-3"
            />

            <FaqItem
              question="Can I use Equals for subscription analytics, like tracking ARR or MRR?"
              answer="Absolutely! Equals excels at subscription analytics. We have pre-built templates for tracking ARR, MRR, churn, cohorts, and all your key SaaS metrics. Our Stripe integration makes it especially easy to get started quickly."
              value="item-4"
            />

            <FaqItem
              question="How does pricing work?"
              answer="Equals offers flexible pricing based on your team size and needs. We have plans for startups, growth-stage companies, and enterprises. Visit our pricing page for details or contact us for a custom quote."
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
