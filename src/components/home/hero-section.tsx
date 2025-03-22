import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-70"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Colored blocks for the hero background */}
      <div className="absolute right-0 top-20 w-64 h-20 bg-primary opacity-30 blur-lg" />
      <div className="absolute right-32 top-40 w-32 h-32 bg-accent opacity-40 blur-lg rounded-full" />
      <div className="absolute left-1/4 bottom-32 w-40 h-16 bg-destructive opacity-20 blur-lg" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="heading-xl mb-6">
            The spreadsheet you've always wanted&mdash;connected to&nbsp;your data, built for real-time insights.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Trusted by leading startups for subscription analytics, CRM analytics, and business intelligence.
            Track ARR, SaaS metrics, and more&mdash;no CSVs required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="btn-primary px-8 py-6 text-base">Get Started</Button>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto mt-8">
          <Image
            src="/images/hero-animation-finished.png"
            alt="Equals spreadsheet interface"
            width={800}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Client logos */}
        <div className="mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            <Image
              src="/images/notion-logo.svg"
              alt="Notion"
              width={120}
              height={40}
              className="h-8 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/intercom-logo.svg"
              alt="Intercom"
              width={120}
              height={40}
              className="h-8 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/attio-logo.svg"
              alt="Attio"
              width={120}
              height={40}
              className="h-8 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/launchdarkly-logo.svg"
              alt="LaunchDarkly"
              width={120}
              height={40}
              className="h-8 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/descript-logo.svg"
              alt="Descript"
              width={120}
              height={40}
              className="h-8 w-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
