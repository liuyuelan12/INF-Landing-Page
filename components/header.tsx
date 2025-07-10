"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#13325E] text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <Image
              src="/images/logo.png"
              alt="Infinite Alliance Logo"
              width={150}
              height={45}
              className="rounded-full md:w-[200px] md:h-[60px]"
            />
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-blue-200 hover:bg-blue-700/50 bg-blue-700/30 rounded-full p-2 hidden md:flex"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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

          {/* Desktop Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-blue-200 hover:bg-blue-700/50 bg-blue-700/30 rounded-full p-2 md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-blue-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-blue-700/30 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-blue-200 transition-colors py-2">
                Home
              </Link>
              <Link href="/roadmap" className="hover:text-blue-200 transition-colors py-2">
                Roadmap
              </Link>
              <Link href="/core-team" className="hover:text-blue-200 transition-colors py-2">
                Core Team
              </Link>
              <Link href="/success-stories" className="hover:text-blue-200 transition-colors py-2">
                Success Stories
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-blue-700/30">
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
            </nav>
          </div>
        )}

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
