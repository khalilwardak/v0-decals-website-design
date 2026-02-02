"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { getMailtoLink } from "@/components/contact-reveal"

const benefits = [
  "Upload your own design or logo",
  "Choose from 30+ vinyl colors",
  "Any size from 1 inch to 6 feet",
  "Bulk discounts available",
  "Free design consultation",
]

export function CustomOrders() {
  const handleStartOrder = () => {
    window.location.href = getMailtoLink("Custom Decal Order Request", "Hi,\n\nI'm interested in ordering a custom decal.\n\nDesign description: \nSize needed: \nQuantity: \nPreferred colors: \n\nPlease provide a quote.\n\nThank you!")
  }

  return (
    <section id="custom" className="py-16 sm:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <Image
                src="/images/custom-decals.jpg"
                alt="Custom vinyl decal design process"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
              Custom Orders
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance">
              Bring your vision to life
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-primary-foreground/80 leading-relaxed">
              From business logos to personalized gifts, our custom decal service 
              turns your ideas into high-quality vinyl creations. No minimum order required.
            </p>
            
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-accent-foreground" />
                  </div>
                  <span className="text-sm sm:text-base text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto"
                onClick={handleStartOrder}
              >
                Start Your Custom Order
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent w-full sm:w-auto"
                asChild
              >
                <Link href="/#contact">Contact for Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
