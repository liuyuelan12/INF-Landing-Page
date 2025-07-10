"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-[#13325E] text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-8">
            <Image
              src="/images/logo.png"
              alt="Infinite Alliance Logo"
              width={200}
              height={60}
              className="rounded-full"
            />
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-blue-200 hover:bg-blue-700/50 bg-blue-700/30 rounded-full p-2"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation - hidden when search is open */}
          <nav
            className={`hidden md:flex items-center space-x-12 transition-opacity duration-300 ${isSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link href="/roadmap" className="hover:text-blue-200 transition-colors">
              Roadmap
            </Link>
            <Link href="/core-team" className="hover:text-blue-200 transition-colors">
              Core Team
            </Link>
            <Link href="/success-stories" className="hover:text-blue-200 transition-colors">
              Success Stories
            </Link>
          </nav>

          {/* Right Side Actions - hidden when search is open */}
          <div
            className={`flex items-center space-x-4 transition-opacity duration-300 ${isSearchOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          >
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-200">
              <span className="text-sm">EN</span>
              <ChevronDown className="h-4 w-4" />
            </div>

            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              Login
            </Button>
          </div>
        </div>

        {/* Search Bar Overlay */}
        <div
          className={`absolute top-0 left-0 right-0 h-16 bg-[#13325E] flex items-center justify-center transition-all duration-300 ${isSearchOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
        >
          <div className="flex items-center space-x-4 w-full max-w-2xl px-4">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              autoFocus={isSearchOpen}
            />
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-blue-200"
              onClick={() => setIsSearchOpen(false)}
            >
              ✕
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
