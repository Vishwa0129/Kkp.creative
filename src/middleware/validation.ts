import { body, ValidationChain, validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express'
import { AppError } from './errorHandler.js'

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Run validations
    await Promise.all(validations.map(validation => validation.run(req)))

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(err => err.msg).join(', ')
      throw new AppError(errorMessages, 400)
    }

    next()
  }
}

// Contact form validators
export const contactValidators = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format')
    .normalizeEmail(),
  body('phone')
    .optional()
    .isMobilePhone('any', { strictMode: false })
    .withMessage('Invalid phone number'),
  body('company')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Company name must be less than 100 characters'),
  body('service')
    .trim()
    .notEmpty()
    .withMessage('Service is required'),
  body('budget')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Budget must be less than 50 characters'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters')
]

