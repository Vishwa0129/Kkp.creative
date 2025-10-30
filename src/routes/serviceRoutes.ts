import { Router } from 'express'
import * as serviceController from '../controllers/serviceController.js'

const router = Router()

router.get('/', serviceController.getServices)
router.get('/popular', serviceController.getPopularServices)
router.get('/category/:category', serviceController.getServicesByCategory)
router.get('/:id', serviceController.getServiceById)

export default router

