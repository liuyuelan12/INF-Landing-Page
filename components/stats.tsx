import Image from "next/image"

export default function Stats() {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/mask-group-17.png" alt="Stats background" fill className="object-cover" />
      </div>

      {/* Content - Full width grid */}
      <div className="relative z-10">
        {/* 3x3 Grid Layout with lines extending to edges */}
        <div className="grid grid-cols-3 min-h-[700px]">
          {/* Position 1 - Empty */}
          <div className="border-r border-b border-black/25"></div>

          {/* Position 2 - Empty */}
          <div className="border-r border-b border-black/25"></div>

          {/* Position 3 - Top Right Text */}
          <div className="text-white/40 flex items-center justify-center p-8 border-b border-black/25">
            <div className="text-right leading-relaxed">
              <p className="text-2xl font-light">Accelerating</p>
              <p className="text-2xl font-light">Web3 Excellence</p>
            </div>
          </div>

          {/* Position 4 - AUM Stat (Middle Left) */}
          <div className="text-white flex items-center justify-center p-8 border-r border-b border-black/25">
            <div className="flex items-center space-x-6">
              <Image src="/images/aum.png" alt="AUM Icon" width={80} height={80} className="opacity-80" />
              <div>
                <div className="text-5xl font-bold mb-2">$50M+</div>
                <div className="text-xl text-white/80">AUM</div>
              </div>
            </div>
          </div>

          {/* Position 5 - Portfolio Projects Stat (Middle Center) with diagonal gradient */}
          <div className="relative text-white flex items-center justify-center p-8 border-r border-b border-black/25">
            {/* Diagonal gradient background */}
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
                <div className="text-5xl font-bold mb-2">25+</div>
                <div className="text-xl text-white/80">Portfolio Projects</div>
              </div>
            </div>
          </div>

          {/* Position 6 - Successful Exits Stat (Middle Right) */}
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
                <div className="text-5xl font-bold mb-2">4</div>
                <div className="text-xl text-white/80">Successful Exits</div>
              </div>
            </div>
          </div>

          {/* Position 7 - Bottom Left Text */}
          <div className="text-white/40 flex items-center justify-center p-8 border-r border-black/25">
            <div className="leading-relaxed">
              <p className="text-2xl font-light">Leading Web3</p>
              <p className="text-2xl font-light">Investment Platform</p>
            </div>
          </div>

          {/* Position 8 - Main Tagline (Bottom Center) */}
          <div className="text-center text-white flex items-center justify-center p-8 border-r border-black/25">
            <h2 className="text-2xl font-light leading-relaxed text-white/80">
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
