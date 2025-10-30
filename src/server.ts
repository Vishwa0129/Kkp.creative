import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { logger } from './utils/logger.js'
import { errorHandler } from './middleware/errorHandler.js'
import { notFoundHandler } from './middleware/notFoundHandler.js'
import contactRoutes from './routes/contactRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
import serviceRoutes from './routes/serviceRoutes.js'
import healthRoutes from './routes/healthRoutes.js'
import { initializeDatabase } from './database/connection.js'
import { connectRedis } from './database/redis.js'

// Load environment variables
dotenv.config()

const app: Application = express()
const PORT = process.env.PORT || 5000
const httpServer = createServer(app)

// Trust proxy for rate limiting behind reverse proxy
app.set('trust proxy', 1)

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
  crossOriginEmbedderPolicy: false,
}))

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
})
app.use('/api/', limiter)

// Body parsing middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Compression middleware
app.use(compression())

// Logging middleware
app.use(morgan('combined', {
  stream: {
    write: (message: string) => logger.info(message.trim())
  }
}))

// Database and Redis initialization
const initializeServices = async () => {
  try {
    await initializeDatabase()
    logger.info('Database connected successfully')
    
    await connectRedis()
    logger.info('Redis connected successfully')
  } catch (error) {
    logger.error('Failed to initialize services:', error)
    process.exit(1)
  }
}

// Routes
app.use('/api/health', healthRoutes)
app.use('/api/contact', contactRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/services', serviceRoutes)

// Root route
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'KKP Creative & Tech Solutions API',
    version: '1.0.0',
    status: 'running',
    documentation: '/api/docs'
  })
})

// Error handling middleware (must be last)
app.use(notFoundHandler)
app.use(errorHandler)

// Start server
const startServer = async () => {
  try {
    await initializeServices()
    
    httpServer.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`)
      logger.info(`Environment: ${process.env.NODE_ENV || 'development'}`)
    })
  } catch (error) {
    logger.error('Failed to start server:', error)
    process.exit(1)
  }
}

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server')
  httpServer.close(() => {
    logger.info('HTTP server closed')
    process.exit(0)
  })
})

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server')
  httpServer.close(() => {
    logger.info('HTTP server closed')
    process.exit(0)
  })
})

startServer()

export default app

