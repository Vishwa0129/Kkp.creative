import { createClient } from 'redis'
import { logger } from '../utils/logger.js'

let redisClient: ReturnType<typeof createClient> | null = null

export const getRedisClient = () => {
  if (!redisClient) {
    redisClient = createClient({
      url: process.env.REDIS_URL || 'redis://localhost:6379',
    })

    redisClient.on('error', (err) => {
      logger.error('Redis Client Error:', err)
    })

    redisClient.on('connect', () => {
      logger.info('Redis Client Connected')
    })
  }

  return redisClient
}

export const connectRedis = async (): Promise<void> => {
  try {
    const client = getRedisClient()
    await client.connect()
    logger.info('Redis connection established')
  } catch (error) {
    logger.error('Failed to connect to Redis:', error)
    throw error
  }
}

export const disconnectRedis = async (): Promise<void> => {
  if (redisClient) {
    await redisClient.quit()
    redisClient = null
    logger.info('Redis connection closed')
  }
}

