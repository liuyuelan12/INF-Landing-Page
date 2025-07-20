"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function Intro() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="relative py-32 min-h-[800px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/intro-background.png"
          alt="Intro background with wireframe pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Top Row - Title and Button */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h2 className="text-white text-2xl font-light mb-2">Introduction</h2>
            <h3 className="text-white text-4xl font-bold">Infinite Alliance</h3>
          </div>

          <Button
            onClick={scrollToTop}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 text-sm font-semibold flex items-center gap-2"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-5 gap-8 items-start">
          {/* Left side - smaller empty space */}
          <div className="col-span-1"></div>

          {/* Right side - Description takes more space */}
          <div className="col-span-4 text-white/90 space-y-6 max-w-2xl">
            <p className="text-lg leading-relaxed">
              Infinite Alliance is a professional investment and incubation institution in the Web3 space,
              <br />
              focusing on frontier innovations in AI, CEX, DePIN, and DeFi. Through deep industry insights, professional
              investment strategies, and comprehensive incubation services, we help Web3 projects achieve rapid growth
              and sustainable development.
            </p>

            <p className="text-lg leading-relaxed">
              Founded in 2025 and structured as a Wyoming DAO LLC under Title 17, Chapter 31 of Wyoming Statutes, we
              combine traditional venture expertise with Web3-native governance and incentive mechanisms. Our mission is
              to become the Silicon Valley flagship for Web3 incubation, fostering the next generation of breakthrough
              blockchain technologies and companies, inspired by the Y Combinator model that has successfully incubated
              over 4,000 companies with a combined valuation approaching $1 trillion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
