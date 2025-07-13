"use client"

import Image from "next/image"
import { useState } from "react"

export default function CoreTeam() {
  const [hoveredMember, setHoveredMember] = useState<number>(0) // Default to Sarah Chen (index 0) for desktop
  const [selectedMember, setSelectedMember] = useState<number>(0) // For mobile click interaction

  const teamMembers = [
    {
      name: "Sarah Chen",
      title: "Founding General Partner",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-O1LNWkGrKwzMh49xNBhDXmiFIT8rBk.png",
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
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-A2zLvtRXV3O5uF5TTKJNyZvqUp6i8N.png",
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
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-3C5ETjQ2AJUuU0Y4QjoZNjLoUrms4P.png",
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
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-WXktRYCVHmVHgsCOc9dMOL7k4qkLKD.png",
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
    <section id="core-team" className="relative pt-32 pb-96 md:pb-96 pb-16 bg-white" style={{ minHeight: "800px" }}>
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
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Header Section */}
          <div className="mb-16">
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/images/group-216.png"
                alt="Core team icon"
                width={60}
                height={60}
                className="object-contain"
              />
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

        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <Image
                src="/images/group-216.png"
                alt="Core team icon"
                width={60}
                height={60}
                className="object-contain mt-2 flex-shrink-0"
              />
              <div className="flex-1">
                <h2 className="text-[#13325E] text-3xl font-bold mb-4">Core Team</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  We focus on the most promising innovation directions in the Web3 space and make deep investments in
                  the following tracks. Our thesis-driven approach combines rigorous due diligence with forward-looking
                  market analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Team Members List */}
          <div className="space-y-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                  selectedMember === index
                    ? "bg-gradient-to-r from-blue-100 to-white shadow-md"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedMember(selectedMember === index ? -1 : index)}
              >
                <div className="flex items-start space-x-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#13325E] flex-shrink-0">
                    <Image
                      src={member.avatar || "/placeholder.svg"}
                      alt={`${member.name} avatar`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-red-600 text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-gray-800 text-base font-medium mb-3">{member.title}</p>

                    {/* Show description when member is selected */}
                    {selectedMember === index && (
                      <div className="space-y-2 mt-4 pt-4 border-t border-gray-200">
                        {member.description.map((item, itemIndex) => (
                          <p key={itemIndex} className="text-gray-600 text-sm leading-relaxed">
                            • {item}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Expand/Collapse Indicator */}
                  <div className="flex-shrink-0 mt-2">
                    <div
                      className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                        selectedMember === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Advisory Board */}
            <div
              className={`rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                selectedMember === 4
                  ? "bg-gradient-to-r from-blue-100 to-white shadow-md"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedMember(selectedMember === 4 ? -1 : 4)}
            >
              <div className="flex items-start space-x-4">
                {/* Placeholder Icon */}
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-400 rounded"></div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-red-600 text-lg font-bold">Advisory Board</h3>

                  {/* Show advisory board members when selected */}
                  {selectedMember === 4 && (
                    <div className="space-y-2 mt-4 pt-4 border-t border-gray-200">
                      {advisoryBoard.map((advisor, advisorIndex) => (
                        <p key={advisorIndex} className="text-gray-600 text-sm leading-relaxed">
                          • {advisor}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Expand/Collapse Indicator */}
                <div className="flex-shrink-0 mt-2">
                  <div
                    className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                      selectedMember === 4 ? "rotate-180" : ""
                    }`}
                  >
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gray Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>

      {/* Additional divider for mobile spacing */}
      <div className="block md:hidden absolute bottom-8 left-4 right-4 h-px bg-gray-300"></div>
    </section>
  )
}
