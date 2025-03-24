'use client'

import React from 'react'
import ChatDemoSection from './chat-demo-section'
import Divider from '@/components/ui/divider'

const HeroSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container-custom">
        <Divider />
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-pink-600">
            Find the perfect influencers for your brand&mdash;with comprehensive data and real-time insights.
          </h2>
        </div>
        
        {/* Integrate chat demo directly in hero */}
        <div className="max-w-5xl mx-auto">
          <ChatDemoSection />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
