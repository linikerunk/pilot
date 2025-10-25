import HeroSection from '../components/landing/HeroSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import DevelopersSection from '../components/landing/DevelopersSection'
import TestimonialsSection from '../components/landing/TestimonialsSection'

function LandingPage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <DevelopersSection />
      <TestimonialsSection />
    </div>
  )
}

export default LandingPage
