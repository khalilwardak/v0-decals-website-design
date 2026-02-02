"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { getProductsByCategory, categoryInfo } from "@/lib/products"
import { getMailtoLink } from "@/components/contact-reveal"

export default function CarDecalsPage() {
  const products = getProductsByCategory("car-decals")
  const info = categoryInfo["car-decals"]

  const handleCustomRequest = () => {
    window.location.href = getMailtoLink("Custom Car Decal Request")
  }
  
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-28">
        <div className="relative h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src={info.heroImage || "/placeholder.svg"}
            alt={info.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6 sm:pb-10 md:pb-12 w-full">
              <Link 
                href="/#products" 
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-card/70 hover:text-card mb-2 sm:mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Collections
              </Link>
              <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-card">
                {info.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-card/80 mt-2 sm:mt-4 max-w-2xl">
                {info.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-10">
            <p className="text-sm sm:text-base text-muted-foreground">
              Showing {products.length} products
            </p>
            <Button variant="outline" className="bg-transparent w-full sm:w-auto" onClick={handleCustomRequest}>
              <Mail className="mr-2 h-4 w-4" />
              Request Custom Design
            </Button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4">
            {"Don't see what you're looking for?"}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            We specialize in custom designs! Send us your idea and {"we'll"} create a unique decal just for you.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground w-full sm:w-auto" onClick={handleCustomRequest}>
            Get a Custom Quote
          </Button>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
