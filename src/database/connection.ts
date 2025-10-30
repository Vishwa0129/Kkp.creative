import { Pool } from 'pg'
import { logger } from '../utils/logger.js'

let pool: Pool | null = null

export const getPool = (): Pool => {
  if (!pool) {
    pool = new Pool({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME || 'kkp_db',
      user: process.env.DB_USER || 'kkp',
      password: process.env.DB_PASSWORD || 'password',
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    })

    // Handle connection errors
    pool.on('error', (err) => {
      logger.error('Unexpected error on idle client', err)
      process.exit(-1)
    })
  }

  return pool
}

export const initializeDatabase = async (): Promise<void> => {
  try {
    const db = getPool()
    await db.query('SELECT NOW()')
    logger.info('Database connection established')
  } catch (error) {
    logger.error('Failed to connect to database:', error)
    throw error
  }
}

export const closeDatabase = async (): Promise<void> => {
  if (pool) {
    await pool.end()
    pool = null
    logger.info('Database connection closed')
  }
}

