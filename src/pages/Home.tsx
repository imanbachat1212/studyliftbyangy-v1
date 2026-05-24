import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import WhyAngy from '@/components/home/WhyAngy'
import Process from '@/components/home/Process'
import CTABanner from '@/components/home/CTABanner'
import Languages from '@/components/home/Languages'
import FeaturesCards from '@/components/ui/feature-shader-cards'
import { TestimonialSection } from '@/components/ui/testimonial'

const STUDYLIFT_TESTIMONIALS = [
  {
    type: 'user' as const,
    quote:
      'Angy helped me with my SPSS analysis and it was perfect! My dissertation passed with distinction.',
    name: 'Sara M.',
    role: 'MBA Student, Dubai',
    avatarFallback: 'SM',
  },
  {
    type: 'quote' as const,
    quote:
      'Every project is unique. Services are tailored based on your level, deadline & complexity.',
  },
  {
    type: 'user' as const,
    quote:
      'My research proposal was accepted on first submission. Incredible attention to detail.',
    name: 'Ahmad K.',
    role: 'PhD Candidate, UAE',
    avatarFallback: 'AK',
  },
  {
    type: 'user' as const,
    quote:
      'APA formatting sorted in one session. Professional, fast, and always available to help.',
    name: 'Lina T.',
    role: 'Masters Student, Online',
    avatarFallback: 'LT',
  },
  {
    type: 'user' as const,
    quote:
      'The quantitative guidance I received transformed my understanding of research methods completely.',
    name: 'Omar F.',
    role: 'Bachelor Student, UAE',
    avatarFallback: 'OF',
  },
  {
    type: 'user' as const,
    quote:
      'Professional, accurate and confidential. Angy delivers on time every single time. Highly recommend.',
    name: 'Rania S.',
    role: 'PhD Student, Online',
    avatarFallback: 'RS',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>StudyLift by Angy — Study. Lift. Achieve.</title>
        <meta
          name="description"
          content="Expert academic support: SPSS, research, dissertation, APA formatting and more. Based in Dubai, UAE, serving students worldwide."
        />
      </Helmet>

      <Hero />
      <Stats />

      {/* Services section */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="font-body text-gold/80 text-sm tracking-widest uppercase mb-3">
              What We Offer
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
              Our Services
            </h2>
            <motion.div
              className="w-16 h-1 bg-gold mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>
          <FeaturesCards />
        </div>
      </section>

      <WhyAngy />
      <Languages />
      <Process />

      {/* Testimonials section */}
      <section id="testimonials" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <TestimonialSection title="What Students Say" testimonials={STUDYLIFT_TESTIMONIALS} />
        </div>
      </section>

      <CTABanner />
    </>
  )
}
