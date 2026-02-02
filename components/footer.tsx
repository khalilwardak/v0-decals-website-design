"use client"

import Link from "next/link"
import { Mail } from "lucide-react"
import { ContactRevealInline, getMailtoLink } from "@/components/contact-reveal"

const footerLinks = {
  shop: [
    { name: "Car Decals", href: "/products/car-decals" },
    { name: "Wall Decals", href: "/products/wall-decals" },
    { name: "Laptop Stickers", href: "/products/laptop-stickers" },
    { name: "Custom Orders", href: "/#custom" },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "FAQs", href: "/faq" },
    { name: "Shipping", href: "/shipping" },
  ],
}

export function Footer() {
  const handleQuoteClick = () => {
    window.location.href = getMailtoLink("Custom Decal Inquiry")
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <Link href="/" className="block">
              <span className="font-serif text-xl sm:text-2xl tracking-tight">
                Positive<span className="text-accent">Decals</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Premium custom vinyl decals crafted with care. Transforming surfaces and spreading positivity across the USA.
            </p>
            
            <div className="mt-6 space-y-3">
              <ContactRevealInline 
                type="email"
                label="Click to reveal email"
                className="text-primary-foreground/70 hover:text-primary-foreground"
              />
              <ContactRevealInline 
                type="phone"
                label="Click to reveal phone"
                className="text-primary-foreground/70 hover:text-primary-foreground"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-4">Shop</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm font-medium tracking-widest uppercase mb-4">Get in Touch</h3>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Ready to create something unique? Contact us for custom quotes and bulk orders.
            </p>
            <button 
              onClick={handleQuoteClick}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors cursor-pointer"
            >
              <Mail className="h-4 w-4" />
              Request a Quote
            </button>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-primary-foreground/60 text-center sm:text-left">
              © 2026 Positive Decals. All rights reserved. Made with care in the USA.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                href="/privacy"
                className="text-xs sm:text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs sm:text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        
        {/* Large decorative logo */}
        <div className="mt-8 sm:mt-12 overflow-hidden">
          <p className="font-serif text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] leading-none text-primary-foreground/5 -mx-4 select-none">
            PD
          </p>
        </div>
      </div>
    </footer>
  )
}
