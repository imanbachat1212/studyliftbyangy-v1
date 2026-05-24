import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'

function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const addHover = () => cursor.classList.add('hovering')
    const removeHover = () => cursor.classList.remove('hovering')

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      document.body.removeChild(cursor)
    }
  }, [])

  return null
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

function ScrollToHash() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      // Delay lets the page finish rendering/animating before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 450)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location])
  return null
}

function AppContent() {
  const location = useLocation()
  return (
    <>
      <ScrollToHash />
      <CustomCursor />
      <Navbar />
      <PageWrapper key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageWrapper>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && <AppContent />}
    </BrowserRouter>
  )
}
