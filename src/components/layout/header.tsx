'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

const Header = () => {
  const [open, setOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false) // Close mobile menu after clicking
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4">
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image src="/images/logo.svg" alt="Equals" width={120} height={28} className="h-7 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-sm font-medium text-purple-900 hover:text-pink-500 transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('use-cases')}
            className="text-sm font-medium text-purple-900 hover:text-pink-500 transition-colors"
          >
            Use Cases
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-purple-900 hover:text-pink-500 transition-colors"
          >
            Contact
          </button>
          <Button className="bg-purple-900 hover:bg-purple-800 text-white rounded-full px-6">Start Free Trial</Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-purple-200 text-purple-900">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex flex-col space-y-4 mt-4">
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-base text-purple-900 py-2 text-left hover:text-pink-500 transition-colors"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => scrollToSection('use-cases')}
                    className="text-base text-purple-900 py-2 text-left hover:text-pink-500 transition-colors"
                  >
                    Use Cases
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-base text-purple-900 py-2 text-left hover:text-pink-500 transition-colors"
                  >
                    Contact
                  </button>
                  <Button onClick={() => setOpen(false)} className="bg-purple-900 hover:bg-purple-800 text-white rounded-full w-full">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
