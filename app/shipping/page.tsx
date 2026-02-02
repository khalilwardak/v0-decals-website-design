"use client"

import Link from "next/link"
import { ArrowLeft, Truck, Clock, Package, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactRevealButton } from "@/components/contact-reveal"

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-accent hover:text-accent/80 mb-6 sm:mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
              Shipping Information
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              Everything you need to know about how we ship your decals.
            </p>
          </div>
          
          {/* Shipping Features */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-secondary flex items-center justify-center mb-3 sm:mb-4">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <h3 className="font-medium text-base sm:text-lg text-foreground mb-2">Processing Time</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Most orders are produced and shipped within 2-3 business days. Custom orders may require additional time.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-secondary flex items-center justify-center mb-3 sm:mb-4">
                <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <h3 className="font-medium text-base sm:text-lg text-foreground mb-2">Delivery Time</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Standard shipping takes 3-5 business days within the USA. Expedited options available upon request.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-secondary flex items-center justify-center mb-3 sm:mb-4">
                <Package className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <h3 className="font-medium text-base sm:text-lg text-foreground mb-2">Packaging</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                All decals are carefully packaged in rigid mailers to ensure they arrive flat and undamaged.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-secondary flex items-center justify-center mb-3 sm:mb-4">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
              <h3 className="font-medium text-base sm:text-lg text-foreground mb-2">Shipping Area</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                We currently ship to all 50 US states. Contact us for Alaska and Hawaii shipping rates.
              </p>
            </div>
          </div>
          
          {/* Shipping Details */}
          <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 mb-8 sm:mb-12">
            <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-4 sm:mb-6">Shipping Details</h2>
            
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h3 className="font-medium text-foreground mb-2 text-sm sm:text-base">Standard Shipping</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Free on orders over $25. Orders under $25 have a flat rate of $4.99. Delivery typically takes 3-5 business days after processing.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-2 text-sm sm:text-base">Expedited Shipping</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Need it faster? Contact us and we can arrange expedited shipping for an additional fee. Typically arrives within 1-2 business days after processing.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-2 text-sm sm:text-base">Order Tracking</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Once your order ships, {"you'll"} receive an email with tracking information so you can follow your package every step of the way.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-foreground mb-2 text-sm sm:text-base">Damaged or Lost Packages</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  If your package arrives damaged or gets lost in transit, contact us within 7 days of the expected delivery date. {"We'll"} work with the carrier to resolve the issue and send a replacement if needed.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact for Shipping Questions */}
          <div className="bg-secondary rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-3 sm:mb-4">
              Have shipping questions?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              {"We're"} here to help with any shipping concerns or special delivery requests.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <ContactRevealButton 
                type="email"
                variant="default"
                className="bg-primary text-primary-foreground w-full sm:w-auto"
              />
              <ContactRevealButton 
                type="phone"
                variant="outline"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
