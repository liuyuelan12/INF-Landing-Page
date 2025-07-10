import Image from "next/image"

export default function SuccessStories() {
  return (
    <section className="relative">
      {/* Top Section with Red Background */}
      <div className="relative py-16">
        {/* Red Background Mask */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/red-background-mask.png" alt="Red background mask" fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-white">
            <h2 className="text-2xl font-light mb-4">Success Stories</h2>
            <h3 className="text-4xl font-bold max-w-2xl">Hopper - Multi-chain Decentralized Trading Platform</h3>
          </div>
        </div>
      </div>

      {/* Bottom Section with White Background */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-16 relative min-h-[700px]">
            {/* Vertical Divider between left and right */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

            {/* Left Side - Conference Photos */}
            <div className="space-y-8">
              <div className="relative">
                <Image
                  src="/images/conference-photo-1.png"
                  alt="Conference presentation with large audience"
                  width={500}
                  height={350}
                  className="rounded-lg w-full object-cover"
                />
              </div>

              <div className="relative">
                <Image
                  src="/images/conference-photo-2.png"
                  alt="Conference audience listening to speaker"
                  width={500}
                  height={350}
                  className="rounded-lg w-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content split into two equal parts */}
            <div className="flex flex-col h-full">
              {/* Investment Results Section - Top Half */}
              <div className="flex-1 flex flex-col justify-center space-y-6 py-8">
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

              {/* Horizontal Divider */}
              <div className="w-full h-px bg-gray-300"></div>

              {/* Project Highlights Section - Bottom Half */}
              <div className="flex-1 flex flex-col justify-center space-y-6 py-8">
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
      </div>

      {/* Bottom Gray Divider */}
      <div className="w-full h-px bg-gray-300"></div>
    </section>
  )
}
