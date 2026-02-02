"use client"

import { MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  ContactRevealButton, 
  ContactRevealCard,
  getTelLink
} from "@/components/contact-reveal"

export function Contact() {
  const handleText = () => {
    window.location.href = "sms:+17202900037"
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
              Contact
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-balance">
              {"Let's create something amazing together."}
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Have questions about custom orders, bulk pricing, or just want to say hello? 
              Reach out to us directly and our team will get back to you within 24 hours.
            </p>
            
            <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
              <ContactRevealCard 
                type="email"
                title="Click to reveal email"
                subtitle="Email us at"
              />
              
              <ContactRevealCard 
                type="phone"
                title="Click to reveal phone"
                subtitle="Call or text"
              />
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Located in</p>
                  <p className="text-foreground font-medium">United States</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response time</p>
                  <p className="text-foreground font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10">
              <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">
                Ready to start your project?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Get in touch with us today to discuss your custom decal needs. We offer free quotes for all projects.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
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
                
                <Button 
                  variant="outline" 
                  className="w-full h-11 sm:h-12 bg-transparent"
                  onClick={handleText}
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Text Us
                </Button>
              </div>
              
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                <h4 className="font-medium text-foreground mb-3 sm:mb-4 text-sm sm:text-base">What to include in your message:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">{"•"}</span>
                    <span>Type of decal (car, wall, laptop, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">{"•"}</span>
                    <span>Desired size and quantity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">{"•"}</span>
                    <span>Design description or reference images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">{"•"}</span>
                    <span>Preferred color(s)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">{"•"}</span>
                    <span>Any deadline requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
