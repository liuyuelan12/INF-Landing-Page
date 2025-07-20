"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])
  return (
    <section ref={sectionRef} className="relative py-10 md:py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/mask-group-17.png" alt="Stats background" fill className="object-cover" />
      </div>

      {/* Content - Responsive Grid */}
      <div className="relative z-10">
        {/* Mobile Layout - Single Column */}
        <div className="block md:hidden">
          <div className="container mx-auto px-4 space-y-8">
            {/* Main Tagline */}
            <div className="text-center text-white py-8">
              <h2 className="text-xl font-light leading-relaxed text-white/80">
                Global Leading Web3
                <br />
                Investment and Incubation
                <br />
                Platform
              </h2>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 gap-6">
              {/* AUM Stat */}
              <div
                className={`text-white flex items-center justify-center p-6 bg-black/20 rounded-lg transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="flex items-center space-x-4">
                  <Image src="/images/aum.png" alt="AUM Icon" width={60} height={60} className="opacity-80" />
                  <div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">$50M+</div>
                    <div className="text-lg text-white/80">AUM</div>
                  </div>
                </div>
              </div>

              {/* Portfolio Projects Stat */}
              <div
                className={`relative text-white flex items-center justify-center p-6 bg-black/20 rounded-lg transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div
                  className="absolute inset-0 opacity-80 rounded-lg"
                  style={{
                    background: "linear-gradient(135deg, #13325E 0%, #000000 100%)",
                  }}
                ></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <Image
                    src="/images/portfolio-projects.png"
                    alt="Portfolio Projects Icon"
                    width={60}
                    height={60}
                    className="opacity-80"
                  />
                  <div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
                    <div className="text-lg text-white/80">Portfolio Projects</div>
                  </div>
                </div>
              </div>

              {/* Successful Exits Stat */}
              <div
                className={`text-white flex items-center justify-center p-6 bg-black/20 rounded-lg transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/successful-exit.png"
                    alt="Successful Exits Icon"
                    width={60}
                    height={60}
                    className="opacity-80"
                  />
                  <div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">4</div>
                    <div className="text-lg text-white/80">Successful Exits</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-white/40 text-center py-4">
              <p className="text-lg font-light">Accelerating Web3 Excellence</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - 3x3 Grid */}
        <div className="hidden md:grid grid-cols-3 min-h-[500px] lg:min-h-[700px]">
          {/* Position 1 - Empty */}
          <div className="border-r border-b border-black/25"></div>

          {/* Position 2 - Empty */}
          <div className="border-r border-b border-black/25"></div>

          {/* Position 3 - Top Right Text */}
          <div className="text-white/40 flex items-center justify-center p-8 border-b border-black/25">
            <div className="text-right leading-relaxed">
              <p className="text-xl lg:text-2xl font-light">Accelerating</p>
              <p className="text-xl lg:text-2xl font-light">Web3 Excellence</p>
            </div>
          </div>

          {/* Position 4 - AUM Stat */}
          <div className="text-white flex items-center justify-center p-8 border-r border-b border-black/25">
            <div className="flex items-center space-x-6">
              <Image src="/images/aum.png" alt="AUM Icon" width={80} height={80} className="opacity-80" />
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">$50M+</div>
                <div className="text-lg lg:text-xl text-white/80">AUM</div>
              </div>
            </div>
          </div>

          {/* Position 5 - Portfolio Projects Stat */}
          <div className="relative text-white flex items-center justify-center p-8 border-r border-b border-black/25">
            <div
              className="absolute inset-0 opacity-80"
              style={{
                background: "linear-gradient(135deg, #13325E 0%, #000000 100%)",
              }}
            ></div>
            <div className="relative z-10 flex items-center space-x-6">
              <Image
                src="/images/portfolio-projects.png"
                alt="Portfolio Projects Icon"
                width={80}
                height={80}
                className="opacity-80"
              />
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">25+</div>
                <div className="text-lg lg:text-xl text-white/80">Portfolio Projects</div>
              </div>
            </div>
          </div>

          {/* Position 6 - Successful Exits Stat */}
          <div className="text-white flex items-center justify-center p-8 border-b border-black/25">
            <div className="flex items-center space-x-6">
              <Image
                src="/images/successful-exit.png"
                alt="Successful Exits Icon"
                width={80}
                height={80}
                className="opacity-80"
              />
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">4</div>
                <div className="text-lg lg:text-xl text-white/80">Successful Exits</div>
              </div>
            </div>
          </div>

          {/* Position 7 - Bottom Left Text */}
          <div className="text-white/40 flex items-center justify-center p-8 border-r border-black/25">
            <div className="leading-relaxed">
              <p className="text-xl lg:text-2xl font-light">Leading Web3</p>
              <p className="text-xl lg:text-2xl font-light">Investment Platform</p>
            </div>
          </div>

          {/* Position 8 - Main Tagline */}
          <div className="text-center text-white flex items-center justify-center p-8 border-r border-black/25">
            <h2 className="text-xl lg:text-2xl font-light leading-relaxed text-white/80">
              Global Leading Web3
              <br />
              Investment and Incubation
              <br />
              Platform
            </h2>
          </div>

          {/* Position 9 - Empty */}
          <div></div>
        </div>
      </div>
    </section>
  )
}
