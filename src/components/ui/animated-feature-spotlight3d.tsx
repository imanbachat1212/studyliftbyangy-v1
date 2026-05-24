'use client'

import * as React from 'react'
import { motion, useMotionValue, useTransform } from 'motion/react'
import { cn } from '@/lib/utils'

interface AnimatedFeatureSpotlight3DProps extends React.HTMLAttributes<HTMLElement> {
  preheaderIcon?: React.ReactNode
  preheaderText?: string
  heading: React.ReactNode
  description: string
  actions?: React.ReactNode
  imageUrl?: string
  imageAlt?: string
  imageContent?: React.ReactNode
}

export const AnimatedFeatureSpotlight3D = React.forwardRef<
  HTMLElement,
  AnimatedFeatureSpotlight3DProps
>(
  (
    {
      className,
      preheaderIcon,
      preheaderText,
      heading,
      description,
      actions,
      imageUrl,
      imageAlt = 'Feature image',
      imageContent,
      ...props
    },
    ref
  ) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-150, 150], [18, -18])
    const rotateY = useTransform(x, [-150, 150], [-18, 18])
    const shadowX = useTransform(x, [-150, 150], [-20, 20])
    const shadowY = useTransform(y, [-150, 150], [-20, 20])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      x.set(e.clientX - rect.left - rect.width / 2)
      y.set(e.clientY - rect.top - rect.height / 2)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    return (
      <section
        ref={ref}
        className={cn('w-full', className)}
        aria-labelledby="feature-spotlight-heading"
        {...props}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-6 text-center md:text-left items-center md:items-start"
          >
            {(preheaderText || preheaderIcon) && (
              <div className="flex items-center space-x-2 text-sm font-body font-medium text-gold/80">
                {preheaderIcon}
                <span className="tracking-widest uppercase text-xs">{preheaderText}</span>
              </div>
            )}

            <motion.h1
              id="feature-spotlight-heading"
              className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold tracking-tight text-cream leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {heading}
            </motion.h1>

            <motion.p
              className="text-lg text-cream/60 font-body leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {description}
            </motion.p>

            {actions && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                {actions}
              </motion.div>
            )}
          </motion.div>

          {/* 3D logo / image side */}
          <motion.div
            className="relative w-full min-h-[320px] flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                filter: `drop-shadow(${shadowX.get()}px ${shadowY.get()}px 40px rgba(201,151,58,0.35))`,
              }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              className="w-full max-w-[340px] relative"
            >
              {imageContent ? (
                imageContent
              ) : imageUrl ? (
                <motion.img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full object-contain drop-shadow-2xl"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                />
              ) : null}
            </motion.div>

            {/* Glow behind */}
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl scale-75 pointer-events-none" />
          </motion.div>
        </div>
      </section>
    )
  }
)

AnimatedFeatureSpotlight3D.displayName = 'AnimatedFeatureSpotlight3D'
