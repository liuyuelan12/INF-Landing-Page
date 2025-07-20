"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export default function InvestmentSectors() {
  const [hoveredSector, setHoveredSector] = useState("AI + Web3")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const sectorContent = {
    "AI + Web3": {
      categories: [
        {
          title: "Core Technology",
          items: [
            "Decentralized AI Model Training",
            "AI Model Marketplaces",
            "Privacy-Preserving Machine Learning",
            "Federated Learning Networks",
          ],
        },
        {
          title: "Applications",
          items: [
            "AI-Powered Smart Contract Development",
            "Intelligent Trading Systems",
            "Predictive Analytics for DeFi",
            "AI-Enhanced Security Solutions",
          ],
        },
        {
          title: "Data & Governance",
          items: [
            "Decentralized Data Markets",
            "AI Model Governance Frameworks",
            "Data Quality Validation Networks",
            "Cross-chain AI Orchestration",
          ],
        },
      ],
    },
    "CEX Ecosystem": {
      categories: [
        {
          title: "Infrastructure",
          items: [
            "High-Performance Trading Engines",
            "Advanced Order Matching Systems",
            "Real-time Settlement Networks",
            "Institutional-grade Custody Solutions",
          ],
        },
        {
          title: "Innovation",
          items: [
            "Hybrid DEX-CEX Protocols",
            "Cross-exchange Liquidity Networks",
            "Regulatory Compliance Tools",
            "Advanced Market Making Systems",
          ],
        },
      ],
    },
    "DePIN Infrastructure": {
      categories: [
        {
          title: "Network Layer",
          items: [
            "Decentralized Storage Networks",
            "Edge Computing Protocols",
            "Bandwidth Sharing Platforms",
            "IoT Device Networks",
          ],
        },
        {
          title: "Service Layer",
          items: [
            "Resource Allocation Markets",
            "Quality of Service Verification",
            "Network Incentive Mechanisms",
            "Cross-network Interoperability",
          ],
        },
      ],
    },
    "DeFi Innovation": {
      categories: [
        {
          title: "Protocol Development",
          items: [
            "Next-gen Lending Protocols",
            "Real World Asset (RWA) Tokenization",
            "Derivatives & Structured Products",
            "Insurance & Risk Management",
          ],
        },
        {
          title: "Market Infrastructure",
          items: [
            "MEV Protection Solutions",
            "Liquidity Aggregation Systems",
            "Cross-chain Bridge Security",
            "Oracle Networks & Solutions",
          ],
        },
      ],
    },
    "GameFi & NFT": {
      categories: [
        {
          title: "Gaming Infrastructure",
          items: [
            "Game-specific L2 Solutions",
            "Cross-game Asset Standards",
            "Blockchain Gaming Engines",
            "In-game Economy Design",
          ],
        },
        {
          title: "NFT Technology",
          items: [
            "Dynamic NFT Protocols",
            "NFT Financialization Tools",
            "Metadata Management Systems",
            "Cross-chain NFT Bridges",
          ],
        },
        {
          title: "Metaverse Development",
          items: [
            "Virtual World Platforms",
            "Digital Identity Solutions",
            "Social Graph Protocols",
            "Creator Economy Tools",
          ],
        },
      ],
    },
  }

  return (
    <section ref={sectionRef} className="relative py-16 md:py-32 min-h-[900px] bg-white">
      {/* Gray Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-300"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <Image
                src="/images/wireframe-funnel.png"
                alt="Wireframe funnel"
                width={60}
                height={90}
                className="opacity-80 mt-2"
              />
              <div className="flex-1">
                <h2 className="text-[#13325E] text-3xl font-black mb-4">Investment Sectors</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  We focus on the most promising innovation directions in the Web3 space and make deep investments in
                  the following tracks. Our thesis-driven approach combines rigorous due diligence with forward-looking
                  market analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Investment Focus Areas - Mobile List */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="space-y-4">
              {Object.keys(sectorContent).map((sector, index) => (
                <div
                  key={sector}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                    hoveredSector === sector ? "bg-gradient-to-r from-blue-100 to-white shadow-sm" : "hover:bg-white/50"
                  }`}
                  onClick={() => setHoveredSector(sector)}
                >
                  <div className={`w-2 h-2 rounded-full ${index === 0 ? "bg-red-600" : "bg-[#13325E]"}`}></div>
                  <span
                    className={`text-lg font-medium ${hoveredSector === sector ? "text-red-600" : "text-gray-800"}`}
                  >
                    {sector}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Categories - Mobile */}
          <div className="space-y-6">
            {sectorContent[hoveredSector].categories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-4">
                  <h3 className="text-red-600 text-lg font-medium">{hoveredSector}</h3>
                  <h4 className="text-red-600 text-xl font-bold">{category.title}</h4>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-gray-700 text-base">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Keep existing */}
        <div className="hidden md:block relative">
          {/* Top Section */}
          <div className="grid grid-cols-2 gap-16 items-start mb-16">
            {/* Left side - Title and Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-8">
                <Image
                  src="/images/wireframe-funnel.png"
                  alt="Wireframe funnel"
                  width={80}
                  height={120}
                  className="opacity-80"
                />
              </div>

              <h2 className="text-[#13325E] text-5xl font-black">Investment Sectors</h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                We focus on the most promising innovation directions in the Web3 space and make deep investments in the
                following tracks. Our thesis-driven approach combines rigorous due diligence with forward-looking market
                analysis.
              </p>
            </div>

            {/* Right side - Investment Focus Areas */}
            <div className="flex justify-end">
              <div className="space-y-6 text-left -ml-24">
                <div className="space-y-8">
                  {Object.keys(sectorContent).map((sector, index) => (
                    <div
                      key={sector}
                      className={`flex items-center space-x-4 px-4 py-2 rounded-lg transition-all duration-500 ease-out cursor-pointer transform hover:scale-105 ${
                        hoveredSector === sector ? "bg-gradient-to-r from-blue-100 to-white shadow-lg" : ""
                      } hover:bg-gradient-to-r hover:from-blue-100 hover:to-white hover:shadow-md`}
                      onMouseEnter={() => setHoveredSector(sector)}
                    >
                      <div className={`w-3 h-3 rounded-full ${index === 0 ? "bg-red-600" : "bg-[#13325E]"}`}></div>
                      <span className="text-gray-800 text-xl font-medium">{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Gray Divider before bottom section - no margin bottom */}
          <div className="w-full h-px bg-gray-300"></div>

          {/* Bottom Section with vertical dividers extending from horizontal divider */}
          <div className="relative">
            {/* Vertical dividers that start from the horizontal line above */}
            <div className="absolute top-0 left-1/3 w-px bg-gray-300" style={{ height: "calc(100% - 1px)" }}></div>
            <div className="absolute top-0 left-2/3 w-px bg-gray-300" style={{ height: "calc(100% - 1px)" }}></div>

            {/* Dynamic Categories */}
            <div className="grid grid-cols-3 gap-0">
              {sectorContent[hoveredSector].categories.map((category, index) => (
                <div
                  key={index}
                  className="p-8 hover:bg-gradient-to-bl hover:from-blue-50 hover:to-white transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-lg transform"
                >
                  <div className="space-y-4">
                    <h3 className="text-red-600 text-lg font-medium">{hoveredSector}</h3>
                    <h4 className="text-red-600 text-2xl font-bold">{category.title}</h4>

                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="text-gray-700 text-base">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
