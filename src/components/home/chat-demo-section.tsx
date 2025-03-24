'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

interface InfluencerResult {
  name: string
  handle: string
  followers: string
  engagement: string
  niche: string
  recentBrands: string[]
  avatar: string
}

interface DemoScenario {
  prompt: string
  results: InfluencerResult[]
}

const DEMO_SCENARIOS: DemoScenario[] = [
  {
    prompt: "Show me influencers with less than 500k instagram followers who promote skincare products",
    results: [
      {
        name: "Jessica Lee",
        handle: "@skincarewithjessy",
        followers: "482K",
        engagement: "4.2%",
        niche: "Skincare & Beauty",
        recentBrands: ["The Ordinary", "Drunk Elephant", "Tatcha"],
        avatar: ""
      },
      {
        name: "Michelle Wang",
        handle: "@glowwithmich",
        followers: "325K",
        engagement: "5.1%",
        niche: "Clean Beauty",
        recentBrands: ["Glow Recipe", "Summer Fridays", "Paula's Choice"],
        avatar: ""
      },
      {
        name: "Sophia Kim",
        handle: "@skinthusiast",
        followers: "289K",
        engagement: "6.8%",
        niche: "K-Beauty & Skincare",
        recentBrands: ["COSRX", "Laneige", "Beauty of Joseon"],
        avatar: ""
      }
    ]
  },
  {
    prompt: "Find me influencers living in New York City who are in their 20s",
    results: [
      {
        name: "Alex Rivera",
        handle: "@nyc.alex",
        followers: "156K",
        engagement: "7.2%",
        niche: "NYC Lifestyle",
        recentBrands: ["Sweetgreen", "SoulCycle", "Reformation"],
        avatar: ""
      },
      {
        name: "Emma Thompson",
        handle: "@emmainnyc",
        followers: "243K",
        engagement: "5.9%",
        niche: "Fashion & City Life",
        recentBrands: ["Zara", "Aritzia", "& Other Stories"],
        avatar: ""
      },
      {
        name: "David Chen",
        handle: "@davidxnyc",
        followers: "178K",
        engagement: "6.5%",
        niche: "Street Style & Food",
        recentBrands: ["Nike", "Carhartt", "Levain Bakery"],
        avatar: ""
      }
    ]
  },
  {
    prompt: "Show me influencers who are single and post more pictures than reels",
    results: [
      {
        name: "Rachel Martinez",
        handle: "@rachelxphoto",
        followers: "198K",
        engagement: "4.8%",
        niche: "Photography & Lifestyle",
        recentBrands: ["Canon", "Adobe", "Away"],
        avatar: ""
      },
      {
        name: "James Wilson",
        handle: "@jameswanderlust",
        followers: "267K",
        engagement: "5.3%",
        niche: "Travel Photography",
        recentBrands: ["DJI", "Peak Design", "Moment"],
        avatar: ""
      },
      {
        name: "Lily Parker",
        handle: "@lilyaesthetic",
        followers: "145K",
        engagement: "7.1%",
        niche: "Visual Arts & Style",
        recentBrands: ["VSCO", "Polaroid", "Glossier"],
        avatar: ""
      }
    ]
  }
]

const useTypewriter = (text: string, speed: number = 50, delay: number = 1000) => {
  const [displayText, setDisplayText] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [isInputTyping, setIsInputTyping] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const reset = () => {
    setDisplayText('')
    setShowResults(false)
    setIsComplete(false)
    setIsInputTyping(false)
    setIsSending(false)
  }

  useEffect(() => {
    if (!isInputTyping) return

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        setIsSending(true)
        setTimeout(() => {
          setIsInputTyping(false)
          setShowResults(true)
          setTimeout(() => setIsComplete(true), 1500)
        }, 500)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [isInputTyping, text, speed])

  return { displayText, showResults, reset, setIsInputTyping, isComplete, isInputTyping, isSending }
}

const ChatDemoSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
  const currentScenario = DEMO_SCENARIOS[currentScenarioIndex]
  
  const { displayText, showResults, reset, setIsInputTyping, isComplete, isInputTyping, isSending } = useTypewriter(currentScenario.prompt, 40, 1000)
  const lastIntersectionTime = useRef<number>(0)

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [displayText])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const now = Date.now()
          if (entry.isIntersecting && isComplete && now - lastIntersectionTime.current > 2000) {
            lastIntersectionTime.current = now
            setCurrentScenarioIndex((prev) => (prev + 1) % DEMO_SCENARIOS.length)
            reset()
            setTimeout(() => setIsInputTyping(true), 1000)
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isComplete])

  // Start the initial animation
  useEffect(() => {
    setTimeout(() => setIsInputTyping(true), 1000)
  }, [])

  return (
    <section ref={sectionRef} className="w-full">
      <div className="bg-white rounded-2xl shadow-xl border border-purple-200 overflow-hidden">
        {/* Chat Header */}
        <div className="p-4 border-b border-purple-200 bg-gradient-bg-subtle">
          <h3 className="font-medium text-purple-950">AI Assistant</h3>
          <p className="text-sm text-purple-900">Ask me anything about influencer marketing</p>
        </div>

        {/* Chat Input - Moved to top */}
        <div className="p-6 border-b border-purple-200 bg-gradient-bg-subtle">
          <div className="relative">
            <Textarea
              ref={textareaRef}
              placeholder={isInputTyping ? "" : "Type your message..."}
              value={isInputTyping ? displayText : ""}
              className="pr-24 bg-white text-purple-950 placeholder:text-purple-400 text-base resize-none overflow-hidden leading-normal"
              style={{ 
                minHeight: '48px',
                height: 'auto',
                paddingTop: '12px',
                paddingBottom: '12px'
              }}
              rows={1}
              disabled
            />
            <Button 
              size="sm"
              disabled={!isSending}
              className={`absolute right-2 bottom-2 transition-all ${
                isSending 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600' 
                  : 'bg-purple-100 cursor-not-allowed'
              }`}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-6 space-y-6 min-h-[400px] bg-gradient-to-b from-white to-purple-50/50">
          {/* Results Section */}
          {showResults && (
            <div className="bg-white rounded-xl border border-purple-200 overflow-hidden">
              <div className="p-4 border-b border-purple-200 bg-gradient-bg-subtle">
                <h4 className="font-medium text-purple-950">Top Matches</h4>
                <p className="text-sm text-purple-900">Based on your requirements</p>
              </div>

              <div className="divide-y divide-purple-100">
                {currentScenario.results.map((influencer, index) => (
                  <div 
                    key={index}
                    className="p-4 flex items-center justify-between hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-medium">
                        {influencer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h5 className="font-medium text-purple-950">{influencer.name}</h5>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-purple-900">{influencer.handle}</span>
                          <span className="text-purple-400">•</span>
                          <span className="text-purple-900">{influencer.followers}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-8 flex-shrink-0">
                      <div className="w-24 text-right">
                        <p className="text-sm font-medium text-purple-950">{influencer.followers}</p>
                        <p className="text-xs text-purple-900">followers</p>
                      </div>
                      <div className="w-20 text-right">
                        <p className="text-sm font-medium text-purple-950">{influencer.engagement}</p>
                        <p className="text-xs text-purple-900">engagement</p>
                      </div>
                      <div className="w-32 text-right">
                        <p className="text-sm text-purple-900">{influencer.niche}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center pb-6">
                <Button variant="outline" className="text-pink-500 hover:text-pink-600 border-pink-200 hover:border-pink-300 text-sm">
                  View all 28 matches
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ChatDemoSection 