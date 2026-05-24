import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { ShieldCheck, Clock, Star, Target } from 'lucide-react'

const words = "Hi, I'm Angy — Your Academic Partner".split(' ')

const commitments = [
  { icon: <Star className="w-6 h-6" />, title: 'Quality Work', desc: 'Every deliverable meets the highest academic standards.' },
  { icon: <Target className="w-6 h-6" />, title: 'Accuracy', desc: 'Precise, well-researched content tailored to your topic.' },
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Confidentiality', desc: 'Your academic work and personal details stay private.' },
  { icon: <Clock className="w-6 h-6" />, title: 'On-Time Delivery', desc: 'Meeting your deadlines is non-negotiable.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — StudyLift by Angy</title>
        <meta
          name="description"
          content="Learn about Angy, your academic partner based in Dubai, UAE, offering expert support for students worldwide."
        />
      </Helmet>

      {/* Hero with word-by-word reveal */}
      <section className="pt-32 pb-20 bg-navy overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`inline-block mr-3 ${word === "Angy" || word === "Academic" ? 'text-gold' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.div
            className="w-16 h-1 bg-gold mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="prose prose-lg max-w-none"
          >
            <p className="font-body text-dark/80 text-lg leading-relaxed mb-6">
              I created <span className="text-navy font-semibold">StudyLift by Angy</span> to combine academic
              experience, research expertise, and a passion for helping students succeed. Based in Dubai, UAE,
              I serve students online worldwide.
            </p>
            <p className="font-body text-dark/70 leading-relaxed mb-8">
              Whether you're navigating the complexity of SPSS analysis, structuring a dissertation chapter,
              or fine-tuning your APA references, I provide hands-on, personalized guidance that makes a real
              difference to your academic journey.
            </p>

            {/* Mission statement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy rounded-2xl px-8 py-10 text-center my-12"
            >
              <p className="font-display text-2xl md:text-3xl text-gold italic leading-relaxed">
                "Every project is unique. I work with you, not just for you."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Commitment grid */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">My Promise</p>
            <h2 className="font-display text-3xl font-bold text-navy">My Commitment to You</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {commitments.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-4 bg-cream rounded-2xl p-6 border border-gold/20 hover:border-gold/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 text-gold">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-navy text-lg mb-1">{item.title}</h3>
                  <p className="font-body text-dark/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram grid placeholder */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-2">Follow Along</p>
            <h2 className="font-display text-2xl font-bold text-navy mb-2">@studyliftbyangy</h2>
            <a
              href="https://instagram.com/studyliftbyangy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-teal hover:text-gold transition-colors cursor-pointer"
            >
              View on Instagram →
            </a>
          </motion.div>

          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.a
                key={i}
                href="https://instagram.com/studyliftbyangy"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="aspect-square rounded-xl overflow-hidden bg-navy/10 border border-gold/20 cursor-pointer flex items-center justify-center group"
              >
                <div className="text-center p-4">
                  <div className="w-8 h-8 mx-auto mb-2 text-gold/40 group-hover:text-gold transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <p className="font-body text-xs text-dark/40 group-hover:text-gold transition-colors">
                    @studyliftbyangy
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
