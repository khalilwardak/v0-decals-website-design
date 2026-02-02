import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4 sm:mb-6">
              Premium Vinyl Decals
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl tracking-tight text-foreground text-balance leading-tight">
              Transform any surface into a statement
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
              Discover premium quality vinyl decals crafted with precision and care. 
              From custom car stickers to elegant wall art, we bring your vision to life.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 w-full sm:w-auto" asChild>
                <Link href="#products">Shop Collection</Link>
              </Button>
              <Button size="lg" variant="outline" className="group bg-transparent w-full sm:w-auto" asChild>
                <Link href="#custom">
                  Custom Orders
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-10 sm:mt-16 flex items-center gap-6 sm:gap-8">
              <div className="text-center">
                <p className="text-xs sm:text-sm tracking-widest uppercase text-muted-foreground">Learn Our</p>
                <p className="text-xs sm:text-sm tracking-widest uppercase text-muted-foreground">Story</p>
                <Link href="#about" className="mt-2 sm:mt-3 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="h-12 sm:h-16 w-px bg-border" />
              <div className="text-center">
                <p className="text-xs sm:text-sm tracking-widest uppercase text-muted-foreground">Browse Our</p>
                <p className="text-xs sm:text-sm tracking-widest uppercase text-muted-foreground">Products</p>
                <Link href="#products" className="mt-2 sm:mt-3 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-decal.jpg"
                alt="Premium vinyl decals being applied"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card p-4 sm:p-6 rounded-xl shadow-lg border border-border">
              <p className="text-xs sm:text-sm text-muted-foreground">Trusted by</p>
              <p className="text-2xl sm:text-3xl font-serif text-foreground">10,000+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
