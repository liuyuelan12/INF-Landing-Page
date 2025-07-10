import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[800px] lg:min-h-[1000px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.png"
          alt="Conference presentation background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center lg:items-end min-h-[600px] md:min-h-[800px] lg:min-h-[1000px] pb-12 md:pb-24 lg:pb-48">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1
            className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5), 1px 1px 2px rgba(0,0,0,0.3)" }}
          >
            <span className="font-light">Accelerating</span>
            <br />
            <span className="font-bold">Web3 Excellence</span>
          </h1>

          <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
            Global Leading Web3 Investment and Incubation Platform
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 text-sm md:text-base font-semibold"
            >
              Apply for Funding
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 md:px-8 py-3 text-sm md:text-base font-semibold bg-transparent"
            >
              Explore Portfolio
            </Button>
          </div>
        </div>

        {/* Right Content - Hidden on mobile */}
        <div className="hidden lg:flex flex-col items-end text-sm text-white/80 mt-8 lg:mt-0">
          <span className="hover:text-white cursor-pointer transition-colors mb-1">Join Investor Network</span>
          <span className="text-white/60">|</span>
          <span className="hover:text-white cursor-pointer transition-colors mt-1">View Research Reports</span>
        </div>
      </div>

      {/* Bottom Natural Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-blue-900/20 via-blue-800/10 to-transparent z-5"></div>
      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-16 bg-gradient-to-t from-blue-950/15 to-transparent z-5"></div>
    </section>
  )
}
