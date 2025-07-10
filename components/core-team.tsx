"use client"

import Image from "next/image"
import { useState } from "react"

export default function CoreTeam() {
  const [hoveredMember, setHoveredMember] = useState<number>(0) // Default to Sarah Chen (index 0)

  const teamMembers = [
    {
      name: "Sarah Chen",
      title: "Founding General Partner",
      avatar: "/images/team-image-1.png",
      description: [
        "MIT Ph.D. in Computer Science, Blockchain Research Focus",
        "Former Technology Executive at Point72 (5 years)",
        "Morgan Stanley Technology Director, Led AI Integration Team",
        "Board Member, Blockchain Enterprise Alliance",
        "Led 3 Successful Tech Startups with 2 Exits",
      ],
    },
    {
      name: "Michael Zhang",
      title: "Founding Managing Partner",
      avatar: "/images/team-image-2.png",
      description: [
        "Harvard Business School MBA, Baker Scholar",
        "Veteran Blockchain Investor (7+ Years in the Space)",
        "Led $450M in Web3 Investments at Galaxy Digital",
        "Serial Web3 Entrepreneur with Solana Ecosystem Focus",
        "Advisor to Three Unicorn Blockchain Projects",
      ],
    },
    {
      name: "Emily Wang",
      title: "Partner, Operations",
      avatar: "/images/team-image-3.png",
      description: [
        "Stanford MBA, Global Market Operations Expert",
        "Former COO at BitMEX, Scaled Team from 20 to 200",
        "Extensive Crypto Industry Experience (8+ Years)",
        "Community Building Specialist with 500K+ Network",
        "Led Regulatory Compliance for Major Exchanges",
      ],
    },
    {
      name: "David Liu",
      title: "Partner, Engineering",
      avatar: "/images/team-image-4.png",
      description: [
        "Former Google Senior Engineer (10+ Years)",
        "Blockchain Architecture Expert, 15+ Protocol Designs",
        "Open Source Project Contributor (Ethereum, Polkadot)",
        "Smart Contract Security Researcher",
        'Author of "Zero Knowledge Proofs in DeFi Infrastructure"',
      ],
    },
  ]

  const advisoryBoard = [
    "Dr. Wei Chen - Cryptography Research Lead, MIT",
    "Amanda Johnson - Former SEC Commissioner",
    "Jason Taylor - Founder, Blockchain Capital",
    "Dr. Sophia Xu - AI Ethics Specialist",
  ]

  return (
    <section className="relative pt-32 pb-96 bg-white" style={{ minHeight: "800px" }}>
      {/* Top Gray Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-300"></div>

      {/* Background Wireframe Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 opacity-10">
          <Image
            src="/images/group-215.png"
            alt="Wireframe torus background"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-20 right-40 opacity-10">
          <Image
            src="/images/group-215.png"
            alt="Wireframe torus background"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <Image src="/images/group-216.png" alt="Core team icon" width={60} height={60} className="object-contain" />
          </div>

          <h2 className="text-[#13325E] text-4xl font-bold mb-6">Core Team</h2>

          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            We focus on the most promising innovation directions in the Web3 space and make deep investments in the
            following tracks. Our thesis-driven approach combines rigorous due diligence with forward-looking market
            analysis.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="space-y-4 relative"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(0)} // Return to Sarah Chen when not hovering
            >
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 mx-auto border-2 border-[#13325E] rounded-lg overflow-hidden">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={`${member.name} avatar`}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center space-y-2">
                <h3 className="text-red-600 text-lg font-bold">{member.name}</h3>
                <p className="text-[#13325E] text-sm font-medium">{member.title}</p>
              </div>

              {/* Description - appears on hover or shows Sarah Chen by default */}
              {hoveredMember === index && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-20 w-48">
                  <div
                    className="p-3 rounded-lg shadow-lg border border-gray-200"
                    style={{
                      background: "linear-gradient(to bottom, #3b82f6, #ffffff)",
                    }}
                  >
                    <div className="space-y-1">
                      {member.description.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-gray-800 text-xs leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Advisory Board */}
          <div
            className="space-y-4 relative"
            onMouseEnter={() => setHoveredMember(4)}
            onMouseLeave={() => setHoveredMember(0)} // Return to Sarah Chen when not hovering
          >
            <div className="w-32 h-32 mx-auto"></div>
            <div className="text-center space-y-2">
              <h3 className="text-red-600 text-lg font-bold">Advisory Board</h3>
            </div>

            {/* Advisory Board Description - appears on hover */}
            {hoveredMember === 4 && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-20 w-48">
                <div
                  className="p-3 rounded-lg shadow-lg border border-gray-200"
                  style={{
                    background: "linear-gradient(to bottom, #3b82f6, #ffffff)",
                  }}
                >
                  <div className="space-y-1">
                    {advisoryBoard.map((advisor, advisorIndex) => (
                      <p key={advisorIndex} className="text-gray-800 text-xs leading-relaxed">
                        {advisor}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Gray Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
    </section>
  )
}
