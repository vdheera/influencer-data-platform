'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Divider from '@/components/ui/divider'
import { ArrowRight, Mail } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useToast } from "@/hooks/use-toast"

const CtaSection = () => {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
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

      // Clear form on success
      setEmail('')
      toast({
        variant: "success",
        title: "Success!",
        description: "Thanks for subscribing! We'll be in touch soon.",
      })
      
    } catch (error: any) {
      console.error('Detailed error:', error)
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.message || "An unknown error occurred",
      })
    }
  }

  return (
    <section className="relative py-24 bg-white">
      <div className="container-custom relative">
        <Divider />
        
        <div className="relative rounded-3xl bg-purple-900 p-8 md:p-12 overflow-hidden">
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6 text-white">
              Get Access
            </h2>
            <p className="text-white/80 mb-8">
              Start exploring our comprehensive influencer dataset covering millions of creators across major platforms.
            </p>
            
            <form onSubmit={handleSubmit} className="mb-12">
              <div className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-white text-purple-900 hover:bg-white/90 transition-colors group h-12 px-8"
                >
                  Get Access
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </form>

            <div className="flex items-center justify-center space-x-2 text-white/80">
              <Mail className="h-5 w-5" />
              <p>
                Email <a href="mailto:team@tryzeen.co" className="text-white hover:underline">team@tryzeen.co</a> with any questions or requests
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
