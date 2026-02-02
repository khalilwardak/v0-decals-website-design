import { Truck, Shield, Palette, Sparkles } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Custom Designs",
    description: "Upload your own artwork or work with our designers to create the perfect custom decal.",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Durable vinyl that withstands weather, UV rays, and everyday wear for years of enjoyment.",
  },
  {
    icon: Truck,
    title: "Fast USA Shipping",
    description: "Quick processing and free shipping on orders over $50 within the continental USA.",
  },
  {
    icon: Sparkles,
    title: "Easy Application",
    description: "Every order includes detailed instructions for a bubble-free, professional finish.",
  },
]

export function Features() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-balance">
              Crafted with care, built to last
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              At Positive Decals, we believe every surface deserves a personal touch. 
              Our commitment to quality means using only the finest materials and 
              precision cutting technology to deliver decals that exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-5 sm:p-6 rounded-xl bg-secondary border border-border hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <h3 className="font-medium text-foreground mb-2 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
