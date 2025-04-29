import { HeroSection } from "@/components/hero-section"
import { StaticFramework } from "@/components/static-framework"
import { ApplicationsSection } from "@/components/applications-section"
import { BenefitsSection } from "@/components/benefits-section"

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <StaticFramework />
      <ApplicationsSection />
      <BenefitsSection />
    </div>
  )
}
