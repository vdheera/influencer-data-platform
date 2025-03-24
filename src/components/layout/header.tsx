'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [showEmailDialog, setShowEmailDialog] = useState(false)
  const [email, setEmail] = useState('')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false) // Close mobile menu after clicking
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log('Email submitted:', email)
    setShowEmailDialog(false)
    setEmail('')
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4">
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-pink-600">
            zeen
          </span>
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
          <Button 
            onClick={() => setShowEmailDialog(true)}
            className="bg-purple-900 hover:bg-purple-800 text-white rounded-full px-6"
          >
            Get Access Now
          </Button>
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
                  <Button 
                    onClick={() => {
                      setOpen(false)
                      setShowEmailDialog(true)
                    }} 
                    className="bg-purple-900 hover:bg-purple-800 text-white rounded-full w-full"
                  >
                    Get Access Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Email Collection Dialog */}
      <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-purple-950">Get Access</DialogTitle>
            <DialogDescription className="text-purple-900">
              Sign up to access our full database of verified influencers and advanced analytics.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your work email"
                className="w-full"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full bg-purple-900 hover:bg-purple-800 text-white">
                Get Access
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  )
}

export default Header
