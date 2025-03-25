'use client'

import React, { useState, ChangeEvent } from 'react'
import Divider from '@/components/ui/divider'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Filter, ArrowUpDown, ChevronDown } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { supabase } from '@/lib/supabase'
import { useToast } from "@/hooks/use-toast"

const TopicPill = ({ topic }: { topic: string }) => {
  const colors = {
    Fashion: 'bg-pink-100 text-pink-700 border-pink-200',
    Tech: 'bg-blue-100 text-blue-700 border-blue-200',
    Lifestyle: 'bg-purple-100 text-purple-700 border-purple-200',
    Gaming: 'bg-green-100 text-green-700 border-green-200',
    Beauty: 'bg-orange-100 text-orange-700 border-orange-200',
    Travel: 'bg-sky-100 text-sky-700 border-sky-200',
    Food: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    Fitness: 'bg-emerald-100 text-emerald-700 border-emerald-200'
  } as const

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[topic as keyof typeof colors] || 'bg-gray-100 text-gray-700 border-gray-200'}`}>
      {topic}
    </span>
  )
}

const DatabaseSection = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showEmailDialog, setShowEmailDialog] = useState(false)
  const [email, setEmail] = useState('')
  const [dialogType, setDialogType] = useState<'next' | 'filters'>('next')
  const { toast } = useToast()

  // Sample data structure (in real app, this would come from an API)
  const sampleData = [
    {
      id: 1,
      name: '@corporatenatalie',
      platform: 'Instagram',
      followers: 1000000,
      avgLikes: 13400,
      category: 'Lifestyle',
      demographics: '25-34 US'
    },
    {
      id: 2,
      name: '@thepassportabuser',
      platform: 'Instagram',
      followers: 179000,
      avgLikes: 3000,
      category: 'Travel',
      demographics: '25-34 US'
    },
    {
      id: 3,
      name: '@salunchador',
      platform: 'Instagram',
      followers: 65000,
      avgLikes: 8900,
      category: 'Food',
      demographics: '18-34 US'
    },
    {
      id: 4,
      name: '@alexgiardina15',
      platform: 'Instagram',
      followers: 152000,
      avgLikes: 15000,
      category: 'Fitness',
      demographics: '18-34 US'
    },
    {
      id: 5,
      name: '@adrianamejiamakeup',
      platform: 'Instagram',
      followers: 137000,
      avgLikes: 4800,
      category: 'Beauty',
      demographics: '18-34 US'
    },
    {
      id: 6,
      name: '@asalamalika',
      platform: 'Instagram',
      followers: 63000,
      avgLikes: 5500,
      category: 'Fashion',
      demographics: '18-34 US'
    },
    {
      id: 7,
      name: '@subrozayt',
      platform: 'Instagram',
      followers: 66000,
      avgLikes: 18600,
      category: 'Gaming',
      demographics: '18-24 NA'
    },
    {
      id: 8,
      name: '@annajenea',
      platform: 'TikTok',
      followers: 50000,
      avgLikes: 100000,
      category: 'Fashion',
      demographics: '13-24 US'
    },
    {
      id: 9,
      name: '@craftylumberjacks',
      platform: 'Instagram',
      followers: 74000,
      avgLikes: 1000,
      category: 'Lifestyle',
      demographics: '25-44 US'
    },
    {
      id: 10,
      name: '@localpassportfamily',
      platform: 'Instagram',
      followers: 75000,
      avgLikes: 750,
      category: 'Travel',
      demographics: '25-44 US'
    }
  ]

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  const handleNextClick = () => {
    setDialogType('next')
    setShowEmailDialog(true)
  }

  const handleMoreFiltersClick = () => {
    setDialogType('filters')
    setShowEmailDialog(true)
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const { error } = await supabase
        .from('emails')
        .insert([
          { email: email }
        ])

      if (error) {
        console.error('Supabase error details:', error)
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        })
        return
      }

      // Clear form and close dialog on success
      setEmail('')
      setShowEmailDialog(false)
      toast({
        variant: "success",
        title: "Success!",
        description: "Thanks for subscribing! We'll be in touch soon.",
      })
      
    } catch (error) {
      console.error('Detailed error:', error)
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "An unknown error occurred",
      })
    }
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
            Influencer Intelligence Database
          </h1>
          <p className="text-lg text-purple-950">
            Browse through millions of verified influencers with detailed metrics and insights
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
                  placeholder="Search by name, category, or location..."
                  className="pl-10 bg-white w-full"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="flex gap-3">
                <select
                  className="h-10 pl-4 pr-10 rounded-lg border border-purple-300 bg-white text-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option>All Categories</option>
                  <option>Lifestyle</option>
                  <option>Fashion</option>
                  <option>Tech</option>
                  <option>Beauty</option>
                  <option>Gaming</option>
                </select>
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
                      Creator Handle
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
                      Audience
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-purple-950">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-pink-700">
                      Avg. Likes
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-purple-950">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-pink-700">
                      Demographics
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-purple-950">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-pink-700">
                      Topics
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
                    <td className="px-6 py-4 text-sm text-purple-900">{Math.floor(row.avgLikes / 1000)}K</td>
                    <td className="px-6 py-4 text-sm text-purple-900">{row.demographics}</td>
                    <td className="px-6 py-4 text-sm text-purple-900">
                      <TopicPill topic={row.category} />
                    </td>
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
            <DialogTitle className="text-xl font-semibold text-purple-950">
              {dialogType === 'next' 
                ? 'Access More Influencer Data' 
                : 'Unlock Advanced Filters'}
            </DialogTitle>
            <DialogDescription className="text-purple-900">
              {dialogType === 'next' 
                ? 'Sign up to browse our complete database of verified influencers with detailed metrics and insights.'
                : 'Get access to advanced filtering options including engagement rates, audience demographics, and content performance metrics.'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full bg-purple-900 hover:bg-purple-800 text-white">
                {dialogType === 'next' ? 'Get Full Access' : 'Unlock Filters'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default DatabaseSection 