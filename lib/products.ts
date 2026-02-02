export interface Product {
  id: string
  name: string
  description: string
  image: string
  category: "car-decals" | "wall-decals" | "laptop-stickers"
  sizes: string[]
  colors: string[]
  featured?: boolean
}

export const products: Product[] = [
  // Car Decals
  {
    id: "car-family-sticker",
    name: "Family Stick Figure Set",
    description: "Adorable family stick figure decal set perfect for your car rear window. Customize with your family members.",
    image: "/images/products/car-family-sticker.jpg",
    category: "car-decals",
    sizes: ["Small (4\")", "Medium (6\")", "Large (8\")"],
    colors: ["White", "Black", "Silver"],
    featured: true,
  },
  {
    id: "car-mountain-scene",
    name: "Mountain Adventure Decal",
    description: "Beautiful mountain silhouette with trees, perfect for outdoor enthusiasts and adventure seekers.",
    image: "/images/products/car-mountain-scene.jpg",
    category: "car-decals",
    sizes: ["Small (6\")", "Medium (10\")", "Large (14\")"],
    colors: ["Black", "White", "Forest Green", "Navy Blue"],
    featured: true,
  },
  {
    id: "car-usa-flag",
    name: "Patriotic USA Flag",
    description: "Show your American pride with this distressed USA flag decal. Durable outdoor vinyl.",
    image: "/images/products/car-usa-flag.jpg",
    category: "car-decals",
    sizes: ["Small (4x3\")", "Medium (6x4\")", "Large (10x6\")"],
    colors: ["Full Color", "Black & White", "Subdued"],
  },
  {
    id: "car-paw-print",
    name: "Pet Lover Paw Print",
    description: "Perfect for dog and cat lovers. Show your love for your furry friends.",
    image: "/images/car-decals.jpg",
    category: "car-decals",
    sizes: ["Small (3\")", "Medium (5\")", "Large (7\")"],
    colors: ["White", "Black", "Pink", "Red"],
  },
  {
    id: "car-adventure-awaits",
    name: "Adventure Awaits Badge",
    description: "Vintage-style adventure badge decal for your vehicle. Great for explorers and road trippers.",
    image: "/images/car-decals.jpg",
    category: "car-decals",
    sizes: ["Small (4\")", "Medium (6\")", "Large (8\")"],
    colors: ["Black", "White", "Tan"],
  },
  {
    id: "car-sports-team",
    name: "Custom Sports Team Logo",
    description: "Support your favorite team with a custom sports logo decal. Contact us for your team!",
    image: "/images/car-decals.jpg",
    category: "car-decals",
    sizes: ["Small (4\")", "Medium (6\")", "Large (10\")"],
    colors: ["Team Colors Available"],
  },
  
  // Wall Decals
  {
    id: "wall-tree",
    name: "Elegant Tree of Life",
    description: "Stunning tree wall decal that brings nature indoors. Perfect for living rooms and bedrooms.",
    image: "/images/products/wall-tree.jpg",
    category: "wall-decals",
    sizes: ["Medium (3ft)", "Large (5ft)", "Extra Large (7ft)"],
    colors: ["Black", "Brown", "White", "Gold"],
    featured: true,
  },
  {
    id: "wall-quote",
    name: "Inspirational Quote - Live Laugh Love",
    description: "Beautiful script typography wall decal with the timeless message of love and joy.",
    image: "/images/products/wall-quote.jpg",
    category: "wall-decals",
    sizes: ["Small (2ft)", "Medium (3ft)", "Large (4ft)"],
    colors: ["Black", "Gold", "Rose Gold", "Silver"],
    featured: true,
  },
  {
    id: "wall-mandala",
    name: "Intricate Mandala Pattern",
    description: "Detailed mandala design perfect for meditation spaces, yoga rooms, or as a stunning focal point.",
    image: "/images/products/wall-mandala.jpg",
    category: "wall-decals",
    sizes: ["Small (2ft)", "Medium (3ft)", "Large (4ft)"],
    colors: ["Black", "White", "Gold", "Teal"],
    featured: true,
  },
  {
    id: "wall-world-map",
    name: "World Map Explorer",
    description: "Large world map wall decal for travel enthusiasts. Mark your adventures!",
    image: "/images/wall-decals.jpg",
    category: "wall-decals",
    sizes: ["Medium (4ft)", "Large (6ft)", "Extra Large (8ft)"],
    colors: ["Black", "Navy", "Gray"],
  },
  {
    id: "wall-floral",
    name: "Botanical Floral Arrangement",
    description: "Delicate floral design that adds elegance to any wall. Perfect for bedrooms and nurseries.",
    image: "/images/wall-decals.jpg",
    category: "wall-decals",
    sizes: ["Small (2ft)", "Medium (3ft)", "Large (5ft)"],
    colors: ["Black", "Pink", "Sage Green", "White"],
  },
  {
    id: "wall-kids-animals",
    name: "Safari Animals - Kids Room",
    description: "Adorable safari animals perfect for children's rooms. Includes lion, giraffe, elephant, and more!",
    image: "/images/wall-decals.jpg",
    category: "wall-decals",
    sizes: ["Set of 6", "Set of 10", "Full Safari Set"],
    colors: ["Full Color", "Pastel", "Monochrome"],
  },
  
  // Laptop Stickers
  {
    id: "laptop-nature",
    name: "Nature Lover Pack",
    description: "Set of 6 minimalist nature stickers featuring mountains, waves, moon, and pine trees.",
    image: "/images/products/laptop-nature.jpg",
    category: "laptop-stickers",
    sizes: ["Standard (2-3\")"],
    colors: ["Black", "White", "Mixed Colors"],
    featured: true,
  },
  {
    id: "laptop-positive",
    name: "Positive Vibes Pack",
    description: "Spread positivity with this colorful sticker pack featuring smiley faces, peace signs, and motivational words.",
    image: "/images/products/laptop-positive.jpg",
    category: "laptop-stickers",
    sizes: ["Standard Pack (8 stickers)"],
    colors: ["Full Color"],
    featured: true,
  },
  {
    id: "laptop-retro",
    name: "Retro Aesthetic Collection",
    description: "80s and 90s inspired sticker pack with vintage cassettes, sunsets, palm trees, and geometric designs.",
    image: "/images/products/laptop-retro.jpg",
    category: "laptop-stickers",
    sizes: ["Standard Pack (10 stickers)"],
    colors: ["Full Color"],
    featured: true,
  },
  {
    id: "laptop-minimal",
    name: "Minimalist Line Art Set",
    description: "Clean, simple line art stickers for a sophisticated look on your laptop or water bottle.",
    image: "/images/laptop-stickers.jpg",
    category: "laptop-stickers",
    sizes: ["Standard (2\")"],
    colors: ["Black", "White", "Gold"],
  },
  {
    id: "laptop-tech",
    name: "Tech & Coding Pack",
    description: "Perfect for developers and tech enthusiasts. Includes code snippets, tech logos, and geeky designs.",
    image: "/images/laptop-stickers.jpg",
    category: "laptop-stickers",
    sizes: ["Standard Pack (12 stickers)"],
    colors: ["Full Color", "Monochrome"],
  },
  {
    id: "laptop-space",
    name: "Space Explorer Set",
    description: "Explore the cosmos with astronauts, planets, rockets, and celestial designs.",
    image: "/images/laptop-stickers.jpg",
    category: "laptop-stickers",
    sizes: ["Standard Pack (8 stickers)"],
    colors: ["Full Color", "Glow in Dark"],
  },
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export const categoryInfo = {
  "car-decals": {
    title: "Car Decals",
    description: "Premium vinyl car decals that withstand the elements. Perfect for windows, bumpers, and body panels.",
    heroImage: "/images/car-decals.jpg",
  },
  "wall-decals": {
    title: "Wall Decals",
    description: "Transform your living space with our stunning wall decals. Easy to apply, easy to remove.",
    heroImage: "/images/wall-decals.jpg",
  },
  "laptop-stickers": {
    title: "Laptop Stickers",
    description: "Express yourself with our high-quality laptop stickers. Waterproof and scratch-resistant.",
    heroImage: "/images/laptop-stickers.jpg",
  },
}
