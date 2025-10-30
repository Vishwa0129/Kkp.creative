import { Router } from 'express'
import { contactValidators, validate } from '../middleware/validation.js'
import * as contactController from '../controllers/contactController.js'

const router = Router()

router.post('/', contactValidators, validate(contactValidators), contactController.createContact)
router.get('/', contactController.getContacts)
router.get('/:id', contactController.getContactById)
router.patch('/:id/status', contactController.updateContactStatus)

export default router

