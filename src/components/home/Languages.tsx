import { motion } from 'motion/react'

const languages = [
  {
    flag: '🇬🇧',
    name: 'ENGLISH',
    tagline: 'Clear communication. Quality support. Real results.',
    color: '#C9973A',
  },
  {
    flag: '🇫🇷',
    name: 'FRANÇAIS',
    tagline: 'Une communication claire. Un accompagnement de qualité. Des résultats concrets.',
    color: '#C9973A',
  },
  {
    flag: '🇦🇪',
    name: 'العربية',
    tagline: 'تواصل واضح. دعم عالي الجودة. نتائج حقيقية.',
    color: '#2D8A8A',
    rtl: true,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Languages() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #C9973A 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">
            We Speak Your Language
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream">
            One Mission.{' '}
            <span className="text-gold">Three Languages.</span>
          </h2>
          <p className="font-display italic text-xl text-cream/60 mt-2">
            Endless Possibilities.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center font-body text-cream/60 mb-12 text-sm"
        >
          All services are available in English, French &amp; Arabic
        </motion.p>

        {/* Language cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {languages.map((lang) => (
            <motion.div
              key={lang.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col items-center text-center gap-4 cursor-default"
            >
              {/* Flag badge */}
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shadow-lg text-4xl">
                {lang.flag}
              </div>

              <div>
                <h3
                  className="font-body font-bold text-lg tracking-wider mb-3"
                  style={{ color: lang.color }}
                >
                  {lang.name}
                </h3>
                <p
                  className="font-body text-cream/70 text-sm leading-relaxed"
                  dir={lang.rtl ? 'rtl' : 'ltr'}
                >
                  {lang.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center font-display italic text-cream/50 mt-10 text-sm"
        >
          "Whatever your goal, we're here to help you achieve it —{' '}
          <span className="text-gold">in the language you feel most comfortable with.</span>"
        </motion.p>
      </div>
    </section>
  )
}
