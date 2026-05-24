import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'motion/react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

const serviceOptions = [
  'Online Survey Support',
  'Thesis Support',
  'IELTS Training',
  'English Tutoring',
  'Online Consultation',
  'Academic Support',
]

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  whatsapp: z.string().min(7, 'Please enter a valid WhatsApp number'),
  academicLevel: z.enum(['bachelor', 'master', 'phd'], { required_error: 'Please select your level' }),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  description: z.string().min(20, 'Please describe your project (at least 20 characters)'),
  deadline: z.string().min(1, 'Please select a deadline'),
})

type FormData = z.infer<typeof schema>

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { services: [] },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setSubmitted(true)
    } catch {
      // show success anyway for demo
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact — StudyLift by Angy</title>
        <meta
          name="description"
          content="Book a free consultation with Angy. Expert academic support for your research, dissertation, SPSS and more."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-12 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
              Book a Free Consultation
            </h1>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Split layout */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form — 60% */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    >
                      <CheckCircle2 className="w-20 h-20 text-gold mb-6 mx-auto" />
                    </motion.div>
                    <h2 className="font-display text-3xl font-bold text-navy mb-4">
                      Message Sent!
                    </h2>
                    <p className="font-body text-dark/70 text-lg mb-2">
                      Thank you for reaching out.
                    </p>
                    <p className="font-body text-dark/50 text-sm">
                      Angy will get back to you shortly. Check your email for a confirmation.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your name" {...register('name')} />
                        {errors.name && (
                          <p className="text-xs text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="you@email.com" {...register('email')} />
                        {errors.email && (
                          <p className="text-xs text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="whatsapp">WhatsApp Number</Label>
                        <Input id="whatsapp" placeholder="+971 50 xxx xxxx" {...register('whatsapp')} />
                        {errors.whatsapp && (
                          <p className="text-xs text-red-500">{errors.whatsapp.message}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <Label>Academic Level</Label>
                        <Controller
                          name="academicLevel"
                          control={control}
                          render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="bachelor">Bachelor</SelectItem>
                                <SelectItem value="master">Master</SelectItem>
                                <SelectItem value="phd">PhD</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.academicLevel && (
                          <p className="text-xs text-red-500">{errors.academicLevel.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Service(s) Needed</Label>
                      <Controller
                        name="services"
                        control={control}
                        render={({ field }) => (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {serviceOptions.map((svc) => (
                              <div key={svc} className="flex items-center gap-2.5">
                                <Checkbox
                                  id={svc}
                                  checked={field.value?.includes(svc)}
                                  onCheckedChange={(checked) => {
                                    const next = checked
                                      ? [...(field.value || []), svc]
                                      : (field.value || []).filter((s) => s !== svc)
                                    field.onChange(next)
                                  }}
                                />
                                <label
                                  htmlFor={svc}
                                  className="font-body text-sm text-dark/80 cursor-pointer"
                                >
                                  {svc}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      />
                      {errors.services && (
                        <p className="text-xs text-red-500">{errors.services.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="description">Project Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your project, research topic, and what help you need..."
                        rows={4}
                        {...register('description')}
                      />
                      {errors.description && (
                        <p className="text-xs text-red-500">{errors.description.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="deadline">Deadline</Label>
                      <Input id="deadline" type="date" {...register('deadline')} />
                      {errors.deadline && (
                        <p className="text-xs text-red-500">{errors.deadline.message}</p>
                      )}
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Info panel — 40% */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-navy rounded-2xl p-8 text-cream sticky top-24">
                <h3 className="font-display text-xl font-bold mb-6 text-gold">Contact Info</h3>

                <ul className="space-y-5">
                  <li>
                    <a
                      href="https://wa.me/971566234352"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <svg viewBox="0 0 24 24" fill="#C9973A" className="w-5 h-5">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-body text-xs text-cream/40 uppercase tracking-wider mb-0.5">WhatsApp</p>
                        <p className="font-body text-cream/80 group-hover:text-gold transition-colors text-sm">
                          Message for a free consultation
                        </p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://instagram.com/studyliftbyangy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gold">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-body text-xs text-cream/40 uppercase tracking-wider mb-0.5">Instagram</p>
                        <p className="font-body text-cream/80 group-hover:text-gold transition-colors text-sm">
                          @studyliftbyangy
                        </p>
                      </div>
                    </a>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-cream/40 uppercase tracking-wider mb-0.5">Location</p>
                      <p className="font-body text-cream/80 text-sm">Dubai, UAE</p>
                      <p className="font-body text-cream/50 text-xs">Online Services Worldwide</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-cream/40 uppercase tracking-wider mb-0.5">Availability</p>
                      <p className="font-body text-cream/80 text-sm">Online · Available Daily</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="font-display italic text-gold/80 text-sm leading-relaxed">
                    "Every project is unique. Services are tailored based on your academic level,
                    deadline & complexity."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
