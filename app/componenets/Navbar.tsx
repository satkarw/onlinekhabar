"use client"

import { useState } from "react"
import { Menu, Search, X } from "lucide-react"
import Link from "next/link"

// Simple utility function to replace cn
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Get current date
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const navLinks = [
    { href: "/news/politics", label: "Politics" },
    { href: "/news/economics", label: "Economy" },
    { href: "/news/lifestyle", label: "Lifestyle" },
    { href: "/news/travel", label: "Travel" },
    { href: "/news/sports", label: "Sports" },
  ]

  return (
    <nav className="fixed z-50 w-full bg-gradient-to-r from-blue-50 to-blue-100 py-3 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Date */}
          <div className="flex flex-col">
            <Link href="/" className="transition-opacity hover:opacity-90">
              <img
                src="https://english.onlinekhabar.com/wp-content/themes/onlinekhabar-english-2020/img/site-main-logo.png"
                alt="Online Khabar Logo"
                className="w-40 md:w-52 lg:w-60"
              />
            </Link>
            <p className="text-xs text-slate-500">{formattedDate}</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <div className="flex rounded-lg bg-blue-600 px-6 py-2 shadow-md">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-1 text-lg font-bold text-blue-100 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Search */}
            <div className="relative">
              <button
                className={classNames(
                  "flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white transition-colors hover:bg-blue-600",
                  isSearchOpen ? "bg-blue-600" : "",
                )}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                {isSearchOpen ? <X size={20} /> : <Search size={20} />}
              </button>

              {isSearchOpen && (
                <div className="absolute right-0 top-12 z-10 w-72 rounded-lg bg-white p-3 shadow-lg md:w-80">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full rounded-md border border-blue-200 px-3 py-1.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      autoFocus
                    />
                    <button className="rounded-md bg-blue-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-600">
                      Search
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sign Up - Hidden on mobile */}
            <button className="hidden rounded-md border border-blue-500 px-4 py-1.5 text-sm font-medium text-blue-500 transition-colors hover:bg-blue-500 hover:text-white md:flex">
              Sign Up
            </button>

            {/* Language Toggle - Hidden on mobile */}
            <button className="hidden items-center gap-2 rounded-md border border-blue-500 px-4 py-1.5 text-sm font-medium text-blue-500 transition-colors hover:bg-blue-500 hover:text-white md:flex">
              <img
                className="h-5 w-5 rounded-full"
                src="https://english.onlinekhabar.com/wp-content/themes/onlinekhabar-english-2020/img/flag.png"
                alt="Nepali Flag"
              />
              <span>नेपाली</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white transition-colors hover:bg-blue-600 lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="relative w-[280px] bg-white p-6 shadow-xl sm:w-[350px]">
            {/* Close Button */}
            <button
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>

            <div className="mt-8 flex flex-col gap-6">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-blue-600">Navigation</h2>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block border-b border-gray-100 py-2 text-lg font-semibold text-gray-800 transition-colors hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-bold text-blue-600">Account</h2>
                <button className="w-full rounded-md bg-blue-500 py-2 font-medium text-white transition-colors hover:bg-blue-600">
                  Sign Up
                </button>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-bold text-blue-600">Language</h2>
                <button className="flex w-full items-center justify-center gap-2 rounded-md border border-blue-500 py-2 font-medium text-blue-500 transition-colors hover:bg-blue-500 hover:text-white">
                  <img
                    className="h-5 w-5 rounded-full"
                    src="https://english.onlinekhabar.com/wp-content/themes/onlinekhabar-english-2020/img/flag.png"
                    alt="Nepali Flag"
                  />
                  <span>Switch to नेपाली</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

