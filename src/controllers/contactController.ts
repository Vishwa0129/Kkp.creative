import { Request, Response, NextFunction } from 'express'
import { getPool } from '../database/connection.js'
import { getRedisClient } from '../database/redis.js'
import { logger } from '../utils/logger.js'
import { AppError } from '../middleware/errorHandler.js'
import nodemailer from 'nodemailer'

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export const createContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, phone, company, service, budget, message } = req.body

    // Save to database
    const pool = getPool()
    const result = await pool.query(
      `INSERT INTO contacts (name, email, phone, company, service, budget, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [name, email, phone, company, service, budget, message]
    )

    const contact = result.rows[0]

    // Send email notification
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || email,
        to: process.env.SMTP_TO || 'support@kkpitsolutions.com',
        subject: `New Contact Form Submission: ${service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      })

      // Send confirmation email to user
      await transporter.sendMail({
        from: process.env.SMTP_FROM || 'no-reply@kkpitsolutions.com',
        to: email,
        subject: 'Thank you for contacting KKP IT Solutions',
        html: `
          <h2>Thank you for contacting us!</h2>
          <p>We have received your inquiry about ${service} and will get back to you shortly.</p>
          <p>Your message:</p>
          <p>${message}</p>
          <hr>
          <p><small>KKP Creative & Tech Solutions</small></p>
        `,
      })
    } catch (emailError) {
      logger.error('Failed to send email:', emailError)
      // Don't fail the request if email fails
    }

    logger.info(`New contact submission from ${email}`)

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: contact,
    })
  } catch (error) {
    next(error)
  }
}

export const getContacts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { status, limit = 50, offset = 0 } = req.query
    const pool = getPool()

    let query = 'SELECT * FROM contacts'
    const params: any[] = []

    if (status) {
      query += ' WHERE status = $1'
      params.push(status)
    }

    query += ' ORDER BY created_at DESC LIMIT $' + (params.length + 1) + ' OFFSET $' + (params.length + 2)
    params.push(limit, offset)

    const result = await pool.query(query, params)

    res.json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    })
  } catch (error) {
    next(error)
  }
}

export const getContactById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const pool = getPool()

    const result = await pool.query('SELECT * FROM contacts WHERE id = $1', [id])

    if (result.rows.length === 0) {
      throw new AppError('Contact not found', 404)
    }

    res.json({
      success: true,
      data: result.rows[0],
    })
  } catch (error) {
    next(error)
  }
}

export const updateContactStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const { status } = req.body

    if (!['pending', 'in-progress', 'completed', 'rejected'].includes(status)) {
      throw new AppError('Invalid status', 400)
    }

    const pool = getPool()
    const result = await pool.query(
      'UPDATE contacts SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    )

    if (result.rows.length === 0) {
      throw new AppError('Contact not found', 404)
    }

    res.json({
      success: true,
      data: result.rows[0],
    })
  } catch (error) {
    next(error)
  }
}

