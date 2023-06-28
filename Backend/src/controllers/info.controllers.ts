import { Request, Response } from 'express'

export const doctors = (req: Request, res: Response) => {
  res.send('Doctors ready')
}

export const medicalAppointment = (req: Request, res: Response) => {
  res.send('medicalAppointment ready')
}
export const patients = (req: Request, res: Response) => {
  res.send('Patients ready')
}
