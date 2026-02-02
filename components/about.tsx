import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What materials do you use?",
    answer: "We use premium outdoor-grade vinyl that's durable, waterproof, and UV-resistant. Our decals are designed to last 5-7 years outdoors and even longer indoors.",
  },
  {
    question: "How do I apply my decal?",
    answer: "Every order includes step-by-step instructions. Clean the surface, peel the backing, apply slowly to avoid bubbles, and use a squeegee to smooth. It's that easy!",
  },
  {
    question: "Can I remove decals without damage?",
    answer: "Yes! Our vinyl decals can be removed cleanly with a heat gun or hair dryer. Gently warm the decal and peel slowly for best results.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer: "Absolutely! We offer tiered pricing for bulk orders. Contact us with your quantity needs and we'll provide a custom quote.",
  },
  {
    question: "What's your turnaround time?",
    answer: "Standard orders ship within 2-3 business days. Custom orders typically take 5-7 business days. Rush options are available upon request.",
  },
]

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-balance">
              Dedicated to creativity & quality
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Positive Decals started with a simple mission: to help people express themselves 
              through high-quality, custom vinyl decals. Based in the USA, we combine modern 
              cutting technology with meticulous attention to detail.
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Whether you're decorating your car, personalizing your home, or branding your 
              business, we're here to bring your vision to life. Every decal is made with care, 
              because we believe the small details make the biggest difference.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-4 sm:mb-6">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left hover:text-accent hover:no-underline text-sm sm:text-base py-3 sm:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
