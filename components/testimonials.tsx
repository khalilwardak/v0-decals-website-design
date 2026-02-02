import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "The quality of these decals is outstanding! My car looks amazing and they've held up perfectly through rain and sun.",
    author: "Sarah M.",
    location: "Denver, CO",
    rating: 5,
  },
  {
    quote: "Ordered custom wall decals for my daughter's room. The colors are vibrant and application was so easy. Highly recommend!",
    author: "Michael T.",
    location: "Austin, TX",
    rating: 5,
  },
  {
    quote: "Fast shipping and excellent customer service. They helped me finalize my design and the result exceeded expectations.",
    author: "Emily R.",
    location: "Seattle, WA",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16">
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
            Recognition
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl tracking-tight text-foreground text-balance">
            {"\"Playful, vibrant, and bizarrely compelling.\""}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">— What our customers say</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 lg:p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4 sm:mb-6">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-medium text-foreground text-sm sm:text-base">{testimonial.author}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
