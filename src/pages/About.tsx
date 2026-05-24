import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { ShieldCheck, Clock, Star, Target } from 'lucide-react'
import Stats from '../components/home/Stats'
import Process from '../components/home/Process'

const words = "Hi, I'm Angy — Your Academic Partner".split(' ')

const instagramPosts = [
  { url: 'https://www.instagram.com/p/DYUFP13o4rS/', thumbnail: '/images/posts/studyliftbyangy.png' },
  { url: 'https://www.instagram.com/p/DYUGvccon6J/', thumbnail: '/images/posts/support.png' },
  { url: 'https://www.instagram.com/p/DYX0ZdGCB_p/', thumbnail: '/images/posts/5signs.png' },
]

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

      <Stats />

      <Process />

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
            {instagramPosts.map((post, i) => (
              <motion.a
                key={i}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="aspect-square rounded-xl overflow-hidden border border-gold/20 cursor-pointer group relative"
              >
                <img
                  src={post.thumbnail}
                  alt="Instagram post"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
