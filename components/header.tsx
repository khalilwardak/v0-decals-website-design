"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getMailtoLink } from "@/components/contact-reveal"

const navigation = [
  { name: "Car Decals", href: "/products/car-decals" },
  { name: "Wall Decals", href: "/products/wall-decals" },
  { name: "Laptop Stickers", href: "/products/laptop-stickers" },
  { name: "Custom Orders", href: "/#custom" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const handleGetQuote = () => {
    window.location.href = getMailtoLink("Custom Decal Quote Request")
    setMobileMenuOpen(false)
  }

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 lg:px-8">
        <div className="flex flex-1">
          <Link href="/" className="-m-1.5 p-1.5" onClick={handleLinkClick}>
            <span className="font-serif text-xl sm:text-2xl tracking-tight text-foreground">
              Positive<span className="text-accent">Decals</span>
            </span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleGetQuote}
          >
            Get Quote
          </Button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden fixed inset-0 top-[65px] bg-background z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-4 sm:px-6 py-6">
          <div className="flex-1 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-secondary transition-colors"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-6 pb-4 border-t border-border">
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base"
              onClick={handleGetQuote}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-[65px] bg-foreground/20 z-30"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
