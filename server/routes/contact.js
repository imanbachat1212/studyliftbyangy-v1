import { Router } from 'express'
import nodemailer from 'nodemailer'

const router = Router()

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

router.post('/', async (req, res) => {
  const { name, email, whatsapp, academicLevel, services, description, deadline } = req.body

  if (!name || !email || !services?.length) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    // Email to Angy
    await transporter.sendMail({
      from: `"StudyLift by Angy" <${process.env.SMTP_USER}>`,
      to: process.env.ANGY_EMAIL || process.env.SMTP_USER,
      subject: `New Consultation Request — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B2A5E; border-bottom: 3px solid #C9973A; padding-bottom: 8px;">
            New Consultation Request
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">WhatsApp</td><td style="padding: 8px 0;">${whatsapp}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Level</td><td style="padding: 8px 0; text-transform: capitalize;">${academicLevel}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Services</td><td style="padding: 8px 0;">${services.join(', ')}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Deadline</td><td style="padding: 8px 0;">${deadline}</td></tr>
          </table>
          <div style="background: #FDFAF4; padding: 16px; border-radius: 8px; margin-top: 16px; border-left: 4px solid #C9973A;">
            <strong>Description:</strong>
            <p style="margin: 8px 0 0; color: #444;">${description}</p>
          </div>
        </div>
      `,
    })

    // Auto-reply to student
    await transporter.sendMail({
      from: `"Angy — StudyLift" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Your consultation request — StudyLift by Angy',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B2A5E;">Hi ${name},</h2>
          <p style="color: #444; line-height: 1.6;">
            Thank you for reaching out! I've received your consultation request and will get back to you very soon.
          </p>
          <div style="background: #1B2A5E; color: #FDFAF4; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <p style="font-style: italic; color: #C9973A; margin: 0;">"Study. Lift. Achieve."</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            In the meantime, feel free to message me on WhatsApp for any urgent queries.
          </p>
          <p style="color: #444;">Best,<br/><strong>Angy</strong><br/>StudyLift by Angy · Dubai, UAE</p>
        </div>
      `,
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Email error:', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

export default router
