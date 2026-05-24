import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ChevronDown, GraduationCap } from 'lucide-react'
import { AnimatedFeatureSpotlight3D } from '@/components/ui/animated-feature-spotlight3d'
import { Button } from '@/components/ui/button'
import StudyLiftLogoSVG from './StudyLiftLogoSVG'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1630] via-navy to-[#1a3060]" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 60% at 20% 50%, rgba(201,151,58,0.15) 0%, transparent 70%), ' +
            'radial-gradient(ellipse 50% 50% at 80% 30%, rgba(45,138,138,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(253,250,244,1) 1px, transparent 1px), linear-gradient(90deg, rgba(253,250,244,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-20">
        <AnimatedFeatureSpotlight3D
          preheaderIcon={<GraduationCap className="w-4 h-4 text-gold" />}
          preheaderText="Dubai, UAE · Online Worldwide"
          heading={
            <>
              Elevate Your
              <span className="block text-gold">Academic</span>
              Journey
            </>
          }
          description="Expert support for your research, thesis, SPSS analysis, IELTS training and more — in English, French & Arabic."
          actions={
            <>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact">
                  <Button variant="default" size="lg" className="px-8 font-semibold shadow-lg shadow-gold/20">
                    Book Free Consultation
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="px-8 font-semibold">
                    View Services
                  </Button>
                </Link>
              </motion.div>
            </>
          }
          imageContent={
            <motion.div
              className="flex items-center justify-center"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <StudyLiftLogoSVG size={340} />
            </motion.div>
          }
        />

        {/* Language badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center justify-center md:justify-start gap-4 mt-10"
        >
          {[
            { code: 'A', label: 'English', color: 'bg-gold' },
            { code: 'é', label: 'Français', color: 'bg-teal' },
            { code: 'غ', label: 'العربية', color: 'bg-navy border border-white/20' },
          ].map((lang) => (
            <span key={lang.label} className="flex items-center gap-1.5 font-body text-xs text-cream/60">
              <span className={`w-5 h-5 rounded-full ${lang.color} flex items-center justify-center text-white text-[10px] font-bold`}>
                {lang.code}
              </span>
              {lang.label}
            </span>
          ))}
          <span className="w-px h-3 bg-white/20" />
          <span className="font-body text-xs text-cream/40 italic">All services available in all 3</span>
        </motion.div>
      </div>

      {/* Tagline bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 border-t border-white/10 w-full py-3 flex items-center justify-center gap-8"
      >
        {['Study.', 'Lift.', 'Achieve.'].map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 + i * 0.15 }}
            className="font-display italic text-sm text-gold/70 tracking-widest"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      {/* Scroll arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream/30 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown className="w-7 h-7" />
      </motion.div>
    </section>
  )
}
