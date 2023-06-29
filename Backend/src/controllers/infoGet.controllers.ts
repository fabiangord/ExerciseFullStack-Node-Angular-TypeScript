import { Request, Response } from 'express'
import modelDoctors from '../models/doctors.model'
import modelMedicalAppointment from '../models/medicalAppointment.model'
import modelPatients from '../models/patients.model'
import { parsedError } from '../utils/parsed'

export const doctorsGet = async (req: Request, res: Response) => {
  try {
    const doctors = await modelDoctors.find()
    res.json(doctors)
  } catch (error: any) {
    const errorMessage = parsedError(error)
    res.status(400).send(errorMessage)
 }
}

export const medicalAppointmentGet = async (req: Request, res: Response) => {
  try {
    const medicalAppointment = await modelMedicalAppointment.find()
    res.json(medicalAppointment)
  } catch (error: any) {
    const errorMessage = parsedError(error)
    res.status(400).send(errorMessage)
 }
}

export const patientsGet = async (req: Request, res: Response) => {
  try {
    const patients = await modelPatients.find()
    res.json(patients)
  } catch (error: any) {
    const errorMessage = parsedError(error)
    res.status(400).send(errorMessage)
 }
}
