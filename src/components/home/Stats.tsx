import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'motion/react'

const stats = [
  { value: 50, suffix: '+', label: 'Students Helped' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { value: 7, suffix: '+', label: 'Services Offered' },
  { value: 3, suffix: ' Yrs', label: 'Experience' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-navy">
      {count}
      <span className="text-gold">{suffix}</span>
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Stats() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 border-l-4 border-gold shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="font-body text-dark/60 text-sm mt-2 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
