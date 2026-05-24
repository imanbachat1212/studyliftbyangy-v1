import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import { GraduationCap, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', to: '/', hash: '' },
  { label: 'Services', to: '/services', hash: '' },
  { label: 'About', to: '/about', hash: '' },
  { label: 'Process', to: '/#process', hash: 'process' },
  { label: 'Testimonials', to: '/#testimonials', hash: 'testimonials' },
  { label: 'Contact', to: '/contact', hash: '' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { scrollY } = useScroll()

  const blurOpacity = useTransform(scrollY, [0, 80], [0, 1])

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 20))
    return unsub
  }, [scrollY])

  const isActive = (to: string) => {
    if (to.startsWith('/#')) return false
    return location.pathname === to
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{}}
      >
        <motion.div
          className="absolute inset-0 bg-navy/90 backdrop-blur-md border-b border-white/10"
          style={{ opacity: blurOpacity }}
        />

        <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer z-10">
            <GraduationCap className="w-8 h-8 text-gold" />
            <div>
              <p className="font-display text-lg font-bold text-cream leading-none">StudyLift</p>
              <p className="font-body text-[10px] text-gold tracking-widest uppercase leading-none">
                by Angy
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`relative px-3 py-2 font-body text-sm transition-colors duration-200 cursor-pointer ${
                    isActive(to)
                      ? 'text-gold'
                      : scrolled
                      ? 'text-cream/80 hover:text-gold'
                      : 'text-cream/80 hover:text-gold'
                  }`}
                >
                  {label}
                  {isActive(to) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold rounded-full"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + mobile button */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden lg:block cursor-pointer">
              <Button variant="default" size="sm">
                Book Now
              </Button>
            </Link>
            <button
              className="lg:hidden text-cream/80 hover:text-gold transition-colors cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-navy shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-gold" />
                  <span className="font-display text-cream font-bold">StudyLift</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-cream/60 hover:text-gold transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 py-6">
                {navLinks.map(({ label, to }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={to}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-6 py-3 font-body text-base transition-colors duration-200 cursor-pointer ${
                        isActive(to)
                          ? 'text-gold font-semibold'
                          : 'text-cream/70 hover:text-gold'
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-white/10">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="default" className="w-full">
                    Book Free Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
