import { Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger.js'

export class AppError extends Error {
  statusCode: number
  isOperational: boolean

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true
    Error.captureStackTrace(this, this.constructor)
  }
}

export const errorHandler = (
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500
  let message = 'Internal Server Error'

  if (err instanceof AppError) {
    statusCode = err.statusCode
    message = err.message
  } else if (err instanceof Error) {
    message = err.message
  }

  // Log error
  logger.error('Error occurred:', {
    message,
    statusCode,
    path: req.path,
    method: req.method,
    ip: req.ip,
    stack: err.stack
  })

  // Send error response
  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  })
}

