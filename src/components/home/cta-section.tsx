import React from 'react'
import { Button } from '@/components/ui/button'

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient blocks */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute right-0 top-0 w-64 h-64 bg-primary opacity-30 blur-lg" />
        <div className="absolute right-1/4 top-1/4 w-48 h-48 bg-accent opacity-40 blur-lg rounded-full" />
        <div className="absolute left-1/3 bottom-0 w-72 h-32 bg-destructive opacity-20 blur-lg" />
        <div className="absolute left-0 top-1/3 w-40 h-40 bg-primary opacity-30 blur-lg rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">
            Upgrade your spreadsheet to real-time
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Gain instant clarity on ARR, SaaS metrics, sales performance, and product engagement—no CSVs required.
          </p>
          <Button className="btn-primary px-8 py-6 text-base">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
