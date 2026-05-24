import { useEffect } from 'react'
import { motion } from 'motion/react'
import { GraduationCap } from 'lucide-react'

interface LoadingScreenProps {
  onDone: () => void
}

export default function LoadingScreen({ onDone }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onDone, 1800)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-navy"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="flex items-center gap-3">
          <GraduationCap className="w-10 h-10 text-gold" />
          <div>
            <p className="font-display text-2xl font-bold text-cream leading-none">StudyLift</p>
            <p className="font-body text-xs text-gold tracking-widest uppercase">by Angy</p>
          </div>
        </div>

        <p className="font-body text-cream/60 text-sm tracking-wider mt-2">
          Study. Lift. Achieve.
        </p>

        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
          <motion.div
            className="h-full bg-gold rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
