import Image from "next/image"
import Link from "next/link"
import { Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/rectangle-45.png" alt="Footer background" fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-12 mb-12">
            {/* Logo and Social Media */}
            <div className="space-y-6">
              <div className="flex items-center">
                <Image src="/images/group-51.png" alt="Infinite Alliance Logo" width={160} height={160} />
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-blue-200 transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-blue-200 transition-colors">
                  <Globe className="w-10 h-10" />
                </Link>
              </div>
            </div>

            {/* Empty space in middle */}
            <div></div>

            {/* Newsletter and Contact Us - Right Side */}
            <div className="grid grid-cols-2 gap-8">
              {/* Newsletter Column */}
              <div className="space-y-4">
                <h4 className="text-white text-lg font-semibold">Newsletter</h4>
                <div className="space-y-3">
                  <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                    Weekly Industry Insights
                  </Link>
                  <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                    Investment Strategy Sharing
                  </Link>
                  <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                    Project Updates
                  </Link>
                  <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                    Event Announcement
                  </Link>
                  <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                    Governance Proposals
                  </Link>
                  <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                    Market Research Reports
                  </Link>
                </div>
              </div>

              {/* Contact Us Column */}
              <div className="space-y-4">
                <h4 className="text-white text-lg font-semibold">Contact us</h4>
                <div className="space-y-3">
                  <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                    Business Cooperation
                  </Link>
                  <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                    Project Submission
                  </Link>
                  <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                    Media Inquiries
                  </Link>
                  <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                    Investor Relations
                  </Link>
                  <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                    Careers
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8">
            {/* Copyright and Navigation Links - Above Divider */}
            <div className="flex justify-between items-start mb-8">
              {/* Copyright - Left Side */}
              <div>
                <p className="text-white/70 text-sm">
                  © 2025 Infinite Alliance. All Rights Reserved. Registered as a Wyoming DAO LLC.
                </p>
              </div>

              {/* Navigation Links - Right Side */}
              <div className="text-right">
                <div className="flex flex-wrap gap-6 justify-end mb-2">
                  <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                    About Us
                  </Link>
                  <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                    Join Us
                  </Link>
                  <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                    News Center
                  </Link>
                  <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                    Research Publications
                  </Link>
                  <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                    Events & Webinars
                  </Link>
                  <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                    Portfolio
                  </Link>
                </div>
                <div className="flex flex-wrap gap-6 justify-end">
                  <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                    FAQ
                  </Link>
                  <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                    Terms of Service
                  </Link>
                  <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                    Disclaimer
                  </Link>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/20 mb-6"></div>

            {/* Risk Warning - Below Divider */}
            <div>
              <p className="text-white/60 text-xs leading-relaxed">
                Risk Warning: Cryptocurrency investments carry high risk. Please make informed decisions. Past
                performance is not indicative of future results. Digital assets may be subject to high market volatility
                and regulatory uncertainty. Investment strategies mentioned by our accelerator/incubator models are not
                a financial license for individual investors.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden space-y-8">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/group-51.png"
              alt="Infinite Alliance Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-blue-200 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link href="#" className="text-white hover:text-blue-200 transition-colors">
              <Globe className="w-8 h-8" />
            </Link>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">Newsletter</h4>
            <div className="space-y-3">
              <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                Weekly Industry Insights
              </Link>
              <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                Investment Strategy Sharing
              </Link>
              <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                Project Updates
              </Link>
              <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                Event Announcements
              </Link>
              <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                Governance Proposals
              </Link>
              <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                Market Research Reports
              </Link>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">Contact us</h4>
            <div className="space-y-3">
              <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                Business Cooperation
              </Link>
              <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                Project Submission
              </Link>
              <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                Media Inquiries
              </Link>
              <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                Investor Relations
              </Link>
              <Link href="#" className="block text-white/70 text-sm hover:text-white transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                About Us
              </Link>
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                Join Us
              </Link>
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                News Center
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                Research Publications
              </Link>
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                Portfolio
              </Link>
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                FAQ
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                Events & Webinars
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/70 text-sm hover:text-white transition-colors underline">
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-4">
            <p className="text-white/70 text-xs leading-relaxed mb-4">
              © 2025 Infinite Alliance. All Rights Reserved. Registered as a Wyoming DAO LLC (Wyoming Business Council,
              2022).
            </p>

            {/* Risk Warning */}
            <p className="text-white/60 text-xs leading-relaxed">
              Risk Warning: Cryptocurrency investments carry high risk. Please make informed decisions. Past performance
              is not indicative of future results. Digital assets may be subject to high market volatility and
              regulatory uncertainty.
            </p>
            <p className="text-white/60 text-xs leading-relaxed mt-2">
              Investment strategies mentioned by our accelerator/incubator models are not a financial license for
              individual investors. Comprehensive market analysis (Deloitte Center for Financial Services, 2025).
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
