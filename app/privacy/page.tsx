"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactRevealInline } from "@/components/contact-reveal"

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12">
            Last updated: February 2026
          </p>
          
          <div className="prose prose-neutral max-w-none">
            <div className="space-y-6 sm:space-y-8 text-muted-foreground">
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Information We Collect</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  When you place an order with Positive Decals, we collect information necessary to process and fulfill your order. This includes your name, email address, phone number, shipping address, and order details. We only collect information that is essential to providing our services to you.
                </p>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">How We Use Your Information</h2>
                <p className="leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">We use your information for the following purposes:</p>
                <ul className="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Processing and fulfilling your orders</li>
                  <li>Communicating with you about your order status</li>
                  <li>Responding to your questions and requests</li>
                  <li>Sending you updates about products and promotions (only if you opt in)</li>
                  <li>Improving our products and services</li>
                </ul>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Information Sharing</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with shipping carriers to deliver your order, and with service providers who assist us in operating our business. These parties are obligated to keep your information confidential.
                </p>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Data Security</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Your Rights</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us through our contact page. We will respond to your request within a reasonable timeframe.
                </p>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Cookies</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our site. You can disable cookies in your browser settings, though this may affect some site functionality.
                </p>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Changes to This Policy</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date.
                </p>
              </section>
              
              <section>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">Contact Us</h2>
                <p className="leading-relaxed text-sm sm:text-base">
                  If you have any questions about this privacy policy, please contact us:
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
