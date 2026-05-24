import { motion } from 'motion/react'
import { Quote } from 'lucide-react'

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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
}

function Avatar({ fallback, src }: { fallback?: string; src?: string }) {
  return (
    <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center overflow-hidden flex-shrink-0">
      {src ? (
        <img src={src} alt={fallback} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gold font-display font-semibold text-sm">{fallback}</span>
      )}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  if (testimonial.type === 'quote') {
    return (
      <motion.div
        variants={fadeUp}
        className="col-span-1 md:col-span-2 lg:col-span-3 bg-navy rounded-2xl p-8 text-center border border-gold/20 hover:border-gold/60 transition-colors duration-300 cursor-default"
      >
        <Quote className="w-8 h-8 text-gold mx-auto mb-4" />
        <p className="text-cream font-display italic text-xl leading-relaxed">
          "{testimonial.quote}"
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="bg-cream rounded-2xl p-6 border border-transparent hover:border-gold/40 hover:shadow-xl transition-all duration-300 cursor-default"
      style={{ background: '#FDFAF4' }}
    >
      <Quote className="w-6 h-6 text-gold mb-4 opacity-60" />
      <p className="text-dark/80 font-body text-sm leading-relaxed mb-6">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-3">
        <Avatar fallback={testimonial.avatarFallback} src={testimonial.avatarSrc} />
        <div>
          <p className="font-body font-semibold text-dark text-sm">{testimonial.name}</p>
          <p className="font-body text-teal text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialSection({ title, testimonials }: TestimonialSectionProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-4xl font-display font-bold text-center text-navy mb-12"
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>
    </motion.div>
  )
}
