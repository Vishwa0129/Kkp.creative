import { Request, Response, NextFunction } from 'express'
import { getPool } from '../database/connection.js'
import { getRedisClient } from '../database/redis.js'
import { AppError } from '../middleware/errorHandler.js'

export const getProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pool = getPool()
    const result = await pool.query('SELECT * FROM projects ORDER BY created_at DESC')

    res.json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    })
  } catch (error) {
    next(error)
  }
}

export const getFeaturedProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pool = getPool()
    const result = await pool.query(
      'SELECT * FROM projects WHERE featured = true ORDER BY created_at DESC'
    )

    res.json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    })
  } catch (error) {
    next(error)
  }
}

export const getProjectById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const pool = getPool()

    const result = await pool.query('SELECT * FROM projects WHERE id = $1', [id])

    if (result.rows.length === 0) {
      throw new AppError('Project not found', 404)
    }

    res.json({
      success: true,
      data: result.rows[0],
    })
  } catch (error) {
    next(error)
  }
}

export const getProjectsByCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category } = req.params
    const pool = getPool()

    const result = await pool.query(
      'SELECT * FROM projects WHERE category = $1 ORDER BY created_at DESC',
      [category]
    )

    res.json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    })
  } catch (error) {
    next(error)
  }
}

