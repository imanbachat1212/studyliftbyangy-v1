import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Send, Phone, ClipboardList, Users, Trophy } from 'lucide-react'

const steps = [
  { number: '01', icon: <Send className="w-6 h-6" />, title: 'Reach Out', desc: 'Send a message via WhatsApp or contact form' },
  { number: '02', icon: <Phone className="w-6 h-6" />, title: 'Free Consultation', desc: 'Discuss your needs with a quick free session' },
  { number: '03', icon: <ClipboardList className="w-6 h-6" />, title: 'Tailored Plan', desc: 'Get a plan built around your goals & deadline' },
  { number: '04', icon: <Users className="w-6 h-6" />, title: 'Work Together', desc: 'Collaborate with expert guidance at every step' },
  { number: '05', icon: <Trophy className="w-6 h-6" />, title: 'Submit with Confidence', desc: 'Deliver polished, submission-ready work' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineScale = useTransform(scrollYProgress, [0, 0.7], [0, 1])

  return (
    <section id="process" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
            Our Simple Process
          </h2>
        </motion.div>

        {/* Desktop: horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Gold connecting line */}
            <div className="absolute top-8 left-16 right-16 h-0.5 bg-gold/20 overflow-hidden">
              <motion.div
                className="h-full bg-gold origin-left"
                style={{ scaleX: lineScale }}
              />
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-5 gap-4"
            >
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-navy border-4 border-gold flex items-center justify-center mb-4 relative z-10 text-gold">
                    {step.icon}
                  </div>
                  <h3 className="font-display font-semibold text-navy text-base mb-2">{step.title}</h3>
                  <p className="font-body text-dark/60 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            <div className="absolute left-3 top-4 bottom-4 w-0.5 bg-gold/20">
              <motion.div
                className="w-full bg-gold origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8"
            >
              {steps.map((step) => (
                <motion.div key={step.number} variants={fadeUp} className="flex gap-5 items-start">
                  <div className="absolute left-0 w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-navy" />
                  </div>
                  <div className="pl-2">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-lg bg-navy text-gold flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <h3 className="font-display font-semibold text-navy text-lg">{step.title}</h3>
                    </div>
                    <p className="font-body text-dark/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
