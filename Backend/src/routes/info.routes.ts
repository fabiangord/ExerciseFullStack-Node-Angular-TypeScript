import { Router } from 'express'
import { doctors, medicalAppointment, patients } from '../controllers/infoPost.controllers'

const router = Router()

router.post('/doctors', doctors)

router.post('/medicalAppointment', medicalAppointment)

router.post('/patients', patients)

export default router
