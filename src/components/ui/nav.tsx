"use client"

import Link from "next/link"
import { Button } from "./button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Automent</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/calculator">
              <Button variant="outline">Value Calculator</Button>
            </Link>
            <Link href="/intake">
              <Button variant="outline">Start Assessment</Button>
            </Link>
            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Book a Call
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-200 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 w-full max-w-sm bg-background border-l shadow-lg transform transition-transform duration-200 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-6 space-y-4">
            <Link
              href="/calculator"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="outline" className="w-full justify-start">
                Value Calculator
              </Button>
            </Link>
            <Link
              href="/intake"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="outline" className="w-full justify-start">
                Start Assessment
              </Button>
            </Link>
            <Link
              href="/"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 