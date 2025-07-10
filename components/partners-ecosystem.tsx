"use client"

import Image from "next/image"
import { useState } from "react"

export default function PartnersEcosystem() {
  const [activeTab, setActiveTab] = useState("Strategic Investment Partners")

  const partnerCategories = {
    "Strategic Investment Partners": [
      {
        title: "Venture Capital",
        items: [
          "Top-tier Global VCs",
          "Crypto-native Investment Funds",
          "Corporate Venture Arms",
          "Family Offices & HNWIs",
        ],
      },
      {
        title: "Industry Leaders",
        items: [
          "Web3 Infrastructure Giants",
          "Leading DeFi Protocols",
          "Major Gaming Studios",
          "Enterprise Blockchain Solutions",
        ],
      },
      {
        title: "Angel Networks",
        items: ["Serial Entrepreneurs", "Industry Veterans", "Technical Innovators", "Successful Founders"],
      },
    ],
    "Technology Partners": [
      {
        title: "Infrastructure",
        items: [
          "Layer 1 & Layer 2 Networks",
          "Cross-chain Bridge Providers",
          "Oracle Networks",
          "Cloud Service Providers",
        ],
      },
      {
        title: "Development",
        items: [
          "Smart Contract Audit Firms",
          "Blockchain Development Studios",
          "Security Solution Providers",
          "Technical Research Labs",
        ],
      },
      {
        title: "Research & Innovation",
        items: ["Academic Institutions", "Blockchain Research Centers", "Think Tanks", "Innovation Labs"],
      },
    ],
    "Ecosystem Partners": [
      {
        title: "Trading Platforms",
        items: ["DEX Protocols", "CEX Platforms", "Bridge Protocols"],
      },
      {
        title: "Security Collaboration",
        items: ["Security Audits", "Risk Control", "Asset Custody"],
      },
      {
        title: "Media Partners",
        items: ["Industry Media", "KOL Network", "Community Platforms"],
      },
    ],
  }

  return (
    <section className="relative py-32">
      {/* Top Gray Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-300"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/mask-group-17.png" alt="Partners ecosystem background" fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-white text-4xl font-bold mb-8">Partners & Ecosystem</h2>

            {/* Tab Navigation */}
            <div className="flex space-x-4">
              {Object.keys(partnerCategories).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-white text-[#13325E]"
                      : "bg-transparent border border-white/30 text-white hover:bg-white/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Partner Categories Grid */}
          <div className="grid grid-cols-3 gap-12">
            {partnerCategories[activeTab].map((category, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-white text-2xl font-bold">{category.title}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-white/80 text-base">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-white text-3xl font-bold mb-6">Partners & Ecosystem</h2>

            {/* Tab Navigation - Mobile */}
            <div className="flex flex-wrap gap-3 justify-center">
              {Object.keys(partnerCategories).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab ? "bg-white text-[#13325E]" : "bg-transparent border border-white/30 text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Partner Categories - Mobile Vertical Layout */}
          <div className="space-y-8 text-center">
            {partnerCategories[activeTab].map((category, index) => (
              <div key={index} className="bg-blue-950/70 rounded-lg p-6 mx-4">
                <h3 className="text-white text-xl font-bold mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-white/70 text-base leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
