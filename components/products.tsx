import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    name: "Car Decals",
    description: "Premium vinyl for vehicles",
    image: "/images/car-decals.jpg",
    count: "50+ designs",
    href: "/products/car-decals",
  },
  {
    name: "Wall Decals",
    description: "Transform your living space",
    image: "/images/wall-decals.jpg",
    count: "80+ designs",
    href: "/products/wall-decals",
  },
  {
    name: "Laptop Stickers",
    description: "Express your personality",
    image: "/images/laptop-stickers.jpg",
    count: "100+ designs",
    href: "/products/laptop-stickers",
  },
]

export function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16">
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
            Our Collection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-balance">
            Decals for every surface
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
            Explore our curated collection of premium vinyl decals, designed to inspire and transform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-card">
                <p className="text-xs sm:text-sm text-card/70 mb-1">{category.count}</p>
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-serif text-card">{category.name}</h3>
                    <p className="text-xs sm:text-sm text-card/80 truncate">{category.description}</p>
                  </div>
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-card/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors flex-shrink-0">
                    <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
