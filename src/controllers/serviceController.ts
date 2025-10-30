import { Request, Response, NextFunction } from 'express'
import { getPool } from '../database/connection.js'
import { AppError } from '../middleware/errorHandler.js'

export const getServices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pool = getPool()
    const result = await pool.query('SELECT * FROM services ORDER BY created_at DESC')

    res.json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    })
  } catch (error) {
    next(error)
  }
}

export const getPopularServices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pool = getPool()
    const result = await pool.query(
      'SELECT * FROM services WHERE popular = true ORDER BY rating DESC'
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

export const getServiceById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const pool = getPool()

    const result = await pool.query('SELECT * FROM services WHERE id = $1', [id])

    if (result.rows.length === 0) {
      throw new AppError('Service not found', 404)
    }

    res.json({
      success: true,
      data: result.rows[0],
    })
  } catch (error) {
    next(error)
  }
}

export const getServicesByCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category } = req.params
    const pool = getPool()

    const result = await pool.query(
      'SELECT * FROM services WHERE category = $1 ORDER BY created_at DESC',
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

