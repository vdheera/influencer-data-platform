'use client'

import React, { useState, ChangeEvent } from 'react'
import Divider from '@/components/ui/divider'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Filter, ArrowUpDown, ChevronDown } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'

const DatabaseSection = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showEmailDialog, setShowEmailDialog] = useState(false)
  const [email, setEmail] = useState('')

  // Sample data structure (in real app, this would come from an API)
  const sampleData = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Influencer ${i + 1}`,
    platform: ['Instagram', 'TikTok', 'YouTube'][Math.floor(Math.random() * 3)],
    followers: Math.floor(Math.random() * 1000000) + 10000,
    engagement: (Math.random() * 10).toFixed(2) + '%',
    category: ['Fashion', 'Tech', 'Lifestyle', 'Gaming'][Math.floor(Math.random() * 4)]
  }))

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  const handleNextClick = () => {
    setShowEmailDialog(true)
  }

  const handleMoreFiltersClick = () => {
    setShowEmailDialog(true)
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log('Email submitted:', email)
    setShowEmailDialog(false)
    setEmail('')
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-pink-50/50 to-white pointer-events-none" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,192,203,0.1),transparent_50%),radial-gradient(circle_at_left,_rgba(147,51,234,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-pink-600 to-purple-900">
            Explore Our Database
          </h1>
          <p className="text-lg text-purple-950">
            Search through thousands of verified influencers across all major platforms
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl border border-purple-200 overflow-hidden">
          {/* Search and Filter Bar */}
          <div className="p-6 border-b border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-600 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search influencers..."
                  className="pl-10 bg-white w-full"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="flex gap-3">
                <div className="relative">
                  <select
                    className="h-10 pl-4 pr-10 rounded-lg border border-purple-300 bg-white text-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    <option>All Categories</option>
                    <option>Fashion</option>
                    <option>Tech</option>
                    <option>Lifestyle</option>
                    <option>Gaming</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-purple-600 pointer-events-none" />
                </div>
                <Button 
                  variant="outline" 
                  onClick={handleMoreFiltersClick}
                  className="h-10 flex items-center gap-2 border-purple-300 text-purple-950 hover:bg-purple-50"
                >
                  <Filter className="h-4 w-4" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-100 to-pink-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-purple-950">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-pink-700">
                      Name
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-purple-950">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-pink-700">
                      Platform
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-purple-950">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-pink-700">
                      Followers
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-purple-950">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-pink-700">
                      Engagement
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-purple-950">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-pink-700">
                      Category
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100">
                {sampleData.map((row) => (
                  <tr key={row.id} className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-purple-950 font-medium">{row.name}</td>
                    <td className="px-6 py-4 text-sm text-purple-900">{row.platform}</td>
                    <td className="px-6 py-4 text-sm text-purple-900">
                      {new Intl.NumberFormat().format(row.followers)}
                    </td>
                    <td className="px-6 py-4 text-sm text-purple-900">{row.engagement}</td>
                    <td className="px-6 py-4 text-sm text-purple-900">{row.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-6 border-t border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex items-center justify-between">
              <p className="text-sm text-purple-950">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                <span className="font-medium">10,000+</span> results
              </p>
              <div className="flex gap-2">
                <Button variant="outline" disabled className="border-purple-300 text-purple-950 hover:bg-purple-50">Previous</Button>
                <Button variant="outline" onClick={handleNextClick} className="border-purple-300 text-purple-950 hover:bg-purple-50">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Collection Dialog */}
      <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-purple-950">Get Access to More Data</DialogTitle>
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
    </section>
  )
}

export default DatabaseSection 