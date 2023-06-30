import { Router } from 'express'
import { doctors, medicalAppointment, patients } from '../controllers/infoPost.controllers'
import { doctorsGet, medicalAppointmentGet, patientsGet, specialtyGet } from '../controllers/infoGet.controllers'

const router = Router()

router.post('/doctors', doctors)

router.get('/doctors', doctorsGet)

router.post('/medicalAppointment', medicalAppointment)

router.get('/medicalAppointment', medicalAppointmentGet)

router.post('/patients', patients)

router.get('/patients', patientsGet)

router.get('/specialty', specialtyGet )

export default router
