"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactRevealButton } from "@/components/contact-reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What type of vinyl do you use?",
    answer: "We use premium outdoor-grade vinyl that is durable, weatherproof, and designed to last for years. Our vinyl is UV resistant, waterproof, and can withstand extreme temperatures. For indoor wall decals, we use a special removable vinyl that won't damage your walls when removed.",
  },
  {
    question: "How long do decals last?",
    answer: "Our outdoor car decals are designed to last 5-7 years when properly applied. Indoor wall decals can last indefinitely as they're not exposed to the elements. The lifespan depends on factors like sun exposure, weather conditions, and surface preparation.",
  },
  {
    question: "How do I apply my decal?",
    answer: "Every order comes with detailed application instructions. Generally, you'll clean the surface thoroughly, position the decal, apply it using a squeegee or credit card to remove air bubbles, then carefully peel away the transfer tape. For larger decals, we recommend having a helper.",
  },
  {
    question: "Can I request a custom design?",
    answer: "Absolutely! Custom designs are our specialty. Contact us with your design idea through our contact page. We can create decals from your artwork, photos, logos, or just a description of what you want.",
  },
  {
    question: "What surfaces can decals be applied to?",
    answer: "Our decals work great on smooth, clean surfaces including car windows, body panels, laptops, walls, mirrors, glass, metal, plastic, and more. They're not recommended for textured surfaces, brick, or unpainted drywall.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Yes! We offer discounts on bulk orders. Contact us with your quantity needs and we'll provide a custom quote. We work with businesses, teams, events, and organizations of all sizes.",
  },
  {
    question: "What is your return policy?",
    answer: "Due to the custom nature of our products, we cannot accept returns on custom orders. However, if your decal arrives damaged or there's an error on our part, we'll replace it free of charge. Please inspect your order upon arrival and contact us within 7 days with any issues.",
  },
  {
    question: "How long does shipping take?",
    answer: "Most orders are produced within 2-3 business days. Standard shipping within the USA typically takes 3-5 business days. Expedited shipping options are available at checkout. Custom orders may require additional production time.",
  },
  {
    question: "Can decals be removed?",
    answer: "Yes, our decals can be removed. For car decals, using a heat gun or hair dryer makes removal easier. Wall decals are designed to peel off without leaving residue when removed carefully. Note that once removed, decals cannot be reused.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we only ship within the United States. We're working on expanding our shipping options, so please check back or contact us if you're interested in international shipping.",
  },
]

export default function FAQPage() {
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
          
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              Find answers to common questions about our decals and ordering process.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4 sm:py-5 text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Still have questions */}
          <div className="mt-12 sm:mt-16 bg-secondary rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-3 sm:mb-4">
              Still have questions?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              {"Can't find what you're looking for? Reach out to us directly."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <ContactRevealButton 
                type="email"
                variant="default"
                className="bg-primary text-primary-foreground w-full sm:w-auto"
              />
              <ContactRevealButton 
                type="phone"
                variant="outline"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
