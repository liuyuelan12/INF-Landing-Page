"use client"

import Image from "next/image"
import { useState } from "react"

export default function DevelopmentRoadmap() {
  const [activePhase, setActivePhase] = useState("Launch")

  const roadmapPhases = {
    Launch: {
      title: "Phase 1: Launch",
      timeframe: "(0-6 months)",
      description:
        "Foundation Building and Initial Operations Structured according to proven accelerator program methodologies",
      categories: [
        {
          title: "Fund Raising & Financial Infrastructure",
          items: [
            "Complete Hopper Fund's $20M USDT fundraising target",
            "Establish multi-sig treasury management system",
            "Set up professional financial reporting framework",
            "Design token economics and distribution model",
          ],
        },
        {
          title: "Team Building & Organization",
          items: [
            "Recruit and onboard core investment research team",
            "Build professional operations and technical teams",
            "Establish post-investment management system",
            "Develop internal OKR and performance metrics",
          ],
        },
        {
          title: "Ecosystem Development",
          items: [
            "Establish global LP and strategic partner network",
            "Conduct comprehensive Web3 industry research",
            "Initiate first batch of strategic investments",
            "Launch Scout and Fellow recruitment program",
          ],
        },
        {
          title: "Brand & Community Building",
          items: [
            "Participate in major Web3 summits and conferences",
            "Release in-depth industry research reports",
            "Develop professional media and content matrix",
            "Build initial community engagement channels",
          ],
        },
      ],
    },
    Acceleration: {
      title: "Phase 2: Acceleration",
      timeframe: "(6-18 months)",
      description: "Scaling Operations and Building Governance",
      categories: [
        {
          title: "Fund Development & Portfolio Management",
          items: [
            "Initiate second fund preparation and fundraising",
            "Expand AUM scale through strategic partnerships",
            "Optimize investment strategy and thesis system",
            "Implement portfolio performance tracking system",
          ],
        },
        {
          title: "Community & Governance",
          items: [
            "Establish comprehensive DAO governance framework",
            "Launch on-chain voting and proposal system",
            "Activate community participation mechanisms",
            "Implement token-based incentive programs",
          ],
        },
        {
          title: "Strategic Partnerships",
          items: [
            "Connect with leading public chain ecosystems",
            "Deepen Layer 2 infrastructure partnerships",
            "Expand CEX and DeFi protocol collaborations",
            "Bridge Web2 to Web3 resource networks",
            "Establish global accelerator partnerships",
          ],
        },
        {
          title: "Technical Infrastructure",
          items: [
            "Develop internal investment analysis tools",
            "Launch DAO governance platform and dashboard",
            "Implement secure treasury management system",
            "Build project evaluation and tracking platform",
          ],
        },
      ],
    },
    Leadership: {
      title: "Phase 3: Leadership",
      timeframe: "(18-36 months)",
      description: "Establishing Industry Standards and Global Presence",
      categories: [
        {
          title: "Investment Excellence",
          items: [
            "Create benchmark investment case studies",
            "Achieve successful early project exits",
            "Establish sector leadership in key verticals",
            "Launch specialized investment sub-funds",
          ],
        },
        {
          title: "Research & Innovation",
          items: [
            "Build AI+Crypto research center of excellence exploring the convergence of these technologies",
            "Publish industry-standard whitepapers",
            "Lead technological innovation direction in ZK technology and Ethereum scalability",
            "Develop proprietary investment frameworks",
          ],
        },
        {
          title: "Ecosystem Leadership",
          items: [
            "Lead industry standard setting initiatives",
            "Establish premier innovation accelerator program",
            "Build influential global Web3 investment community",
            "Create cross-chain investment opportunities",
          ],
        },
        {
          title: "Global Expansion",
          items: [
            "Launch regional investment hubs",
            "Establish global Scout and Fellow networks based on successful venture capital talent models",
            "Create international partnership programs",
            "Develop multi-jurisdiction presence leveraging innovative fund structures",
          ],
        },
      ],
    },
  }

  return (
    <section className="relative py-32">
      {/* Top Gray Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-300"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/scroll-group-6.png" alt="Development roadmap background" fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <Image src="/images/group-250.png" alt="Roadmap icon" width={60} height={60} className="object-contain" />
          </div>

          <h2 className="text-[#13325E] text-4xl font-bold mb-8">Development Roadmap</h2>

          {/* Phase Navigation */}
          <div className="flex space-x-4 mb-8">
            {Object.keys(roadmapPhases).map((phase) => (
              <button
                key={phase}
                onClick={() => setActivePhase(phase)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activePhase === phase
                    ? "bg-[#13325E] text-white"
                    : "bg-transparent border border-[#13325E] text-[#13325E] hover:bg-[#13325E]/10"
                }`}
              >
                {phase}
              </button>
            ))}
          </div>

          {/* Phase Description */}
          <div className="mb-8">
            <h3 className="text-[#13325E] text-xl font-bold mb-2">
              {roadmapPhases[activePhase].title} {roadmapPhases[activePhase].timeframe}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed max-w-4xl">
              {roadmapPhases[activePhase].description}
            </p>
          </div>
        </div>

        {/* Horizontal Divider above categories */}
        <div className="w-full h-px bg-gray-300 mb-8"></div>

        {/* Roadmap Categories Grid with Vertical Dividers */}
        <div className="relative">
          {/* Vertical dividers between columns */}
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-300"></div>
          <div className="absolute left-2/4 top-0 bottom-0 w-px bg-gray-300"></div>
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gray-300"></div>

          <div className="grid grid-cols-4 gap-8">
            {roadmapPhases[activePhase].categories.map((category, index) => (
              <div key={index} className="space-y-4 px-4">
                <h4 className="text-red-600 text-lg font-bold">{category.title}</h4>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gray Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
    </section>
  )
}
