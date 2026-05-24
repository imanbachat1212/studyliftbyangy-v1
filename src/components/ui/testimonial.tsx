import { motion } from 'motion/react'
import { Quote, Star } from 'lucide-react'

interface Testimonial {
  type: 'user' | 'quote'
  quote: string
  name?: string
  role?: string
  avatarSrc?: string
  avatarFallback?: string
}

interface TestimonialSectionProps {
  title: string
  testimonials: Testimonial[]
}

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-2xl p-6 border border-gold/15 shadow-sm mx-3 flex flex-col gap-3 cursor-default select-none">
      <StarRating />
      <Quote className="w-5 h-5 text-gold/50" />
      <p className="font-body text-dark/75 text-sm leading-relaxed flex-1">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-gold/10">
        <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
          <span className="text-gold font-display font-semibold text-xs">
            {testimonial.avatarFallback}
          </span>
        </div>
        <div>
          <p className="font-body font-semibold text-dark text-sm leading-none">{testimonial.name}</p>
          <p className="font-body text-teal text-xs mt-0.5">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialSection({ title, testimonials }: TestimonialSectionProps) {
  const userTestimonials = testimonials.filter((t) => t.type === 'user')
  // Triple the array so the loop is seamless across all screen sizes
  const track = [...userTestimonials, ...userTestimonials, ...userTestimonials]

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-display font-bold text-center text-navy mb-4"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center font-body text-dark/50 text-sm mb-12"
      >
        Trusted by students worldwide
      </motion.p>

      {/* Marquee wrapper */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <div
          className="flex"
          style={{
            animation: 'marquee 30s linear infinite',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {track.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </div>
  )
}
