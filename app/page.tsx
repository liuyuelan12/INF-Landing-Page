import Header from "@/components/header"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Intro from "@/components/intro"
import CoreAdvantages from "@/components/core-advantages"
import InvestmentSectors from "@/components/investment-sectors"
import SuccessStories from "@/components/success-stories"
import CoreTeam from "@/components/core-team"
import PartnersEcosystem from "@/components/partners-ecosystem"
import DevelopmentRoadmap from "@/components/development-roadmap"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Intro />
      <CoreAdvantages />
      <InvestmentSectors />
      <SuccessStories />
      <CoreTeam />
      <PartnersEcosystem />
      <DevelopmentRoadmap />
      <Footer />
    </div>
  )
}
