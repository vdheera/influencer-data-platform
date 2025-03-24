import React from 'react'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Divider from '@/components/ui/divider'

const PricingSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container-custom">
        <Divider />
        
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-gradient">Simple, transparent pricing</h2>
          <p className="text-lg text-purple-950">Start free, upgrade when you need to</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="rounded-xl border border-purple-200 p-8 hover:border-purple-300 transition-colors bg-white">
            <h3 className="text-xl font-semibold mb-2 text-purple-950">Starter</h3>
            <p className="text-purple-900 mb-6">Perfect for getting started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-purple-950">$0</span>
              <span className="text-purple-900">/month</span>
            </div>
            <Button className="w-full mb-8 bg-purple-900 hover:bg-purple-800">Get Started</Button>
            <ul className="space-y-4">
              <PricingFeature>Up to 100 influencer searches/month</PricingFeature>
              <PricingFeature>Basic analytics</PricingFeature>
              <PricingFeature>Email support</PricingFeature>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="rounded-xl border-2 border-pink-500 p-8 relative bg-gradient-bg-subtle shadow-xl">
            <div className="absolute top-0 right-0 bg-pink-500 text-white text-sm px-3 py-1 rounded-bl-lg rounded-tr-lg">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-950">Pro</h3>
            <p className="text-purple-900 mb-6">For growing brands</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-purple-950">$99</span>
              <span className="text-purple-900">/month</span>
            </div>
            <Button className="w-full mb-8 bg-pink-500 hover:bg-pink-600">Start Free Trial</Button>
            <ul className="space-y-4">
              <PricingFeature>Unlimited searches</PricingFeature>
              <PricingFeature>Advanced analytics & reporting</PricingFeature>
              <PricingFeature>Campaign tracking</PricingFeature>
              <PricingFeature>Priority support</PricingFeature>
              <PricingFeature>Custom exports</PricingFeature>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-xl border border-purple-200 p-8 hover:border-purple-300 transition-colors bg-white">
            <h3 className="text-xl font-semibold mb-2 text-purple-950">Enterprise</h3>
            <p className="text-purple-900 mb-6">For large organizations</p>
            <div className="mb-6">
              <span className="text-2xl font-bold text-purple-950">Custom pricing</span>
            </div>
            <Button variant="outline" className="w-full mb-8 border-purple-300 text-purple-950 hover:bg-purple-50">Contact Sales</Button>
            <ul className="space-y-4">
              <PricingFeature>Everything in Pro</PricingFeature>
              <PricingFeature>Dedicated account manager</PricingFeature>
              <PricingFeature>Custom integrations</PricingFeature>
              <PricingFeature>SLA & premium support</PricingFeature>
              <PricingFeature>Advanced team features</PricingFeature>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const PricingFeature = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center text-sm text-purple-900">
    <Check className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
    {children}
  </li>
)

export default PricingSection 