import { Router } from 'express'
import * as projectController from '../controllers/projectController.js'

const router = Router()

router.get('/', projectController.getProjects)
router.get('/featured', projectController.getFeaturedProjects)
router.get('/:id', projectController.getProjectById)
router.get('/category/:category', projectController.getProjectsByCategory)

export default router

