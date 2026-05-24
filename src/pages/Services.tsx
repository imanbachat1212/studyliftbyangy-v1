import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const services = [
  {
    id: 'survey',
    title: 'Online Survey Support',
    included: [
      'Survey design and question formulation',
      'Survey administration and distribution',
      'Response collection and data organisation',
      'Analysis and summary of results',
      'Recommendations based on findings',
    ],
    forWho: 'Students and researchers who need help creating, running, and analysing surveys for academic projects.',
    turnaround: '2–5 business days depending on survey complexity and volume.',
  },
  {
    id: 'thesis',
    title: 'Thesis Support',
    included: [
      'Thesis proposal writing and review',
      'Chapter-by-chapter guidance and feedback',
      'Literature review and source recommendations',
      'Argument structure and academic writing polish',
      'Final review before submission',
    ],
    forWho: 'Masters and PhD students at any stage of their thesis — from proposal to final submission.',
    turnaround: 'Ongoing support; milestones agreed per student.',
  },
  {
    id: 'ielts',
    title: 'IELTS Training',
    included: [
      'Diagnostic assessment of current level',
      'Targeted practice for all four skills (Reading, Writing, Listening, Speaking)',
      'Band score strategies and exam tips',
      'Mock tests with detailed feedback',
      'Vocabulary and grammar improvement',
    ],
    forWho: 'Students and professionals aiming to achieve their target IELTS band score.',
    turnaround: 'Flexible — sessions scheduled based on your exam date and availability.',
  },
  {
    id: 'english',
    title: 'English Tutoring',
    included: [
      'One-on-one personalised lessons',
      'Grammar, vocabulary, and writing skills',
      'Academic English for essays and reports',
      'Conversation and comprehension practice',
      'Progress tracking and tailored exercises',
    ],
    forWho: 'Learners of all levels who want to improve their English — for academic, professional, or personal goals.',
    turnaround: 'Sessions scheduled flexibly to fit your calendar.',
  },
  {
    id: 'consultation',
    title: 'Online Consultation',
    included: [
      'One-on-one academic guidance sessions',
      'Study planning and time management advice',
      'Research methodology consultation',
      'Assignment and project strategy sessions',
      'Follow-up support between sessions',
    ],
    forWho: 'Students who need focused, one-on-one guidance on a specific academic challenge or decision.',
    turnaround: 'Sessions booked on demand — typically within 24–48 hours.',
  },
  {
    id: 'academic',
    title: 'Academic Support',
    included: [
      'Research assistance and source finding',
      'Essay, report and assignment writing support',
      'Editing, proofreading, and organisation',
      'APA, MLA, and Harvard referencing',
      'Presentation and report design',
    ],
    forWho: 'Undergraduate, Masters, and PhD students who need broad academic help across multiple areas.',
    turnaround: '2–7 days depending on scope and deadline.',
  },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — StudyLift by Angy</title>
        <meta
          name="description"
          content="Online Survey Support, Thesis Support, IELTS Training, English Tutoring, Online Consultation, and Academic Support — in English, French & Arabic."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">
              What We Offer
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-4">
              Our Services
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-6" />
            <p className="font-body text-cream/70 text-lg max-w-xl mx-auto leading-relaxed">
              Professional support for your academic success — available in{' '}
              <span className="text-gold font-semibold">English, French &amp; Arabic</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Language badges */}
      <div className="bg-white border-b border-navy/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-3">
          {[
            { flag: '🇬🇧', label: 'English' },
            { flag: '🇫🇷', label: 'Français' },
            { flag: '🇦🇪', label: 'العربية', rtl: true },
          ].map((lang) => (
            <span key={lang.label} className="flex items-center gap-2 font-body text-sm text-dark/70">
              <span className="text-lg leading-none">{lang.flag}</span>
              <span dir={lang.rtl ? 'rtl' : undefined}>{lang.label}</span>
            </span>
          ))}
          <span className="font-body text-dark/40 text-xs ml-2">— All services available in all three languages</span>
        </div>
      </div>

      {/* Pricing note */}
      <div className="bg-gold/10 border-b border-gold/20">
        <div className="max-w-4xl mx-auto px-6 py-5 text-center">
          <p className="font-body text-dark/80 text-sm">
            <span className="font-semibold text-navy">Pricing is tailored</span> to your academic
            level, complexity and deadline —{' '}
            <a
              href="https://wa.me/971566234352"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-semibold hover:underline cursor-pointer"
            >
              DM for a free quote
            </a>
          </p>
        </div>
      </div>

      {/* Services accordion */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {services.map((service, i) => (
                <AccordionItem key={service.id} value={service.id}>
                  <AccordionTrigger>
                    <span className="flex items-center gap-3">
                      <span className="font-body text-gold font-bold text-xs w-6">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {service.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-body font-semibold text-navy text-xs uppercase tracking-wider mb-3">
                          What's Included
                        </h4>
                        <ul className="space-y-1.5">
                          {service.included.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm">
                              <span className="text-gold mt-0.5 text-xs">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-body font-semibold text-navy text-xs uppercase tracking-wider mb-3">
                          Who It's For
                        </h4>
                        <p className="text-sm text-dark/70 leading-relaxed">{service.forWho}</p>
                      </div>
                      <div>
                        <h4 className="font-body font-semibold text-navy text-xs uppercase tracking-wider mb-3">
                          Turnaround Time
                        </h4>
                        <p className="text-sm text-dark/70 leading-relaxed">{service.turnaround}</p>
                        <a
                          href="https://wa.me/971566234352"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-gold hover:underline cursor-pointer"
                        >
                          Get a free quote →
                        </a>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-2xl font-bold text-cream">Why Work With Me?</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['Reliable & Professional', 'Confidential & Secure', 'Personalized Support', 'On-Time Delivery', 'Quality You Can Trust'].map((v) => (
              <div key={v} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
                <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <span className="font-body text-cream/80 text-sm">{v}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Refer a friend */}
      <section className="py-14 bg-cream border-t border-gold/20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-2xl font-bold text-navy mb-2">
              Love the support you received?
            </p>
            <p className="font-display italic text-gold text-xl mb-4">Refer a friend!</p>
            <p className="font-body text-dark/60 text-sm mb-6 max-w-sm mx-auto">
              Share StudyLift by Angy and help someone reach their academic goals. Your recommendation means the world.
            </p>
            <a
              href="https://wa.me/971566234352"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-white font-body font-semibold text-sm px-7 py-3 rounded-full cursor-pointer hover:bg-gold/90 transition-colors wa-pulse"
            >
              Share on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sticky WhatsApp CTA */}
      <div className="sticky bottom-0 z-30 bg-navy/95 backdrop-blur-sm border-t border-white/10 py-4">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-cream/80 text-sm text-center sm:text-left">
            Not sure which service you need?
          </p>
          <a
            href="https://wa.me/971566234352"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gold text-white font-body font-semibold text-sm px-6 py-2.5 rounded-full wa-pulse cursor-pointer hover:bg-gold/90 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
