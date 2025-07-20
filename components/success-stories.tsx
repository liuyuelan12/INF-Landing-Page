"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export default function SuccessStories() {
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

  return (
    <section ref={sectionRef} id="success-stories" className="relative">
      {/* Top Section with Red Background */}
      <div className="relative py-16">
        {/* Red Background Mask */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/red-background-mask.png" alt="Red background mask" fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-white">
            <h2
              className={`text-2xl font-light mb-4 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              Success Stories
            </h2>
            <h3
              className={`text-4xl font-bold max-w-2xl transition-all duration-1000 ease-out delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              Hopper - Multi-chain Decentralized Trading Platform
            </h3>
          </div>
        </div>
      </div>

      {/* Bottom Section with White Background */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="md:grid md:grid-cols-2 md:gap-16 relative md:min-h-[700px]">
            {/* Vertical Divider between left and right */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2 md:block hidden"></div>

            {/* Left Side - Conference Photos */}
            <div className="space-y-8 md:block hidden">
              <div className="relative">
                <Image
                  src="/images/conference-photo-1.png"
                  alt="Conference presentation with large audience"
                  width={500}
                  height={350}
                  className={`rounded-lg w-full object-cover transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-xl ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                />
              </div>

              <div className="relative">
                <Image
                  src="/images/conference-photo-2.png"
                  alt="Conference audience listening to speaker"
                  width={500}
                  height={350}
                  className={`rounded-lg w-full object-cover transition-all duration-700 ease-out delay-300 transform hover:scale-105 hover:shadow-xl ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                />
              </div>
            </div>

            {/* Right Side - Content split into two equal parts */}
            <div className="md:block hidden h-full">
              <div className="h-full flex flex-col">
                {/* Investment Results Section - Exactly 50% height */}
                <div className="flex-1 flex flex-col justify-center px-6">
                  <div
                    className={`space-y-6 transition-all duration-700 ease-out delay-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                  >
                    <div className="space-y-4">
                      <Image
                        src="/images/globe-wireframe.png"
                        alt="Globe wireframe icon"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                      <h4 className="text-red-600 text-2xl font-bold">Investment Results</h4>
                    </div>

                    <div className="space-y-4 text-gray-700">
                      <p className="text-lg">Successfully raised $1.7 million in seed funding</p>
                      <p className="text-lg">Solid initial capital supporting project development</p>
                    </div>
                  </div>
                </div>

                {/* Horizontal Divider - Perfectly centered */}
                <div className="w-full h-px bg-gray-300 flex-shrink-0"></div>

                {/* Project Highlights Section - Exactly 50% height */}
                <div className="flex-1 flex flex-col justify-center px-6">
                  <div
                    className={`space-y-6 transition-all duration-700 ease-out delay-700 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                  >
                    <div className="space-y-4">
                      <Image
                        src="/images/red-oval-design.png"
                        alt="Red oval design icon"
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                      <h4 className="text-red-600 text-2xl font-bold">Project Highlights</h4>
                    </div>

                    <div className="space-y-4 text-gray-700">
                      <p className="text-lg">Advanced MPC Wallet Technology with 99.99% Security Score</p>
                      <p className="text-lg">AI Model Marketplaces</p>
                      <p className="text-lg">Privacy-Preserving Machine Learning</p>
                      <p className="text-lg">Federated Learning Networks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Full Width */}
            <div className="block md:hidden col-span-2">
              {/* Conference Photo - Full Width */}
              <div className="mb-8 -mx-4 px-4">
                <div className="relative">
                  <Image
                    src="/images/conference-photo-1.png"
                    alt="Conference presentation with large audience"
                    width={500}
                    height={300}
                    className="w-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Investment Results Section */}
              <div className="mb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <Image
                    src="/images/globe-wireframe.png"
                    alt="Globe wireframe icon"
                    width={60}
                    height={60}
                    className="object-contain mt-2 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-red-600 text-xl font-bold mb-4">Investment Results</h4>
                    <div className="space-y-3 text-gray-700">
                      <p className="text-base font-medium">Successfully raised $1.7 million in seed funding</p>
                      <p className="text-base">Solid initial capital supporting project development</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider for mobile */}
              <div className="w-full h-px bg-gray-300 mb-8"></div>

              {/* Project Highlights Section */}
              <div className="mb-8">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/images/red-oval-design.png"
                    alt="Red oval design icon"
                    width={60}
                    height={60}
                    className="object-contain mt-2 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-red-600 text-xl font-bold mb-4">Project Highlights</h4>
                    <div className="space-y-3 text-gray-700">
                      <p className="text-base">Advanced MPC Wallet Technology with 99.99% Security Score</p>
                      <p className="text-base">AI Model Marketplaces</p>
                      <p className="text-base">Privacy-Preserving Machine Learning</p>
                      <p className="text-base">Federated Learning Networks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gray Divider */}
      <div className="w-full h-px bg-gray-300"></div>
    </section>
  )
}
