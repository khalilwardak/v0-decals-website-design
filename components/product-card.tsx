import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.category}/${product.id}`}
      className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-square relative overflow-hidden bg-secondary">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.featured && (
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-medium text-foreground group-hover:text-accent transition-colors line-clamp-1 text-sm sm:text-base">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-2 sm:mt-3">
          <span className="text-xs sm:text-sm font-medium text-accent">Contact for Price</span>
          <span className="text-xs text-muted-foreground">
            {product.colors.length} colors
          </span>
        </div>
      </div>
    </Link>
  )
}
