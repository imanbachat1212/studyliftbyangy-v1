import { Warp } from '@paper-design/shaders-react'
import {
  ClipboardList,
  BookOpen,
  Headphones,
  MessageCircle,
  LayoutGrid,
  Users,
} from 'lucide-react'
import { motion } from 'motion/react'

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: 'Online Survey Support',
    description:
      'I create survey questions for students, administer the survey, and collect responses.',
    icon: <ClipboardList className="w-12 h-12 text-white" />,
  },
  {
    title: 'Thesis Support',
    description:
      'Guiding you every step of the way to a strong, well-researched, and high-quality thesis.',
    icon: <BookOpen className="w-12 h-12 text-white" />,
  },
  {
    title: 'IELTS Training',
    description:
      'Expert preparation to help you achieve your target score and open new opportunities.',
    icon: <Headphones className="w-12 h-12 text-white" />,
  },
  {
    title: 'English Tutoring',
    description:
      'Personalized English tutoring for all levels and all goals to help you learn and excel.',
    icon: <Users className="w-12 h-12 text-white" />,
  },
  {
    title: 'Online Consultation',
    description:
      'One-on-one support tailored to your academic and learning needs, at your pace.',
    icon: <MessageCircle className="w-12 h-12 text-white" />,
  },
  {
    title: 'Academic Support',
    description:
      'Help with research, writing, editing, organization, and more — so you can focus on what matters most.',
    icon: <LayoutGrid className="w-12 h-12 text-white" />,
  },
]

const shaderColors: string[][] = [
  ['hsl(220,65%,18%)', '#C9973A', '#2D8A8A', 'hsl(220,65%,35%)'],
  ['hsl(180,50%,20%)', '#2D8A8A', '#C9973A', 'hsl(180,50%,40%)'],
  ['hsl(38,50%,25%)', '#C9973A', '#1B2A5E', 'hsl(38,50%,45%)'],
  ['hsl(220,65%,18%)', '#1B2A5E', '#C9973A', 'hsl(180,50%,30%)'],
  ['hsl(180,50%,20%)', '#2D8A8A', '#1B2A5E', 'hsl(220,65%,30%)'],
  ['hsl(38,50%,25%)', '#C9973A', '#2D8A8A', 'hsl(38,50%,35%)'],
]

function getShaderConfig(index: number) {
  const configs = [
    { proportion: 0.45, softness: 1, distortion: 0.25, swirl: 0.8, swirlIterations: 10, shape: 'checks' as const, shapeScale: 0.1 },
    { proportion: 0.5, softness: 0.8, distortion: 0.3, swirl: 1.0, swirlIterations: 8, shape: 'stripes' as const, shapeScale: 0.15 },
    { proportion: 0.4, softness: 1.2, distortion: 0.2, swirl: 0.6, swirlIterations: 12, shape: 'checks' as const, shapeScale: 0.08 },
    { proportion: 0.55, softness: 0.9, distortion: 0.35, swirl: 0.9, swirlIterations: 10, shape: 'edge' as const, shapeScale: 0.12 },
    { proportion: 0.45, softness: 1.1, distortion: 0.28, swirl: 0.7, swirlIterations: 9, shape: 'checks' as const, shapeScale: 0.1 },
    { proportion: 0.5, softness: 1.0, distortion: 0.22, swirl: 0.85, swirlIterations: 11, shape: 'stripes' as const, shapeScale: 0.13 },
  ]
  return configs[index % configs.length]
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function FeaturesCards() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {features.map((feature, index) => {
        const config = getShaderConfig(index)
        const colors = shaderColors[index]
        return (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            style={{ minHeight: '260px' }}
          >
            {/* Shader background */}
            <div className="absolute inset-0">
              <Warp
                colors={colors}
                proportion={config.proportion}
                softness={config.softness}
                distortion={config.distortion}
                swirl={config.swirl}
                swirlIterations={config.swirlIterations}
                shape={config.shape}
                shapeScale={config.shapeScale}
                speed={0.5}
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Content */}
            <div className="relative z-10 p-7 flex flex-col h-full">
              <div className="mb-4 opacity-90">{feature.icon}</div>
              <h3 className="font-display font-bold text-xl text-white mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="font-body text-white/80 text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-auto pt-4">
                <div className="w-8 h-0.5 bg-gold opacity-60 group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
