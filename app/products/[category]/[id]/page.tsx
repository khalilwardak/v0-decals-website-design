import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Truck, Shield, RefreshCw } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ContactRevealButton } from "@/components/contact-reveal"
import { getProductById, getProductsByCategory, categoryInfo, products } from "@/lib/products"

type CategoryKey = keyof typeof categoryInfo

export async function generateStaticParams() {
  const params: { category: string; id: string }[] = []
  
  for (const product of products) {
    params.push({
      category: product.category,
      id: product.id
    })
  }
  
  return params
}

export default function ProductPage({ params }: { params: { category: string; id: string } }) {
  const category = params.category
  const id = params.id
  
  const product = getProductById(id)
  
  if (!product || product.category !== category) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-28 sm:pt-32 pb-16 text-center px-4">
          <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you are looking for does not exist.</p>
          <Link href="/" className="text-accent hover:underline">Return to Home</Link>
        </div>
        <Footer />
      </main>
    )
  }
  
  const info = categoryInfo[category as CategoryKey]
  const relatedProducts = getProductsByCategory(category)
    .filter((p) => p.id !== id)
    .slice(0, 4)
  
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 sm:mb-8 overflow-x-auto">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href={`/products/${category}`} className="hover:text-foreground transition-colors">
                  {info.title}
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground truncate max-w-[150px] sm:max-w-none">{product.name}</li>
            </ol>
          </nav>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Image */}
            <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-secondary">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.featured && (
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-accent text-accent-foreground text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded">
                  Featured
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div>
              <Link 
                href={`/products/${category}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-accent hover:text-accent/80 mb-3 sm:mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to {info.title}
              </Link>
              
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4">
                {product.name}
              </h1>
              
              <p className="text-base sm:text-lg font-medium text-accent mb-4 sm:mb-6">
                Contact for Pricing
              </p>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                {product.description}
              </p>
              
              {/* Size Options */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">Available Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span 
                      key={size}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 border border-border rounded-lg text-xs sm:text-sm text-foreground bg-card"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Color Options */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">Available Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <span 
                      key={color}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 border border-border rounded-lg text-xs sm:text-sm text-foreground bg-card"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Order Buttons */}
              <div className="space-y-3 mb-6 sm:mb-8">
                <ContactRevealButton 
                  type="email"
                  variant="default"
                  size="lg"
                  fullWidth
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 sm:h-12"
                />
                <ContactRevealButton 
                  type="phone"
                  variant="outline"
                  size="lg"
                  fullWidth
                  className="h-11 sm:h-12"
                />
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-border">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-foreground">Premium Vinyl</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">High-quality material</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-foreground">Fast Shipping</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">USA delivery</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-foreground">Weather Proof</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Outdoor durable</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-foreground">Easy Apply</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Simple instructions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 sm:py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-6 sm:mb-8">
              You might also like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </main>
  )
}
