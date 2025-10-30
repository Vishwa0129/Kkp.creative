import { Router, Request, Response } from 'express'
import { getPool } from '../database/connection.js'
import { getRedisClient } from '../database/redis.js'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV
  })
})

router.get('/ready', async (req: Request, res: Response) => {
  try {
    // Check database connection
    const pool = getPool()
    await pool.query('SELECT NOW()')
    
    // Check Redis connection
    const redis = getRedisClient()
    await redis.ping()
    
    res.json({
      status: 'ready',
      database: 'connected',
      redis: 'connected'
    })
  } catch (error) {
    res.status(503).json({
      status: 'not ready',
      error: 'Service dependencies not available'
    })
  }
})

export default router

