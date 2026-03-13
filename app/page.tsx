import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutPreview } from "@/components/sections/about-preview"
import { ServicesPreview } from "@/components/sections/services-preview"
import { IndustriesPreview } from "@/components/sections/industries-preview"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesPreview />
        <IndustriesPreview />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
