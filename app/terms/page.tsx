"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactRevealInline } from "@/components/contact-reveal"

export default function TermsPage() {
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
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12">
            Last updated: February 2026
          </p>
          
          <div className="prose prose-neutral max-w-none">
            <div className="space-y-6 sm:space-y-8 text-muted-foreground">
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Agreement to Terms</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  By placing an order with Positive Decals, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Products and Orders</h2>
                <p className="leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  All products are custom-made to order. By placing an order, you acknowledge that:
                </p>
                <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Product colors may vary slightly from images shown on our website due to monitor settings and manufacturing variations</li>
                  <li>You are responsible for providing accurate sizing and design specifications</li>
                  <li>Custom orders are non-refundable once production has begun</li>
                  <li>We reserve the right to refuse any order that violates copyright laws or contains offensive content</li>
                </ul>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Pricing and Payment</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  All prices are listed in US dollars and are subject to change without notice. Payment is due at the time of order. We accept payment via email invoicing and other methods communicated during the ordering process.
                </p>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Shipping</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  We ship to addresses within the United States. Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers, weather, or other circumstances beyond our control.
                </p>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Returns and Refunds</h2>
                <p className="leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  Due to the custom nature of our products:
                </p>
                <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>We cannot accept returns on custom orders</li>
                  <li>If your product arrives damaged or defective, contact us within 7 days for a replacement</li>
                  <li>If we made an error on your order, we will correct it at no additional cost</li>
                  <li>Refunds are issued at our discretion on a case-by-case basis</li>
                </ul>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Intellectual Property</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  Customers are responsible for ensuring they have the right to use any logos, images, or designs submitted for custom orders. We will not produce decals that infringe on copyrights, trademarks, or other intellectual property rights of third parties.
                </p>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Limitation of Liability</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  Positive Decals shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products. Our liability is limited to the purchase price of the product in question.
                </p>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Product Use</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  Our decals are intended for decorative purposes. We are not responsible for any damage that may occur during application or removal. Always test on a small area first and follow the included application instructions.
                </p>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Changes to Terms</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of our services constitutes acceptance of any modified terms.
                </p>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Contact Us</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 sm:p-6 bg-card border border-border rounded-xl">
                  <p className="text-foreground font-medium mb-3 text-sm sm:text-base">Positive Decals</p>
                  <div className="space-y-2">
                    <ContactRevealInline 
                      type="email"
                      label="Click to reveal email"
                      className="text-accent"
                    />
                    <ContactRevealInline 
                      type="phone"
                      label="Click to reveal phone"
                      className="text-accent"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
