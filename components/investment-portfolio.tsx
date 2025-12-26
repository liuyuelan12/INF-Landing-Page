"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export default function InvestmentPortfolio() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    const portfolioItems = [
        { name: "Aptos", logo: "/logos/aptos.png" },
        { name: "CryptoLife", logo: "/logos/cryptoLife.png" },
        { name: "Flare", logo: "/logos/flare.png" },
        { name: "Livepeer", logo: "/logos/livepeer.png" },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2
                        className={`text-4xl font-bold text-slate-900 mb-4 transition-all duration-700 ease-out transforms ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        Investment Portfolio
                    </h2>
                    <div
                        className={`h-1 w-24 bg-red-600 mx-auto transition-all duration-700 ease-out delay-200 ${isVisible ? "w-24 opacity-100" : "w-0 opacity-0"
                            }`}
                    ></div>
                    <p
                        className={`mt-6 text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-700 ease-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        We back the most promising projects in the Web3 ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={item.name}
                            className={`w-full flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 ease-out border border-slate-100 rounded-xl hover:shadow-xl hover:border-transparent bg-slate-50 hover:bg-white h-48 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                }`}
                            style={{ transitionDelay: `${400 + index * 100}ms` }}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.logo || "/placeholder.svg"}
                                    alt={`${item.name} logo`}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
