"use client"

import Image from "next/image"
import { useState } from "react"

export default function CoreAdvantages() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="relative py-8 md:py-32 min-h-[1200px] bg-gray-50">
      {/* Background Image */}
      {/* Desktop Background Image */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/section-background.png"
          alt="Core advantages background with wireframe sphere"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-16 items-start h-full min-h-[800px]">
          {/* Left side - Background sphere (handled by background image) */}
          <div></div>

          {/* Right side - Scrollable Content */}
          <div
            className="h-full max-h-[800px] overflow-y-auto pr-4"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#cbd5e1 transparent" }}
          >
            <div className="space-y-10">
              <h2 className="text-red-600 text-4xl font-bold">Core Advantages</h2>

              {/* 1. Professional Investment */}
              <div className="space-y-5">
                <h3 className="text-red-600 text-2xl font-bold">1. Professional Investment</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our investment philosophy is based on deep industry research and rigorous project selection, following
                  best practices in venture capital due diligence. Through our multi-dimensional evaluation system, we
                  accurately identify and capture the most promising investment opportunities in an evolving Web3
                  landscape.
                </p>

                <div className="space-y-4">
                  <h4 className="text-gray-800 text-xl font-bold">Key Features</h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-gray-700 text-lg font-semibold">Web3 Innovation Focus</h5>
                      <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                        <li>• AI and Web3 Integration</li>
                        <li>• Decentralized Finance</li>
                        <li>• Infrastructure Innovation</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-gray-700 text-lg font-semibold">Full-cycle Investment</h5>
                      <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                        <li>• Seed to Series A Coverage</li>
                        <li>• Flexible Investment Strategy</li>
                        <li>• Customized Financing Solutions</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-gray-700 text-lg font-semibold">Multi-dimensional Evaluation</h5>
                      <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                        <li>• Technical Feasibility</li>
                        <li>• Business Model Innovation</li>
                        <li>• Team Capability Assessment</li>
                        <li>• Market Competition Analysis</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-gray-700 text-lg font-semibold">Deep Value Mining</h5>
                      <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                        <li>• Industry Trend Insights</li>
                        <li>• Technology Development Path</li>
                        <li>• Market Opportunity Capture</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Strategic Incubation */}
              <div className="space-y-5">
                <h3 className="text-red-600 text-2xl font-bold">2. Strategic Incubation</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We provide comprehensive project incubation services, from technical development to market expansion,
                  helping projects achieve rapid growth.
                </p>

                <div className="space-y-4">
                  <h4 className="text-gray-800 text-xl font-bold">Service System</h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-gray-700 text-lg font-semibold">One-stop Incubation Services</h5>
                      <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                        <li>• Technical Architecture Design</li>
                        <li>• Product Roadmap Planning</li>
                        <li>• Market Positioning Strategy</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-gray-700 text-lg font-semibold">Comprehensive Resource Network</h5>
                      <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                        <li>• Industry Expert Network</li>
                        <li>• Technical Partners</li>
                        <li>• Media Partner Resources</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-gray-700 text-lg font-semibold">Professional Post-investment Management</h5>
                      <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                        <li>• Operational Metrics Tracking</li>
                        <li>• Growth Strategy Development</li>
                        <li>• Risk Control Management</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-gray-700 text-lg font-semibold">Brand Building Support</h5>
                      <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                        <li>• Brand Positioning Planning</li>
                        <li>• Content Marketing Strategy</li>
                        <li>• Community Operations Support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. DAO Governance & Token Utility */}
              <div className="space-y-5">
                <h3 className="text-red-600 text-2xl font-bold">3. DAO Governance & Token Utility</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We adopt a decentralized governance model with our $IADAO token to ensure transparency, equitable
                  participation, and aligned incentives across our ecosystem, implementing best practices in DAO
                  tokenomics and governance structures.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-800 text-xl font-bold">Governance Structure</h4>
                    <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                      <li>• Community-driven Decision Making</li>
                      <li>• Voting Weight Distribution</li>
                      <li>• Proposal Process Management</li>
                      <li>• Community Engagement Mechanisms</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-gray-800 text-xl font-bold">Multi-sig Treasury Management</h4>
                    <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                      <li>• Fund Security Assurance through industry-standard protocols</li>
                      <li>• Transparent Fund Flow</li>
                      <li>• Professional Audit Mechanism</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-gray-800 text-xl font-bold">LP Rights Protection</h4>
                    <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                      <li>• Investment Return Distribution</li>
                      <li>• Governance Weight Setting</li>
                      <li>• Exit Mechanism Guarantee</li>
                      <li>• Co-Investment Opportunities</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-gray-800 text-xl font-bold">$IADAO Token Utility</h4>
                    <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                      <li>• Governance Voting Rights</li>
                      <li>• Investment Allocation Access</li>
                      <li>• Fee Discounts for Services</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Market Value Management */}
              <div className="space-y-5">
                <h3 className="text-red-600 text-2xl font-bold">4. Market Value Management</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We adopt a long-term value-oriented approach through systematic market value management mechanisms to
                  enhance project market performance and brand recognition, strengthen investor confidence, and build a
                  positive, transparent, and sustainable secondary market ecosystem.
                </p>

                <div className="space-y-4">
                  <h4 className="text-gray-800 text-xl font-bold">Management Strategies</h4>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-gray-700 text-lg font-semibold">Liquidity Support Mechanisms</h5>
                      <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                        <li>• Multi-platform Liquidity Deployment</li>
                        <li>• AMM-based Automated Market Making Strategies</li>
                        <li>• Depth Pool Development with CEXs and DEXs</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-gray-700 text-lg font-semibold">Market Information Transparency</h5>
                      <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                        <li>• Regular Disclosure of Core Operational and Financial Metrics</li>
                        <li>• Monthly Updates Maintained for 180 Days Post-launch</li>
                        <li>• Real-time Data Dashboard and Token Holder Structure Tracking</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-gray-700 text-lg font-semibold">Investor Relations Management</h5>
                      <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                        <li>• Establishing Communication Channels with Institutional and Community Investors</li>
                        <li>• Publishing Quarterly Project Progress Reports</li>
                        <li>• Planning Educational Content and AMAs to Strengthen Trust</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-gray-700 text-lg font-semibold">Brand and Community Synergy</h5>
                      <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                        <li>• Precise Narrative Strategies Aligned with Mainstream Market Focus</li>
                        <li>• Multi-language Brand Communication and International PR Support</li>
                        <li>• Coordinating Community Operations with Secondary Market Dynamics</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-gray-700 text-lg font-semibold">Risk Response Mechanisms</h5>
                      <ul className="text-gray-600 text-base ml-4 space-y-2 mt-2">
                        <li>• Sentiment Volatility Analysis and Emergency Communication Plans</li>
                        <li>• Establishing Internal Early Warning Systems and Market Intelligence Networks</li>
                        <li>• Leveraging Quantitative Analysis for Price Stability Modeling</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden w-full">
          {/* Mobile Background Image */}
          <div className="absolute inset-0 z-0 md:hidden">
            <Image
              src="/images/core-advantages-mobile-bg.png"
              alt="Core advantages mobile background with wireframe sphere"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 w-full px-4">
            <div className="space-y-8">
              <h2 className="text-red-600 text-3xl font-bold">Core Advantages</h2>

              {/* Content with Read More functionality */}
              <div className="space-y-8">
                {/* 1. Professional Investment */}
                <div className="space-y-4">
                  <h3 className="text-red-600 text-xl font-bold">1. Professional Investment</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Our investment philosophy is based on deep industry research and rigorous project selection,
                    following best practices in venture capital due diligence. Through our multi-dimensional evaluation
                    system, we accurately identify and capture the most promising investment opportunities in an
                    evolving Web3 landscape.
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-gray-800 text-lg font-bold">Key Features</h4>

                    <div className="space-y-3">
                      <div>
                        <h5 className="text-gray-700 text-base font-semibold">Web3 Innovation Focus</h5>
                        <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                          <li>• AI and Web3 Integration</li>
                          <li>• Decentralized Finance</li>
                          <li>• Infrastructure Innovation</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-gray-700 text-base font-semibold">Full-cycle Investment</h5>
                        <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                          <li>• Seed to Series A Coverage</li>
                          <li>• Flexible Investment Strategy</li>
                          <li>• Customized Financing Solutions</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-gray-700 text-base font-semibold">Multi-dimensional Evaluation</h5>
                        <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                          <li>• Technical Feasibility</li>
                          <li>• Business Model Innovation</li>
                          <li>• Team Capability Assessment</li>
                          <li>• Market Competition Analysis</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-gray-700 text-base font-semibold">Deep Value Mining</h5>
                        <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                          <li>• Industry Trend Insights</li>
                          <li>• Technology Development Path</li>
                          <li>• Market Opportunity Capture</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Strategic Incubation - Now shown initially */}
                <div className="space-y-4">
                  <h3 className="text-red-600 text-xl font-bold">2. Strategic Incubation</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    We provide comprehensive project incubation services, from technical development to market
                    expansion, helping projects achieve rapid growth.
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-gray-800 text-lg font-bold">Service System</h4>

                    <div className="space-y-3">
                      <div>
                        <h5 className="text-gray-700 text-base font-semibold">One-stop Incubation Services</h5>
                        <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                          <li>• Technical Architecture Design</li>
                          <li>• Product Roadmap Planning</li>
                          <li>• Market Positioning Strategy</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-gray-700 text-base font-semibold">Comprehensive Resource Network</h5>
                        <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                          <li>• Industry Expert Network</li>
                          <li>• Technical Partners</li>
                          <li>• Media Partner Resources</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-gray-700 text-base font-semibold">
                          Professional Post-investment Management
                        </h5>
                        <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                          <li>• Operational Metrics Tracking</li>
                          <li>• Growth Strategy Development</li>
                          <li>• Risk Control Management</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-gray-700 text-base font-semibold">Brand Building Support</h5>
                        <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                          <li>• Brand Positioning Planning</li>
                          <li>• Content Marketing Strategy</li>
                          <li>• Community Operations Support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Keep sections 3 and 4 inside isExpanded condition */}
                {isExpanded && (
                  <>
                    {/* 3. DAO Governance & Token Utility */}
                    <div className="space-y-4">
                      <h3 className="text-red-600 text-xl font-bold">3. DAO Governance & Token Utility</h3>
                      <p className="text-gray-700 text-base leading-relaxed">
                        We adopt a decentralized governance model with our $IADAO token to ensure transparency,
                        equitable participation, and aligned incentives across our ecosystem, implementing best
                        practices in DAO tokenomics and governance structures.
                      </p>

                      <div className="space-y-3">
                        <div>
                          <h4 className="text-gray-800 text-lg font-bold">Governance Structure</h4>
                          <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                            <li>• Community-driven Decision Making</li>
                            <li>• Voting Weight Distribution</li>
                            <li>• Proposal Process Management</li>
                            <li>• Community Engagement Mechanisms</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-gray-800 text-lg font-bold">Multi-sig Treasury Management</h4>
                          <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                            <li>• Fund Security Assurance through industry-standard protocols</li>
                            <li>• Transparent Fund Flow</li>
                            <li>• Professional Audit Mechanism</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-gray-800 text-lg font-bold">LP Rights Protection</h4>
                          <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                            <li>• Investment Return Distribution</li>
                            <li>• Governance Weight Setting</li>
                            <li>• Exit Mechanism Guarantee</li>
                            <li>• Co-Investment Opportunities</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-gray-800 text-lg font-bold">$IADAO Token Utility</h4>
                          <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                            <li>• Governance Voting Rights</li>
                            <li>• Investment Allocation Access</li>
                            <li>• Fee Discounts for Services</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* 4. Market Value Management */}
                    <div className="space-y-4">
                      <h3 className="text-red-600 text-xl font-bold">4. Market Value Management</h3>
                      <p className="text-gray-700 text-base leading-relaxed">
                        We adopt a long-term value-oriented approach through systematic market value management
                        mechanisms to enhance project market performance and brand recognition, strengthen investor
                        confidence, and build a positive, transparent, and sustainable secondary market ecosystem.
                      </p>

                      <div className="space-y-3">
                        <h4 className="text-gray-800 text-lg font-bold">Management Strategies</h4>

                        <div className="space-y-3">
                          <div>
                            <h5 className="text-gray-700 text-base font-semibold">Liquidity Support Mechanisms</h5>
                            <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                              <li>• Multi-platform Liquidity Deployment</li>
                              <li>• AMM-based Automated Market Making Strategies</li>
                              <li>• Depth Pool Development with CEXs and DEXs</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-gray-700 text-base font-semibold">Market Information Transparency</h5>
                            <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                              <li>• Regular Disclosure of Core Operational and Financial Metrics</li>
                              <li>• Monthly Updates Maintained for 180 Days Post-launch</li>
                              <li>• Real-time Data Dashboard and Token Holder Structure Tracking</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-gray-700 text-base font-semibold">Investor Relations Management</h5>
                            <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                              <li>• Establishing Communication Channels with Institutional and Community Investors</li>
                              <li>• Publishing Quarterly Project Progress Reports</li>
                              <li>• Planning Educational Content and AMAs to Strengthen Trust</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-gray-700 text-base font-semibold">Brand and Community Synergy</h5>
                            <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                              <li>• Precise Narrative Strategies Aligned with Mainstream Market Focus</li>
                              <li>• Multi-language Brand Communication and International PR Support</li>
                              <li>• Coordinating Community Operations with Secondary Market Dynamics</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="text-gray-700 text-base font-semibold">Risk Response Mechanisms</h5>
                            <ul className="text-gray-600 text-sm ml-4 space-y-1 mt-1">
                              <li>• Sentiment Volatility Analysis and Emergency Communication Plans</li>
                              <li>• Establishing Internal Early Warning Systems and Market Intelligence Networks</li>
                              <li>• Leveraging Quantitative Analysis for Price Stability Modeling</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Read More Button */}
                <div className="flex justify-start pt-4">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>{isExpanded ? "Show Less" : "Read More"}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
