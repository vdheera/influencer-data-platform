import MainLayout from '@/components/layout/main-layout'
import HeroSection from '@/components/home/hero-section'
import FeaturesSection from '@/components/home/features-section'
import UseCasesSection from '@/components/home/use-cases-section'
import DatabaseSection from '@/components/home/database-section'
import CtaSection from '@/components/home/cta-section'
import ChatDemoSection from '@/components/home/chat-demo-section'

export default function Home() {
  return (
    <MainLayout>
      <DatabaseSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div className="py-24 bg-gradient-to-b from-white to-purple-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-pink-600">
              Find the perfect influencers for your brand&mdash;with comprehensive data and real-time insights.
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <ChatDemoSection />
          </div>
        </div>
      </div>
      <div id="use-cases">
        <UseCasesSection />
      </div>
      <div id="contact">
        <CtaSection />
      </div>
    </MainLayout>
  )
}
