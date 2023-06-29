import { SpecialtyType } from '../utils/enums'

export interface NewDoctorType {
  name: string
  lastname: string
  specialty: SpecialtyType
  office: number
  email: string
}

export interface NewPatientType {
  name: string
  lastname: string
  documentNumber: string
  age: number
  phone: string
}

export interface NewMedicalAppointmentType {
  documentNumberPatient: string
  specialty: SpecialtyType
  doctorName: string
  patientName: string
}
