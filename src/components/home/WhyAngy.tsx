import { motion } from 'motion/react'

const features = [
  { label: 'Reliable & Professional' },
  { label: 'Confidential & Secure' },
  { label: 'Personalized Support' },
  { label: 'On-Time Delivery' },
  { label: 'Quality You Can Trust' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

function AnimatedCheck({ index }: { index: number }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-6 h-6 flex-shrink-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.circle
        cx="12" cy="12" r="10"
        stroke="#C9973A"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
      />
      <motion.path
        d="M7 12.5l3.5 3.5 6-7"
        stroke="#C9973A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
      />
    </motion.svg>
  )
}

export default function WhyAngy() {
  return (
    <section className="py-20 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: visual */}
          <motion.div variants={fadeUp} className="flex justify-center">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-72 h-72 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #1B2A5E 0%, #2D8A8A 50%, #C9973A 100%)',
                boxShadow: '0 0 60px rgba(201,151,58,0.3)',
              }}
            >
              <div className="absolute inset-3 rounded-full bg-navy flex flex-col items-center justify-center text-center p-6">
                <p className="font-display text-gold text-xl font-bold leading-tight mb-2">
                  StudyLift
                </p>
                <div className="w-10 h-0.5 bg-gold mb-2" />
                <p className="font-body text-cream/80 text-xs leading-relaxed">
                  Expert Academic
                  <br />
                  Support
                </p>
                <p className="font-body text-gold text-xs mt-2 tracking-wide">
                  Dubai, UAE · Worldwide
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: features */}
          <div>
            <motion.div variants={fadeUp}>
              <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">
                Why Choose
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-8">
                Why Choose Angy?
              </h2>
            </motion.div>

            <motion.ul variants={stagger} className="space-y-4">
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AnimatedCheck index={i} />
                  <span className="font-body text-dark font-medium">{f.label}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              variants={fadeUp}
              className="mt-8 font-display italic text-teal text-sm leading-relaxed border-l-2 border-gold pl-4"
            >
              "Every project is unique. Services are tailored based on your academic level,
              project requirements, deadline & complexity."
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
