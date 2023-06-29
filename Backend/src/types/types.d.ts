import { SpecialtyType } from "../utils/enums"

export type NewDoctorType = {
    name: string
    lastname: string
    specialty: SpecialtyType
    office: number
    email: string
}

export type NewPatientType = {
    name: string
    lastname: string
    documentNumber: string
    age: number
    phone: string
}

export type NewMedicalAppointmentType = {
    documentNumberPatient: string
    specialty: SpecialtyType
    doctorName: string
    patientName: string
}