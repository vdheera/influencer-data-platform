import React from 'react'
import Image from 'next/image'

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block text-primary text-sm font-medium bg-primary/10 px-3 py-1 rounded-full mb-4">1</div>
          <h2 className="heading-lg mb-6">
            It's a spreadsheet, with live data. Do everything you can do in Sheets or Excel but with direct
            connections to Stripe, Salesforce, HubSpot, and your SQL database.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold">Query right from your sheet.</h3>
            <p className="text-gray-600">
              Use SQL or our query builder to pull live data—no CSV exports or app switching required.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold">Power through analyses.</h3>
            <p className="text-gray-600">
              Manipulate and summarize data with the formulas you know and trust.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold">Visualize anything.</h3>
            <p className="text-gray-600">
              From lines to stacked columns to scatter plots, customize in seconds and highlight what matters.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="/images/chart-1.png"
              alt="Line chart showing DAU and WAU over time"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="/images/chart-2.png"
              alt="Bar chart showing churn reasons"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>

          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="/images/chart-3.png"
              alt="Column chart showing new customers per month"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <FeatureCard title="Pivot tables" description="Explore data in a friendly drag-and-drop interface." />
            <FeatureCard title="Cell formatting" description="Format cells with colors, borders, font styles, and more." />
            <FeatureCard title="Conditional formatting" description="Highlight trends and outliers with conditionally formatted cells." />
            <FeatureCard title="Freeze panes" description="Keep important columns and rows visible while scrolling." />
            <FeatureCard title="Trace precedents" description="Follow the data that feeds into and out of any cell." />
            <FeatureCard title="Grouping" description="Simplify workbooks by grouping rows and columns." />
            <FeatureCard title="Real-time collaboration" description="View and edit workbooks live with your team." />
            <FeatureCard title="Comments" description="Add, reply, react to, and resolve comments on any cell or chart." />
          </div>
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <h4 className="font-medium mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default FeaturesSection
