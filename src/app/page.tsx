import MainLayout from '@/components/layout/main-layout'
import HeroSection from '@/components/home/hero-section'
import FeaturesSection from '@/components/home/features-section'
import WhySection from '@/components/home/why-section'
import TestimonialsSection from '@/components/home/testimonials-section'
import UseCasesSection from '@/components/home/use-cases-section'
import CtaSection from '@/components/home/cta-section'
import FaqSection from '@/components/home/faq-section'

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <WhySection />
      <FeaturesSection />
      <TestimonialsSection />
      <UseCasesSection />
      <FaqSection />
      <CtaSection />
    </MainLayout>
  )
}
