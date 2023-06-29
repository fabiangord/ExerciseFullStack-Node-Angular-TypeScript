import { Request, Response } from 'express'
import modelDoctors from '../models/doctors.model'
import { createDoctor, createMedicalAppointment, createPatient } from '../utils/parsed'
import modelPatients from '../models/patients.model'
import modelMedicalAppointment from '../models/medicalAppointment.model'

export const doctors = async (req: Request, res: Response) => {

  try {

    const newUserCreate = createDoctor(req.body)

    const newDoctor = new modelDoctors(newUserCreate)

    const doctorSaved = await newDoctor.save()

    res.json(doctorSaved)
    
  } catch (error) {
    res.status(400).json(error)
  }
}

export const medicalAppointment = async (req: Request, res: Response) => {
  try {
    const newMedicalAppointmentCreate = createMedicalAppointment(req.body)

    const newMedicalAppointment = new modelMedicalAppointment(newMedicalAppointmentCreate)

    const medicalAppointmentSaved = await newMedicalAppointment.save()

    res.json(medicalAppointmentSaved)

  } catch (error) {
    res.status(400).json(error)
  }
}

export const patients = async (req: Request, res: Response) => {
  try {

    const newPatientCreate = createPatient(req.body)

    const newPatient = new modelPatients(newPatientCreate)

    const patientSaved = await newPatient.save()

    res.json(patientSaved)
    
  } catch (error) {
    res.status(400).json(error)
  }
}
