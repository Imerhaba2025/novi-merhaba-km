import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyUs from "@/components/why-us"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import ROICalculator from "@/components/roi-calculator"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <Services />
      <WhyUs />
      <ROICalculator />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
