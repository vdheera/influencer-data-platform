'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ChevronDown, Menu } from 'lucide-react'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="py-4 border-b border-gray-200 bg-white">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/logo.svg" alt="Equals" width={120} height={28} className="h-7 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-sm font-medium text-gray-800 hover:text-primary">
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[280px] p-4">
                <div className="grid gap-4">
                  <DropdownMenuItem asChild className="p-0 hover:bg-transparent">
                    <Link href="/business-intelligence" className="flex flex-col space-y-1 p-2 rounded-lg hover:bg-gray-50">
                      <span className="font-medium">Business Intelligence</span>
                      <span className="text-sm text-gray-500">Analyze data from your own warehouse, in a spreadsheet.</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="p-0 hover:bg-transparent">
                    <Link href="/subscription-analytics" className="flex flex-col space-y-1 p-2 rounded-lg hover:bg-gray-50">
                      <span className="font-medium">Subscription Analytics</span>
                      <span className="text-sm text-gray-500">Get CFO-grade clarity into your ARR and SaaS metrics.</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="p-0 hover:bg-transparent">
                    <Link href="/crm-analytics" className="flex flex-col space-y-1 p-2 rounded-lg hover:bg-gray-50">
                      <span className="font-medium">CRM Analytics</span>
                      <span className="text-sm text-gray-500">Visualize your pipeline, leads, and sales performance in real time.</span>
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-sm font-medium text-gray-800 hover:text-primary">
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[280px] p-4">
                <div className="grid gap-4">
                  <DropdownMenuItem asChild className="p-0 hover:bg-transparent">
                    <Link href="/guides/arr" className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0 h-6 w-6 bg-equals-yellow rounded-md"></div>
                      <div className="flex flex-col space-y-1">
                        <span className="font-medium">The Ultimate Guide to ARR</span>
                        <span className="text-sm text-gray-500">Two experts break down how to measure and influence ARR.</span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="p-0 hover:bg-transparent">
                    <Link href="/guides/saas-metrics" className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0 h-6 w-6 bg-equals-orange rounded-md"></div>
                      <div className="flex flex-col space-y-1">
                        <span className="font-medium">The Guide to SaaS Metrics</span>
                        <span className="text-sm text-gray-500">A deep dive on the unique metrics required by SaaS businesses.</span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/launches" className="text-sm font-medium text-gray-800 hover:text-primary">
              Launches
            </Link>

            <Link href="/pricing" className="text-sm font-medium text-gray-800 hover:text-primary">
              Pricing
            </Link>

            <Link href="/about" className="text-sm font-medium text-gray-800 hover:text-primary">
              About
            </Link>
          </nav>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="https://go.equals.com" className="text-sm font-medium text-gray-800 hover:text-primary">
            Sign in
          </Link>
          <Button className="btn-primary">Get Started</Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex flex-col space-y-3">
                  <h3 className="text-sm font-medium text-muted-foreground">Products</h3>
                  <Link href="/business-intelligence" onClick={() => setOpen(false)} className="text-base py-2">
                    Business Intelligence
                  </Link>
                  <Link href="/subscription-analytics" onClick={() => setOpen(false)} className="text-base py-2">
                    Subscription Analytics
                  </Link>
                  <Link href="/crm-analytics" onClick={() => setOpen(false)} className="text-base py-2">
                    CRM Analytics
                  </Link>
                </div>

                <div className="flex flex-col space-y-3">
                  <h3 className="text-sm font-medium text-muted-foreground">Resources</h3>
                  <Link href="/guides/arr" onClick={() => setOpen(false)} className="text-base py-2">
                    The Ultimate Guide to ARR
                  </Link>
                  <Link href="/guides/saas-metrics" onClick={() => setOpen(false)} className="text-base py-2">
                    The Guide to SaaS Metrics
                  </Link>
                </div>

                <div className="flex flex-col space-y-3">
                  <Link href="/launches" onClick={() => setOpen(false)} className="text-base py-2">
                    Launches
                  </Link>
                  <Link href="/pricing" onClick={() => setOpen(false)} className="text-base py-2">
                    Pricing
                  </Link>
                  <Link href="/about" onClick={() => setOpen(false)} className="text-base py-2">
                    About
                  </Link>
                </div>

                <div className="flex flex-col space-y-4 mt-4">
                  <Link href="https://go.equals.com" onClick={() => setOpen(false)} className="text-base py-2">
                    Sign in
                  </Link>
                  <Button onClick={() => setOpen(false)} className="btn-primary w-full">
                    Get Started
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
