"use client"

import Image from "next/image"
import Link from "next/link"
import { X, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Logo and Social */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/infinite-alliance-logo-10.svg"
                alt="Infinite Alliance"
                width={72}
                height={54}
                className="md:w-[90px] md:h-[67px]"
              />
              <span className="text-lg md:text-xl font-semibold">Infinite Alliance</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-all duration-300 ease-out transform hover:scale-125 hover:rotate-12"
              >
                <X size={20} />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-all duration-300 ease-out transform hover:scale-125 hover:-rotate-12"
              >
                <Globe size={20} />
              </Link>
            </div>
          </div>

          {/* Right Section - Newsletter and Contact */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Newsletter Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
                  >
                    Weekly Industry Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
                  >
                    Investment Strategy Sharing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
                  >
                    Project Updates
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
                  >
                    Event Announcements
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
                  >
                    Governance Proposals
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
                  >
                    Market Research Reports
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact us</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
                  >
                    Business Cooperation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
                  >
                    Project Submission
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
                  >
                    Media Inquiries
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
                  >
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 mb-6 text-sm">
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
            >
              Join Us
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
            >
              News Center
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
            >
              Research Publications
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
            >
              Events & Webinars
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-all duration-300 ease-out transform hover:translate-x-1"
            >
              Disclaimer
            </Link>
          </div>

          {/* Copyright and Risk Warning */}
          <div className="space-y-4 text-xs text-gray-400">
            <p>
              © 2025 Infinite Alliance. All rights reserved. Registered as a Wyoming DAO LLC (Wyoming Business Council,
              2024).
            </p>
            <p>
              Risk Warning: Crypto asset investment carries high risk. Please make informed decisions. Past performance
              is not indicative of future results. Current deals may be subject to high market volatility and regulatory
              uncertainty. Investment strategies referenced by our team are for informational purposes only. Please
              consult our financial services, 2024.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
